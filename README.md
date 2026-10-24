# MOT.05 Baza Wiedzy — Wirtualny Podręcznik Mechanika Pojazdów Samochodowych

Aplikacja internetowa typu **Baza Wiedzy** stworzona z myślą o uczniach szkół branżowych I stopnia oraz techników przygotowujących się do egzaminu zawodowego w kwalifikacji **MOT.05** (*Eksploatacja, diagnozowanie oraz naprawa układów mechanicznych i elektrycznych pojazdów samochodowych*).

## Główne funkcje

1. **Wyszukiwarka zagadnień (skrót `/`)** — błyskawiczne przeszukiwanie po słowach kluczowych, tytułach, parametrach technicznych oraz treściach procedur warsztatowych.
2. **Responsywna nawigacja**:
   - **Komputery (Desktop)** — czytelne menu boczne z podziałem na 5 działów głównych i 21 szczegółowych zagadnień.
   - **Telefony (Mobile)** — dolny pasek nawigacyjny z głównymi kategoriami, poziomy przełącznik zagadnień w wybranym dziale oraz wysuwany pełny spis treści.
3. **Bogaty obszar czytania**:
   - Pigułka wiedzy (synteza zagadnienia), czas czytania oraz waga tematyczna na egzaminie CKE.
   - Tabele parametrów technicznych, wzory obliczeniowe i procedury krok po kroku.
   - **6 interaktywnych kalkulatorów i symulatorów warsztatowych**:
     - Kalkulator doboru wiertła pod gwint ($d_w \approx d - P$) i klas wytrzymałości śrub ($8.8$, $10.9$, $12.9$),
     - Kalkulator Prawa Ohma ($I = U / R$), mocy elektrycznej ($P = U \cdot I$) i doboru bezpieczników,
     - Symulator oceny stanu naładowania akumulatora 12 V i prądu ładowania $0{,}1 \cdot C_{20}$,
     - Symulator czujnika temperatury NTC (ECT) oraz pomiaru rezystancji terminacji magistrali CAN ($60\ \Omega$),
     - Symulator manometrów stacji klimatyzacji (diagnostyka ciśnień LP i HP),
     - Dekoder 5-znakowych kodów usterek OBD-II / DTC (`P`, `C`, `B`, `U`).
   - Wyróżnione **Wskazówki egzaminacyjne CKE (MOT.05)** oraz interaktywne **Pytania kontrolne** pod każdym tematem.
   - Śledzenie postępu nauki (oznaczanie zagadnień jako *Opanowane* z zapisem w `localStorage`).

## Struktura wbudowanych kategorii i zagadnień (5 działów / 21 tematów)

- **Dział I: BHP i Ochrona Środowiska**
  - Bezpieczeństwo w warsztacie
  - Postępowanie z odpadami
  - PPOŻ
- **Dział II: Podstawy Konstrukcji Maszyn**
  - Rodzaje gwintów
  - Tolerancje i pasowania
  - Rysunek techniczny
- **Dział III: Elektrotechnika i Elektronika**
  - Prawo Ohma
  - Budowa akumulatora
  - Działanie alternatora
  - Układ rozruchu (Rozrusznik)
  - Czujniki i elektronika (ECU, CAN)
- **Dział IV: Budowa Pojazdów**
  - Rodzaje silników
  - Rodzaje korbowodów i układ korbowo-tłokowy
  - Układ rozrządu
  - Układ chłodzenia silnika
  - Układ klimatyzacji i wentylacji
  - Układy zawieszenia
  - Układy hamulcowe i systemy ABS/ESP
- **Dział V: Diagnostyka i Naprawa**
  - Obsługa oscyloskopu
  - Geometria kół
  - Odczyt kodów błędów (OBD)

## Uruchomienie aplikacji

```bash
# 1. Instalacja zależności
npm install

# 2. Uruchomienie serwera deweloperskiego (Vite)
npm run dev

# 3. Budowanie wersji produkcyjnej
npm run build
```
