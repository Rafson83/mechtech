import React, { useState } from 'react';
import { Calculator, Wrench, Cpu, BatteryCharging } from 'lucide-react';

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
