# MOT.05 Baza Wiedzy — Wirtualny Podręcznik Mechanika Pojazdów Samochodowych

Aplikacja internetowa typu **Baza Wiedzy** stworzona z myślą o uczniach szkół branżowych I stopnia oraz techników przygotowujących się do egzaminu zawodowego w kwalifikacji **MOT.05** (*Eksploatacja, diagnozowanie oraz naprawa układów mechanicznych i elektrycznych pojazdów samochodowych*).

## Główne funkcje

1. **Wyszukiwarka zagadnień (skrót `/`)** — błyskawiczne przeszukiwanie po słowach kluczowych, tytułach, parametrach technicznych oraz treściach procedur warsztatowych.
2. **Responsywna nawigacja**:
   - **Komputery (Desktop)** — czytelne menu boczne z podziałem na 5 działów głównych i 15 zagadnień.
   - **Telefony (Mobile)** — dolny pasek nawigacyjny z głównymi kategoriami, poziomy przełącznik zagadnień w wybranym dziale oraz wysuwany pełny spis treści.
3. **Bogaty obszar czytania**:
   - Pigułka wiedzy (synteza zagadnienia), czas czytania oraz waga tematyczna na egzaminie CKE.
   - Tabele parametrów technicznych, wzory obliczeniowe i procedury krok po kroku.
   - **Interaktywne kalkulatory warsztatowe** (Dobór wiertła pod gwint i klasa śruby, Kalkulator Prawa Ohma i bezpieczników, Symulator stanu naładowania akumulatora, Dekoder kodów OBD-II/DTC).
   - Wyróżnione **Wskazówki egzaminacyjne CKE (MOT.05)** oraz interaktywne **Pytania kontrolne** pod każdym tematem.
   - Śledzenie postępu nauki (oznaczanie zagadnień jako *Opanowane* z zapisem w `localStorage`).

## Struktura wbudowanych kategorii i zagadnień

- **Dział I: BHP i Ochrona Środowiska**
  - Bezpieczeństwo w warsztacie
  - Postępowanie z odpadami
  - PPOŻ
- **Dział II: Podstawy Konstrukcji Maszyn**
  - Rodzaje gwintów
  - Tolerancje i pasowania
  - Rysunek techniczny
- **Dział III: Elektrotechnika**
  - Prawo Ohma
  - Budowa akumulatora
  - Działanie alternatora
- **Dział IV: Budowa Pojazdów**
  - Układ rozrządu
  - Budowa zawieszenia
  - Układ hamulcowy
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
