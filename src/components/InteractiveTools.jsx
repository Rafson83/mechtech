import React, { useState } from 'react';
import { Calculator, Wrench, Cpu, BatteryCharging, Thermometer, Gauge } from 'lucide-react';

export function ThreadCalculator() {
  const [diameter, setDiameter] = useState('10');
  const [pitch, setPitch] = useState('1.5');
  const [boltClass, setBoltClass] = useState('8.8');

  const d = parseFloat(diameter) || 0;
  const p = parseFloat(pitch) || 0;
  const drillSize = d > p && p > 0 ? (d - p).toFixed(2) : '—';

  const [firstPart, secondPart] = boltClass.split('.').map(Number);
  const rm = firstPart ? firstPart * 100 : 0;
  const re = firstPart && secondPart ? firstPart * secondPart * 10 : 0;

  const presets = [
    { label: 'M6×1,0', d: '6', p: '1.0' },
    { label: 'M8×1,25', d: '8', p: '1.25' },
    { label: 'M10×1,5', d: '10', p: '1.5' },
    { label: 'M12×1,75', d: '12', p: '1.75' },
    { label: 'M12×1,5 (drobny)', d: '12', p: '1.5' },
    { label: 'M14×1,5 (koła)', d: '14', p: '1.5' },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800">
        <Wrench className="w-5 h-5 text-orange-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
            Kalkulator Warsztatowy: Wiertło pod gwint i Klasa Śruby
          </h4>
          <p className="text-xs text-slate-400">
            Interaktywne narzędzie pomocnicze do zadań egzaminacyjnych PKM
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="text-xs font-medium text-slate-300">Szybki wybór gwintu:</div>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setDiameter(preset.d);
                  setPitch(preset.p);
                }}
                className={`px-2.5 py-1 text-xs font-mono rounded border ${
                  diameter === preset.d && pitch === preset.p
                    ? 'bg-orange-500 text-white border-orange-500 font-semibold'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Średnica gwintu d [mm]
              </label>
              <input
                type="number"
                step="1"
                min="2"
                max="36"
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Skok gwintu P [mm]
              </label>
              <input
                type="number"
                step="0.25"
                min="0.25"
                max="6"
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded p-3 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Wymagana średnica wiertła (d - P):</div>
              <div className="text-xs text-slate-500 font-mono">
                {d} mm - {p} mm
              </div>
            </div>
            <div className="text-xl font-bold font-mono text-orange-400">
              Ø {drillSize} mm
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="text-xs font-medium text-slate-300">
            Dekoder klasy wytrzymałości śruby:
          </div>
          <div className="flex gap-2">
            {['5.8', '8.8', '10.9', '12.9'].map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setBoltClass(cls)}
                className={`flex-1 py-1.5 text-xs font-mono rounded border ${
                  boltClass === cls
                    ? 'bg-sky-600 text-white border-sky-500 font-semibold'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                Klasa {cls}
              </button>
            ))}
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded p-3 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Wytrzymałość na rozciąganie (Rm):</span>
              <span className="font-mono font-semibold text-sky-400">{rm} MPa</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Granica plastyczności (Re):</span>
              <span className="font-mono font-semibold text-orange-400">{re} MPa</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-700/70">
              Wzór: Rm = {firstPart} × 100 = {rm} MPa | Re = {firstPart} × {secondPart} × 10 = {re} MPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OhmCalculator() {
  const [voltage, setVoltage] = useState('12');
  const [powerOrRes, setPowerOrRes] = useState('55');
  const [mode, setMode] = useState('power'); // 'power' or 'resistance'

  const u = parseFloat(voltage) || 0;
  const val = parseFloat(powerOrRes) || 0;

  let current = 0;
  let resistance = 0;
  let power = 0;

  if (mode === 'power' && u > 0 && val > 0) {
    power = val;
    current = power / u;
    resistance = u / current;
  } else if (mode === 'resistance' && u > 0 && val > 0) {
    resistance = val;
    current = u / resistance;
    power = u * current;
  }

  const fuseRatings = [5, 7.5, 10, 15, 20, 25, 30, 40];
  const recommendedFuse =
    current > 0 ? fuseRatings.find((f) => f >= current * 1.25) || '> 40' : '—';

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800">
        <Calculator className="w-5 h-5 text-orange-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
            Kalkulator Prawa Ohma i Doboru Bezpiecznika
          </h4>
          <p className="text-xs text-slate-400">
            Oblicz prąd I [A], rezystancję R [Ω] oraz moc odbiornika P [W]
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-6 space-y-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setMode('power');
                setPowerOrRes('55');
              }}
              className={`flex-1 py-1.5 px-2 text-xs rounded border ${
                mode === 'power'
                  ? 'bg-sky-600 text-white border-sky-500 font-medium'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              Znam moc P [W] (np. żarówka)
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('resistance');
                setPowerOrRes('4');
              }}
              className={`flex-1 py-1.5 px-2 text-xs rounded border ${
                mode === 'resistance'
                  ? 'bg-sky-600 text-white border-sky-500 font-medium'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              Znam opór R [Ω] (np. cewka)
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Napięcie zasilania U [V]
              </label>
              <input
                type="number"
                step="0.1"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {mode === 'power' ? 'Moc odbiornika P [W]' : 'Rezystancja R [Ω]'}
              </label>
              <input
                type="number"
                step="0.5"
                value={powerOrRes}
                onChange={(e) => setPowerOrRes(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 grid grid-cols-3 gap-2.5 bg-slate-800/90 p-3.5 rounded border border-slate-700">
          <div className="text-center p-2 bg-slate-900/70 rounded">
            <div className="text-[11px] text-slate-400">Natężenie (I)</div>
            <div className="text-base font-bold font-mono text-orange-400 mt-0.5">
              {current > 0 ? `${current.toFixed(2)} A` : '—'}
            </div>
          </div>
          <div className="text-center p-2 bg-slate-900/70 rounded">
            <div className="text-[11px] text-slate-400">Rezystancja (R)</div>
            <div className="text-base font-bold font-mono text-sky-400 mt-0.5">
              {resistance > 0 ? `${resistance.toFixed(2)} Ω` : '—'}
            </div>
          </div>
          <div className="text-center p-2 bg-slate-900/70 rounded">
            <div className="text-[11px] text-slate-400">Min. bezpiecznik</div>
            <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
              {recommendedFuse !== '—' ? `${recommendedFuse} A` : '—'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BatteryChecker() {
  const [restingV, setRestingV] = useState(12.65);
  const [capacityAh, setCapacityAh] = useState(60);

  let statusText = '';
  let statusColor = '';
  let density = '';

  if (restingV >= 12.6) {
    statusText = '100% naładowania – akumulator w pełni sprawny';
    statusColor = 'text-emerald-400';
    density = '1,28 g/cm³';
  } else if (restingV >= 12.4) {
    statusText = 'ok. 75% naładowania – stan dobry (zalecane profilaktyczne doładowanie)';
    statusColor = 'text-sky-400';
    density = '1,24 g/cm³';
  } else if (restingV >= 12.1) {
    statusText = 'ok. 50% naładowania – WYMAGANE ŁADOWANIE prostownikiem';
    statusColor = 'text-orange-400';
    density = '1,20 g/cm³';
  } else {
    statusText = 'Głębokie rozładowanie (<25%) – ryzyko zasiarczenia płyt i zamarznięcia!';
    statusColor = 'text-red-400';
    density = '< 1,15 g/cm³';
  }

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800">
        <BatteryCharging className="w-5 h-5 text-orange-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
            Symulator Diagnostyki Akumulatora 12 V
          </h4>
          <p className="text-xs text-slate-400">
            Sprawdź interpretację napięcia spoczynkowego i oblicz prąd ładowania 10-godzinnego
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Zmierzone napięcie spoczynkowe:</span>
            <span className="font-mono font-bold text-orange-400">
              {restingV.toFixed(2)} V
            </span>
          </div>
          <input
            type="range"
            min="11.5"
            max="12.9"
            step="0.05"
            value={restingV}
            onChange={(e) => setRestingV(parseFloat(e.target.value))}
            className="w-full accent-orange-500 cursor-pointer"
          />
          <div className="bg-slate-800 p-3 rounded border border-slate-700 space-y-1">
            <div className={`text-xs font-semibold ${statusColor}`}>{statusText}</div>
            <div className="text-xs text-slate-400">
              Odpowiadająca gęstość elektrolitu: <span className="font-mono text-white">{density}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <label className="block text-xs text-slate-300">
            Pojemność znamionowa akumulatora C₂₀ [Ah]:
          </label>
          <div className="flex gap-2">
            {[45, 60, 74, 100].map((ah) => (
              <button
                key={ah}
                type="button"
                onClick={() => setCapacityAh(ah)}
                className={`flex-1 py-1 text-xs font-mono rounded border ${
                  capacityAh === ah
                    ? 'bg-sky-600 text-white border-sky-500 font-semibold'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {ah} Ah
              </button>
            ))}
          </div>
          <div className="bg-slate-800 p-3 rounded border border-slate-700 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Zalecany prąd ładowania (0,1 × C₂₀):
            </div>
            <div className="text-lg font-mono font-bold text-sky-400">
              {(capacityAh * 0.1).toFixed(1)} A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ObdDecoder() {
  const [code, setCode] = useState('P0115');

  const clean = code.toUpperCase().trim();
  const letter = clean[0] || 'P';
  const stdDigit = clean[1] || '0';
  const subDigit = clean[2] || '1';

  const systemMap = {
    P: 'Powertrain – Układ napędowy (silnik i skrzynia biegów)',
    C: 'Chassis – Podwozie (układ ABS, ESP, zawieszenie, układ kierowniczy)',
    B: 'Body – Nadwozie (poduszki powietrzne Airbag, klimatyzacja, oświetlenie)',
    U: 'Network – Komunikacja sieciowa (magistrala CAN / LIN między sterownikami)'
  };

  const stdMap = {
    '0': 'Kod ustandaryzowany międzynarodowo (ISO/SAE – identyczny w każdej marce)',
    '1': 'Kod specyficzny producenta pojazdu (OEM)',
    '2': 'Kod ustandaryzowany lub specyficzny (zależnie od podgrupy)',
    '3': 'Kod zarezerwowany / wspólny'
  };

  const subMap = {
    '0': 'Ogólny układ sterowania i emisji',
    '1': 'Pomiar dawki paliwa i powietrza (MAF, MAP, ECT, IAT, sonda lambda)',
    '2': 'Obwody wtryskiwaczy i pompy paliwa',
    '3': 'Układ zapłonowy, czujnik wału/wałka i wypadanie zapłonów (Misfire)',
    '4': 'Dodatkowe układy kontroli emisji spalin (EGR, katalizator, DPF, EVAP)',
    '5': 'Regulacja prędkości jazdy, biegu jałowego i wejścia pomocnicze',
    '6': 'Wewnętrzne obwody sterownika ECU i sygnały wyjściowe',
    '7': 'Układ przeniesienia napędu / skrzynia biegów',
    '8': 'Układ przeniesienia napędu (obwody dodatkowe)'
  };

  const sampleCodes = [
    { c: 'P0115', label: 'P0115 (Czujnik temp. ECT)' },
    { c: 'P0301', label: 'P0301 (Wypadanie zapłonu cyl. 1)' },
    { c: 'C0035', label: 'C0035 (Czujnik ABS LP)' },
    { c: 'B0100', label: 'B0100 (Obwód Airbag)' },
    { c: 'U0100', label: 'U0100 (Brak komunikacji z ECU)' }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800">
        <Cpu className="w-5 h-5 text-orange-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
            Interaktywny Dekoder Struktury Kodów DTC (OBD-II)
          </h4>
          <p className="text-xs text-slate-400">
            Wpisz 5-znakowy kod usterki lub wybierz przykład, aby rozszyfrować jego budowę
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {sampleCodes.map((item) => (
          <button
            key={item.c}
            type="button"
            onClick={() => setCode(item.c)}
            className={`px-2.5 py-1 text-xs font-mono rounded border ${
              clean === item.c
                ? 'bg-orange-500 text-white border-orange-500 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        <div className="md:col-span-4">
          <label className="block text-xs text-slate-400 mb-1">
            Kod DTC (np. P0300, C0035):
          </label>
          <input
            type="text"
            maxLength={5}
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-lg font-mono font-bold tracking-widest text-orange-400 uppercase focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="md:col-span-8 bg-slate-800/80 border border-slate-700 rounded p-3.5 space-y-2 text-xs">
          <div>
            <span className="font-mono font-bold text-orange-400 mr-2">[{letter}]</span>
            <span className="text-slate-200">
              {systemMap[letter] || 'Nieznany prefiks (użyj litery P, C, B lub U)'}
            </span>
          </div>
          <div>
            <span className="font-mono font-bold text-sky-400 mr-2">[{stdDigit}]</span>
            <span className="text-slate-300">
              {stdMap[stdDigit] || 'Cyfra typu standardu (0–3)'}
            </span>
          </div>
          <div>
            <span className="font-mono font-bold text-emerald-400 mr-2">[{subDigit}]</span>
            <span className="text-slate-300">
              {subMap[subDigit] || 'Podgrupa funkcyjna układu'}
            </span>
          </div>
          <div>
            <span className="font-mono font-bold text-slate-300 mr-2">
              [{clean.slice(3, 5) || '00'}]
            </span>
            <span className="text-slate-400">
              Indywidualny numer elementu i rodzaj usterki obwodu (zwarcie/przerwa/zakres)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AcPressureSimulator() {
  const [scenario, setScenario] = useState('normal');

  const scenarios = {
    normal: {
      label: 'Układ sprawny (20–25°C)',
      lp: '1,8 – 2,3 bar',
      hp: '11,0 – 15,0 bar',
      status: 'Prawidłowa praca obiegu chłodniczego',
      color: 'text-emerald-400',
      diagnosis:
        'Ciśnienie niskie (LP) i wysokie (HP) w normie. Sprężarka tłoczy prawidłowo, zawór rozprężny dławi czynnik, a wentylator skraplacza odbiera ciepło.'
    },
    low_gas: {
      label: 'Zbyt mało czynnika',
      lp: '0,6 – 1,1 bar (Za niskie)',
      hp: '6,0 – 8,5 bar (Za niskie)',
      status: 'Niedobór czynnika chłodniczego w układzie',
      color: 'text-orange-400',
      diagnosis:
        'Oba ciśnienia (LP i HP) są wyraźnie zaniżone. Słaba wydajność chłodzenia z nawiewów. Wymagany odzysk, próba szczelności (azotem/wodorem lub UV) i napełnienie wagowe.'
    },
    fan_fail: {
      label: 'Brak chłodzenia skraplacza',
      lp: '2,8 – 3,5 bar (Za wysokie)',
      hp: '22,0 – 28,0 bar (Krytycznie wysokie!)',
      status: 'Przegrzanie skraplacza / nadmierne ciśnienie HP',
      color: 'text-red-400',
      diagnosis:
        'Gwałtowny wzrost ciśnienia HP powyżej 20 bar! Przyczyna: niedziałający wentylator skraplacza, zabrudzone lamele chłodnicy klimatyzacji lub przepełnienie układu czynnikiem.'
    },
    clogged_txv: {
      label: 'Zatkany zawór rozprężny / osuszacz',
      lp: '< 0,2 bar (Podciśnienie!)',
      hp: '7,0 – 16,0 bar',
      status: 'Brak przepływu przez element dławiący (zator)',
      color: 'text-amber-400',
      diagnosis:
        'Strona LP schodzi w podciśnienie (poniżej 0 bar), ponieważ sprężarka wysysa czynnik z parownika, a zatkany lub oblodzony zawór rozprężny (TXV) nie dopuszcza nowej porcji cieczy.'
    },
    bad_comp: {
      label: 'Uszkodzona sprężarka / zawór sterujący',
      lp: '4,5 – 5,5 bar (Za wysokie)',
      hp: '5,0 – 6,5 bar (Za niskie)',
      status: 'Brak tłoczenia (ciśnienia LP i HP niemal równe)',
      color: 'text-red-400',
      diagnosis:
        'Ciśnienie LP jest zbyt wysokie, a HP zbyt niskie (zbliżone do ciśnienia statycznego ~5–6 bar). Uszkodzony elektrozawór sterujący pojemnością sprężarki, zerwane sprzęgło zrywalne lub zużyte płytki zaworowe.'
    }
  };

  const current = scenarios[scenario];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800">
        <Gauge className="w-5 h-5 text-orange-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
            Symulator Manometrów Stacji Klimatyzacji (LP / HP)
          </h4>
          <p className="text-xs text-slate-400">
            Wybierz scenariusz pomiarowy na pracującym silniku i odczytaj interpretację ciśnień
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {Object.entries(scenarios).map(([key, item]) => (
          <button
            key={key}
            type="button"
            onClick={() => setScenario(key)}
            className={`px-2.5 py-1.5 text-xs rounded border cursor-pointer ${
              scenario === key
                ? 'bg-orange-500 text-white border-orange-500 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-5 grid grid-cols-2 gap-3">
          <div className="bg-sky-950/60 border border-sky-700/70 rounded-lg p-3 text-center">
            <div className="text-[11px] font-mono uppercase text-sky-300">
              Manometr LP (Niebieski)
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-sky-400 mt-1">
              {current.lp}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Strona ssawna (niskie)</div>
          </div>

          <div className="bg-red-950/50 border border-red-700/70 rounded-lg p-3 text-center">
            <div className="text-[11px] font-mono uppercase text-red-300">
              Manometr HP (Czerwony)
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-red-400 mt-1">
              {current.hp}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Strona tłoczna (wysokie)</div>
          </div>
        </div>

        <div className="md:col-span-7 bg-slate-800/80 border border-slate-700 rounded-lg p-3.5 space-y-1.5">
          <div className={`text-xs font-bold uppercase ${current.color}`}>
            {current.status}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{current.diagnosis}</p>
        </div>
      </div>
    </div>
  );
}

export function NtcAndCanSimulator() {
  const [tempC, setTempC] = useState(20);
  const [canState, setCanState] = useState('ok');

  // Approximate automotive NTC curve (e.g. Bosch ECT sensor)
  const getNtcValues = (t) => {
    if (t <= -20) return { r: '15 000 Ω (15 kΩ)', u: '4,55 V' };
    if (t <= 0) return { r: '5 800 Ω (5,8 kΩ)', u: '3,85 V' };
    if (t <= 20) return { r: '2 500 Ω (2,5 kΩ)', u: '2,80 V' };
    if (t <= 40) return { r: '1 180 Ω (1,18 kΩ)', u: '1,85 V' };
    if (t <= 60) return { r: '600 Ω (0,6 kΩ)', u: '1,15 V' };
    if (t <= 80) return { r: '320 Ω (0,32 kΩ)', u: '0,68 V' };
    return { r: '185 Ω (0,19 kΩ)', u: '0,42 V' };
  };

  const ntc = getNtcValues(tempC);

  const canStates = {
    ok: {
      title: 'Sprawna magistrala CAN (2 × 120 Ω równolegle)',
      ohm: '60 Ω',
      desc: 'Oba rezystory terminujące (120 Ω w ECU i 120 Ω w liczniku/BCM) są połączone równolegle: Rz = 120 / 2 = 60 Ω.'
    },
    open_one: {
      title: 'Przerwa w jednym terminatorze / odpięty sterownik końcowy',
      ohm: '120 Ω',
      desc: 'W obwodzie pozostał tylko jeden rezystor terminujący 120 Ω. Drugi moduł końcowy jest odłączony lub ma przerwaną wiązkę.'
    },
    short: {
      title: 'Zwarcie linii CAN-High z linią CAN-Low',
      ohm: '0,2 – 1,5 Ω',
      desc: 'Przewody skrętki CAN-H i CAN-L są zwarte ze sobą. Komunikacja w całej gałęzi sieci jest całkowicie zablokowana (błędy U0xxx).'
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800">
        <Thermometer className="w-5 h-5 text-orange-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
            Symulator Czujnika NTC (ECT) oraz Pomiaru Magistrali CAN
          </h4>
          <p className="text-xs text-slate-400">
            Sprawdź charakterystykę termistora NTC i rezystancję terminacji CAN-BUS (piny 6 i 14 OBD)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Temperatura płynu chłodzącego (NTC):</span>
            <span className="font-mono font-bold text-orange-400">{tempC} °C</span>
          </div>
          <input
            type="range"
            min="-20"
            max="100"
            step="20"
            value={tempC}
            onChange={(e) => setTempC(parseInt(e.target.value, 10))}
            className="w-full accent-orange-500 cursor-pointer"
          />
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
              <div className="text-[11px] text-slate-400">Rezystancja czujnika NTC:</div>
              <div className="text-sm font-mono font-bold text-sky-400 mt-0.5">
                {ntc.r}
              </div>
            </div>
            <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
              <div className="text-[11px] text-slate-400">Napięcie na wtyczce (z ECU):</div>
              <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">
                {ntc.u}
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-400">
            Zasada NTC: wraz ze wzrostem temperatury rezystancja oraz napięcie sygnałowe <strong>maleją</strong>.
          </p>
        </div>

        <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="text-xs text-slate-300 font-medium">
            Pomiar omomierzem między CAN-H (pin 6) a CAN-L (pin 14):
          </div>
          <div className="flex gap-1.5">
            {[
              { id: 'ok', label: '60 Ω (Sprawna)' },
              { id: 'open_one', label: '120 Ω (Przerwa)' },
              { id: 'short', label: '~0 Ω (Zwarcie)' }
            ].map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setCanState(b.id)}
                className={`flex-1 py-1.5 px-2 text-xs font-mono rounded border cursor-pointer ${
                  canState === b.id
                    ? 'bg-sky-600 text-white border-sky-500 font-semibold'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="bg-slate-800 p-3 rounded border border-slate-700 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-white">
                {canStates[canState].title}
              </span>
              <span className="font-mono font-bold text-orange-400 text-sm">
                {canStates[canState].ohm}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {canStates[canState].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const EQUIVALENT_SYSTEMS = {
  gdi_turbo: {
    title: 'Wtrysk bezpośredni benzyny i turbodoładowanie (ZI)',
    description:
      'Systemy bezpośredniego wtrysku benzyny do komory spalania pod wysokim ciśnieniem (150–350 bar), niemal zawsze łączone z turbosprężarką (downsizing) oraz filtrem cząstek stałych GPF/OPF:',
    items: [
      {
        brand: 'Grupa VAG (VW, Audi, Škoda, Seat)',
        acronym: 'FSI / TSI / TFSI',
        models: 'Golf, Octavia, Passat, Audi A3/A4/A6 (1.0 TSI, 1.4/1.5 TSI, 1.8/2.0 TSI EA888)',
        details: 'FSI – wolnossący wtrysk bezpośredni; TSI/TFSI – wtrysk bezpośredni z turbosprężarką (historycznie 1.4 Twincharger miał też kompresor mechaniczny).'
      },
      {
        brand: 'BMW',
        acronym: 'TwinPower Turbo / HPI',
        models: 'Seria 1, 3 (F30/G20), 5 (G30), X3/X5 (silniki B38 1.5 R3, B48 2.0 R4, B58 3.0 R6)',
        details: 'Łączy wtrysk bezpośredni High Precision Injection, turbosprężarkę TwinScroll oraz układ Valvetronic i Double-VANOS.'
      },
      {
        brand: 'Mercedes-Benz',
        acronym: 'CGI (Charged Gasoline Injection)',
        models: 'Klasa A, C (W204–W206), E (W212–W214) – silniki M274, M264, M254 2.0 R4, M256 3.0 R6',
        details: 'Wielokrotny wtrysk bezpośredni piezoelektryczny lub elektromagnetyczny, często wspierany miękką hybrydą 48V EQ Boost (ISG).'
      },
      {
        brand: 'Stellantis (Peugeot, Citroën, Opel, Fiat, Alfa)',
        acronym: 'PureTech / THP / GSE FireFly / GME',
        models: 'Peugeot 208/308/3008 (1.2 PureTech EB2, 1.6 THP EP6), Fiat Tipo/500X (1.0/1.3 GSE), Alfa Giulia (2.0 GME)',
        details: 'W 1.2 PureTech (generacje I–II) stosowano pasek rozrządu w kąpieli olejowej; w 3. generacji Hybrid zastosowano łańcuch rozrządu.'
      },
      {
        brand: 'Ford',
        acronym: 'EcoBoost',
        models: 'Fiesta, Focus, Mondeo, Kuga (1.0 EcoBoost R3, 1.5 EcoBoost, 2.0/2.3 EcoBoost)',
        details: 'Bezpośredni wtrysk paliwa, zmienne fazy Ti-VCT i turbosprężarka o niskiej bezwładności; w części jednostek mieszany wtrysk PFDI (pośredni + bezpośredni).'
      },
      {
        brand: 'Toyota / Lexus',
        acronym: 'D-4 / D-4S (Direct Injection 4-Stroke)',
        models: 'Corolla, RAV4, Camry, Yaris GR, Lexus IS/NX (2.0 M20A-FKS, 2.5 A25A-FXS)',
        details: 'System D-4S posiada DWA wtryskiwacze na każdy cylinder (1 pośredni do kolektora + 1 bezpośredni do komory), co zapobiega osadzaniu nagaru na zaworach dolotowych!'
      },
      {
        brand: 'Renault / Nissan / Dacia',
        acronym: 'TCe / DIG-T',
        models: 'Clio, Megane, Captur, Qashqai (1.0 TCe, 1.2 TCe H5Ft, 1.3 TCe H5Ht)',
        details: 'Jednostka 1.3 TCe (opracowana wspólnie z Mercedesem – M282) posiada trójkątną głowicę Delta i natrysk plazmowy gładzi cylindrów (Bore Spray Coating).'
      },
      {
        brand: 'Mazda',
        acronym: 'Skyactiv-G / e-Skyactiv X (SPCCI)',
        models: 'Mazda 3, Mazda 6, CX-5, CX-30 (2.0 i 2.5 Skyactiv-G, 2.0 Skyactiv-X)',
        details: 'Skyactiv-G ma rekordowy dla benzyny stopień sprężania 14,0:1 bez turbosprężarki; Skyactiv-X łączy zapłon iskrowy z samoczynnym (SPCCI) i kompresorem.'
      }
    ]
  },
  common_rail: {
    title: 'Silniki wysokoprężne (Diesel ZS) – Common Rail i Pompowtryskiwacze',
    description:
      'Oznaczenia handlowe silników o zapłonie samoczynnym z bezpośrednim wtryskiem oleju napędowego pod wysokim ciśnieniem (1600–2700 bar):',
    items: [
      {
        brand: 'Grupa VAG (VW, Audi, Škoda, Seat)',
        acronym: 'TDI (VP / PD / CR)',
        models: 'Passat, Golf, Octavia, Audi A4/A6 (1.9 TDI VP/PD, 1.6 TDI, 2.0 TDI CR EA189/EA288, 3.0 V6 TDI)',
        details: '3 generacje historyczne: 1) Pompa rozdzielaczowa VP37 (np. 1.9 TDI 90/110 KM), 2) Pompowtryskiwacze PD napędzane z wałka rozrządu (do 2050 bar), 3) Współczesny Common Rail (CR).'
      },
      {
        brand: 'Stellantis: Fiat / Alfa Romeo & PSA',
        acronym: 'JTD / MultiJet / HDi / BlueHDi',
        models: 'Alfa 156/159/Giulia (1.9 JTD, 1.6/2.0/2.2 MultiJet), Peugeot 308/508 (1.5/2.0 BlueHDi)',
        details: 'Fiat/Alfa Romeo w 1997 r. (Alfa 156 1.9 JTD) jako pierwsi na świecie wprowadzili Common Rail do aut osobowych! W PSA układy FAP korzystały z płynu katalitycznego Eolys.'
      },
      {
        brand: 'BMW',
        acronym: 'd (TwinPower Turbo Diesel)',
        models: '320d, 520d, 530d, X3, X5 (rodziny M47, N47, B47 2.0d R4 oraz M57, N57, B57 3.0d R6)',
        details: 'W silnikach serii N47/N57 oraz B47/B57 łańcuchowy napęd rozrządu umieszczony jest z tyłu silnika – od strony koła zamachowego i skrzyni biegów!'
      },
      {
        brand: 'Mercedes-Benz',
        acronym: 'CDI / BlueTEC / d',
        models: 'Klasa C 220d, Klasa E 220d/300d, Sprinter (OM646, OM651 2.1 CDI, OM654 2.0d, OM656 3.0 R6)',
        details: 'W silniku OM651 napęd rozrządu stanowi kombinacja kół zębatych i krótkiego łańcucha z tyłu bloku; nowoczesny OM654 ma aluminiowy blok z powłoką Nanoslide i stalowe tłoki.'
      },
      {
        brand: 'Ford',
        acronym: 'TDCi / EcoBlue',
        models: 'Focus, Mondeo, Kuga, Transit (1.5/2.0 TDCi Duratorq, 2.0 EcoBlue)',
        details: 'Starsze jednostki 1.6 i 2.0 TDCi powstały we współpracy z koncernem PSA (odpowiedniki HDi). Nowsza rodzina 2.0 EcoBlue posiada pasek rozrządu pracujący w kąpieli olejowej.'
      },
      {
        brand: 'Renault / Nissan / Dacia',
        acronym: 'dCi (Direct Common-rail Injection)',
        models: 'Clio, Megane, Duster, Qashqai, Trafic (1.5 dCi K9K, 1.6 dCi R9M, 2.0 dCi M9R)',
        details: 'Silnik 1.5 dCi (K9K) to jeden z najpopularniejszych diesli świata (stosowany też w Mercedesach A180d/Citan jako OM607/OM608).'
      },
      {
        brand: 'Toyota / Honda / Hyundai-Kia / Opel',
        acronym: 'D-4D / i-DTEC / CRDi / CDTI',
        models: 'Toyota Avensis/RAV4 (2.0/2.2 D-4D), Honda Civic/CR-V (1.6/2.2 i-DTEC), Kia Ceed/Sportage (1.6 CRDi), Opel Insignia (2.0 CDTI)',
        details: 'Wszystkie te oznaczenia oznaczają turbodoładowane silniki wysokoprężne z zasobnikowym układem wtryskowym Common Rail.'
      }
    ]
  },
  vvt_vvl: {
    title: 'Zmienne fazy rozrządu (VVT) i zmienny wznios zaworów (VVL)',
    description:
      'Systemy sterujące kątem wyprzedzenia otwarcia wałków rozrządu (wariatory faz) oraz wysokością skoku (wzniosu) zaworów:',
    items: [
      {
        brand: 'Honda',
        acronym: 'VTEC / i-VTEC',
        models: 'Civic, Accord, CR-V, Type-R (silniki serii B, K20, R18, L15B)',
        details: 'Skokowa zmiana profilu krzywki! Na wale rozrządu znajduje się dodatkowa, wysoka krzywka wysokich obrotów. Powyżej ~4500 obr./min ciśnienie oleju przesuwa sworzeń spinający dźwigienki zaworowe.'
      },
      {
        brand: 'BMW (oraz PSA/Mini 1.6 VTi)',
        acronym: 'VANOS + Valvetronic',
        models: 'Seria 1, 3, 5 (N42, N46, N52, B48, B58) oraz Peugeot/Citroën/Mini 1.6 VTi (EP6)',
        details: 'VANOS płynnie zmienia fazy wałków rozrządu, natomiast Valvetronic za pomocą silniczka krokowego i wałka mimośrodowego z dźwigniami pośrednimi zmienia wznios zaworów dolotowych od 0,2 do 9,9 mm (zastępuje przepustnicę!).'
      },
      {
        brand: 'Fiat / Alfa Romeo / Jeep (Stellantis)',
        acronym: 'MultiAir / TwinAir',
        models: 'Alfa Romeo Giulietta/Mito/Giulia, Fiat Punto/500X/Tipo (0.9 TwinAir, 1.4 MultiAir, 2.0 GME, 1.3 GSE)',
        details: 'Elektrohydrauliczny napęd zaworów dolotowych! Krzywka wałka naciska tłoczek komory olejowej. Jeśli elektrozawór jest zamknięty, olej działa jak sztywny popychacz; otwarcie elektrozaworu upuszcza olej i zawór zamyka się wcześniej.'
      },
      {
        brand: 'Grupa VAG (Audi / VW) & Porsche',
        acronym: 'AVS (Audi Valvelift) / ACT / VarioCam Plus',
        models: 'Audi A4/A5/A6 2.0 TFSI, VW Golf/Passat 1.4/1.5 TSI ACT, Porsche 911',
        details: 'Na wałku rozrządu osadzone są przesuwne tuleje z dwoma zarysami krzywek (lub krzywka „zerowa” do odłączania cylindrów ACT). Elektromagnetyczny trzpień wchodzi w spiralny rowek i przesuwa tuleję wzdłuż wałka.'
      },
      {
        brand: 'Toyota / Lexus',
        acronym: 'VVT-i / Dual VVT-i / VVT-iE / Valvematic',
        models: 'Yaris, Corolla, Auris, Avensis, RAV4 (1.6/1.8 Valvematic 1ZR/2ZR-FAE, 2.5 Hybrid)',
        details: 'VVT-i to hydrauliczny wariator faz; VVT-iE wykorzystuje silnik elektryczny do zmiany faz już na zimnym silniku; Valvematic płynnie zmienia wznios zaworów dolotowych.'
      },
      {
        brand: 'Ford / Volvo / Mazda',
        acronym: 'Ti-VCT / S-VT',
        models: 'Ford Focus, Fiesta, Mondeo (1.6 Ti-VCT, 1.0/1.5 EcoBoost)',
        details: 'Twin Independent Variable Camshaft Timing – niezależna, płynna regulacja kątowa zarówno wałka dolotowego, jak i wylotowego za pomocą hydraulicznych kół zmiennych faz.'
      }
    ]
  },
  esp_dsc: {
    title: 'Systemy stabilizacji toru jazdy (ESP) i kontroli trakcji (ASR)',
    description:
      'Każdy producent samochodów stosuje własny skrót handlowy na elektroniczny układ stabilizacji toru jazdy (chroniący przed poślizgiem bocznym) oraz układ zapobiegający buksowaniu kół przy ruszaniu:',
    items: [
      {
        brand: 'Mercedes-Benz, Grupa VAG, Stellantis, Hyundai/Kia',
        acronym: 'ESP / ESC + ASR / TCS',
        models: 'Wszystkie modele osobowe i dostawcze',
        details: 'ESP (Electronic Stability Program – nazwa zastrzeżona przez Bosch i Mercedes) lub ESC (Electronic Stability Control) + ASR (Acceleration Slip Regulation).'
      },
      {
        brand: 'BMW oraz Mazda',
        acronym: 'DSC (Dynamic Stability Control) + DTC',
        models: 'BMW Serii 1–8, X1–X7 oraz Mazda 2, 3, 6, CX-5',
        details: 'DSC to pełna stabilizacja toru jazdy; przycisk DTC (Dynamic Traction Control w BMW) włącza tryb dopuszczający kontrolowany uślizg kół napędowych (np. przy ruszaniu w głębokim śniegu).'
      },
      {
        brand: 'Toyota / Lexus',
        acronym: 'VSC (Vehicle Stability Control) + TRC',
        models: 'Yaris, Corolla, RAV4, Hilux, Lexus IS/RX',
        details: 'VSC stabilizuje tor jazdy w zakręcie, a TRC (Traction Control) zapobiega poślizgowi kół podczas przyspieszania.'
      },
      {
        brand: 'Honda',
        acronym: 'VSA (Vehicle Stability Assist)',
        models: 'Civic, Accord, CR-V, Jazz, HR-V',
        details: 'System integrujący funkcję ABS, kontrolę trakcji TCS oraz przeciwdziałanie podsterowności i nadsterowności.'
      },
      {
        brand: 'Alfa Romeo, Subaru, Nissan, Infiniti',
        acronym: 'VDC (Vehicle Dynamic Control)',
        models: 'Alfa 159/Giulia/Stelvio, Subaru Forester/Outback, Nissan Qashqai',
        details: 'W Alfa Romeo współpracuje z elektroniczną blokadą dyferencjału Q2 i selektorem DNA.'
      },
      {
        brand: 'Porsche oraz Volvo',
        acronym: 'PSM (Porsche) / DSTC (Volvo)',
        models: 'Porsche 911, Cayenne, Macan | Volvo S60, V70, XC60, XC90',
        details: 'PSM = Porsche Stability Management; DSTC = Dynamic Stability and Traction Control.'
      }
    ]
  },
  awd_4x4: {
    title: 'Układy napędu na cztery koła (4x4 / AWD) według marek',
    description:
      'Konstrukcja napędu 4x4 zależy od ułożenia silnika (poprzeczne vs wzdłużne) i determinuje procedury holowania oraz badania na rolkach SKP:',
    items: [
      {
        brand: 'Audi / Volkswagen / Škoda / Seat (VAG)',
        acronym: 'quattro (Torsen / Ultra) oraz 4Motion (Haldex)',
        models: 'Audi A3/TT, VW Golf R/Passat/Tiguan, Škoda Octavia/Superb (Haldex) vs Audi A4/A6/Q5/Q7 (Torsen)',
        details: 'UWAGA! W autach VAG z silnikiem POPRZECZNYM (A3, Golf, Octavia, Tiguan) napęd quattro/4Motion wykorzystuje dołączane sprzęgło wielopłytkowe HALDEX przy tylnym moście (wymiana oleju i czyszczenie sitka pompy co 30–60 tys. km!). W Audi z silnikiem WZDŁUŻNYM (A4, A6, A8) stosowany jest stały napęd z samoblokującym centralnym mechanizmem różnicowym TORSEN (lub quattro ultra ze sprzęgłami kłowymi).'
      },
      {
        brand: 'BMW',
        acronym: 'xDrive',
        models: 'Seria 3, 5, X1, X3, X5',
        details: 'W klasycznych modelach wzdłużnych skrzynia rozdzielcza (ATC) przekazuje domyślnie większość momentu na tył (np. 40:60), dołączając przód wielopłytkowym sprzęgłem sterowanym serwomotorem. Bardzo wrażliwy na różnice obwodu opon między osiami!'
      },
      {
        brand: 'Mercedes-Benz',
        acronym: '4MATIC',
        models: 'Klasa A/CLA/GLA (dołączany) oraz Klasa C/E/S/GLC/GLE (stały planetarny)',
        details: 'W modelach kompaktowych (poprzecznych) tył dołączany elektrohydraulicznie; w modelach wzdłużnych centralny planetarny mechanizm różnicowy (np. podział 45:55 lub 31:69).'
      },
      {
        brand: 'Subaru',
        acronym: 'Symmetrical AWD (S-AWD)',
        models: 'Impreza, Forester, Outback, XV/Crosstrek',
        details: 'Wzdłużnie umieszczony płaski silnik Boxer + całkowicie symetryczny układ półosi o równej długości (brak znoszenia na kierownicy przy przyspieszaniu).'
      },
      {
        brand: 'Toyota / Lexus (Hybrydy)',
        acronym: 'AWD-i / E-Four',
        models: 'RAV4 Hybrid, Yaris Cross AWD-i, Lexus NX/RX',
        details: 'Brak wału napędowego między przodem a tyłem! Tylna oś jest napędzana całkowicie niezależnym, dodatkowym silnikiem elektrycznym (MGR) sterowanym przez komputer hybrydowy.'
      }
    ]
  },
  suspension_oem: {
    title: 'Specyficzne układy zawieszenia i skrętne tylne osie według marek',
    description:
      'Nietypowe konstrukcje zawieszeń, o które często pojawiają się pytania diagnostyczne i warsztatowe:',
    items: [
      {
        brand: 'Citroën',
        acronym: 'Hydropneumatyka (Hydractive) / PHC',
        models: 'Xantia, XM, C5 (I–II oraz X7), C6 | C4 Cactus, C5 Aircross (PHC)',
        details: 'Zamiast klasycznych sprężyn i amortyzatorów zastosowano metalowe SFERY podzielone membraną (w górnej części sprężony azot jako element sprężysty, w dolnej płyn hydrauliczny LHM zielony lub syntetyczny LDS pomarańczowy przetłaczany przez zaworki tłumiące). Zapewnia stały prześwit niezależnie od obciążenia! Przed podniesieniem C5 X7 na podnośniku kolumnowym należy ustawić zawieszenie w górnym położeniu serwisowym i odkręcić korek zbiornika LDS!'
      },
      {
        brand: 'Audi / Volkswagen (wzdłużny układ napędu)',
        acronym: 'Zawieszenie czterowahaczowe przednie',
        models: 'Audi A4 (B5–B9), Audi A6 (C5–C8), Audi A8, VW Passat B5/B5 FL',
        details: 'Każde przednie koło prowadzą 4 oddzielne wahacze aluminiowe (2 górne i 2 dolne: nośny oraz prowadzący). Sworznie dwóch górnych wahaczy spina w zwrotnicy długa śruba pozioma M10×100 (słynąca z zapiekania się korozyjnego w zwrotnicy).'
      },
      {
        brand: 'Peugeot / Citroën / Renault',
        acronym: 'Tylna belka na drążkach skrętnych',
        models: 'Peugeot 206, 306, Partner, Citroën Berlingo, Saxo, Xsara, Renault Kangoo I, Megane I',
        details: 'Rolę sprężyn śrubowych pełnią poprzeczne pręty ze stali sprężynowej pracujące na skręcanie, a wahacze wleczone obracają się na łożyskach igiełkowych wewnątrz czopów belki (zużycie uszczelniaczy powoduje pochylenie kół w „negatyw” /\\).'
      },
      {
        brand: 'Ford',
        acronym: 'Control Blade (wielowahaczowe tylne)',
        models: 'Ford Focus (MK1, MK2, MK3, MK4), Mondeo, C-Max, Kuga',
        details: 'Niezależne zawieszenie tylne z szerokim, podatnym wzdłużnie wahaczem wleczonym (płaskownikiem „ostrze”) oraz trzema wahaczami poprzecznymi (z mimośrodową regulacją geometrii tylnej osi).'
      },
      {
        brand: 'Mercedes-Benz & Grupa VAG',
        acronym: 'AIRMATIC (Mercedes) / DCC (VW) / ADS (Audi)',
        models: 'Mercedes Klasy E, S, GLE, GLS | VW Passat, Arteon, Tiguan, Golf',
        details: 'AIRMATIC łączy miechy pneumatyczne z adaptacyjnym tłumieniem ADS; DCC w grupie VAG zmienia twardość amortyzatorów za pomocą proporcjonalnego elektrozaworu sterowanego prądem PWM.'
      },
      {
        brand: 'Renault / BMW / Audi / Mercedes',
        acronym: '4Control (Układ czterech kół skrętnych – AWS)',
        models: 'Renault Laguna III, Talisman, Megane IV RS, Espace V | BMW Serii 5/7 (Integral Active Steering)',
        details: 'Przy małych prędkościach (do ~50–60 km/h) tylne koła skręcają w stronę PRZECIWNĄ do przednich (zmniejszenie średnicy zawracania), a przy dużych prędkościach w TĘ SAMĄ stronę co przednie (stabilizacja zmiany pasa ruchu).'
      }
    ]
  },
  transmissions: {
    title: 'Automatyczne i dwusprzęgłowe skrzynie biegów według marek',
    description:
      'Rozróżnienie skrzyń dwusprzęgłowych (DCT), hydrokinetycznych planetarnych (AT) oraz bezstopniowych (CVT / e-CVT):',
    items: [
      {
        brand: 'Grupa VAG (VW, Audi, Škoda, Seat)',
        acronym: 'DSG / S-tronic (DCT) | Tiptronic (AT) | Multitronic (CVT)',
        models: 'DQ200 (7-biegowa suche sprzęgła do 250 Nm), DQ250 (6b mokra), DQ381 (7b mokra), DQ500 (7b mokra), DL501 (Audi wzdłużna)',
        details: 'DSG (VW/Škoda/Seat) oraz S-tronic (Audi) to dwusprzęgłowe skrzynie zautomatyzowane (jedno sprzęgło obsługuje biegi nieparzyste 1-3-5-7, drugie parzyste 2-4-6-R). Tiptronic to klasyczny automat hydrokinetyczny (zwykle ZF 6HP/8HP), a Multitronic to skrzynia bezstopniowa z łańcuchem wariatora.'
      },
      {
        brand: 'BMW',
        acronym: 'Steptronic (ZF 8HP / Aisin) | M-DCT (DKG)',
        models: 'Seria 1–8, X1–X7 (8-biegowa skrzynia planetarna ZF 8HP z przekładnią hydrokinetyczną)',
        details: 'Skrzynia ZF 8HP uznawana jest za wzór trwałości i szybkości działania wśród klasycznych automatów hydrokinetycznych (zalecana wymiana oleju z miską-filtrem co 60–80 tys. km).'
      },
      {
        brand: 'Mercedes-Benz',
        acronym: '7G-Tronic / 9G-Tronic (AT) | 7G-DCT / 8G-DCT',
        models: 'Klasa C, E, S, GLC, GLE (9G-Tronic 725.0) | Klasa A, B, CLA, GLA (dwusprzęgłowe DCT)',
        details: 'Skrzynie 5G (722.6), 7G (722.9) i 9G-Tronic to własne konstrukcje planetarne Mercedesa ze sprzęgłem hydrokinetycznym i blokadą Lock-up.'
      },
      {
        brand: 'Ford / Renault / Alfa Romeo / Porsche / Hyundai-Kia',
        acronym: 'PowerShift (Ford) / EDC (Renault) / TCT (Alfa) / PDK (Porsche)',
        models: 'Focus, Mondeo (PowerShift Getrag 6DCT450/250), Megane/Captur (EDC), Giulietta (TCT), Porsche 911 (PDK)',
        details: 'Wszystkie te nazwy oznaczają dwusprzęgłowe skrzynie biegów (DCT – Dual Clutch Transmission).'
      },
      {
        brand: 'Toyota / Lexus (Napęd hybrydowy HSD)',
        acronym: 'e-CVT (Przekładnia planetarna rozdziału mocy)',
        models: 'Yaris Hybrid, Corolla Hybrid, C-HR, RAV4, Prius',
        details: 'UWAGA! Skrzynia e-CVT w hybrydach Toyoty NIE POSIADA żadnych pasów ani stożków wariatora jak zwykłe CVT, ani tarcz sprzęgłowych! To niezniszczalna mechaniczna przekładnia planetarna łącząca silnik spalinowy z dwoma maszynami elektrycznymi MG1 i MG2.'
      }
    ]
  }
};

const BRAND_CATALOG = [
  {
    id: 'vag',
    name: 'Grupa VAG (VW, Audi, Škoda, Seat)',
    country: 'Niemcy / Czechy / Hiszpania',
    diagnosticTool: 'ODIS Service / VCDS (VAG-COM)',
    engines: [
      {
        code: '1.0 / 1.4 / 1.5 TSI (EA211 / EA211 evo)',
        type: 'Benzynowy R3/R4 DOHC 12V/16V, wtrysk bezpośredni (do 350 bar), turbosprężarka',
        features: 'Napęd rozrządu paskiem zębatym o długiej żywotności; zintegrowany z głowicą kolektor wylotowy chłodzony cieczą; w wersji 1.4/1.5 TSI ACT odłączanie 2 środkowych cylindrów (nr 2 i 3); w 1.5 TSI cykl Millera i turbosprężarka VTG.'
      },
      {
        code: '1.8 / 2.0 TSI / TFSI (EA888 Gen 1–4)',
        type: 'Benzynowy R4 DOHC 16V z łańcuchem rozrządu',
        features: 'Dwa wałki wyrównoważające w bloku, w Gen 3 podwójny układ wtryskowy (MPI + FSI) oraz Audi Valvelift System (AVS), elektronicznie sterowany termostat z pompą cieczy w jednym module.'
      },
      {
        code: '1.9 TDI (VP37 / PD) oraz 2.0 TDI CR (EA189 / EA288)',
        type: 'Wysokoprężny R4 (historycznie pompa VP i pompowtryskiwacze PD, obecnie Common Rail)',
        features: 'Napęd rozrządu paskiem zębatym, korbowody łamane ze skośnym podziałem stopy i trapezową główką; mała pompa oleju napędzana w kąpieli (paskiem lub zabierakiem sześciokątnym w starszych 2.0 TDI).'
      },
      {
        code: 'VR6 (2.8 / 3.2 / 3.6 FSI) oraz 2.5 TFSI R5 (EA855)',
        type: 'Wąskokątny 6-cylindrowy (kąt 15° lub 10,6°) z JEDNĄ wspólną głowicą | Rzędowy 5-cylindrowy (kolejność zapłonów 1-2-4-5-3)',
        features: 'Unikalna konstrukcja VR6 łącząca zalety silnika rzędowego (jedna głowica) i widlastego (krótki blok mieszczący się poprzecznie w Golfie R32 czy Passacie B6/B8).'
      }
    ],
    chassisAndBrakes:
      'Kolumna MacPhersona + wielowahacz z tyłu (Golf/Octavia/Passat) lub czterowahaczowe przednie zawieszenie z aluminium w Audi A4/A6/A8. Tylne zaciski hamulcowe z elektrycznym hamulcem postojowym EPB (wymagane cofanie silniczków testerem diagnostycznym – nastawy podstawowe kanał 007/006 lub funkcja UDS).'
  },
  {
    id: 'bmw',
    name: 'BMW (oraz Mini)',
    country: 'Niemcy',
    diagnosticTool: 'ISTA+ (Rheingold) / ISTA-P / INPA',
    engines: [
      {
        code: 'B48 (2.0 R4) oraz B58 (3.0 R6) TwinPower Turbo',
        type: 'Modułowe silniki benzynowe (pojemność pojedynczego cylindra zawsze ~500 cm³)',
        features: 'Układ Valvetronic (zmienny wznios zaworów dolotowych zastępujący przepustnicę) + Double-VANOS, turbosprężarka TwinScroll, zamknięty kadłub (Closed-Deck) z natryskiem łukowym LDS, rozrząd łańcuchowy od strony skrzyni biegów.'
      },
      {
        code: 'N47 / B47 (2.0d R4) oraz N57 / B57 (3.0d R6)',
        type: 'Wysokoprężne Common Rail (piezoelektryczne lub elektromagnetyczne wtryskiwacze Bosch)',
        features: 'Łańcuch rozrządu umieszczony z tyłu silnika (od strony koła zamachowego – wymiana wymaga demontażu skrzyni biegów lub silnika), klapy wirowe (Swirl Flaps) w kolektorze dolotowym.'
      }
    ],
    chassisAndBrakes:
      'Przednie zawieszenie z podwójnym przegubem kulowym wahaczy dolnych (rozdzielony wahacz nośny i reakcyjny dla precyzji układu kierowniczego) oraz pięciowahaczowa oś tylna (HA5). Klasyczny hamulec postojowy często realizowany jako bębnowy mechanizm Duo-Servo wewnątrz tarczo-bębna tylnej osi (w nowszych modelach G-serii elektryczny EPB).'
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    country: 'Niemcy',
    diagnosticTool: 'XENTRY Diagnosis / Star Diagnosis (DAS)',
    engines: [
      {
        code: 'OM651 (2.1 CDI) oraz OM654 (2.0d R4)',
        type: 'Wysokoprężne Common Rail R4 16V (często z doładowaniem dwustopniowym Bi-Turbo)',
        features: 'W OM654 zastosowano aluminiowy kadłub z lustrzaną powłoką tulei Nanoslide oraz stalowe tłoki ze schodkową komorą spalania (mniejsze rozszerzanie cieplne i niższe tarcie niż tłoków aluminiowych!).'
      },
      {
        code: 'M274 / M264 / M254 (2.0 R4) oraz M256 (3.0 R6 ISG)',
        type: 'Benzynowe turbodoładowane z instalacją 48V (EQ Boost)',
        features: 'W silniku M256 wyeliminowano całkowicie pasek osprzętu! Rozrusznik-alternator ISG jest na wale korbowym, a pompa wody oraz sprężarka klimatyzacji i elektryczny kompresor (eZV) zasilane są elektrycznie z sieci 48V.'
      }
    ],
    chassisAndBrakes:
      'Wielowahaczowe zawieszenie przednie i pięciodrążkowe tylne, opcjonalnie pneumatyka AIRMATIC. Charakterystyczny dla starszych modeli (W203, W204, W211, W212) nożny hamulec postojowy zwalniany dźwignią ręczną pod deską rozdzielczą oraz bębnowy mechanizm Duo-Servo w tarczy tylnej.'
  },
  {
    id: 'stellantis',
    name: 'Stellantis (Peugeot, Citroën, Opel, Fiat, Alfa Romeo)',
    country: 'Francja / Włochy / Niemcy',
    diagnosticTool: 'DiagBox (PSA) / wiTECH 2.0 / MultiECUScan (FCA) / GDS2 (Opel)',
    engines: [
      {
        code: '1.2 PureTech (EB2) oraz 1.5 / 2.0 BlueHDi (DV5 / DW10)',
        type: 'Benzynowy R3 Turbo (EB2) | Wysokoprężny Common Rail R4 (BlueHDi)',
        features: 'W silniku 1.2 PureTech (EB2) pasek zębaty rozrządu pracuje w kąpieli olejowej – podczas każdego przeglądu specjalnym przymiarem kontroluje się szerokość paska przez wlew oleju (spuchnięty pasek zatyka smok pompy oleju!). Układy FAP w HDi wykorzystują dodatek katalityczny Eolys oraz AdBlue (SCR).'
      },
      {
        code: '1.4 MultiAir / T-Jet, 1.0/1.3 GSE FireFly oraz 1.6 / 2.0 MultiJet (JTDm)',
        type: 'Włoskie konstrukcje benzynowe i wysokoprężne Fiat Powertrain (FPT)',
        features: 'W modułach MultiAir/UniAir brak klasycznego wałka rozrządu dla zaworów dolotowych (sterowanie elektrohydrauliczne przez olej silnikowy – wymagana czystość filtra siatkowego modułu MultiAir i ściśle przepisany olej 0W30!).'
      }
    ],
    chassisAndBrakes:
      'W autach miejskich i kompaktowych PSA/Fiat dominuje MacPherson z przodu i belka skrętna z tyłu (w starszych modelach Peugeot/Citroën belka na drążkach skrętnych z łożyskami igiełkowymi oraz zawieszenie hydropneumatyczne Hydractive w C5/C6). W Alfa Romeo Giulia/Stelvio – dwuwahaczowe przednie zawieszenie AlfaLink i układ hamulcowy Brake-by-Wire (IBS Continental).'
  },
  {
    id: 'toyota_honda_mazda',
    name: 'Japońskie: Toyota, Honda, Mazda, Subaru',
    country: 'Japonia',
    diagnosticTool: 'Toyota Techstream (GTS) / Honda HDS / Mazda IDS / Subaru SSM4',
    engines: [
      {
        code: 'Toyota 1.8 / 2.0 / 2.5 Hybrid Dynamic Force (2ZR-FXE / M20A-FXS / A25A-FXS)',
        type: 'Benzynowe R4 pracujące w obiegu Atkinsona (sprawność cieplna aż do 41%!)',
        features: 'W cyklu Atkinsona zawory dolotowe zamykają się z dużym opóźnieniem w suwie sprężania (realny suw pracy jest dłuższy niż suw sprężania). Brak tradycyjnego rozrusznika, alternatora i paska osprzętu – ich rolę pełnią generatory MG1/MG2 w przekładni planetarnej e-CVT oraz elektryczna pompa cieczy.'
      },
      {
        code: 'Honda 1.5 / 2.0 i-VTEC (L15B / K20C) oraz Mazda 2.0 Skyactiv-G / Skyactiv-X',
        type: 'Wysokoobrotowe i wysokosprawne jednostki z łańcuchem rozrządu',
        features: 'System VTEC przełącza dźwigienki na krzywkę o wysokim wzniosie przy wysokich obrotach; Mazda Skyactiv-G wykorzystuje kolektor wydechowy 4-2-1 i wgłębienia w denku tłoka, aby osiągnąć stopień sprężania 14,0:1 na benzynie PB95.'
      },
      {
        code: 'Subaru 2.0 / 2.5 Boxer (EJ20, EJ25, FB20, FA24) oraz Mazda Wankel 13B',
        type: 'Silniki przeciwsobne (Boxer 180°) oraz silnik z tłokiem obrotowym (Wankla)',
        features: 'W silniku Boxer głowice znajdują się po bokach bloku tuż przy podłużnicach (dwa długie paski lub łańcuchy rozrządu); w silniku Wankla (Mazda RX-8 / MX-30 R-EV) trójkątny tłok obraca się mimośrodowo w epitrochoidalnym cylindrze bez zaworów i korbowodów!'
      }
    ],
    chassisAndBrakes:
      'Wysoka trwałość zawieszeń MacPherson / Double-Wishbone (Honda Accord/Civic) i Multi-Link. W napędach hybrydowych Toyoty/Hondy hamowanie odbywa się w pierwszej fazie rekuperacyjnie (silnikiem elektrycznym MG2 ładującym baterię HV), a zaciski hydrauliczne dołączają przy mocniejszym wciśnięciu pedału lub tuż przed zatrzymaniem.'
  },
  {
    id: 'ford_renault',
    name: 'Ford oraz Alians Renault–Nissan',
    country: 'USA / Niemcy / Francja / Japonia',
    diagnosticTool: 'Ford FDRS / IDS / FORScan | Renault CAN Clip / Nissan Consult',
    engines: [
      {
        code: 'Ford 1.0 EcoBoost (R3) / 1.5 EcoBoost / 2.0 EcoBlue',
        type: 'Turbodoładowane jednostki ZI oraz ZS z wtryskiem bezpośrednim',
        features: 'Zarówno w 1.0 EcoBoost (pierwszej generacji), jak i w dieslu 2.0 EcoBlue napęd rozrządu oraz napęd pompy oleju realizowany jest paskiem zębatym zanurzonym w oleju silnikowym (Wet Belt – bezwzględny wymóg stosowania oleju ze specyfikacją Ford WSS-M2C948-B!).'
      },
      {
        code: 'Renault 1.5 dCi (K9K), 1.3 TCe (H5Ht) oraz Nissan 1.5 / 2.0 VC-Turbo',
        type: 'Rozpowszechnione jednostki R3/R4 aliansu Renault-Nissan-Mitsubishi',
        features: 'Silnik Nissan VC-Turbo (Variable Compression) posiada wielodźwigniowy mechanizm korbowy z siłownikiem harmonicznym, który podczas jazdy zmienia wysokość GMP tłoka i stopień sprężania od 8,0:1 (pełne doładowanie) do 14,0:1 (niskie obciążenie).'
      }
    ],
    chassisAndBrakes:
      'W Fordach Focus/Mondeo/Kuga zastosowano wielowahaczowe tylne zawieszenie Control Blade zapewniające wzorową geometrię w zakręcie. W Renault (Laguna III, Megane IV, Talisman) spotyka się tylną oś skrętną 4Control z siłownikiem elektrycznym.'
  }
];

export function BrandSystemExplorer() {
  const [mode, setMode] = useState('systems');
  const [selectedSystem, setSelectedSystem] = useState('gdi_turbo');
  const [selectedBrandId, setSelectedBrandId] = useState('vag');

  const activeSystemGroup = EQUIVALENT_SYSTEMS[selectedSystem];
  const activeBrand = BRAND_CATALOG.find((b) => b.id === selectedBrandId) || BRAND_CATALOG[0];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg border border-slate-700 p-5 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <Wrench className="w-5 h-5 text-orange-400 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-400">
              Interaktywny Katalog Marek, Silników i Systemów Tożsamych (OEM)
            </h4>
            <p className="text-xs text-slate-400">
              Porównaj nazewnictwo handlowe tych samych układów u różnych producentów lub sprawdź specyfikę silników danej marki
            </p>
          </div>
        </div>

        <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 shrink-0">
          <button
            type="button"
            onClick={() => setMode('systems')}
            className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
              mode === 'systems'
                ? 'bg-orange-500 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Słownik systemów tożsamych
          </button>
          <button
            type="button"
            onClick={() => setMode('brands')}
            className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
              mode === 'brands'
                ? 'bg-sky-600 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Silniki i rozwiązania wg marek
          </button>
        </div>
      </div>

      {mode === 'systems' ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'gdi_turbo', label: 'Benzyna GDI / Turbo (TSI, CGI, EcoBoost)' },
              { id: 'common_rail', label: 'Diesel (TDI, CDI, BlueHDi, dCi, JTD)' },
              { id: 'vvt_vvl', label: 'Zmienne fazy / wznios (VTEC, Valvetronic, MultiAir)' },
              { id: 'esp_dsc', label: 'Stabilizacja toru jazdy (ESP, DSC, VSC, VSA)' },
              { id: 'awd_4x4', label: 'Napędy 4x4 (quattro, Haldex, xDrive, 4MATIC)' },
              { id: 'suspension_oem', label: 'Zawieszenia specyficzne (Hydractive, 4-wahacz, 4Control)' },
              { id: 'transmissions', label: 'Skrzynie biegów (DSG, ZF 8HP, 9G-Tronic, e-CVT)' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSystem(tab.id)}
                className={`px-2.5 py-1.5 text-xs rounded border cursor-pointer ${
                  selectedSystem === tab.id
                    ? 'bg-orange-500 text-white border-orange-500 font-semibold'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-3.5">
            <h5 className="text-sm font-bold text-white mb-1">{activeSystemGroup.title}</h5>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {activeSystemGroup.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {activeSystemGroup.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-700/90 rounded p-3 flex flex-col justify-between gap-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-slate-300">
                        {item.brand}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/40 text-orange-300 font-mono text-xs font-bold">
                        {item.acronym}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-sky-400 mb-1">
                      Modele: {item.models}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {BRAND_CATALOG.map((brand) => (
              <button
                key={brand.id}
                type="button"
                onClick={() => setSelectedBrandId(brand.id)}
                className={`px-3 py-1.5 text-xs rounded border cursor-pointer ${
                  selectedBrandId === brand.id
                    ? 'bg-sky-600 text-white border-sky-500 font-semibold'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-700">
              <div>
                <h5 className="text-base font-bold text-white">{activeBrand.name}</h5>
                <span className="text-xs text-slate-400">Kraj pochodzenia: {activeBrand.country}</span>
              </div>
              <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded text-xs">
                <span className="text-slate-400 mr-1.5">Interfejs serwisowy OEM:</span>
                <span className="font-mono font-bold text-emerald-400">
                  {activeBrand.diagnosticTool}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Reprezentatywne rodziny i kody silników:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeBrand.engines.map((eng, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 border border-slate-700/90 rounded p-3 space-y-1.5"
                  >
                    <div className="font-mono text-xs font-bold text-sky-400">
                      {eng.code}
                    </div>
                    <div className="text-[11px] font-medium text-slate-300">
                      {eng.type}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {eng.features}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border-l-4 border-sky-500 p-3 rounded-r text-xs text-slate-200 leading-relaxed">
              <span className="font-bold text-sky-400 uppercase block mb-0.5">
                Specyfika zawieszenia, układu napędowego i hamulcowego marki:
              </span>
              {activeBrand.chassisAndBrakes}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


