import React, { useState } from 'react';
import { Layers, Eye, Info, CheckCircle2 } from 'lucide-react';

/**
 * Renders interactive CAD/Service-Manual style SVG technical schematics and assembly drawings ("montażówki")
 * tailored to specific MOT.05 topics.
 */
export default function TechnicalDiagram({ topicId }) {
  switch (topicId) {
    case 'bezpieczenstwo-w-warsztacie':
    case 'postepowanie-z-odpadami':
    case 'ppoz':
      return <BhpLiftAndSafetyDiagram />;
    case 'rodzaje-silnikow':
      return <EngineConfigsDiagram />;
    case 'rodzaje-korbowodow-i-uklad-korbowy':
      return <CrankAssemblyDiagram />;
    case 'uklad-rozrzadu':
      return <TimingBeltDiagram />;
    case 'uklad-chlodzenia':
      return <CoolingCircuitDiagram />;
    case 'uklad-klimatyzacji':
      return <AcCircuitDiagram />;
    case 'budowa-zawieszenia':
      return <SuspensionAssemblyDiagram />;
    case 'uklad-hamulcowy':
      return <BrakeAssemblyDiagram />;
    case 'prawo-ohma':
    case 'uklad-rozruchu-rozrusznik':
    case 'dzialanie-alternatora':
    case 'budowa-akumulatora':
      return <StarterAlternatorWiringDiagram />;
    case 'obsluga-oscyloskopu':
    case 'czujniki-i-elektronika-silnikowa':
    case 'odczyt-kodow-bledow-obd':
      return <OscilloscopeAndObdDiagram defaultTab={topicId === 'odczyt-kodow-bledow-obd' ? 'obd' : 'scope'} />;
    case 'geometria-kol':
      return <WheelAlignmentDiagram />;
    case 'rodzaje-gwintow':
    case 'tolerancje-i-pasowania':
    case 'rysunek-techniczny':
      return <PkmTechnicalDrawingDiagram defaultTab={topicId === 'tolerancje-i-pasowania' ? 'fits' : 'thread'} />;
    default:
      return null;
  }
}

/* ============================================================================
   1. RODZAJE SILNIKÓW – Układy cylindrów (R4, V6, Boxer) + GMP/DMP
   ============================================================================ */
