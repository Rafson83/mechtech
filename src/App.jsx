import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  ShieldAlert,
  Cog,
  Zap,
  Car,
  Activity,
  Search,
  BookOpen,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Clock,
  Award,
  ChevronRight,
  ChevronLeft,
  X,
  HelpCircle,
  Check,
  Wrench,
  Menu,
  FileText
} from 'lucide-react';
import { CATEGORIES } from './data/knowledgeBase';
import {
  ThreadCalculator,
  OhmCalculator,
  BatteryChecker,
  ObdDecoder,
  AcPressureSimulator,
  NtcAndCanSimulator
} from './components/InteractiveTools';

const CATEGORY_ICONS = {
  ShieldAlert,
  Cog,
  Zap,
  Car,
  Activity
};

export default function App() {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIES[0].id);
  const [activeTopicId, setActiveTopicId] = useState(CATEGORIES[0].topics[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Completed topics persisted in localStorage
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem('mot05_completed_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Quiz answers state: { [topicId_questionIdx]: selectedOptionIndex }
  const [quizAnswers, setQuizAnswers] = useState({});

  const searchInputRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem('mot05_completed_topics', JSON.stringify(completedTopics));
    } catch {
      // ignore storage errors
    }
  }, [completedTopics]);

  // Flatten all topics for navigation and search
  const allTopicsFlat = useMemo(() => {
    const list = [];
    CATEGORIES.forEach((cat) => {
      cat.topics.forEach((topic) => {
        list.push({
          ...topic,
          categoryId: cat.id,
          categoryName: cat.name,
          categoryShortName: cat.shortName,
          categoryCode: cat.code,
          categoryIcon: cat.icon
        });
      });
    });
    return list;
  }, []);

  // Currently selected category and topic
  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === activeCategoryId) || CATEGORIES[0],
    [activeCategoryId]
  );

  const activeTopic = useMemo(() => {
    const found = allTopicsFlat.find((t) => t.id === activeTopicId);
    return found || allTopicsFlat[0];
  }, [allTopicsFlat, activeTopicId]);

  // Previous / Next topic navigation
  const currentFlatIndex = useMemo(
    () => allTopicsFlat.findIndex((t) => t.id === activeTopic.id),
    [allTopicsFlat, activeTopic]
  );
  const prevTopic = currentFlatIndex > 0 ? allTopicsFlat[currentFlatIndex - 1] : null;
  const nextTopic =
    currentFlatIndex < allTopicsFlat.length - 1
      ? allTopicsFlat[currentFlatIndex + 1]
      : null;

  // Search filtering by keywords, title, subtitle, summary, and section contents
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return allTopicsFlat
      .map((topic) => {
        let score = 0;
        let matchedContext = '';

        if (topic.title.toLowerCase().includes(q)) {
          score += 10;
        }
        if (topic.keywords.some((k) => k.toLowerCase().includes(q))) {
          score += 8;
          const matchedKw = topic.keywords.find((k) => k.toLowerCase().includes(q));
          matchedContext = `Słowo kluczowe: „${matchedKw}”`;
        }
        if (topic.subtitle.toLowerCase().includes(q)) {
          score += 5;
        }
        if (topic.summary.toLowerCase().includes(q)) {
          score += 4;
          if (!matchedContext) matchedContext = topic.summary;
        }

        topic.sections.forEach((sec) => {
          if (sec.heading.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q)) {
            score += 3;
            if (!matchedContext) matchedContext = `${sec.heading}: ${sec.content}`;
          }
          if (sec.bullets) {
            sec.bullets.forEach((b) => {
              if (b.toLowerCase().includes(q)) {
                score += 2;
                if (!matchedContext) matchedContext = b;
              }
            });
          }
          if (sec.steps) {
            sec.steps.forEach((s) => {
              if (s.toLowerCase().includes(q)) {
                score += 2;
                if (!matchedContext) matchedContext = s;
              }
            });
          }
          if (sec.table) {
            sec.table.rows.forEach((row) => {
              row.forEach((cell) => {
                if (cell.toLowerCase().includes(q)) {
                  score += 2;
                  if (!matchedContext) matchedContext = `${row[0]} — ${row[1]}`;
                }
              });
            });
          }
        });

        return { topic, score, matchedContext: matchedContext || topic.subtitle };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [allTopicsFlat, searchQuery]);

  const handleSelectTopic = (categoryId, topicId) => {
    setActiveCategoryId(categoryId);
    setActiveTopicId(topicId);
    setSearchQuery('');
    setIsSearchFocused(false);
    setMobileMenuOpen(false);
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0 });
    }
    window.scrollTo({ top: 0 });
  };

  const handleSelectCategory = (categoryId) => {
    const cat = CATEGORIES.find((c) => c.id === categoryId);
    if (!cat) return;
    setActiveCategoryId(cat.id);
    // If current topic is not in this category, switch to the first topic of this category
    if (!cat.topics.some((t) => t.id === activeTopicId)) {
      setActiveTopicId(cat.topics[0].id);
      if (mainContentRef.current) {
        mainContentRef.current.scrollTo({ top: 0 });
      }
      window.scrollTo({ top: 0 });
    }
  };

  const toggleTopicCompleted = (topicId) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
    );
  };

  // Keyboard shortcut "/" to focus search bar
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape') {
        setIsSearchFocused(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isCurrentCompleted = completedTopics.includes(activeTopic.id);
  const progressPercentage = Math.round(
    (completedTopics.length / allTopicsFlat.length) * 100
  );

  const renderInteractiveTool = (toolId) => {
    switch (toolId) {
      case 'thread-calculator':
        return <ThreadCalculator />;
      case 'ohm-calculator':
        return <OhmCalculator />;
      case 'battery-checker':
        return <BatteryChecker />;
      case 'obd-decoder':
        return <ObdDecoder />;
      case 'ac-pressure-simulator':
        return <AcPressureSimulator />;
      case 'ntc-can-simulator':
        return <NtcAndCanSimulator />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
      {/* TOP BAR / HEADER */}
      <header className="sticky top-0 z-30 bg-slate-900 text-white border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Otwórz spis zagadnień"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-inner shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-base sm:text-lg text-white">
                  MOT.05
                </span>
                <span className="text-[11px] font-mono uppercase px-1.5 py-0.5 rounded bg-sky-900/90 text-sky-300 border border-sky-700/60">
                  Baza Wiedzy
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Wirtualny podręcznik — Mechanik pojazdów samochodowych
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-2">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                placeholder="Szukaj zagadnienia, np. Prawo Ohma, DOT4, gwint, OBD..."
                className="w-full bg-slate-800/90 text-sm text-white placeholder-slate-400 pl-9 pr-16 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-orange-500 focus:bg-slate-800"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className="absolute right-2.5 p-1 text-slate-400 hover:text-white"
                  aria-label="Wyczyść wyszukiwanie"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block absolute right-3 text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700">
                  /
                </kbd>
              )}
            </div>

            {/* Search Dropdown Results */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSearchFocused(false)}
                />
                <div className="absolute left-0 right-0 mt-2 bg-white text-slate-900 rounded-lg shadow-xl border border-slate-200 z-20 max-h-96 overflow-y-auto">
                  <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      Wyniki wyszukiwania dla: <strong className="text-slate-800">„{searchQuery}”</strong>
                    </span>
                    <span className="font-mono">{searchResults.length} znaleziono</span>
                  </div>

                  {searchResults.length === 0 ? (
                    <div className="p-6 text-center text-sm text-slate-500">
                      Brak zagadnień pasujących do wpisanego hasła. Spróbuj wpisać np.{' '}
                      <button
                        type="button"
                        onClick={() => setSearchQuery('alternator')}
                        className="text-sky-700 underline font-medium"
                      >
                        alternator
                      </button>
                      ,{' '}
                      <button
                        type="button"
                        onClick={() => setSearchQuery('zbieżność')}
                        className="text-sky-700 underline font-medium"
                      >
                        zbieżność
                      </button>{' '}
                      lub{' '}
                      <button
                        type="button"
                        onClick={() => setSearchQuery('rozrząd')}
                        className="text-sky-700 underline font-medium"
                      >
                        rozrząd
                      </button>
                      .
                    </div>
                  ) : (
                    <ul className="divide-y divide-slate-100">
                      {searchResults.map(({ topic, matchedContext }) => (
                        <li key={topic.id}>
                          <button
                            type="button"
                            onClick={() => handleSelectTopic(topic.categoryId, topic.id)}
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-start justify-between gap-3"
                          >
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">
                                  {topic.categoryShortName}
                                </span>
                                <span className="font-semibold text-sm text-slate-900 truncate">
                                  {topic.title}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                {matchedContext}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Study Progress Indicator */}
          <div className="hidden md:flex items-center gap-3 shrink-0 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg">
            <div className="text-right">
              <div className="text-[11px] text-slate-400 leading-none">
                Postęp nauki
              </div>
              <div className="text-xs font-mono font-semibold text-white mt-0.5">
                {completedTopics.length} / {allTopicsFlat.length} ({progressPercentage}%)
              </div>
            </div>
            <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE SUB-HEADER: Topics in the currently active category */}
        <div className="lg:hidden bg-slate-800 border-t border-slate-700/80 px-3 py-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max">
            <span className="text-[11px] font-mono uppercase text-orange-400 mr-1 font-semibold">
              {activeCategory.shortName}:
            </span>
            {activeCategory.topics.map((topic) => {
              const isSelected = topic.id === activeTopic.id;
              const isDone = completedTopics.includes(topic.id);
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleSelectTopic(activeCategory.id, topic.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium ${
                    isSelected
                      ? 'bg-orange-500 text-slate-950 font-semibold'
                      : 'bg-slate-700/70 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {isDone && (
                    <Check className={`w-3 h-3 ${isSelected ? 'text-slate-950' : 'text-emerald-400'}`} />
                  )}
                  <span>{topic.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY (Full Table of Contents on small screens) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-slate-900 text-slate-100 h-full overflow-y-auto p-4 z-50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span className="font-bold text-sm uppercase tracking-wider">
                    Spis treści MOT.05
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {CATEGORIES.map((category) => {
                  const IconComp = CATEGORY_ICONS[category.icon] || BookOpen;
                  return (
                    <div key={category.id} className="space-y-1">
                      <div className="flex items-center gap-2 px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                        <IconComp className="w-3.5 h-3.5 text-orange-400" />
                        <span>{category.name}</span>
                      </div>
                      <div className="space-y-0.5 pl-2">
                        {category.topics.map((topic) => {
                          const isSelected = topic.id === activeTopic.id;
                          const isDone = completedTopics.includes(topic.id);
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => handleSelectTopic(category.id, topic.id)}
                              className={`w-full text-left px-3 py-2 rounded-md text-xs flex items-center justify-between ${
                                isSelected
                                  ? 'bg-orange-500 text-slate-950 font-semibold'
                                  : 'text-slate-300 hover:bg-slate-800'
                              }`}
                            >
                              <span>{topic.title}</span>
                              {isDone && (
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 shrink-0 ${
                                    isSelected ? 'text-slate-950' : 'text-emerald-400'
                                  }`}
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800 text-xs text-slate-400">
              Opanowane zagadnienia: {completedTopics.length} z {allTopicsFlat.length}
            </div>
          </div>
        </div>
      )}

      {/* MAIN WORKSPACE CONTAINER */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex gap-6 px-4 sm:px-6 py-6 pb-24 lg:pb-10">
        {/* LEFT SIDEBAR NAVIGATION (Desktop) */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-22 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Kategorie i Zagadnienia
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {CATEGORIES.length} działów / {allTopicsFlat.length} tematów
              </span>
            </div>

            <nav className="p-3 space-y-4 max-h-[calc(100vh-9rem)] overflow-y-auto">
              {CATEGORIES.map((category) => {
                const IconComponent = CATEGORY_ICONS[category.icon] || BookOpen;
                const isCategoryActive = category.id === activeCategory.id;

                return (
                  <div
                    key={category.id}
                    className={`rounded-lg border ${
                      isCategoryActive
                        ? 'border-slate-300 bg-slate-50/70'
                        : 'border-transparent'
                    }`}
                  >
                    {/* Category Header Button */}
                    <button
                      type="button"
                      onClick={() => handleSelectCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-t-lg flex items-center justify-between gap-2 ${
                        isCategoryActive
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-700 font-semibold hover:bg-slate-100 rounded-lg'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                            isCategoryActive
                              ? 'bg-slate-900 text-orange-400'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="text-[10px] font-mono uppercase text-slate-400 leading-none">
                            {category.code}
                          </div>
                          <div className="text-xs truncate mt-0.5">{category.name}</div>
                        </div>
                      </div>
                    </button>

                    {/* Category Topics List */}
                    <ul className="px-2 pb-2 pt-1 space-y-1">
                      {category.topics.map((topic) => {
                        const isSelected = topic.id === activeTopic.id;
                        const isDone = completedTopics.includes(topic.id);

                        return (
                          <li key={topic.id}>
                            <button
                              type="button"
                              onClick={() => handleSelectTopic(category.id, topic.id)}
                              className={`w-full text-left px-3 py-2 rounded-md text-xs flex items-center justify-between gap-2 ${
                                isSelected
                                  ? 'bg-sky-900 text-white font-semibold shadow-xs'
                                  : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                    isSelected
                                      ? 'bg-orange-400'
                                      : isDone
                                      ? 'bg-emerald-500'
                                      : 'bg-slate-300'
                                  }`}
                                />
                                <span className="truncate">{topic.title}</span>
                              </div>
                              {isDone && (
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 shrink-0 ${
                                    isSelected ? 'text-orange-300' : 'text-emerald-600'
                                  }`}
                                />
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* MAIN READING AREA */}
        <main ref={mainContentRef} className="flex-1 min-w-0">
          <article className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Topic Header Banner */}
            <div className="bg-slate-900 text-white px-5 sm:px-8 py-6 border-b-4 border-orange-500">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <span className="uppercase text-orange-400 font-semibold">
                    {activeTopic.categoryCode}
                  </span>
                  <span>/</span>
                  <span>{activeTopic.categoryName}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    {activeTopic.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    Waga na egzaminie: <strong className="text-white">{activeTopic.examFrequency}</strong>
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {activeTopic.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {activeTopic.subtitle}
              </p>

              {/* Topic Action Bar: Keywords + Mark as Completed */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {activeTopic.keywords.slice(0, 6).map((kw) => (
                    <span
                      key={kw}
                      className="text-[11px] font-mono bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded border border-slate-700"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => toggleTopicCompleted(activeTopic.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer ${
                    isCurrentCompleted
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-800 text-slate-200 border-slate-600 hover:bg-slate-700'
                  }`}
                >
                  {isCurrentCompleted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Zagadnienie opanowane
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-slate-400" />
                      Oznacz jako opanowane
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Topic Body Content */}
            <div className="p-5 sm:p-8 space-y-8">
              {/* Executive Summary Box */}
              <div className="bg-sky-50/80 border-l-4 border-sky-700 p-4 sm:p-5 rounded-r-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  <FileText className="w-4 h-4 text-sky-700" />
                  Synteza zagadnienia (Pigułka wiedzy MOT.05)
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {activeTopic.summary}
                </p>
              </div>

              {/* Optional Interactive Workshop Calculator / Simulator */}
              {activeTopic.interactiveTool &&
                renderInteractiveTool(activeTopic.interactiveTool)}

              {/* Content Sections */}
              <div className="space-y-8">
                {activeTopic.sections.map((section, idx) => (
                  <section key={idx} className="space-y-3.5">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 pb-2 border-b border-slate-200">
                      {section.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Formula Box if present */}
                    {section.formula && (
                      <div className="bg-slate-900 text-white rounded-lg p-4 border-l-4 border-orange-500 my-3">
                        <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                          Wzór techniczny / zależność obliczeniowa:
                        </div>
                        <div className="text-lg sm:text-xl font-mono font-bold text-orange-400 tracking-wide">
                          {section.formula.expression}
                        </div>
                        <p className="text-xs text-slate-300 mt-1.5">
                          {section.formula.description}
                        </p>
                      </div>
                    )}

                    {/* Bullets if present */}
                    {section.bullets && (
                      <ul className="space-y-2.5 pl-1">
                        {section.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                          >
                            <span className="w-2 h-2 rounded-full bg-sky-700 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Step-by-step Workshop Procedure if present */}
                    {section.steps && (
                      <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Procedura technologiczna krok po kroku:
                        </div>
                        <ol className="space-y-2.5">
                          {section.steps.map((step, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex items-start gap-3 text-sm sm:text-base text-slate-800"
                            >
                              <span className="w-6 h-6 rounded bg-slate-900 text-orange-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Technical Data Table if present */}
                    {section.table && (
                      <div className="overflow-x-auto rounded-lg border border-slate-200 my-3">
                        <table className="w-full text-left border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-800 text-slate-100">
                              {section.table.headers.map((header, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="py-2.5 px-3.5 font-semibold text-xs uppercase tracking-wider border-b border-slate-700"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 bg-white">
                            {section.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className={rIdx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`py-2.5 px-3.5 text-slate-700 align-top ${
                                      cIdx === 0 ? 'font-semibold text-slate-900 font-mono text-xs sm:text-sm' : ''
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* CKE Exam Tip Alert */}
              {activeTopic.examTip && (
                <div className="bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 rounded-r-lg p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-orange-900">
                        Wskazówka Egzaminacyjna CKE — Kwalifikacja MOT.05
                      </h3>
                      <p className="text-sm sm:text-base text-orange-950 mt-1 leading-relaxed">
                        {activeTopic.examTip}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Self-Check Exam Questions (Quiz) */}
              {activeTopic.quiz && activeTopic.quiz.length > 0 && (
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-sky-700" />
                      <h3 className="font-bold text-base text-slate-900">
                        Sprawdź się — Pytania kontrolne w stylu egzaminu MOT.05
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {activeTopic.quiz.length} pytania
                    </span>
                  </div>

                  <div className="space-y-6">
                    {activeTopic.quiz.map((qItem, qIdx) => {
                      const answerKey = `${activeTopic.id}_${qIdx}`;
                      const selectedOption = quizAnswers[answerKey];
                      const hasAnswered = selectedOption !== undefined;
                      const isCorrect = selectedOption === qItem.correctIndex;

                      return (
                        <div
                          key={qIdx}
                          className="bg-white rounded-lg border border-slate-200 p-4 space-y-3"
                        >
                          <div className="font-semibold text-sm sm:text-base text-slate-900">
                            <span className="font-mono text-sky-700 mr-2">
                              Pytanie {qIdx + 1}.
                            </span>
                            {qItem.question}
                          </div>

                          <div className="grid grid-cols-1 gap-2">
                            {qItem.options.map((opt, oIdx) => {
                              const isThisSelected = selectedOption === oIdx;
                              const isThisCorrect = qItem.correctIndex === oIdx;

                              let btnStyle =
                                'border-slate-200 bg-slate-50/60 text-slate-800 hover:bg-slate-100';
                              if (hasAnswered) {
                                if (isThisCorrect) {
                                  btnStyle =
                                    'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                                } else if (isThisSelected && !isThisCorrect) {
                                  btnStyle =
                                    'border-red-400 bg-red-50 text-red-900';
                                } else {
                                  btnStyle =
                                    'border-slate-200 bg-white text-slate-400';
                                }
                              }

                              return (
                                <button
                                  key={oIdx}
                                  type="button"
                                  onClick={() =>
                                    setQuizAnswers((prev) => ({
                                      ...prev,
                                      [answerKey]: oIdx
                                    }))
                                  }
                                  className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                                >
                                  <div>
                                    <span className="font-mono font-bold mr-2">
                                      {String.fromCharCode(65 + oIdx)}.
                                    </span>
                                    <span>{opt}</span>
                                  </div>
                                  {hasAnswered && isThisCorrect && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {hasAnswered && (
                            <div
                              className={`text-xs sm:text-sm p-3 rounded-md border ${
                                isCorrect
                                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                                  : 'bg-amber-50 border-amber-200 text-amber-950'
                              }`}
                            >
                              <strong>
                                {isCorrect
                                  ? 'Prawidłowa odpowiedź! '
                                  : 'Wyjaśnienie: '}
                              </strong>
                              {qItem.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Navigation: Prev / Next Topic */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {prevTopic ? (
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectTopic(prevTopic.categoryId, prevTopic.id)
                    }
                    className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-left cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase text-slate-400">
                        Poprzednie zagadnienie ({prevTopic.categoryShortName})
                      </div>
                      <div className="text-sm font-semibold text-slate-800 truncate">
                        {prevTopic.title}
                      </div>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextTopic ? (
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectTopic(nextTopic.categoryId, nextTopic.id)
                    }
                    className="flex items-center justify-end gap-3 p-3.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-right cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase text-slate-400">
                        Następne zagadnienie ({nextTopic.categoryShortName})
                      </div>
                      <div className="text-sm font-semibold text-slate-800 truncate">
                        {nextTopic.title}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-500 shrink-0" />
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </article>
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION BAR (5 Main Categories) */}
      <nav
        aria-label="Kategorie główne"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-900 border-t border-slate-800 text-slate-300"
      >
        <div className="grid grid-cols-5 h-16">
          {CATEGORIES.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.icon] || BookOpen;
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleSelectCategory(category.id)}
                className={`flex flex-col items-center justify-center gap-1 px-1 border-t-2 ${
                  isActive
                    ? 'border-orange-500 text-orange-400 bg-slate-800/80 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-[10px] tracking-tight truncate max-w-full">
                  {category.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