function EngineConfigsDiagram() {
  const [selectedConfig, setSelectedConfig] = useState('r4');

  const configs = {
    r4: {
      title: 'Silnik Rzędowy (R4) – przekrój i parametry cylindra',
      desc: 'Wszystkie cylindry w jednej płaszczyźnie. Tłoki 1 i 4 oraz 2 i 3 poruszają się współbieżnie. Kolejność zapłonów: 1–3–4–2.',
      specs: ['Kąt między cylindrami: 0° (w jednej linii)', 'Liczba głowic: 1 wspólna', 'Stopień sprężania: ε = (Vs + Vk) / Vk']
    },
    v6: {
      title: 'Silnik Widlasty (V6 / V8) – kąt rozchylenia 60° lub 90°',
      desc: 'Cylindry w dwóch rzędach rozchylonych pod kątem 60° lub 90°. Dwa korbowody przeciwległych rzędów pracują na wspólnym czopie wału korbowego.',
      specs: ['Kąt rozwidlenia: 60° lub 90°', 'Liczba głowic: 2 (lewa i prawa)', 'Zaleta: krótki i sztywny kadłub silnika']
    },
    boxer: {
      title: 'Silnik Przeciwsobny (Boxer B4 / B6) – kąt 180°',
      desc: 'Cylindry leżą płasko po obu stronach wału (180°). Przeciwległe tłoki poruszają się jednocześnie do GMP i jednocześnie do DMP.',
      specs: ['Kąt rozchylenia: 180°', 'Osobne czopy korbowe dla każdego tłoka', 'Zaleta: bardzo niski środek ciężkości i brak drgań']
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Konstrukcyjny: Układy Cylindrów i Geometria Skoku Tłoka (GMP / DMP)
          </span>
        </div>
        <div className="flex gap-1.5">
          {[
            { id: 'r4', label: 'Rzędowy (R)' },
            { id: 'v6', label: 'Widlasty (V)' },
            { id: 'boxer', label: 'Boxer (180°)' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedConfig(tab.id)}
              className={`px-2.5 py-1 text-xs font-mono rounded border cursor-pointer ${
                selectedConfig === tab.id
                  ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 bg-slate-950/90 rounded-lg border border-slate-800 p-3 flex justify-center">
          <svg viewBox="0 0 520 300" className="w-full max-w-lg h-auto">
            {/* Blueprint Grid lines */}
            <defs>
              <pattern id="grid-engine" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="520" height="300" fill="url(#grid-engine)" />

            {selectedConfig === 'r4' && (
              <g>
                {/* Cylinder block cross-section */}
                <rect x="170" y="35" width="110" height="155" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                {/* Combustion chamber Vk */}
                <rect x="173" y="38" width="104" height="27" fill="#7c2d12" fillOpacity="0.45" />
                <text x="225" y="55" textAnchor="middle" fill="#fdba74" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  Komora Vk
                </text>

                {/* GMP and DMP dashed lines */}
                <line x1="140" y1="65" x2="365" y2="65" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,4" />
                <text x="372" y="69" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  GMP (Górny Martwy Punkt)
                </text>

                <line x1="140" y1="145" x2="365" y2="145" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5,4" />
                <text x="372" y="149" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  DMP (Dolny Martwy Punkt)
                </text>

                {/* Stroke S arrow */}
                <line x1="150" y1="65" x2="150" y2="145" stroke="#e2e8f0" strokeWidth="1.5" />
                <polygon points="150,65 146,73 154,73" fill="#e2e8f0" />
                <polygon points="150,145 146,137 154,137" fill="#e2e8f0" />
                <text x="138" y="110" textAnchor="end" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  Skok S
                </text>

                {/* Piston */}
                <rect x="176" y="85" width="98" height="52" rx="3" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                {/* Piston rings */}
                <line x1="176" y1="93" x2="274" y2="93" stroke="#f97316" strokeWidth="2" />
                <line x1="176" y1="100" x2="274" y2="100" stroke="#f97316" strokeWidth="2" />
                <line x1="176" y1="107" x2="274" y2="107" stroke="#38bdf8" strokeWidth="2.5" />
                {/* Piston pin */}
                <circle cx="225" cy="115" r="10" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />

                {/* Connecting rod */}
                <path d="M 219 124 L 202 222 L 218 228 L 231 124 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1.8" />

                {/* Crankshaft web and journal */}
                <circle cx="225" cy="240" r="38" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
                <circle cx="225" cy="240" r="12" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="210" cy="225" r="10" fill="#f97316" stroke="#fff" strokeWidth="1.5" />
                <text x="225" y="292" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                  Oś wału korbowego (R4: zapłon 1-3-4-2)
                </text>
              </g>
            )}

            {selectedConfig === 'v6' && (
              <g>
                {/* Center axis */}
                <line x1="260" y1="20" x2="260" y2="260" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" />
                {/* Left bank cylinder (-35 deg) */}
                <g transform="translate(260, 215) rotate(-35)">
                  <rect x="-35" y="-175" width="70" height="115" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                  <rect x="-31" y="-140" width="62" height="40" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="0" cy="-120" r="7" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="0" y1="-113" x2="0" y2="-15" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
                  <text x="0" y="-183" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    Rząd Lewy (L)
                  </text>
                </g>
                {/* Right bank cylinder (+35 deg) */}
                <g transform="translate(260, 215) rotate(35)">
                  <rect x="-35" y="-175" width="70" height="115" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                  <rect x="-31" y="-155" width="62" height="40" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="0" cy="-135" r="7" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="0" y1="-128" x2="0" y2="-15" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
                  <text x="0" y="-183" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    Rząd Prawy (P)
                  </text>
                </g>
                {/* Angle arc */}
                <path d="M 225 145 A 65 65 0 0 1 295 145" fill="none" stroke="#f97316" strokeWidth="2" />
                <text x="260" y="135" textAnchor="middle" fill="#f97316" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  60° / 90°
                </text>
                {/* Crankshaft */}
                <circle cx="260" cy="215" r="26" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="260" cy="200" r="9" fill="#f97316" stroke="#fff" strokeWidth="1.5" />
                <text x="260" y="275" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="monospace">
                  Układ widlasty V: dwa rzędy cylindrów, wspólny wał korbowy
                </text>
              </g>
            )}

            {selectedConfig === 'boxer' && (
              <g>
                {/* Left horizontal cylinder */}
                <rect x="35" y="105" width="145" height="75" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                <rect x="65" y="110" width="48" height="65" rx="2" fill="#334155" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="89" cy="142" r="7" fill="#0f172a" stroke="#fff" strokeWidth="2" />
                <line x1="96" y1="142" x2="238" y2="130" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
                <text x="105" y="92" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  ← Tłok L (do GMP)
                </text>

                {/* Right horizontal cylinder */}
                <rect x="340" y="105" width="145" height="75" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                <rect x="407" y="110" width="48" height="65" rx="2" fill="#334155" stroke="#f97316" strokeWidth="2" />
                <circle cx="431" cy="142" r="7" fill="#0f172a" stroke="#fff" strokeWidth="2" />
                <line x1="424" y1="142" x2="282" y2="155" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
                <text x="415" y="92" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  Tłok P (do GMP) →
                </text>

                {/* Central Crankshaft with 180 deg offset throws */}
                <circle cx="260" cy="142" r="34" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="238" cy="130" r="8" fill="#38bdf8" stroke="#fff" strokeWidth="1.5" />
                <circle cx="282" cy="155" r="8" fill="#f97316" stroke="#fff" strokeWidth="1.5" />
                <text x="260" y="75" textAnchor="middle" fill="#f97316" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  Kąt rozchylenia: 180° (Przeciwsobny Boxer)
                </text>
                <text x="260" y="235" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="monospace">
                  Osobne wykorbienia (180°) – tłoki poruszają się symetrycznie przeciwsobnie
                </text>
              </g>
            )}
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-3">
          <h4 className="font-bold text-base text-white">{configs[selectedConfig].title}</h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {configs[selectedConfig].desc}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-slate-800">
            {configs[selectedConfig].specs.map((s, i) => (
              <li key={i} className="text-xs font-mono text-sky-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   2. RODZAJE KORBOWODÓW – Montażówka układu korbowo-tłokowego i podział stopy
   ============================================================================ */
function CrankAssemblyDiagram() {
  const [selectedPart, setSelectedPart] = useState(1);

  const parts = [
    {
      id: 1,
      name: '1. Pierścienie tłokowe (Uszczelniający, Zgarniający, Olejowy)',
      detail: 'Montowane w rowkach tłoka za pomocą szczypiec do pierścieni. Zamki pierścieni należy przestawić względem siebie co 120° (nigdy w osi sworznia tłokowego!). Oznaczeniem „TOP” zawsze do denka tłoka.'
    },
    {
      id: 2,
      name: '2. Tłok + Sworzeń tłokowy + Pierścienie Segera',
      detail: 'Tłok posiada oznaczenie kierunku montażu (strzałka lub napis FRONT skierowany w stronę rozrządu!). Sworzeń pływający zabezpieczony jest dwoma pierścieniami osadczymi Segera.'
    },
    {
      id: 3,
      name: '3. Główka i trzon korbowodu (przekrój dwuteowy)',
      detail: 'Główka z tulejką brązową współpracuje ze sworzniem tłokowym. Trzon o przekroju dwuteowym (I-beam / H-beam) zapewnia maksymalną odporność na wyboczenie przy siłach gazowych.'
    },
    {
      id: 4,
      name: '4. Półpanewki ślizgowe z zamkami ustalającymi',
      detail: 'Trójwarstwowe panewki korbowodowe. Zamki (wypusty) w panewkach montuje się „zamek do zamka”. Przed obróceniem panewki chroni zacisk śrub stopy korbowodu.'
    },
    {
      id: 5,
      name: '5. Stopa korbowodu (Prosta 90° / Ukośna 45° / Łamana)',
      detail: 'Podział ukośny zmniejsza szerokość stopy, aby korbowód przeszedł górą przez cylinder. W korbowodach łamanych (fracture-split) struktura przełomu pasuje tylko do jednej pokrywy!'
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Rysunek Montażowy (Złożeniowy): Układ Korbowo-Tłokowy i Podział Stopy Korbowodu
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
          Kliknij numer części (1–5), aby wyświetlić instrukcję montażową
        </span>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Exploded SVG Assembly + Rod Cap Splits */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 540 340" className="w-full h-auto">
            {/* Left Side: Exploded Piston & Conrod Assembly */}
            <text x="150" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              MONTAŻÓWKA (WIDOK ROZSTRZELONY)
            </text>
            {/* Center assembly axis */}
            <line x1="150" y1="28" x2="150" y2="325" stroke="#334155" strokeWidth="1.5" strokeDasharray="4,4" />

            {/* 1. Piston rings */}
            <g onClick={() => setSelectedPart(1)} className="cursor-pointer">
              <ellipse cx="150" cy="42" rx="44" ry="7" fill="none" stroke={selectedPart === 1 ? '#f97316' : '#cbd5e1'} strokeWidth="2.5" />
              <ellipse cx="150" cy="54" rx="44" ry="7" fill="none" stroke={selectedPart === 1 ? '#f97316' : '#94a3b8'} strokeWidth="2.5" />
              <ellipse cx="150" cy="66" rx="44" ry="7" fill="none" stroke={selectedPart === 1 ? '#f97316' : '#38bdf8'} strokeWidth="3" />
              <circle cx="75" cy="54" r="11" fill={selectedPart === 1 ? '#f97316' : '#1e293b'} stroke="#f97316" strokeWidth="1.5" />
              <text x="75" y="58" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">1</text>
            </g>

            {/* 2. Piston & Pin */}
            <g onClick={() => setSelectedPart(2)} className="cursor-pointer">
              <rect x="106" y="85" width="88" height="52" rx="4" fill="#1e293b" stroke={selectedPart === 2 ? '#f97316' : '#94a3b8'} strokeWidth="2" />
              <circle cx="150" cy="112" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              {/* Pin */}
              <rect x="205" y="105" width="42" height="14" rx="2" fill="#475569" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="226" y="100" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">Sworzeń</text>
              <circle cx="75" cy="110" r="11" fill={selectedPart === 2 ? '#f97316' : '#1e293b'} stroke="#f97316" strokeWidth="1.5" />
              <text x="75" y="114" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">2</text>
            </g>

            {/* 3. Conrod Small End & I-Beam Shank */}
            <g onClick={() => setSelectedPart(3)} className="cursor-pointer">
              <circle cx="150" cy="158" r="14" fill="#334155" stroke={selectedPart === 3 ? '#f97316' : '#cbd5e1'} strokeWidth="2" />
              <circle cx="150" cy="158" r="8" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
              <path d="M 141 171 L 134 225 L 118 238 L 182 238 L 166 225 L 159 171 Z" fill="#334155" stroke={selectedPart === 3 ? '#f97316' : '#cbd5e1'} strokeWidth="2" />
              {/* I-beam slot */}
              <rect x="145" y="178" width="10" height="42" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
              <circle cx="75" cy="195" r="11" fill={selectedPart === 3 ? '#f97316' : '#1e293b'} stroke="#f97316" strokeWidth="1.5" />
              <text x="75" y="199" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">3</text>
            </g>

            {/* 4. Bearing shells (Panewki) */}
            <g onClick={() => setSelectedPart(4)} className="cursor-pointer">
              <path d="M 126 248 A 24 20 0 0 1 174 248" fill="none" stroke={selectedPart === 4 ? '#f97316' : '#38bdf8'} strokeWidth="4" />
              <path d="M 126 266 A 24 20 0 0 0 174 266" fill="none" stroke={selectedPart === 4 ? '#f97316' : '#38bdf8'} strokeWidth="4" />
              <circle cx="75" cy="258" r="11" fill={selectedPart === 4 ? '#f97316' : '#1e293b'} stroke="#f97316" strokeWidth="1.5" />
              <text x="75" y="262" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">4</text>
            </g>

            {/* 5. Big-end cap & bolts */}
            <g onClick={() => setSelectedPart(5)} className="cursor-pointer">
              <path d="M 118 286 L 182 286 L 176 312 L 124 312 Z" fill="#334155" stroke={selectedPart === 5 ? '#f97316' : '#cbd5e1'} strokeWidth="2" />
              <line x1="124" y1="278" x2="124" y2="326" stroke="#f97316" strokeWidth="3" />
              <line x1="176" y1="278" x2="176" y2="326" stroke="#f97316" strokeWidth="3" />
              <circle cx="75" cy="302" r="11" fill={selectedPart === 5 ? '#f97316' : '#1e293b'} stroke="#f97316" strokeWidth="1.5" />
              <text x="75" y="306" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">5</text>
            </g>

            {/* Divider line */}
            <line x1="285" y1="15" x2="285" y2="325" stroke="#1e293b" strokeWidth="2" />

            {/* Right Side: 3 Types of Big-End Splits */}
            <text x="412" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              RODZAJE PODZIAŁU STOPY
            </text>

            {/* A) Prosty 90 deg */}
            <g transform="translate(310, 42)">
              <rect x="0" y="0" width="205" height="80" rx="6" fill="#0f172a" stroke="#334155" />
              <circle cx="45" cy="40" r="22" fill="#1e293b" stroke="#94a3b8" strokeWidth="4" />
              <line x1="15" y1="40" x2="75" y2="40" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="90" y="32" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                A) Podział prosty (90°)
              </text>
              <text x="90" y="48" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Prostopadły do osi
              </text>
              <text x="90" y="62" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                trzonu (mniejsze czopy)
              </text>
            </g>

            {/* B) Ukośny 45 deg */}
            <g transform="translate(310, 134)">
              <rect x="0" y="0" width="205" height="80" rx="6" fill="#0f172a" stroke="#334155" />
              <circle cx="45" cy="40" r="22" fill="#1e293b" stroke="#94a3b8" strokeWidth="4" />
              <line x1="20" y1="62" x2="70" y2="18" stroke="#f97316" strokeWidth="2.5" />
              <text x="90" y="32" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
                B) Podział ukośny (45°)
              </text>
              <text x="90" y="48" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Mniejsza szerokość →
              </text>
              <text x="90" y="62" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                wyjęcie górą przez tuleję!
              </text>
            </g>

            {/* C) Łamany (Fracture-split) */}
            <g transform="translate(310, 226)">
              <rect x="0" y="0" width="205" height="85" rx="6" fill="#0f172a" stroke="#334155" />
              <circle cx="45" cy="42" r="22" fill="#1e293b" stroke="#94a3b8" strokeWidth="4" />
              <polyline points="16,42 23,39 29,45 36,38 54,44 61,39 68,45 74,41" fill="none" stroke="#10b981" strokeWidth="2.5" />
              <text x="90" y="32" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">
                C) Stopa łamana
              </text>
              <text x="90" y="48" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                (Fracture-split)
              </text>
              <text x="90" y="62" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Unikalny przełom – zakaz
              </text>
              <text x="90" y="75" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                zamiany pokryw!
              </text>
            </g>
          </svg>
        </div>

        {/* Interactive Assembly Legend */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-xs font-mono uppercase text-slate-400 mb-1">
            Specyfikacja montażowa elementu (kliknij pozycję):
          </div>
          {parts.map((part) => {
            const active = selectedPart === part.id;
            return (
              <button
                key={part.id}
                type="button"
                onClick={() => setSelectedPart(part.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors cursor-pointer ${
                  active
                    ? 'bg-slate-800 border-orange-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <div className="text-xs font-bold text-orange-400">{part.name}</div>
                {active && (
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {part.detail}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   3. UKŁAD ROZRZĄDU – Schemat ustawienia znaków rozrządu DOHC (Przełożenie 2:1)
   ============================================================================ */
function TimingBeltDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Montażowy: Napęd Paskiem Zębatym DOHC i Znaki Ustawcze (OT / GMP)
          </span>
        </div>
        <span className="text-xs font-mono text-sky-400">Przełożenie 2:1 (Wał 720° = Wałek 360°)</span>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 500 310" className="w-full h-auto">
            {/* Timing Belt Path */}
            <path
              d="M 135 50 L 345 50 A 48 48 0 0 1 388 105 L 330 185 L 285 262 A 34 34 0 0 1 215 262 L 165 165 L 92 105 A 48 48 0 0 1 135 50 Z"
              fill="none"
              stroke="#f97316"
              strokeWidth="6"
            />

            {/* Intake Camshaft Sprocket (Left) */}
            <circle cx="140" cy="95" r="44" fill="#1e293b" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="140" cy="95" r="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            {/* Timing Mark Top */}
            <line x1="140" y1="45" x2="140" y2="60" stroke="#22c55e" strokeWidth="3" />
            <polygon points="140,42 135,32 145,32" fill="#22c55e" />
            <text x="140" y="26" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ZNAK OT (Ssący)
            </text>
            <text x="140" y="122" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Wałek I (40 zębów)
            </text>

            {/* Exhaust Camshaft Sprocket (Right) */}
            <circle cx="340" cy="95" r="44" fill="#1e293b" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="340" cy="95" r="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            <line x1="340" y1="45" x2="340" y2="60" stroke="#22c55e" strokeWidth="3" />
            <polygon points="340,42 335,32 345,32" fill="#22c55e" />
            <text x="340" y="26" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ZNAK OT (Wydech)
            </text>
            <text x="340" y="122" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Wałek II (40 zębów)
            </text>

            {/* Water Pump (Left Middle) */}
            <circle cx="155" cy="175" r="24" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="80" y="180" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Pompa wody
            </text>

            {/* Tensioner Roller (Right Middle) */}
            <circle cx="335" cy="182" r="26" fill="#334155" stroke="#f97316" strokeWidth="2.5" />
            <circle cx="330" cy="187" r="6" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
            <text x="425" y="182" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Rolka napinająca
            </text>
            <text x="425" y="195" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
              (mimośrodowa)
            </text>

            {/* Crankshaft Sprocket (Bottom) */}
            <circle cx="250" cy="250" r="30" fill="#1e293b" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="250" cy="250" r="10" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
            <line x1="250" y1="274" x2="250" y2="288" stroke="#22c55e" strokeWidth="3" />
            <text x="250" y="302" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold">
              Wał korbowy (20 zębów) – ZNAK GMP Cyl. 1
            </text>
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-3.5 space-y-2">
            <div className="font-bold text-orange-400 uppercase text-xs">
              Karta kontrolna montażu rozrządu:
            </div>
            <p>
              1. Koło zębate wału korbowego ma zawsze <strong>2 razy mniej zębów</strong> (np. 20) niż koło wałka rozrządu (np. 40).
            </p>
            <p>
              2. Strona czynna (ciągnąca) paska rozrządu musi być napięta przy ustawionych znakach <strong className="text-emerald-400">OT / GMP</strong>, a luz kasowany jest po stronie biernej przez rolkę napinającą.
            </p>
            <p>
              3. Po napięciu paska i wyjęciu blokad wykonaj <strong>2 pełne obroty wałem korbowym (720°)</strong> kluczem w kierunku pracy silnika i zweryfikuj pokrycie znaków.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   4. UKŁAD CHŁODZENIA – Interaktywny schemat Mały Obieg vs Duży Obieg
   ============================================================================ */
function CoolingCircuitDiagram() {
  const [circuitMode, setCircuitMode] = useState('small'); // 'small' or 'large'

  const isLarge = circuitMode === 'large';

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Przepływu: Mały i Duży Obieg Układu Chłodzenia
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCircuitMode('small')}
            className={`px-3 py-1 text-xs font-mono rounded border cursor-pointer ${
              !isLarge
                ? 'bg-sky-600 text-white border-sky-500 font-bold'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Mały obieg (&lt; 87°C – Zimny)
          </button>
          <button
            type="button"
            onClick={() => setCircuitMode('large')}
            className={`px-3 py-1 text-xs font-mono rounded border cursor-pointer ${
              isLarge
                ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Duży obieg (&gt; 87°C – Gorący)
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 620 270" className="w-full h-auto">
            {/* Radiator (Chłodnica główna) on Left */}
            <rect
              x="25"
              y="45"
              width="85"
              height="180"
              rx="4"
              fill="#0f172a"
              stroke={isLarge ? '#f97316' : '#475569'}
              strokeWidth="3"
            />
            {[65, 85, 105, 125, 145, 165, 185, 205].map((y) => (
              <line key={y} x1="32" y1={y} x2="103" y2={y} stroke="#334155" strokeWidth="2" />
            ))}
            <text x="67" y="34" textAnchor="middle" fill={isLarge ? '#f97316' : '#64748b'} fontSize="11" fontFamily="monospace" fontWeight="bold">
              CHŁODNICA GŁÓWNA
            </text>
            <text x="67" y="242" textAnchor="middle" fill={isLarge ? '#ef4444' : '#64748b'} fontSize="10" fontFamily="monospace">
              {isLarge ? 'GORĄCA (Przepływ aktywny)' : 'ZIMNA (Brak przepływu)'}
            </text>

            {/* Upper & Lower Radiator Hoses */}
            <path
              d="M 245 70 L 110 70"
              fill="none"
              stroke={isLarge ? '#ef4444' : '#334155'}
              strokeWidth="6"
              strokeDasharray={isLarge ? 'none' : '5,5'}
            />
            <path
              d="M 110 200 L 290 200"
              fill="none"
              stroke={isLarge ? '#38bdf8' : '#334155'}
              strokeWidth="6"
              strokeDasharray={isLarge ? 'none' : '5,5'}
            />

            {/* Thermostat housing */}
            <circle
              cx="265"
              cy="70"
              r="24"
              fill="#1e293b"
              stroke={isLarge ? '#22c55e' : '#eab308'}
              strokeWidth="3"
            />
            <text x="265" y="74" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">
              TERMOSTAT
            </text>
            <text x="265" y="36" textAnchor="middle" fill={isLarge ? '#22c55e' : '#eab308'} fontSize="11" fontFamily="monospace" fontWeight="bold">
              {isLarge ? 'OTWARTY (>87°C)' : 'ZAMKNIĘTY (<87°C)'}
            </text>

            {/* Bypass pipe (Mały obieg) */}
            <line
              x1="265"
              y1="94"
              x2="265"
              y2="185"
              stroke={!isLarge ? '#f97316' : '#334155'}
              strokeWidth="6"
            />
            <text x="215" y="142" textAnchor="middle" fill={!isLarge ? '#f97316' : '#475569'} fontSize="10" fontFamily="monospace" fontWeight="bold">
              Kanał obejściowy
            </text>

            {/* Water Pump */}
            <circle cx="305" cy="200" r="20" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="305" y="204" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
              POMPA
            </text>

            {/* Engine Block & Cylinder Head */}
            <rect x="345" y="50" width="125" height="165" rx="6" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
            <circle cx="380" cy="130" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="430" cy="130" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="407" y="82" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
              BLOK I GŁOWICA
            </text>
            <text x="407" y="185" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Płaszcz wodny
            </text>

            {/* Connections Engine <-> Thermostat & Pump */}
            <line x1="345" y1="70" x2="289" y2="70" stroke="#ef4444" strokeWidth="6" />
            <line x1="325" y1="200" x2="345" y2="200" stroke="#38bdf8" strokeWidth="6" />

            {/* Cabin Heater Core (Nagrzewnica kabiny) on Right */}
            <rect x="520" y="75" width="75" height="110" rx="4" fill="#0f172a" stroke="#f97316" strokeWidth="2.5" />
            <line x1="470" y1="95" x2="520" y2="95" stroke="#ef4444" strokeWidth="4" />
            <line x1="520" y1="165" x2="470" y2="165" stroke="#38bdf8" strokeWidth="4" />
            <text x="557" y="125" textAnchor="middle" fill="#fdba74" fontSize="10" fontFamily="monospace" fontWeight="bold">
              NAGRZEWNICA
            </text>
            <text x="557" y="140" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
              (Ogrzewanie
            </text>
            <text x="557" y="152" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
              kabiny)
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   5. UKŁAD KLIMATYZACJI – Schemat obiegu HP (Wysokie) i LP (Niskie ciśnienie)
   ============================================================================ */
function AcCircuitDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Obiegu Termodynamicznego Klimatyzacji (Strona HP vs Strona LP)
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-red-400 font-bold">■ HP (Wysokie: 12–16 bar)</span>
          <span className="text-sky-400 font-bold">■ LP (Niskie: 1,8–2,3 bar)</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 620 260" className="w-full h-auto">
            {/* HP Top Pipe (Red) */}
            <line x1="160" y1="55" x2="460" y2="55" stroke="#ef4444" strokeWidth="6" />
            {/* LP Bottom Pipe (Blue) */}
            <line x1="460" y1="205" x2="160" y2="205" stroke="#38bdf8" strokeWidth="6" />

            {/* 1. Compressor (Top Center) */}
            <circle cx="310" cy="55" r="34" fill="#1e293b" stroke="#f97316" strokeWidth="3" />
            <text x="310" y="52" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">
              1. SPRĘŻARKA
            </text>
            <text x="310" y="65" textAnchor="middle" fill="#fdba74" fontSize="9" fontFamily="monospace">
              (Tłoczy GAZ)
            </text>

            {/* 2. Condenser / Skraplacz (Left) */}
            <rect x="45" y="75" width="95" height="110" rx="5" fill="#0f172a" stroke="#ef4444" strokeWidth="3" />
            <line x1="160" y1="55" x2="92" y2="75" stroke="#ef4444" strokeWidth="6" />
            <line x1="92" y1="185" x2="160" y2="205" stroke="#ef4444" strokeWidth="6" />
            <text x="92" y="122" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace" fontWeight="bold">
              2. SKRAPLACZ
            </text>
            <text x="92" y="138" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
              Gaz → Ciecz
            </text>
            <text x="92" y="152" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
              (Oddaje ciepło)
            </text>

            {/* 3. Receiver-Drier (Osuszacz) */}
            <rect x="175" y="182" width="46" height="46" rx="6" fill="#1e293b" stroke="#ef4444" strokeWidth="2.5" />
            <text x="198" y="203" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">
              3. FILTR
            </text>
            <text x="198" y="215" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="monospace">
              OSUSZACZ
            </text>

            {/* High pressure liquid line to TXV */}
            <line x1="221" y1="205" x2="310" y2="205" stroke="#ef4444" strokeWidth="6" />

            {/* 4. Expansion Valve (Zawór rozprężny TXV - Bottom Center) */}
            <polygon points="290,185 330,225 330,185 290,225" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <text x="310" y="246" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">
              4. ZAWÓR ROZPRĘŻNY (TXV) – Granica HP → LP
            </text>

            {/* 5. Evaporator / Parownik (Right) */}
            <rect x="480" y="75" width="95" height="110" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
            <line x1="460" y1="205" x2="527" y2="185" stroke="#38bdf8" strokeWidth="6" />
            <line x1="527" y1="75" x2="460" y2="55" stroke="#38bdf8" strokeWidth="6" />
            {/* Correct top LP line from Evaporator to Compressor */}
            <line x1="344" y1="55" x2="460" y2="55" stroke="#38bdf8" strokeWidth="6" />
            <text x="527" y="122" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="monospace" fontWeight="bold">
              5. PAROWNIK
            </text>
            <text x="527" y="138" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
              Ciecz → Gaz (~0°C)
            </text>
            <text x="527" y="152" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
              (Chłodzi kabinę)
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   6. UKŁADY ZAWIESZENIA – Montażówka kolumny MacPhersona i wahacza
   ============================================================================ */
function SuspensionAssemblyDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Rysunek Montażowy: Kolumna Zawieszenia MacPherson i Wahacz Poprzeczny
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400">Zawieszenie niezależne przednie</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 600 280" className="w-full h-auto">
            {/* Upper strut mount & bearing */}
            <rect x="210" y="22" width="70" height="22" rx="4" fill="#334155" stroke="#f97316" strokeWidth="2" />
            <line x1="280" y1="33" x2="365" y2="33" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="372" y="37" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
              1. Poduszka górna z łożyskiem oporowym MacPhersona
            </text>

            {/* Piston rod & damper tube */}
            <rect x="238" y="44" width="14" height="65" fill="#cbd5e1" />
            <rect x="227" y="108" width="36" height="95" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="263" y1="155" x2="365" y2="155" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="372" y="159" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              3. Amortyzator teleskopowy (element tłumiący + oś skrętu)
            </text>

            {/* Coil Spring */}
            <path
              d="M 205 55 L 285 68 L 205 82 L 285 95 L 205 108 L 285 122 L 205 135"
              fill="none"
              stroke="#eab308"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <line x1="285" y1="95" x2="365" y2="95" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="372" y="99" fill="#eab308" fontSize="11" fontFamily="monospace" fontWeight="bold">
              2. Sprężyna śrubowa (demontaż wyłącznie ze ściągaczem!)
            </text>

            {/* Steering Knuckle (Zwrotnica) */}
            <path d="M 218 180 L 218 240 L 185 240 L 185 190 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
            <text x="115" y="205" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="monospace" fontWeight="bold">
              Zwrotnica koła
            </text>

            {/* Ball joint (Sworzeń kulowy) */}
            <circle cx="202" cy="246" r="9" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <text x="115" y="250" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
              4. Sworzeń wahacza
            </text>

            {/* Lower Control Arm (Wahacz dolny) + Silentblock */}
            <path d="M 211 246 L 340 246" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
            <circle cx="345" cy="246" r="13" fill="#0f172a" stroke="#22c55e" strokeWidth="3.5" />
            <circle cx="345" cy="246" r="5" fill="#22c55e" />
            <text x="372" y="242" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold">
              5. Tuleja metalowo-gumowa (Silentblock)
            </text>
            <text x="372" y="257" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              Dokręcać momentem wyłącznie NA KOŁACH!
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   7. UKŁADY HAMULCOWE – Zacisk pływający + Układ dwuobwodowy X
   ============================================================================ */
function BrakeAssemblyDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Konstrukcyjny: Zacisk Pływający i Dwuobwodowy Układ Diagonalny (X)
          </span>
        </div>
        <span className="text-xs font-mono text-sky-400">Max. bicie tarczy: 0,05 mm</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 600 250" className="w-full h-auto">
            {/* Left: Floating Caliper Cross Section */}
            <text x="145" y="24" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PRZEKRÓJ ZACISKU PŁYWAJĄCEGO
            </text>
            {/* Vented Brake Disc */}
            <rect x="115" y="45" width="12" height="175" fill="#94a3b8" />
            <rect x="133" y="45" width="12" height="175" fill="#94a3b8" />
            <text x="130" y="236" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Tarcza wentylowana
            </text>

            {/* Brake Pads (Klocki cierne) */}
            <rect x="95" y="75" width="16" height="80" fill="#f97316" stroke="#fff" strokeWidth="1" />
            <rect x="149" y="75" width="16" height="80" fill="#f97316" stroke="#fff" strokeWidth="1" />

            {/* Hydraulic Piston (Tłoczek) */}
            <rect x="167" y="82" width="48" height="66" rx="2" fill="#38bdf8" stroke="#e2e8f0" strokeWidth="2" />
            <text x="191" y="119" textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Tłoczek
            </text>

            {/* Caliper Housing */}
            <path
              d="M 92 60 L 235 60 L 235 170 L 168 170 L 168 152 L 218 152 L 218 78 L 92 78 L 92 155 L 75 155 L 75 60 Z"
              fill="#334155"
              stroke="#64748b"
              strokeWidth="2"
            />
            <text x="155" y="52" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace">
              Klocki hamulcowe (min. 1,5–2,0 mm)
            </text>

            {/* Divider */}
            <line x1="285" y1="15" x2="285" y2="235" stroke="#1e293b" strokeWidth="2" />

            {/* Right: Diagonal X-split Brake Circuit */}
            <text x="445" y="24" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              DWUOBWODOWY UKŁAD DIAGONALNY (X)
            </text>

            {/* 4 Wheels */}
            <rect x="330" y="50" width="28" height="50" rx="4" fill="#1e293b" stroke="#f97316" strokeWidth="2.5" />
            <text x="344" y="79" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">LP</text>

            <rect x="520" y="50" width="28" height="50" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="534" y="79" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">PP</text>

            <rect x="330" y="165" width="28" height="50" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="344" y="194" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">LT</text>

            <rect x="520" y="165" width="28" height="50" rx="4" fill="#1e293b" stroke="#f97316" strokeWidth="2.5" />
            <text x="534" y="194" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">PT</text>

            {/* Diagonal hydraulic lines */}
            <line x1="358" y1="75" x2="520" y2="190" stroke="#f97316" strokeWidth="3" />
            <line x1="520" y1="75" x2="358" y2="190" stroke="#38bdf8" strokeWidth="3" />

            {/* Central Tandem Master Cylinder & Servo */}
            <rect x="405" y="112" width="70" height="40" rx="5" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
            <text x="440" y="129" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">
              POMPA TANDEM
            </text>
            <text x="440" y="142" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
              + SERWO + ABS
            </text>
            <text x="440" y="236" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Sekcja 1: LP + PT (Pomarańczowy) | Sekcja 2: PP + LT (Niebieski)
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   8. ELEKTROTECHNIKA – Schemat połączeń Rozrusznika (30, 50, 45) i Alternatora (B+, D+)
   ============================================================================ */
function StarterAlternatorWiringDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Elektryczny: Układ Rozruchu i Ładowania (Oznaczenia zacisków DIN 72552)
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400">Instalacja 12 V DC</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 620 260" className="w-full h-auto">
            {/* Battery 12V (Left) */}
            <rect x="30" y="90" width="110" height="95" rx="5" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
            <rect x="45" y="78" width="18" height="12" fill="#ef4444" />
            <rect x="107" y="78" width="18" height="12" fill="#38bdf8" />
            <text x="54" y="72" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold">+ (30)</text>
            <text x="116" y="72" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">- (31)</text>
            <text x="85" y="132" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">AKUMULATOR</text>
            <text x="85" y="150" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">12,6 V | 60 Ah</text>
            {/* Ground symbol */}
            <line x1="116" y1="185" x2="116" y2="225" stroke="#38bdf8" strokeWidth="3" />
            <line x1="100" y1="225" x2="132" y2="225" stroke="#38bdf8" strokeWidth="3" />
            <text x="116" y="242" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">Masa (-)</text>

            {/* Main +12V Cable (30) */}
            <polyline points="54,78 54,35 480,35 480,85" fill="none" stroke="#ef4444" strokeWidth="4" />
            <line x1="290" y1="35" x2="290" y2="95" stroke="#ef4444" strokeWidth="4" />

            {/* Ignition Switch (Stacyjka) */}
            <rect x="175" y="85" width="75" height="55" rx="4" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
            <line x1="212" y1="35" x2="212" y2="85" stroke="#ef4444" strokeWidth="2.5" />
            <text x="212" y="110" textAnchor="middle" fill="#eab308" fontSize="10" fontFamily="monospace" fontWeight="bold">STACYJKA</text>
            <text x="212" y="126" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">15 / 50</text>

            {/* Signal wire 50 to Starter solenoid */}
            <polyline points="250,115 270,115" fill="none" stroke="#eab308" strokeWidth="2.5" />

            {/* Starter Motor & Solenoid (Center) */}
            <rect x="270" y="95" width="115" height="45" rx="4" fill="#1e293b" stroke="#f97316" strokeWidth="2.5" />
            <text x="327" y="115" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">ELEKTROMAGNES</text>
            <text x="327" y="130" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Zaciski: 30 | 50 | 45</text>

            <rect x="270" y="155" width="115" height="65" rx="6" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
            <line x1="355" y1="140" x2="355" y2="155" stroke="#f97316" strokeWidth="4" />
            <text x="327" y="185" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">ROZRUSZNIK (M)</text>
            <text x="327" y="202" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">+ Bendiks</text>

            {/* Alternator (Right) */}
            <circle cx="515" cy="145" r="60" fill="#1e293b" stroke="#22c55e" strokeWidth="2.5" />
            <text x="515" y="125" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold">ALTERNATOR (G)</text>
            <text x="515" y="143" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">B+ (Prąd ładowania)</text>
            <text x="515" y="158" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">D+/L (Kontrolka)</text>
            <text x="515" y="175" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">13,8 – 14,5 V</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   9. DIAGNOSTYKA – Przebiegi Oscyloskopowe (Indukcyjny vs Halla vs CAN) + Gniazdo OBD-II
   ============================================================================ */
function OscilloscopeAndObdDiagram({ defaultTab = 'scope' }) {
  const [tab, setTab] = useState(defaultTab);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schematy Diagnostyczne: Oscylrogramy Czujników oraz Pinout Gniazda OBD-II (16-pin)
          </span>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setTab('scope')}
            className={`px-2.5 py-1 text-xs font-mono rounded border cursor-pointer ${
              tab === 'scope'
                ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Wykresy Oscyloskopowe
          </button>
          <button
            type="button"
            onClick={() => setTab('obd')}
            className={`px-2.5 py-1 text-xs font-mono rounded border cursor-pointer ${
              tab === 'obd'
                ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Gniazdo OBD-II (DLC 16-pin)
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          {tab === 'scope' ? (
            <svg viewBox="0 0 620 250" className="w-full h-auto">
              {/* Left: Inductive Sensor Sine Wave (60-2 wheel) */}
              <rect x="20" y="30" width="275" height="190" fill="#090d16" stroke="#334155" strokeWidth="2" />
              <line x1="20" y1="125" x2="295" y2="125" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
              <text x="157" y="20" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
                1. CZUJNIK INDUKCYJNY (Pasywny – Sinusoida AC)
              </text>
              <path
                d="M 30 125 Q 42 75 55 125 T 80 125 Q 92 75 105 125 T 130 125 Q 155 30 185 220 Q 200 125 210 125 Q 222 75 235 125 T 260 125 Q 272 75 285 125"
                fill="none"
                stroke="#f97316"
                strokeWidth="2.5"
              />
              <text x="157" y="206" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
                Przerwa 60-2 | Amplituda ROŚNIE z obr./min!
              </text>

              {/* Right: Hall Sensor Square Wave (0-5V) */}
              <rect x="325" y="30" width="275" height="190" fill="#090d16" stroke="#334155" strokeWidth="2" />
              <line x1="325" y1="165" x2="600" y2="165" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
              <text x="462" y="20" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                2. CZUJNIK HALLA (Aktywny – Prostokąt 0–5 V)
              </text>
              <polyline
                points="335,165 360,165 360,70 395,70 395,165 425,165 425,70 485,70 485,165 515,165 515,70 550,70 550,165 585,165"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              <text x="345" y="62" fill="#22c55e" fontSize="10" fontFamily="monospace">+5,0 V (Stała amplituda!)</text>
              <text x="345" y="182" fill="#94a3b8" fontSize="10" fontFamily="monospace">0,0 V</text>
              <text x="462" y="206" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
                Z obrotami rośnie TYLKO częstotliwość impulsów
              </text>
            </svg>
          ) : (
            <svg viewBox="0 0 620 245" className="w-full h-auto">
              {/* Trapezoidal DLC 16-pin Connector */}
              <polygon
                points="90,35 530,35 495,175 125,175"
                fill="#1e293b"
                stroke="#94a3b8"
                strokeWidth="3"
              />
              {/* Top Row Pins 1 - 8 */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((pin, idx) => {
                const x = 138 + idx * 49;
                const highlight =
                  pin === 4 || pin === 5 ? '#38bdf8' : pin === 6 ? '#22c55e' : pin === 7 ? '#eab308' : '#334155';
                return (
                  <g key={pin}>
                    <rect x={x - 14} y="52" width="28" height="28" rx="4" fill={highlight} stroke="#e2e8f0" strokeWidth="1.5" />
                    <text x={x} y="70" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      {pin}
                    </text>
                  </g>
                );
              })}

              {/* Bottom Row Pins 9 - 16 */}
              {[9, 10, 11, 12, 13, 14, 15, 16].map((pin, idx) => {
                const x = 138 + idx * 49;
                const highlight = pin === 14 ? '#22c55e' : pin === 16 ? '#ef4444' : '#334155';
                return (
                  <g key={pin}>
                    <rect x={x - 14} y="115" width="28" height="28" rx="4" fill={highlight} stroke="#e2e8f0" strokeWidth="1.5" />
                    <text x={x} y="133" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      {pin}
                    </text>
                  </g>
                );
              })}

              {/* Legend below connector */}
              <text x="310" y="205" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Pin 16: Stałe +12V (Czerwony) | Pin 4 i 5: Masa (-) | Pin 6 (CAN-H) i Pin 14 (CAN-L): Terminacja 60 Ω | Pin 7: Linia K
              </text>
              <text x="310" y="226" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Widok na gniazdo diagnostyczne DLC w pojeździe (od strony wtykanej głowicy testera)
              </text>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   10. GEOMETRIA KÓŁ – Zbieżność (Toe), Kąt pochylenia koła (Camber) i Wyprzedzenie (Caster)
   ============================================================================ */
function WheelAlignmentDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat Kątów Geometrii Zawieszenia: Zbieżność (Toe), Pochylenie (Camber) i Wyprzedzenie (Caster)
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 620 230" className="w-full h-auto">
            {/* 1. TOE (Zbieżność - Widok z góry) */}
            <text x="105" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
              1. ZBIEŻNOŚĆ KÓŁ (Widok z góry)
            </text>
            {/* Left & Right wheels slightly toe-in */}
            <g transform="translate(55, 115) rotate(6)">
              <rect x="-12" y="-42" width="24" height="84" rx="4" fill="#334155" stroke="#f97316" strokeWidth="2" />
            </g>
            <g transform="translate(155, 115) rotate(-6)">
              <rect x="-12" y="-42" width="24" height="84" rx="4" fill="#334155" stroke="#f97316" strokeWidth="2" />
            </g>
            <line x1="60" y1="74" x2="150" y2="74" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="105" y="68" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">Przód: A</text>
            <line x1="50" y1="156" x2="160" y2="156" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="105" y="172" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">Tył: B (A &lt; B = Zbieżność +)</text>

            {/* 2. CAMBER (Kąt pochylenia koła - Widok z przodu) */}
            <text x="315" y="22" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              2. POCHYLENIE KOŁA (Camber)
            </text>
            <line x1="315" y1="42" x2="315" y2="180" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />
            <g transform="translate(315, 115) rotate(-8)">
              <rect x="-14" y="-50" width="28" height="100" rx="4" fill="#334155" stroke="#38bdf8" strokeWidth="2" />
              <line x1="0" y1="-62" x2="0" y2="62" stroke="#38bdf8" strokeWidth="2" />
            </g>
            <text x="315" y="202" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Odchylenie od pionu (±γ)
            </text>

            {/* 3. CASTER (Kąt wyprzedzenia sworznia zwrotnicy - Widok z boku) */}
            <text x="515" y="22" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold">
              3. WYPRZEDZENIE SWORZNIA
            </text>
            <circle cx="515" cy="125" r="44" fill="#1e293b" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="515" cy="125" r="14" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            <line x1="515" y1="42" x2="515" y2="185" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="535" y1="45" x2="498" y2="178" stroke="#22c55e" strokeWidth="2.5" />
            <text x="515" y="202" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Stabilizuje jazdę na wprost (Caster)
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   11. PKM – Zarys gwintu metrycznego ISO (60°) oraz układ pasowań (H7/g6 vs H7/p6)
   ============================================================================ */
function PkmTechnicalDrawingDiagram({ defaultTab = 'thread' }) {
  const [tab, setTab] = useState(defaultTab);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Rysunek Techniczny PKM: Zarys Gwintu Metrycznego ISO (60°) i Pola Tolerancji Pasowań
          </span>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setTab('thread')}
            className={`px-2.5 py-1 text-xs font-mono rounded border cursor-pointer ${
              tab === 'thread'
                ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Zarys gwintu (d, P, 60°)
          </button>
          <button
            type="button"
            onClick={() => setTab('fits')}
            className={`px-2.5 py-1 text-xs font-mono rounded border cursor-pointer ${
              tab === 'fits'
                ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            Układ pasowań (Stały otwór H)
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          {tab === 'thread' ? (
            <svg viewBox="0 0 600 220" className="w-full h-auto">
              {/* Metric 60 deg thread profile */}
              <polyline
                points="60,150 110,65 160,150 210,65 260,150 310,65 360,150 410,65 460,150"
                fill="none"
                stroke="#f97316"
                strokeWidth="3.5"
              />
              {/* Pitch P dimension */}
              <line x1="110" y1="35" x2="210" y2="35" stroke="#38bdf8" strokeWidth="2" />
              <line x1="110" y1="30" x2="110" y2="65" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="210" y1="30" x2="210" y2="65" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3" />
              <text x="160" y="27" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">
                Skok gwintu P [mm]
              </text>

              {/* 60 deg angle label */}
              <text x="260" y="115" textAnchor="middle" fill="#22c55e" fontSize="13" fontFamily="monospace" fontWeight="bold">
                60°
              </text>

              {/* Major diameter d & Drill size d - P */}
              <line x1="50" y1="65" x2="540" y2="65" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
              <text x="500" y="57" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">
                Wierzchołki: d (linia gruba)
              </text>

              <line x1="50" y1="150" x2="540" y2="150" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
              <text x="500" y="168" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Wiertło pod gwint: dw ≈ d - P
              </text>
            </svg>
          ) : (
            <svg viewBox="0 0 600 220" className="w-full h-auto">
              {/* Zero Line (Wymiar nominalny N) */}
              <line x1="40" y1="115" x2="560" y2="115" stroke="#e2e8f0" strokeWidth="2" />
              <text x="30" y="119" textAnchor="end" fill="#f97316" fontSize="12" fontFamily="monospace" fontWeight="bold">
                0 (N)
              </text>

              {/* Hole H7 (Otwór podstawowy - EI = 0) */}
              <rect x="70" y="65" width="75" height="50" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="107" y="95" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">
                Otwór H7
              </text>
              <text x="107" y="55" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Stały otwór (EI=0)
              </text>

              {/* 1. Loose shaft (g6) */}
              <rect x="200" y="130" width="85" height="38" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
              <text x="242" y="153" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Wałek f7 / g6
              </text>
              <text x="242" y="185" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Pasowanie LUŹNE
              </text>

              {/* 2. Transition shaft (k6 / js6) */}
              <rect x="330" y="92" width="85" height="40" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
              <text x="372" y="115" textAnchor="middle" fill="#fde68a" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Wałek js6 / k6
              </text>
              <text x="372" y="185" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Pasowanie MIESZANE
              </text>

              {/* 3. Interference shaft (p6 / s6) */}
              <rect x="460" y="35" width="85" height="40" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
              <text x="502" y="59" textAnchor="middle" fill="#fca5a5" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Wałek p6 / s6
              </text>
              <text x="502" y="185" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Pasowanie CIASNE (Wcisk)
              </text>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   12. BHP I PPOŻ – Schemat punktów podparcia pojazdu na podnośniku + Grupy pożarów
   ============================================================================ */
function BhpLiftAndSafetyDiagram() {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-700 overflow-hidden my-6">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Schemat BHP: Fabryczne Punkty Podparcia Podnośnika i Dobór Gaśnic (A, B, C, CO₂)
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="bg-slate-950/90 rounded-lg border border-slate-800 p-3">
          <svg viewBox="0 0 620 220" className="w-full h-auto">
            {/* Left: Car chassis top view with 4 lifting points */}
            <text x="160" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PUNKTY PODPARCIA ŁAP PODNOŚNIKA
            </text>
            <rect x="55" y="55" width="210" height="110" rx="18" fill="#1e293b" stroke="#64748b" strokeWidth="2.5" />
            {/* 4 Wheels */}
            <rect x="75" y="45" width="36" height="10" rx="2" fill="#94a3b8" />
            <rect x="205" y="45" width="36" height="10" rx="2" fill="#94a3b8" />
            <rect x="75" y="165" width="36" height="10" rx="2" fill="#94a3b8" />
            <rect x="205" y="165" width="36" height="10" rx="2" fill="#94a3b8" />

            {/* 4 Sill Lifting Points */}
            {[
              { x: 118, y: 62 },
              { x: 192, y: 62 },
              { x: 118, y: 158 },
              { x: 192, y: 158 }
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="7" fill="#f97316" stroke="#fff" strokeWidth="2" />
            ))}
            <text x="160" y="114" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Środek ciężkości (CG)
            </text>
            <text x="160" y="200" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
              Próba stateczności: unieść na 15–20 cm!
            </text>

            {/* Divider */}
            <line x1="315" y1="15" x2="315" y2="205" stroke="#1e293b" strokeWidth="2" />

            {/* Right: Fire Groups A, B, C, CO2 */}
            <text x="468" y="22" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              GRUPY POŻARÓW W WARSZTACIE
            </text>
            {[
              { code: 'A', name: 'Ciała stałe (opony, tapicerka)', gas: 'Proszkowa ABC / Pianowa', y: 42, col: '#22c55e' },
              { code: 'B', name: 'Ciecze palne (benzyna, olej)', gas: 'Proszkowa ABC / Śniegowa CO₂', y: 86, col: '#f97316' },
              { code: 'C', name: 'Gazy (LPG, CNG, wodór H₂)', gas: 'Proszkowa ABC (odciąć gaz!)', y: 130, col: '#38bdf8' },
              { code: 'E', name: 'Elektryka pod napięciem <1kV', gas: 'Śniegowa CO₂ (bez osadów)', y: 174, col: '#eab308' }
            ].map((g) => (
              <g key={g.code} transform={`translate(335, ${g.y})`}>
                <rect x="0" y="0" width="32" height="32" rx="5" fill="#0f172a" stroke={g.col} strokeWidth="2" />
                <text x="16" y="21" textAnchor="middle" fill={g.col} fontSize="14" fontFamily="monospace" fontWeight="bold">
                  {g.code}
                </text>
                <text x="44" y="14" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  {g.name}
                </text>
                <text x="44" y="28" fill="#94a3b8" fontSize="9.5" fontFamily="monospace">
                  Gaśnica: {g.gas}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

