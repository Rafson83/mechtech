export const CATEGORIES = [
  {
    id: 'bhp',
    name: 'BHP i Ochrona Środowiska',
    shortName: 'BHP',
    icon: 'ShieldAlert',
    code: 'DZIAŁ I',
    description: 'Zasady bezpiecznej pracy na stanowisku warsztatowym, gospodarka odpadami niebezpiecznymi oraz ochrona przeciwpożarowa.',
    topics: [
      {
        id: 'bezpieczenstwo-w-warsztacie',
        title: 'Bezpieczeństwo w warsztacie',
        subtitle: 'Organizacja stanowiska pracy, obsługa podnośników, środki ochrony indywidualnej (ŚOI) oraz praca przy układach wysokiego ryzyka.',
        readingTime: '6 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'bhp', 'warsztat', 'podnośnik', 'śoi', 'okulary ochronne', 'rękawice',
          'kanał rewizyjny', 'wentylacja', 'odciąg spalin', 'kobyłki', 'podpory', 'pierwsza pomoc'
        ],
        summary:
          'Bezpieczeństwo w warsztacie samochodowym stanowi fundament części praktycznej egzaminu MOT.05. Niezastosowanie środków ochrony indywidualnej lub nieprawidłowe podparcie pojazdu może skutkować natychmiastowym przerwaniem egzaminu.',
        sections: [
          {
            heading: '1. Środki Ochrony Indywidualnej (ŚOI)',
            content:
              'Przed przystąpieniem do jakichkolwiek prac obsługowo-naprawczych mechanik ma obowiązek dobrać środki ochrony adekwatne do wykonywanej czynności:',
            bullets: [
              'Odzież robocza i obuwie bezpieczne z podnoskiem stalowym lub kompozytowym (klasa S1P/S3) i podeszwą olejoodporną antypoślizgową.',
              'Okulary ochronne lub przyłbica – obowiązkowe podczas szlifowania, wiercenia, pracy z elektrolitem akumulatorowym, spuszczania płynów pod ciśnieniem oraz obsługi klimatyzacji.',
              'Rękawice ochronne (nitrylowe przy pracy z olejami i paliwami, kwasoodporne przy akumulatorach, mechaniczne przy układzie wydechowym i zawieszeniu).',
              'Ochronniki słuchu – przy pracy z kluczami udarowymi pneumatycznymi oraz szlifierkami (powyżej 85 dB).'
            ]
          },
          {
            heading: '2. Bezpieczna obsługa podnośników warsztatowych i dźwigników',
            content:
              'Praca pod podniesionym pojazdem wymaga bezwzględnego przestrzegania procedury podnoszenia i ryglowania mechanicznego:',
            steps: [
              'Ustaw pojazd osiowo między kolumnami podnośnika i zabezpiecz przed przetoczeniem.',
              'Rozmieść łapy podnośnika wyłącznie w fabrycznych punktach podparcia progów lub ramy określonych przez producenta pojazdu.',
              'Unieś pojazd na wysokość ok. 15–20 cm (tzw. próba stateczności) i sprawdź stabilność osadzenia łap poprzez delikatne zakołysanie nadwoziem.',
              'Podnieś pojazd na docelową wysokość roboczą i opuść go na zapadki (rygle bezpieczeństwa) mechaniczne lub pneumatyczne.',
              'W przypadku użycia podnośnika punktowego (tzw. „żaby” hydraulicznej) bezwzględnie podłóż atestowane kobyłki warsztatowe przed wsunięciem jakiejkolwiek części ciała pod auto.'
            ]
          },
          {
            heading: '3. Zagrożenia chemiczne, termiczne i spalinowe',
            content:
              'W pomieszczeniach zamkniętych warsztatu występują czynniki szkodliwe dla zdrowia, które należy eliminować u źródła:',
            table: {
              headers: ['Czynnik zagrożenia', 'Źródło w warsztacie', 'Wymagane działanie zapobiegawcze'],
              rows: [
                ['Tlenek węgla (CO) i tlenki azotu', 'Praca silnika spalinowego w hali', 'Bezwzględne podłączenie miejscowego wyciągu spalin na rurę wydechową'],
                ['Opary benzyny i rozpuszczalników', 'Mycie części, nieszczelny układ paliwowy', 'Wentylacja mechaniczna wywiewna (kratki przy podłodze), zakaz otwartego ognia'],
                ['Poparzenie gorącym płynem chłodzącym', 'Odkręcenie korka zbiorniczka wyrównawczego', 'Odczekanie do ostygnięcia silnika (<50°C), upuszczanie ciśnienia przez szmatkę'],
                ['Pył z okładzin ciernych (hamulce)', 'Przedmuchiwanie zacisków sprężonym powietrzem', 'Zakaz zdmuchiwania pyłu na sucho – stosować zmywacz do hamulców i wannę ociekową']
              ]
            }
          }
        ],
        examTip:
          'Na egzaminie praktycznym MOT.05 zawsze rozpocznij zadanie od założenia rękawic i okularów ochronnych (jeśli są na stanowisku) oraz sprawdzenia stabilności stanowiska. Nigdy nie uruchamiaj silnika bez założenia węża odciągu spalin!',
        quiz: [
          {
            question: 'Na jaką wysokość należy wstępnie unieść pojazd na podnośniku dwukolumnowym w celu wykonania próby stateczności podparcia?',
            options: [
              'Ok. 15–20 cm nad poziom posadzki',
              'Na pełną wysokość roboczą (180 cm)',
              'Tylko do momentu oderwania jednego koła od podłoża',
              'Na wysokość 100 cm bez sprawdzania punktów progowych'
            ],
            correctIndex: 0,
            explanation: 'Uniesienie kół na 15–20 cm pozwala bezpiecznie zweryfikować ułożenie nakładek gumowych w punktach fabrycznych i stabilność pojazdu bez ryzyka przewrócenia z dużej wysokości.'
          },
          {
            question: 'Dlaczego zabronione jest oczyszczanie zacisków i bębnów hamulcowych sprężonym powietrzem na sucho?',
            options: [
              'Ponieważ powoduje to uszkodzenie tłoczka zacisku',
              'Ze względu na wzbijanie szkodliwego dla dróg oddechowych pyłu ciernego',
              'Ponieważ sprężone powietrze obniża temperaturę wrzenia płynu DOT4',
              'Ponieważ powoduje rozmagnesowanie czujnika ABS'
            ],
            correctIndex: 1,
            explanation: 'Pył z klocków i szczęk hamulcowych zawiera metale ciężkie i drobne włókna drażniące pęcherzyki płucne. Czyszczenie wykonuje się metodą mokrą (zmywaczem do hamulców).'
          }
        ]
      },
      {
        id: 'postepowanie-z-odpadami',
        title: 'Postępowanie z odpadami',
        subtitle: 'Segregacja odpadów warsztatowych, kody odpadów niebezpiecznych BDO, przechowywanie olejów przepracowanych i płynów eksploatacyjnych.',
        readingTime: '5 min',
        examFrequency: 'Wysoka',
        keywords: [
          'odpady', 'bdo', 'olej przepracowany', 'płyn hamulcowy', 'akumulator',
          'filtry olejowe', 'sorbent', 'ekologia', 'ochrona środowiska', 'utylizacja', 'kody odpadów'
        ],
        summary:
          'Większość odpadów powstających podczas obsługi pojazdów samochodowych to odpady niebezpieczne (oznaczane gwiazdką * w katalogu odpadów). Ich mieszanie ze sobą lub wylewanie do kanalizacji jest surowo zabronione.',
        sections: [
          {
            heading: '1. Najważniejsze kody odpadów w warsztacie samochodowym',
            content:
              'Każdy odpad niebezpieczny musi być gromadzony w szczelnym, opisanym pojemniku odpornym na działanie danej substancji chemicznej i ewidencjonowany w systemie BDO:',
            table: {
              headers: ['Kod odpadu', 'Nazwa odpadu warsztatowego', 'Sposób magazynowania'],
              rows: [
                ['13 02 05* / 13 02 08*', 'Mineralne i syntetyczne oleje silnikowe, przekładniowe', 'Szczelne beczki na wannie wychwytowej (zakaz mieszania z płynem hamulcowym!)'],
                ['16 01 07*', 'Filtry olejowe', 'Metalowe lub plastikowe szczelne pojemniki z kratką ociekową'],
                ['16 01 13*', 'Płyny hamulcowe', 'Osobny, oznaczony kanister odporny na glikole'],
                ['16 01 14*', 'Płyny niezamarzające (chłodnicze zawierające glikol)', 'Szczelny zbiornik na płyny chłodnicze'],
                ['16 06 01*', 'Baterie i akumulatory ołowiowe', 'Specjalna kwasoodporna skrzynia paletowa z pokrywą'],
                ['15 02 02*', 'Czyściwo, szmaty i sorbenty zanieczyszczone olejami', 'Zamykany metalowy pojemnik niepalny']
              ]
            }
          },
          {
            heading: '2. Zasady postępowania w przypadku wycieku płynów eksploatacyjnych',
            content:
              'W razie rozlania oleju silnikowego, paliwa lub płynu chłodniczego na posadzkę warsztatową należy natychmiast wdrożyć procedurę neutralizacji:',
            steps: [
              'Zabezpiecz miejsce wycieku przed poślizgnięciem się pracowników i odetnij źródło dalszego wycieku.',
              'Posyp plamę mineralnym lub poliuretanowym sorbentem warsztatowym (zakaz stosowania trocin drewnianych ze względów PPOŻ!).',
              'Odczekaj, aż sorbent zwiąże substancję ropopochodną, a następnie zbierz go szczotką i szufelką.',
              'Zużyty sorbent umieść w szczelnym pojemniku na odpady niebezpieczne (kod 15 02 02*).',
              'Odtłuść posadzkę środkiem myjącym dopuszczonym do stosowania w warsztatach.'
            ]
          },
          {
            heading: '3. Czynniki chłodnicze z układów klimatyzacji (F-gazy)',
            content:
              'Zgodnie z przepisami o substancjach zubażających warstwę ozonową oraz fluorowanych gazach cieplarnianych:',
            bullets: [
              'Całkowity zakaz wypuszczania czynnika chłodniczego (R134a lub R1234yf) do atmosfery.',
              'Odciąganie czynnika może odbywać się wyłącznie za pomocą certyfikowanej stacji obsługi klimatyzacji do butli wewnętrznej urządzenia.',
              'Zużyty olej ze sprężarki klimatyzacji (PAG/POE) odseparowany przez stację trafia do dedykowanego pojemnika na zużyty olej syntetyczny.'
            ]
          }
        ],
        examTip:
          'Na egzaminie pisemnym MOT.05 często pojawia się pytanie o postępowanie z rozlanym olejem lub zużytym filtrem. Pamiętaj: zużyty olej, płyn hamulcowy i płyn chłodniczy zbieramy ZAWSZE do oddzielnych pojemników – ich zmieszanie uniemożliwia recykling rafineryjny!',
        quiz: [
          {
            question: 'Czym należy posypać plamę rozlanego oleju silnikowego na posadzce warsztatu?',
            options: [
              'Suchymi trocinami sosnowymi',
              'Sorbentem mineralnym (np. granulatem kalcynowanym)',
              'Piaskiem zmieszanym z rozpuszczalnikiem nitro',
              'Wapnem gaszonym i spłukać do kratki ściekowej'
            ],
            correctIndex: 1,
            explanation: 'Sorbent mineralny jest niepalny i skutecznie wiąże węglowodory. Trociny nasączone olejem stwarzają wysokie zagrożenie pożarowe (możliwy samozapłon).'
          },
          {
            question: 'Jak są oznaczane odpady niebezpieczne w europejskim i polskim katalogu odpadów (BDO)?',
            options: [
              'Sześciocyfrowym kodem zakończonym gwiazdką (*)',
              'Trzycyfrowym kodem poprzedzonym literą N',
              'Kolorem zielonym na etykiecie pojemnika',
              'Kodami zaczynającymi się wyłącznie od cyfr 99'
            ],
            correctIndex: 0,
            explanation: 'Gwiazdka (*) przy sześciocyfrowym kodzie odpadu (np. 16 01 07* – filtry olejowe) oznacza odpad klasyfikowany jako niebezpieczny.'
          }
        ]
      },
      {
        id: 'ppoz',
        title: 'PPOŻ (Ochrona Przeciwpożarowa)',
        subtitle: 'Grupy pożarów (A, B, C, D, F), dobór podręcznego sprzętu gaśniczego, strefy zagrożenia wybuchem podczas ładowania akumulatorów.',
        readingTime: '5 min',
        examFrequency: 'Wysoka',
        keywords: [
          'ppoż', 'gaśnica', 'pożar', 'grupy pożarów', 'proszkowa', 'śniegowa',
          'co2', 'wodór', 'mieszanina piorunująca', 'instalacja elektryczna', 'koc gaśniczy'
        ],
        summary:
          'W warsztacie samochodowym występują jednocześnie materiały łatwopalne stałe, ciecze ropopochodne (benzyna, oleje, rozpuszczalniki), gazy palne (LPG, CNG, wodór z akumulatorów) oraz urządzenia elektryczne pod napięciem.',
        sections: [
          {
            heading: '1. Klasyfikacja grup pożarów i dobór gaśnic',
            content:
              'Dobór niewłaściwego środka gaśniczego (np. wody do płonącego oleju lub instalacji pod napięciem) prowadzi do wyrzutu płonącej cieczy lub porażenia prądem:',
            table: {
              headers: ['Grupa pożaru', 'Rodzaj płonącego materiału (przykłady w warsztacie)', 'Zalecany typ gaśnicy'],
              rows: [
                ['Grupa A', 'Ciała stałe pochodzenia organicznego (tapicerka, opony, kartony, drewno)', 'Gaśnica proszkowa ABC, gaśnica pianowa AB'],
                ['Grupa B', 'Ciecze palne i substancje topiące się (benzyna, olej napędowy, rozpuszczalniki, oleje)', 'Gaśnica proszkowa ABC/BC, śniegowa (CO₂), pianowa AB, koc gaśniczy'],
                ['Grupa C', 'Gazy palne (propan-butan LPG, metan CNG, acetylen, wodór)', 'Gaśnica proszkowa ABC/BC (najpierw odciąć dopływ gazu!)'],
                ['Grupa D', 'Metale lekkie (stopy magnezu, glinu, sód, lit)', 'Specjalny proszek gaśniczy klasy D lub suchy piasek'],
                ['Urządzenia pod napięciem (do 1000 V)', 'Rozdzielnice warsztatowe, prostowniki, podnośniki, diagnostyka', 'Gaśnica śniegowa (CO₂) lub proszkowa (z zachowaniem min. 1 m odstępu)']
              ]
            }
          },
          {
            heading: '2. Gaśnica proszkowa (GP) a gaśnica śniegowa (GS)',
            content:
              'W hali warsztatowej najczęściej spotyka się dwa rodzaje gaśnic, które mają odmienne właściwości użytkowe:',
            bullets: [
              'Gaśnica proszkowa ABC (np. GP-6x): uniwersalna, gasi pożary ciał stałych, cieczy i gazów. Wadą proszku jest zanieczyszczenie elektroniki oraz działanie korozyjne na precyzyjne podzespoły.',
              'Gaśnica śniegowa (CO₂, np. GS-5x): zawiera skroplony dwutlenek węgla. Nie pozostawia żadnych śladów po użyciu – idealna do gaszenia szaf sterowniczych, komputerów diagnostycznych oraz komory silnika. Uwaga: podczas rozprężania dysza osiąga ok. -78°C (ryzyko odmrożenia dłoni przy chwyceniu poza uchwyt!).',
              'Koc gaśniczy z włókna szklanego: niezwykle skuteczny do tłumienia zarzewi ognia w komorze silnika lub płonącej odzieży na człowieku (odcina dostęp tlenu).'
            ]
          },
          {
            heading: '3. Zagrożenie wybuchem w akumulatorowni i przy układach paliwowych',
            content:
              'Szczególną ostrożność przeciwpożarową należy zachować podczas dwóch typowych czynności serwisowych:',
            bullets: [
              'Ładowanie akumulatorów kwasowo-ołowiowych: w końcowej fazie ładowania (gazowanie powyżej 14,4 V) wydziela się wodór i tlen, tworząc tzw. mieszaninę piorunującą (wybuchową przy stężeniu wodoru powyżej 4%). Pomieszczenie musi być wentylowane, a prostownik zawsze wyłączamy z sieci 230 V PRZED odpięciem żabek z klem akumulatora (aby uniknąć iskry!).',
              'Czynnik chłodniczy R1234yf: w przeciwieństwie do starszego R134a jest gazem umiarkowanie palnym (klasa A2L) – podczas prac w komorze silnika należy unikać otwartego ognia i gorących powierzchni kolektora.'
            ]
          }
        ],
        examTip:
          'Zapamiętaj kolejność przy odłączaniu prostownika po ładowaniu akumulatora: 1) Wyłącz prostownik wyłącznikiem głównym / z gniazdka 230 V, 2) Dopiero teraz odepnij przewody z biegunów akumulatora. Zapobiega to przeskokowi iskry i wybuchowi wodoru!',
        quiz: [
          {
            question: 'Która gaśnica najlepiej nadaje się do ugaszenia pożaru szafy sterowniczej lub urządzenia diagnostycznego pod napięciem bez ryzyka trwałego zanieczyszczenia elektroniki?',
            options: [
              'Gaśnica wodna mgłowa z dodatkiem soli',
              'Gaśnica śniegowa (CO₂)',
              'Hydrant wewnętrzny z prądownicą zwartą',
              'Gaśnica pianowa klasy A'
            ],
            correctIndex: 1,
            explanation: 'Dwutlenek węgla (CO₂) nie przewodzi prądu elektrycznego i po odparowaniu nie pozostawia żadnych osadów korozyjnych na płytkach drukowanych.'
          },
          {
            question: 'Do jakiej grupy pożarów zalicza się pożar rozlanej benzyny lub oleju silnikowego w warsztacie?',
            options: [
              'Grupa A (ciała stałe)',
              'Grupa B (ciecze palne i substancje topiące się)',
              'Grupa C (gazy palne)',
              'Grupa F (tłuszcze kuchenne)'
            ],
            correctIndex: 1,
            explanation: 'Ciecze palne (paliwa płynne, oleje, rozpuszczalniki, alkohole) należą do grupy pożarów B.'
          }
        ]
      }
    ]
  },
  {
    id: 'pkm',
    name: 'Podstawy Konstrukcji Maszyn',
    shortName: 'PKM',
    icon: 'Cog',
    code: 'DZIAŁ II',
    description: 'Połączenia gwintowe, układ tolerancji i pasowań ISO, pomiary warsztatowe oraz zasady czytania rysunku technicznego maszynowego.',
    topics: [
      {
        id: 'rodzaje-gwintow',
        title: 'Rodzaje gwintów',
        subtitle: 'Gwinty metryczne zwykłe i drobnozwojne, calowe, rurowe, trapezowe, dobór średnicy wiertła pod gwintowanie oraz klasy własności śrub.',
        readingTime: '8 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'gwint', 'metryczny', 'drobnozwojny', 'skok gwintu', 'wiertło pod gwint',
          'gwintownik', 'narzynka', 'grzebień do gwintów', 'klasa śruby', '8.8', '10.9', 'moment dokręcania'
        ],
        summary:
          'Połączenia gwintowe to najpowszechniejsze połączenia rozłączne w budowie samochodów. Mechanik musi bezbłędnie rozpoznawać oznaczenia gwintów (np. M12×1,5), mierzyć skok gwintu grzebieniem wzorcowym oraz obliczać średnicę wiertła pod gwintowanie.',
        interactiveTool: 'thread-calculator',
        sections: [
          {
            heading: '1. Podział i oznaczenia gwintów w motoryzacji',
            content:
              'W pojazdach europejskich i azjatyckich podstawowym standardem jest gwint metryczny ISO o kącie zarysu 60°:',
            table: {
              headers: ['Rodzaj gwintu', 'Przykładowe oznaczenie', 'Charakterystyka i zastosowanie w pojeździe'],
              rows: [
                ['Metryczny zwykły', 'M10 (domyślny skok P = 1,5 mm)', 'Ogólne połączenia śrubowe osprzętu silnika, nadwozia, wsporników'],
                ['Metryczny drobnozwojny', 'M12×1,5 lub M14×1,25', 'Mniejszy skok (podawany zawsze po znaku ×). Duża samohamowność – śruby kół, świece zapłonowe, układ kierowniczy i zawieszenie'],
                ['Calowy zunifikowany (UNC/UNF)', '3/8"-16 UNC', 'Pojazdy amerykańskie, złącza przewodów klimatyzacji i hydrauliki'],
                ['Rurowy walcowy (Whitwortha)', 'G 1/2"', 'Kąt zarysu 55°, instalacje pneumatyczne warsztatowe, korki spustowe'],
                ['Trapezowy symetryczny', 'Tr 24×5', 'Gwint pociągowy – śruby podnośników kolumnowych, ściągacze warsztatowe']
              ]
            }
          },
          {
            heading: '2. Dobór średnicy wiertła pod gwint wewnętrzny',
            content:
              'Przed nacięciem gwintu wewnętrznego gwintownikiem należy wywiercić otwór o średnicy mniejszej od średnicy znamionowej gwintu o wartość skoku P:',
            formula: {
              expression: 'd_w ≈ d - P',
              description: 'gdzie: d_w – średnica wiertła [mm], d – średnica znamionowa gwintu [mm], P – skok gwintu [mm]. Przykładowo dla gwintu M10 (P = 1,5 mm): d_w = 10 - 1,5 = 8,5 mm.'
            },
            table: {
              headers: ['Gwint metryczny zwykły', 'Skok gwintu P [mm]', 'Średnica wiertła d_w [mm]'],
              rows: [
                ['M6', '1,00', '5,0 mm'],
                ['M8', '1,25', '6,8 mm'],
                ['M10', '1,50', '8,5 mm'],
                ['M12', '1,75', '10,2 mm'],
                ['M14', '2,00', '12,0 mm'],
                ['M16', '2,00', '14,0 mm']
              ]
            }
          },
          {
            heading: '3. Klasy własności mechanicznych śrub (np. 8.8, 10.9, 12.9)',
            content:
              'Na łbie każdej śruby konstrukcyjnej wybite jest oznaczenie liczbowe składające się z dwóch liczb rozdzielonych kropką (np. 8.8 lub 10.9):',
            bullets: [
              'Pierwsza liczba pomnożona przez 100 określa minimalną wytrzymałość na rozciąganie Rm w MPa (N/mm²). Np. dla klasy 10.9: Rm = 10 × 100 = 1000 MPa.',
              'Iloczyn pierwszej i drugiej liczby pomnożony przez 10 określa minimalną granicę plastyczności Re w MPa. Np. dla klasy 10.9: Re = 10 × 9 × 10 = 900 MPa.',
              'W elementach odpowiedzialnych (jarzma zacisków hamulcowych, wahacze, koło zamachowe, głowica) wolno stosować wyłącznie śruby o klasie wytrzymałości równej oryginałowi (zwykle 10.9 lub 12.9).'
            ]
          }
        ],
        examTip:
          'W zadaniach egzaminacyjnych CKE bardzo często pytają o obliczenie granicy plastyczności śruby klasy 8.8 (Re = 8 × 8 × 10 = 640 MPa) oraz o średnicę wiertła pod gwint drobnozwojny, np. M12×1,25 (12 - 1,25 = 10,75 mm ≈ 10,8 mm).',
        quiz: [
          {
            question: 'Jaką średnicę wiertła należy dobrać, aby wykonać otwór pod gwint wewnętrzny M10 o skoku zwykłym P = 1,5 mm?',
            options: [
              '10,0 mm',
              '8,5 mm',
              '9,0 mm',
              '11,5 mm'
            ],
            correctIndex: 1,
            explanation: 'Zgodnie z wzorem warsztatowym d_w = d - P, dla gwintu M10 (P = 1,5 mm) średnica wiertła wynosi 10 - 1,5 = 8,5 mm.'
          },
          {
            question: 'Co oznacza zapis M12×1,5-6g w dokumentacji technicznej?',
            options: [
              'Gwint metryczny zewnętrzny drobnozwojny o średnicy 12 mm i skoku 1,5 mm',
              'Gwint metryczny wewnętrzny o długości 12 mm i średnicy 1,5 cm',
              'Gwint rurowy o 12 zwojach na cal',
              'Śrubę o średnicy 12 mm i klasie wytrzymałości 1.5'
            ],
            correctIndex: 0,
            explanation: 'Litera M oznacza gwint metryczny, 12 to średnica znamionowa w mm, 1,5 to skok drobnozwojny w mm (zwykły dla M12 wynosi 1,75 mm), a mała litera (6g) oznacza pole tolerancji gwintu zewnętrznego (śruby).'
          }
        ]
      },
      {
        id: 'tolerancje-i-pasowania',
        title: 'Tolerancje i pasowania',
        subtitle: 'Wymiar nominalny, odchyłki górna i dolna, tolerancja wymiaru, pasowania luźne, mieszane i ciasne (wciskowe) w mechanice pojazdowej.',
        readingTime: '7 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'tolerancja', 'pasowanie', 'odchyłka', 'luźne', 'ciasne', 'mieszane',
          'wałek', 'otwór', 'h7', 'g6', 'mikrometr', 'suwmiarka', 'średnicówka', 'luz montażowy'
        ],
        summary:
          'Żadnej części mechanicznej nie da się wykonać z absolutną dokładnością. Układ tolerancji i pasowań ISO określa dopuszczalne granice błędu wymiarowego oraz charakter współpracy dwóch łączonych elementów (otworu i wałka).',
        sections: [
          {
            heading: '1. Podstawowe pojęcia i wzory obliczeniowe',
            content:
              'Na rysunku wykonawczym obok wymiaru nominalnego (N) podawane są odchyłki graniczne (górna ES/es oraz dolna EI/ei). Duże litery dotyczą otworów, a małe litery dotyczą wałków:',
            formula: {
              expression: 'T = B - A = ES - EI',
              description: 'gdzie: T – tolerancja wymiaru (zawsze dodatnia!), B = N + ES – wymiar górny graniczny (maksymalny), A = N + EI – wymiar dolny graniczny (minimalny).'
            },
            bullets: [
              'Przykład: dla czopa wału korbowego o wymiarze Ø50 (-0,025 / -0,050) mm:',
              'Wymiar nominalny N = 50,000 mm',
              'Wymiar górny (maksymalny) B = 50,000 + (-0,025) = 49,975 mm',
              'Wymiar dolny (minimalny) A = 50,000 + (-0,050) = 49,950 mm',
              'Tolerancja wykonania T = 49,975 - 49,950 = 0,025 mm'
            ]
          },
          {
            heading: '2. Rodzaje pasowań w układzie stałego otworu (H)',
            content:
              'W budowie maszyn najczęściej stosuje się układ pasowań stałego otworu, w którym otwór podstawowy oznaczany jest literą H (jego odchyłka dolna EI = 0), a rodzaj pasowania uzyskuje się poprzez dobór odpowiedniego pola tolerancji wałka:',
            table: {
              headers: ['Rodzaj pasowania', 'Oznaczenie wałka (z otworem H7)', 'Przykładowy zapis', 'Zastosowanie w samochodzie'],
              rows: [
                ['Pasowanie luźne (ruchowe)', 'a – h (np. f7, g6, h6)', 'Ø45 H7/g6', 'Czopy wału korbowego w panewkach ślizgowych, tłok w cylindrze, popychacz zaworowy w prowadnicy'],
                ['Pasowanie mieszane', 'j – n (np. js6, k6, m6)', 'Ø30 H7/k6', 'Koła zębate przesuwne na wielowypuście, osadzanie łożysk tocznych pod umiarkowanym obciążeniem'],
                ['Pasowanie ciasne (wciskowe)', 'p – z (np. p6, r6, s6)', 'Ø62 H7/p6', 'Tuleje cylindrowe suche w kadłubie, gniazda zaworowe w głowicy, sworzeń tłokowy w główce korbowodu (montaż na gorąco)']
              ]
            }
          },
          {
            heading: '3. Przyrządy pomiarowe do weryfikacji wymiarów i pasowań',
            content:
              'Dobór narzędzia pomiarowego zależy od wielkości tolerancji badanego podzespołu:',
            bullets: [
              'Suwmiarka uniwersalna (dokładność 0,05 mm lub 0,02 mm) – pomiar grubości tarcz hamulcowych, głębokości bieżnika, długości śrub.',
              'Mikrometr zewnętrzny (dokładność 0,01 mm lub 0,001 mm) – pomiar średnic czopów wału korbowego, krzywek wałka rozrządu, płaszcza tłoka (pomiar w temperaturze odniesienia 20°C!).',
              'Średnicówka czujnikowa dwupunktowa z czujnikiem zegarowym (dokładność 0,01 mm) – pomiar owalizacji i stożkowatości gładzi cylindrów oraz otworów stopy korbowodu.'
            ]
          }
        ],
        examTip:
          'Szybka reguła na egzamin pisemny MOT.05: w zapisie pasowania ułamkowego np. Ø40 H7/f6 licznik (DUŻA litera H7) zawsze oznacza OTWÓR, a mianownik (mała litera f6) zawsze oznacza WAŁEK. Litery od „a” do „h” dają pasowanie luźne, a od „p” w górę – pasowanie ciasne (wciskowe).',
        quiz: [
          {
            question: 'Ile wynosi tolerancja wykonania T wałka o wymiarze Ø30 (+0,02 / -0,01) mm?',
            options: [
              '0,01 mm',
              '0,02 mm',
              '0,03 mm',
              '30,01 mm'
            ],
            correctIndex: 2,
            explanation: 'Tolerancja to różnica między odchyłką górną a dolną: T = es - ei = +0,02 - (-0,01) = 0,03 mm.'
          },
          {
            question: 'Jakim rodzajem pasowania jest połączenie oznaczone na rysunku jako Ø50 H7/s6?',
            options: [
              'Pasowaniem luźnym w układzie stałego wałka',
              'Pasowaniem ciasnym (wciskowym) w układzie stałego otworu',
              'Pasowaniem mieszanym bezwciskowym',
              'Połączeniem gwintowym drobnozwojnym'
            ],
            correctIndex: 1,
            explanation: 'Symbol H7 oznacza otwór podstawowy (układ stałego otworu), a mała litera „s” oznacza pole tolerancji wałka leżące powyżej wymiaru nominalnego, co daje pasowanie ciasne (wcisk).'
          }
        ]
      },
      {
        id: 'rysunek-techniczny',
        title: 'Rysunek techniczny',
        subtitle: 'Rzutowanie prostokątne europejskie (metoda E), rodzaje linii rysunkowych, przekroje, chropowatość powierzchni oraz rysunki złożeniowe.',
        readingTime: '6 min',
        examFrequency: 'Wysoka',
        keywords: [
          'rysunek techniczny', 'rzutowanie', 'przekrój', 'kreskowanie', 'linie rysunkowe',
          'chropowatość', 'ra', 'podziałka', 'rysunek złożeniowy', 'wykonawczy', 'tabliczka rysunkowa'
        ],
        summary:
          'Rysunek techniczny maszynowy to uniwersalny język dokumentacji serwisowej. Pozwala odczytać kształt części (rzuty i przekroje), wymagania wymiarowe, klasę chropowatości powierzchni obrabianych oraz kolejność montażu podzespołu.',
        sections: [
          {
            heading: '1. Rodzaje i zastosowanie linii rysunkowych (wg PN-EN ISO 128)',
            content:
              'Każdy typ i grubość linii na rysunku technicznym niesie ściśle określone znaczenie konstrukcyjne:',
            table: {
              headers: ['Rodzaj linii', 'Wygląd', 'Zastosowanie na rysunku maszynowym'],
              rows: [
                ['Ciągła gruba', '━━━━━━━━━━━━', 'Widoczne krawędzie i zarysy przedmiotów, wierzchołki zwojów gwintu'],
                ['Ciągła cienka', '────────────', 'Linie wymiarowe, pomocnicze linie wymiarowe, kreskowanie przekrojów, dno wrębów gwintu'],
                ['Kreskowa cienka', '- - - - - - - - - -', 'Niewidoczne (zasłonięte) krawędzie i zarysy wewnętrzne przedmiotu'],
                ['Punktowa cienka', '— · — · — · —', 'Osie symetrii, osie otworów, okręgi podziałowe kół zębatych i rozmieszczenia śrub'],
                ['Falista cienka / zygzakowa', '~~~~~~~~~~~~', 'Linie urwania lub przerwania widoku długiego przedmiotu (np. półosi) oraz granica półwidoku-półprzekroju']
              ]
            }
          },
          {
            heading: '2. Przekroje, kład i zasady kreskowania',
            content:
              'Aby uwidocznić wewnętrzną budowę części (np. kanały olejowe w bloku lub otwory pod łożyska w piaście), stosuje się przekroje:',
            bullets: [
              'Powierzchnie powstałe z przecięcia materiału płaszczyzną przekroju kreskuje się linią ciągłą cienką pod kątem 45° do osi symetrii lub głównego zarysu.',
              'Dwa sąsiadujące elementy na rysunku złożeniowym kreskuje się w przeciwnych kierunkach lub z innym zagęszczeniem linii.',
              'Ważna zasada: w przekroju podłużnym NIE kreskuje się pełnych wałków, osi, śrub, nitów, wpustów, klinów, kulek łożyskowych oraz żeber wzmacniających – rysuje się je w widoku!'
            ]
          },
          {
            heading: '3. Podziałki rysunkowe i oznaczenia chropowatości powierzchni',
            content:
              'Podziałka w tabliczce rysunkowej określa stosunek wymiarów na rysunku do rzeczywistych wymiarów przedmiotu:',
            bullets: [
              'Podziałka naturalna 1:1 – przedmiot narysowany w rzeczywistych rozmiarach.',
              'Podziałka pomniejszająca (np. 1:2, 1:5, 1:10) – rysunek jest mniejszy od przedmiotu rzeczywistego.',
              'Podziałka powiększająca (np. 2:1, 5:1) – drobne detale (np. dysza wtryskiwacza). Uwaga: liczby wymiarowe na rysunku ZAWSZE podają wymiar rzeczywisty przedmiotu w milimetrach, niezależnie od podziałki!',
              'Chropowatość powierzchni określa parametr Ra [µm] (średnie arytmetyczne odchylenie profilu od linii średniej). Im mniejsza wartość Ra (np. Ra 0,16 dla czopa wału korbowego lub gładzi cylindra po honowaniu), tym gładsza powierzchnia.'
            ]
          }
        ],
        examTip:
          'Pułapka egzaminacyjna: „Wałek o rzeczywistej długości 100 mm narysowano w podziałce 1:2. Jaka liczba wymiarowa zostanie wpisana nad linią wymiarową?” Odpowiedź brzmi: 100! Na rysunku technicznym zawsze wpisujemy rzeczywisty wymiar przedmiotu.',
        quiz: [
          {
            question: 'Których elementów pełnych NIE kreskuje się na rysunku złożeniowym, gdy płaszczyzna przekroju przechodzi wzdłuż ich osi symetrii?',
            options: [
              'Tulei cylindrowych i korpusów zacisków hamulcowych',
              'Śrub, nitów, wpustów, pełnych wałków oraz kulek łożyskowych',
              'Tarcz hamulcowych oraz bębnów ze stopu żeliwa',
              'Głowicy silnika oraz miski olejowej'
            ],
            correctIndex: 1,
            explanation: 'Zgodnie z zasadami rysunku technicznego maszynowego pełne wałki, śruby, nity, kliny, wpusty oraz elementy toczne łożysk rysuje się w przekroju podłużnym w widoku (bez kreskowania).'
          },
          {
            question: 'Jaką linią oznacza się na rysunku technicznym osie symetrii otworów oraz wałków?',
            options: [
              'Linią ciągłą grubą',
              'Linią kreskową cienką',
              'Linią punktową cienką',
              'Linią falistą'
            ],
            correctIndex: 2,
            explanation: 'Osie symetrii i płaszczyzny symetrii oznacza się zawsze linią punktową cienką (kreska-kropka-kreska).'
          }
        ]
      }
    ]
  },
  {
    id: 'elektrotechnika',
    name: 'Elektrotechnika i Elektronika',
    shortName: 'Elektro',
    icon: 'Zap',
    code: 'DZIAŁ III',
    description: 'Prawa elektrotechniki, diagnostyka akumulatora, alternatora i rozrusznika oraz czujniki elektroniczne, sterowniki ECU i sieci CAN/LIN.',
    topics: [
      {
        id: 'prawo-ohma',
        title: 'Prawo Ohma',
        subtitle: 'Zależność między napięciem (U), natężeniem prądu (I) i rezystancją (R), moc elektryczna (P), dobór bezpieczników oraz pomiary multimetrem.',
        readingTime: '7 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'prawo ohma', 'napięcie', 'natężenie', 'prąd', 'rezystancja', 'opór',
          'moc', 'bezpiecznik', 'multimetr', 'woltomierz', 'amperomierz', 'omomierz', 'szeregowo', 'równolegle'
        ],
        summary:
          'Prawo Ohma oraz wzór na moc elektryczną pozwalają mechanikowi diagnozować spadki napięcia na skorodowanych złączach masowych, sprawdzać oporność czujników i cewek oraz prawidłowo dobierać wartość bezpieczników topikowych.',
        interactiveTool: 'ohm-calculator',
        sections: [
          {
            heading: '1. Prawo Ohma i wzór na moc elektryczną w instalacji 12 V / 24 V',
            content:
              'Natężenie prądu płynącego przez przewodnik jest wprost proporcjonalne do napięcia przyłożonego na jego końcach i odwrotnie proporcjonalne do jego rezystancji:',
            formula: {
              expression: 'I = U / R   oraz   P = U · I',
              description: 'gdzie: I – natężenie prądu [A – amper], U – napięcie elektryczne [V – wolt], R – rezystancja (opór) [Ω – om], P – moc elektryczna [W – wat].'
            },
            table: {
              headers: ['Szukana wielkość', 'Wzór przekształcony', 'Przykład warsztatowy (instalacja 12 V)'],
              rows: [
                ['Natężenie prądu I [A]', 'I = U / R  lub  I = P / U', 'Żarówka H7 o mocy P = 55 W przy U = 12 V pobiera prąd: I = 55 / 12 ≈ 4,58 A'],
                ['Napięcie U [V]', 'U = I · R', 'Spadek napięcia na zaśniedziałej masie (R = 0,5 Ω) przy prądzie I = 10 A wynosi aż U = 5 V!'],
                ['Rezystancja R [Ω]', 'R = U / I', 'Uzwojenie przekaźnika 12 V pobierające prąd 0,15 A ma rezystancję: R = 12 / 0,15 = 80 Ω'],
                ['Moc elektryczna P [W]', 'P = U · I = I² · R', 'Ogrzewanie tylnej szyby pobierające 15 A przy 12 V ma moc: P = 12 · 15 = 180 W']
              ]
            }
          },
          {
            heading: '2. Połączenie szeregowe i równoległe odbiorników',
            content:
              'W instalacji samochodowej wszystkie główne odbiorniki (reflektory, dmuchawa, sterowniki) są połączone RÓWNOLEGLE względem akumulatora (w układzie jednoprzewodowym z masą na karoserii):',
            bullets: [
              'Połączenie równoległe: na każdym odbiorniku panuje takie samo napięcie zasilania (U = const), a prąd główny jest sumą prądów gałęziowych (I = I₁ + I₂). Rezystancja zastępcza maleje: 1/Rz = 1/R₁ + 1/R₂.',
              'Połączenie szeregowe: przez wszystkie elementy płynie ten sam prąd (I = const), a napięcie dzieli się na poszczególne elementy (U = U₁ + U₂). Rezystancja zastępcza jest sumą rezystancji: Rz = R₁ + R₂. Przykład: rezystor dmuchawy nawiewu lub niechciana rezystancja skorodowanego styku!'
            ]
          },
          {
            heading: '3. Zasady pomiarów multimetrem cyfrowym',
            content:
              'Błędne podłączenie multimetru w trybie amperomierza równolegle do akumulatora kończy się przepaleniem bezpiecznika wewnątrz miernika:',
            bullets: [
              'Pomiar napięcia (woltomierz – V DC): miernik włączamy RÓWNOLEGLE do badanego elementu lub źródła napięcia (przy włączonym obwodzie).',
              'Pomiar natężenia prądu (amperomierz – A DC): miernik włączamy SZEREGOWO w rozcięty obwód (lub używamy przystawki cęgowej DC bez rozpinania przewodów).',
              'Pomiar rezystancji (omomierz – Ω): bezwzględnie na ODŁĄCZONYM zasilaniu i wypiętej wtyczce badanego czujnika lub cewki!'
            ]
          }
        ],
        examTip:
          'Pamiętaj o kolorystyce bezpieczników płytkowych mini/standard w samochodzie: 5 A – jasnobrązowy, 7,5 A – brązowy, 10 A – czerwony, 15 A – niebieski, 20 A – żółty, 25 A – przezroczysty/biały, 30 A – zielony.',
        quiz: [
          {
            question: 'Jakie natężenie prądu pobiera z instalacji o napięciu 12 V para żarówek świateł mijania o łącznej mocy 120 W?',
            options: [
              '5 A',
              '10 A',
              '14,4 A',
              '0,1 A'
            ],
            correctIndex: 1,
            explanation: 'Korzystając ze wzoru P = U · I, po przekształceniu otrzymujemy I = P / U = 120 W / 12 V = 10 A.'
          },
          {
            question: 'W jaki sposób należy podłączyć multimetr ustawiony na pomiar rezystancji (omomierz) podczas sprawdzania cewki wtryskiwacza elektromagnetycznego?',
            options: [
              'Szeregowo w obwód przy pracującym silniku na biegu jałowym',
              'Równolegle do zacisków cewki po uprzednim odłączeniu wtyczki zasilającej',
              'Pomiędzy dodatni biegun akumulatora a masę silnika',
              'W gniazdo bezpiecznika pompy paliwa przy włączonym zapłonie'
            ],
            correctIndex: 1,
            explanation: 'Pomiar rezystancji (Ω) wykonuje się zawsze na elemencie odłączonym od napięcia instalacji, przykładając sondy miernika do pinów badanego elementu.'
          }
        ]
      },
      {
        id: 'budowa-akumulatora',
        title: 'Budowa akumulatora',
        subtitle: 'Akumulator kwasowo-ołowiowy, AGM i EFB, gęstość elektrolitu, parametry znamionowe (Ah, A), kolejność odłączania i podłączania klem.',
        readingTime: '7 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'akumulator', 'elektrolit', 'kwas siarkowy', 'areometr', 'gęstość', 'napięcie spoczynkowe',
          'pojemność', 'ah', 'prąd rozruchu', 'agm', 'efb', 'klemy', 'odłączanie akumulatora', 'pobór prądu'
        ],
        summary:
          'Akumulator kwasowo-ołowiowy 12 V składa się z 6 połączonych szeregowo ogniw o napięciu znamionowym 2,1 V każde. Dostarcza energii elektrycznej do rozrusznika podczas rozruchu oraz zasila odbiorniki przy wyłączonym silniku.',
        interactiveTool: 'battery-checker',
        sections: [
          {
            heading: '1. Budowa wewnętrzna i reakcje chemiczne',
            content:
              'Pojedyncze ogniwo akumulatora kwasowo-ołowiowego zbudowane jest z płyt dodatnich i ujemnych przedzielonych mikroporowatymi separatorami:',
            bullets: [
              'Masa czynna płyt dodatnich (+): dwutlenek ołowiu (PbO₂) – kolor ciemnobrązowy.',
              'Masa czynna płyt ujemnych (-): ołów gąbczasty (Pb) – kolor szary metaliczny.',
              'Elektrolit: wodny roztwór kwasu siarkowego (H₂SO₄) i wody destylowanej (demineralizowanej). Podczas rozładowywania na obu płytach powstaje siarczan ołowiu (PbSO₄), a elektrolit rozcieńcza się wodą (spada jego gęstość).',
              'Typy nowoczesne do systemów Start-Stop: EFB (wzmocnione płyty z poliestrową siatką) oraz AGM (elektrolit uwięziony w matach z włókna szklanego – wysoka odporność na głębokie rozładowania).'
            ]
          },
          {
            heading: '2. Ocena stanu naładowania akumulatora (napięcie i gęstość elektrolitu)',
            content:
              'Stan naładowania (SOC – State of Charge) mierzy się po min. 2–4 godzinach od zakończenia jazdy lub ładowania (napięcie spoczynkowe):',
            table: {
              headers: ['Stan naładowania', 'Napięcie spoczynkowe [V]', 'Gęstość elektrolitu [g/cm³] w 20°C', 'Zalecane działanie serwisowe'],
              rows: [
                ['100% (pełne naładowanie)', '12,60 – 12,80 V', '1,28 g/cm³', 'Akumulator sprawny, gotowy do testu obciążeniowego'],
                ['75% (częściowe rozładowanie)', 'ok. 12,40 V', '1,24 g/cm³', 'Stan dopuszczalny, zalecane doładowanie przed zimą'],
                ['50% (wymaga ładowania)', 'ok. 12,20 V', '1,20 g/cm³', 'Konieczne doładowanie prostownikiem (prądem 0,1 × C₂₀)'],
                ['< 25% (głębokie rozładowanie)', '< 11,90 V', '< 1,15 g/cm³', 'Ryzyko trwałego zasiarczenia płyt i zamarznięcia elektrolitu zimą!']
              ]
            }
          },
          {
            heading: '3. Prawidłowa kolejność odłączania i podłączania klem akumulatora',
            content:
              'To jedno z najczęściej sprawdzanych zagadnień na egzaminie praktycznym i teoretycznym MOT.05:',
            steps: [
              'ODŁĄCZANIE AKUMULATORA Z POJAZDU: wyłącz zapłon i wszystkie odbiorniki -> najpierw odkręć i zdejmij klemę UJEMNĄ (masową „-”), a dopiero jako drugą klemę DODATNIĄ („+”). Dlaczego? Gdy odkręcasz najpierw minus, dotknięcie kluczem płaskim do metalowego nadwozia nie spowoduje zwarcia!',
              'PODŁĄCZANIE AKUMULATORA DO POJAZDU: kolejność odwrotna -> najpierw załóż i dokręć klemę DODATNIĄ („+”), a jako drugą załóż i dokręć klemę UJEMNĄ („-”).',
              'Zabezpiecz oczyszczone czopy i klemy wazeliną techniczną bezkwasową lub sprayem miedziowym/kontaktowym do biegunów.'
            ]
          },
          {
            heading: '4. Test obciążeniowy (widełkowy / konduktancyjny) i pomiar poboru prądu spoczynkowego',
            content:
              'Samo napięcie spoczynkowe 12,6 V nie gwarantuje, że akumulator odda odpowiedni prąd rozruchowy. W warsztacie wykonuje się dwa dodatkowe badania diagnostyczne:',
            table: {
              headers: ['Badanie diagnostyczne', 'Warunki pomiaru i przyrząd', 'Wartość prawidłowa (kryterium oceny)'],
              rows: [
                ['Test pod obciążeniem (tester oporowy / cęgowy)', 'Obciążenie prądem równym połowie prądu rozruchowego (lub ok. 3 × C₂₀) przez 10–15 sekund', 'Napięcie na zaciskach nie może spaść poniżej 9,6 V – 10,0 V (w temp. 20°C)'],
                ['Pomiar prądu upływu (spoczynkowego poboru prądu)', 'Multimetr (amperomierz DC) szeregowo między zdjętą klemą ujemną a czopem „-” po uśpieniu sterowników (ok. 15–30 min po zamknięciu auta)', 'Pobór prądu powinien wynosić maks. 0,02 – 0,05 A (20 – 50 mA). Wyższy pobór rozładuje akumulator w kilka dni!'],
                ['Kodowanie akumulatora (BMS / IBS)', 'Tester diagnostyczny OBD-II po wymianie akumulatora w aucie z systemem Start-Stop (AGM/EFB)', 'Obowiązkowa rejestracja nowego akumulatora w sterowniku (reset adaptacji stopnia zużycia i korekta napięcia ładowania)']
              ]
            }
          }
        ],
        examTip:
          'Zasada „Minus pierwszy schodzi, ostatni wraca”! Ponadto zapamiętaj: standardowy prąd ładowania akumulatora wynosi 1/10 jego pojemności znamionowej (I = 0,1 · C₂₀). Dla akumulatora 60 Ah prąd ładowania to 6 A przez ok. 10 godzin.',
        quiz: [
          {
            question: 'W jakiej kolejności należy odłączać przewody (klemy) od biegunów akumulatora zamontowanego w pojeździe?',
            options: [
              'Najpierw biegun dodatni (+), następnie biegun ujemny (-)',
              'Najpierw biegun ujemny (-) połączony z masą, następnie biegun dodatni (+)',
              'Kolejność nie ma znaczenia, jeśli kluczyki są w stacyjce',
              'Oba bieguny jednocześnie przy włączonych światłach mijania'
            ],
            correctIndex: 1,
            explanation: 'Odłączenie w pierwszej kolejności klemy ujemnej (-) przerywa obwód masowy karoserii. Dzięki temu podczas późniejszego odkręcania klemy dodatniej (+) przypadkowe dotknięcie kluczem do błotnika nie wywoła zwarcia.'
          },
          {
            question: 'Jakim prądem należy ładować tradycyjny akumulator kwasowo-ołowiowy o oznaczeniu 12 V 55 Ah 480 A metodą normalną (10-godzinną)?',
            options: [
              '48 A',
              '12 A',
              '5,5 A',
              '55 A'
            ],
            correctIndex: 2,
            explanation: 'Prąd ładowania dziesięciogodzinnego wynosi 0,1 pojemności znamionowej C₂₀: 0,1 × 55 Ah = 5,5 A.'
          }
        ]
      },
      {
        id: 'dzialanie-alternatora',
        title: 'Działanie alternatora',
        subtitle: 'Budowa alternatora trójfazowego (wirnik, stojan, mostek prostowniczy, regulator napięcia), diagnostyka napięcia ładowania i koła pasowego ze sprzęgłem.',
        readingTime: '9 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'alternator', 'ładowanie', 'stojan', 'wirnik', 'mostek prostowniczy', 'diody',
          'regulator napięcia', 'szczotki', 'pierścienie ślizgowe', '14.4v', 'sprzęgło jednokierunkowe'
        ],
        summary:
          'Alternator jest trójfazową prądnicą prądu przemiennego wzbudzaną elektromagnetycznie. Ponieważ instalacja samochodu wymaga prądu stałego (DC), wytworzony w uzwojeniach stojana prąd przemienny jest prostowany w sześcio- lub dziewięciodiodowym mostku Graetza.',
        sections: [
          {
            heading: '1. Główne podzespoły alternatora i ich funkcje',
            content:
              'Każdy element alternatora pełni określoną funkcję w procesie konwersji energii mechanicznej (z paska osprzętu) na energię elektryczną:',
            table: {
              headers: ['Podzespół alternatora', 'Budowa', 'Funkcja w układzie ładowania'],
              rows: [
                ['Wirnik (twornik pola)', 'Uzwojenie wzbudzenia nawinięte na rdzeniu z biegunami pazurkowymi + 2 pierścienie ślizgowe', 'Wytwarza wirujące pole magnetyczne po podaniu prądu wzbudzenia przez szczotki'],
                ['Stojan (twornik)', 'Pakiet blach stalowych z 3 uzwojeniami fazowymi połączonymi w gwiazdę (Y) lub trójkąt (Δ)', 'W uzwojeniach stojana indukuje się trójfazowe napięcie przemienne (AC)'],
                ['Mostek prostowniczy', 'Zespół min. 6 diod krzemowych mocy (3 dodatnie i 3 ujemne)', 'Prostuje prąd przemienny trójfazowy na prąd stały (DC) i zapobiega rozładowaniu akumulatora na postoju'],
                ['Regulator napięcia ze szczotkami', 'Układ elektroniczny zintegrowany ze szczotkotrzymaczem (często ze sterowaniem LIN/BSS)', 'Utrzymuje stałe napięcie ładowania (13,8–14,5 V) poprzez regulację prądu wzbudzenia wirnika'],
                ['Koło pasowe ze sprzęgłem (OAP)', 'Koło wielorowkowe z łożyskiem jednokierunkowym (wolnobiegiem)', 'Tłumi drgania skrętne paska wielorowkowego PK i pozwala wirnikowi wybiegać przy gwałtownym spadku obrotów silnika']
              ]
            }
          },
          {
            heading: '2. Prawidłowe parametry napięcia ładowania i diagnostyka usterkowa',
            content:
              'Pomiar napięcia ładowania wykonuje się woltomierzem na zaciskach akumulatora przy pracującym silniku (ok. 2000 obr./min) bez obciążenia oraz pod pełnym obciążeniem (włączone światła mijania, dmuchawa, ogrzewanie szyby):',
            bullets: [
              'Prawidłowe napięcie ładowania: 13,8 V – 14,5 V (w nowoczesnych pojazdach z inteligentnym ładowaniem BMS może okresowo zmieniać się w zakresie 12,8–14,8 V).',
              'Napięcie poniżej 13,5 V (brak lub słabe ładowanie): zużyte szczotki lub pierścienie ślizgowe, uszkodzony regulator napięcia, ślizgający się pasek wielorowkowy, przerwa w uzwojeniu wzbudzenia lub uszkodzona dioda w mostku.',
              'Napięcie powyżej 14,8 V (przeładowywanie akumulatora, gotowanie elektrolitu, przepalanie żarówek): uszkodzony (zwarty) regulator napięcia.',
              'Kontrolka ładowania (czerwony symbol akumulatora) nie zapala się po włączeniu zapłonu: spalona kontrolka, przerwa w obwodzie zacisku D+/L lub całkowicie zużyte (zawieszone) szczotki wirnika.'
            ]
          },
          {
            heading: '3. Oznaczenia zacisków elektrycznych alternatora',
            content:
              'Znajomość oznaczeń zacisków ułatwia czytanie schematów elektrycznych układu ładowania:',
            bullets: [
              'B+ (zwykle śruba M6/M8): wyjście prądowe główne połączone grubym przewodem z dodatnim biegunem akumulatora.',
              'B- (lub obudowa alternatora): masa elektryczna.',
              'D+ (lub L): zacisk obwodu kontrolki ładowania i wstępnego wzbudzenia.',
              'DFM / FR / LIN / COM: złącze komunikacji cyfrowej lub sygnału obciążenia alternatora do sterownika silnika (ECU).'
            ]
          },
          {
            heading: '4. Pomiary weryfikacyjne wymontowanego alternatora na stole warsztatowym',
            content:
              'Po rozebraniu alternatora na stanowisku egzaminacyjnym MOT.05 wykonuje się pomiary rezystancji uzwojeń, test diod oraz weryfikację wymiarową szczotek i pierścieni ślizgowych:',
            table: {
              headers: ['Badany element alternatora', 'Sposób pomiaru (ustawienie multimetru)', 'Wartości wzorcowe / kryterium weryfikacji'],
              rows: [
                ['Uzwojenie wzbudzenia wirnika', 'Omomierz (zakres 200 Ω) – sondy przyłożone do dwóch miedzianych pierścieni ślizgowych', 'Rezystancja: 2,2 – 4,5 Ω (OL = przerwa w uzwojeniu; poniżej 1,5 Ω = zwarcie międzyzwojowe)'],
                ['Izolacja wirnika względem masy', 'Omomierz (zakres MΩ) – między pierścieniem ślizgowym a stalowym biegunem pazurkowym', 'Nieskończoność (OL). Jakakolwiek przejściowość oznacza przebicie uzwojenia do masy'],
                ['Uzwojenia fazowe stojana (3 fazy)', 'Omomierz – pomiar między wyprowadzeniami poszczególnych faz oraz względem rdzenia stojana', 'Między fazami: 0,1 – 0,3 Ω (równe wartości). Względem rdzenia stalowego: nieskończoność (OL)'],
                ['Diody mostka prostowniczego', 'Test diody (symbol →|–) – pomiar w kierunku przewodzenia i zaporowym każdej z 6 diod', 'Kierunek przewodzenia: spadek napięcia 0,45 – 0,65 V. Kierunek zaporowy: OL (brak przejścia)'],
                ['Szczotki i pierścienie ślizgowe', 'Suwmiarka / mikrometr', 'Min. długość wystawania szczotek: ≥ 5 mm (nowe 10–12 mm). Dopuszczalne bicie pierścieni: max 0,03 mm']
              ]
            }
          }
        ],
        examTip:
          'W zadaniach praktycznych MOT.05 podczas weryfikacji wymontowanego wirnika alternatora omomierzem sprawdzamy dwie rzeczy: 1) rezystancję uzwojenia wzbudzenia między dwoma pierścieniami ślizgowymi (powinna wynosić ok. 2,0 – 4,5 Ω) oraz 2) brak zwarcia do masy między pierścieniem ślizgowym a stalowym rdzeniem (powinno być ∞ – OL).',
        quiz: [
          {
            question: 'Który element alternatora odpowiada bezpośrednio za zamianę trójfazowego prądu przemiennego wyindukowanego w stojanie na prąd stały?',
            options: [
              'Komutator wycinkowy ze szczotkami węglowymi',
              'Diodowy mostek prostowniczy',
              'Regulator napięcia',
              'Koło pasowe ze sprzęgłem jednokierunkowym'
            ],
            correctIndex: 1,
            explanation: 'W stojanie alternatora powstaje trójfazowy prąd przemienny, który zostaje wyprostowany na prąd stały przez układ diod prostowniczych (mostek Graetza).'
          },
          {
            question: 'W jakim przedziale powinno mieścić się prawidłowe napięcie ładowania w klasycznej instalacji 12 V przy pracującym silniku i włączonych światłach mijania?',
            options: [
              '11,8 V – 12,4 V',
              '13,8 V – 14,5 V',
              '16,0 V – 18,5 V',
              '24,0 V – 28,4 V'
            ],
            correctIndex: 1,
            explanation: 'Aby prąd płynął z alternatora do akumulatora (12,6 V), napięcie ładowania musi być wyższe od napięcia spoczynkowego akumulatora i mieścić się w przedziale 13,8–14,5 V.'
          }
        ]
      },
      {
        id: 'uklad-rozruchu-rozrusznik',
        title: 'Układ rozruchu (Rozrusznik)',
        subtitle: 'Budowa rozrusznika z przekładnią planetarną, działanie wyłącznika elektromagnetycznego, sprzęgło jednokierunkowe (bendiks) i oznaczenia zacisków 30, 50, 45.',
        readingTime: '10 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'rozrusznik', 'bendiks', 'elektromagnes', 'automat rozrusznika', 'komutator',
          'przekładnia planetarna', 'zacisk 30', 'zacisk 50', 'prąd rozruchu', 'szczotki', 'wieniec koła zamachowego'
        ],
        summary:
          'Rozrusznik jest silnikiem elektrycznym prądu stałego (szeregowym, bocznikowym lub z magnesami trwałymi), który pobiera z akumulatora prąd od 150 A do ponad 400 A, aby nadać wałowi korbowemu minimalną prędkość rozruchową (ok. 60–100 obr./min dla silników ZI oraz 100–200 obr./min dla silników ZS).',
        sections: [
          {
            heading: '1. Budowa rozrusznika i rola wyłącznika elektromagnetycznego',
            content:
              'Rozrusznik składa się z trzech głównych zespołów: silnika elektrycznego prądu stałego, mechanizmu sprzęgającego (bendiksu) oraz wyłącznika elektromagnetycznego („automatu”):',
            table: {
              headers: ['Podzespół rozrusznika', 'Budowa i cechy charakterystyczne', 'Zadanie podczas rozruchu'],
              rows: [
                ['Wyłącznik elektromagnetyczny (elektromagnes)', 'Dwa uzwojenia: wciągające i podtrzymujące oraz rdzeń ruchomy ze stykami głównymi', '1) Przesuwa widełkami zębnik w stronę wieńca koła zamachowego, 2) Zwierając styki główne (30 i 45), podaje pełny prąd na wirnik'],
                ['Mechanizm sprzęgający (Bendiks)', 'Zębnik z rolkowym sprzęgłem jednokierunkowym (wolnobiegiem) osadzony na wielowypuście śrubowym', 'Przenosi napęd wyłącznie od rozrusznika do silnika. Po uruchomieniu silnika chroni wirnik rozrusznika przed rozerwaniem przez wysokie obroty wału!'],
                ['Wirnik (twornik) z komutatorem', 'Uzwojenia z grubego płaskownika miedzianego lutowane do wycinków komutatora + szczotki miedziano-grafitowe', 'Wytwarza moment obrotowy pod wpływem przepływu prądu o bardzo dużym natężeniu'],
                ['Przekładnia planetarna (reduktor)', 'Koło słoneczne na wirniku, 3 satelity w jarzmie i koło pierścieniowe o uzębieniu wewnętrznym', 'Zmniejsza obroty wirnika (przełożenie ok. 4:1), a jednocześnie czterokrotnie zwiększa moment obrotowy przy mniejszej masie rozrusznika']
              ]
            }
          },
          {
            heading: '2. Oznaczenia zacisków elektrycznych rozrusznika (wg normy DIN 72552)',
            content:
              'Na pokrywie wyłącznika elektromagnetycznego rozrusznika znajdują się trzy zaciski o znormalizowanych numerach:',
            bullets: [
              'Zacisk 30 (śruba M8): stałe zasilanie +12 V podłączone grubym, niezabezpieczonym bezpiecznikiem przewodem bezpośrednio z dodatniej klemy akumulatora.',
              'Zacisk 50 (wsuwka lub śrubka M5/M6): sygnał sterujący +12 V podawany ze stacyjki lub przekaźnika rozruchu w momencie przekręcenia kluczyka w pozycję START.',
              'Zacisk 45 (lub C): wyjście prądowe z wyłącznika elektromagnetycznego wchodzące przez plecionkę miedzianą do wnętrza stojana/szczotek rozrusznika.'
            ]
          },
          {
            heading: '3. Diagnostyka typowych usterek układu rozruchu',
            content:
              'Podczas próby rozruchu napięcie na zaciskach akumulatora nie powinno spadać poniżej 9,6 V – 10,0 V:',
            bullets: [
              'Słychać głośne „stuknięcie” elektromagnesu, ale rozrusznik nie kręci, a kontrolki przygasają: rozładowany akumulator, duży spadek napięcia na skorodowanej klemie/masie silnika lub zwarcie w wirniku.',
              'Rozrusznik obraca się z bardzo dużą prędkością („wyje”), ale wał korbowy silnika stoi w miejscu: uszkodzone sprzęgło jednokierunkowe (ślizgający się bendiks) lub wyłamane zęby wieńca koła zamachowego.',
              'Brak jakiejkolwiek reakcji po przekręceniu kluczyka (kontrolki nie przygasają): brak napięcia na zacisku 50 (uszkodzona kostka stacyjki, czujnik wciśnięcia sprzęgła/pozycji P-N) lub zawieszone szczotki węglowe (przez co uzwojenie wciągające elektromagnesu nie ma masy przez wirnik!).'
            ]
          },
          {
            heading: '4. Pomiary spadków napięcia w obwodzie rozrusznika (pod obciążeniem)',
            content:
              'Najczęstszą przyczyną powolnego kręcenia rozrusznika przy sprawnym akumulatorze są nadmierne spadki napięcia na zaśniedziałych połączeniach głównych lub wypalonych stykach elektromagnesu. Pomiar wykonuje się woltomierzem podczas kręcenia rozrusznikiem:',
            table: {
              headers: ['Miejsce przyłożenia sond woltomierza (podczas rozruchu)', 'Badany odcinek obwodu', 'Maksymalny dopuszczalny spadek napięcia'],
              rows: [
                ['Sonda (+) na ołowianym słupku „+” akumulatora | Sonda (-) na śrubie zacisku 30 rozrusznika', 'Główny przewód zasilający dodatni i klema (+)', 'Maks. 0,5 V (powyżej 0,5 V = utleniona klema lub oczko przewodu na zacisku 30)'],
                ['Sonda (+) na obudowie rozrusznika | Sonda (-) na ołowianym słupku „-” akumulatora', 'Obwód masowy (plecionka masowa silnik–nadwozie–akumulator)', 'Maks. 0,3 – 0,5 V (powyżej 0,5 V = skorodowana plecionka masowa silnika!)'],
                ['Sonda (+) na zacisku 30 elektromagnesu | Sonda (-) na zacisku 45 (wyjście na szczotki)', 'Styki główne wewnątrz wyłącznika elektromagnetycznego', 'Maks. 0,2 – 0,3 V (powyżej 0,5 V = wypalona miedziana zwora styków elektromagnesu)'],
                ['Pomiar cęgami prądowymi DC na przewodzie głównym rozrusznika', 'Pobór prądu rozruchu pod obciążeniem kompresją silnika', 'Silnik benzynowy (ZI): 120 – 200 A | Silnik wysokoprężny (ZS): 250 – 450 A']
              ]
            }
          }
        ],
        examTip:
          'Ważny szczegół konstrukcyjny na egzamin MOT.05: uzwojenie WCIĄGAJĄCE elektromagnesu rozrusznika zamyka swój obwód do masy PRZEZ UZWOJENIE WIRNIKA i szczotki. Dlatego gdy szczotki rozrusznika całkowicie się zużyją (zawieszą), elektromagnes nawet nie wyrzuci bendiksu!',
        quiz: [
          {
            question: 'Jaką funkcję pełni sprzęgło jednokierunkowe (tzw. bendiks) w mechanizmie sprzęgającym rozrusznika?',
            options: [
              'Zwiększa napięcie zasilania z 12 V do 24 V w chwili zimnego rozruchu',
              'Przenosi moment obrotowy z rozrusznika na koło zamachowe i zapobiega napędzaniu wirnika rozrusznika przez uruchomiony silnik spalinowy',
              'Prostuje prąd przemienny na prąd stały podczas hamowania silnikiem',
              'Ogranicza maksymalne natężenie prądu na zacisku 50 do 5 A'
            ],
            correctIndex: 1,
            explanation: 'Gdy silnik spalinowy zaskoczy, jego prędkość obrotowa gwałtownie rośnie. Wolnobieg (bendiks) rozpina wówczas sprzężenie, chroniąc wirnik rozrusznika przed rozpadnięciem się od siły odśrodkowej.'
          },
          {
            question: 'Który zacisk na elektromagnesie rozrusznika otrzymuje napięcie sterujące +12 V ze stacyjki w chwili przekręcenia kluczyka w pozycję „Rozruch”?',
            options: [
              'Zacisk 30',
              'Zacisk 31',
              'Zacisk 50',
              'Zacisk B+'
            ],
            correctIndex: 2,
            explanation: 'Zgodnie z normą DIN 72552 zacisk 30 to stały plus z akumulatora, 31 to masa, a zacisk 50 to obwód sterowania rozrusznikiem (sygnał START).'
          }
        ]
      },
      {
        id: 'czujniki-i-elektronika-silnikowa',
        title: 'Czujniki i elektronika (ECU, CAN)',
        subtitle: 'Termistory NTC i PTC, przepływomierze MAF i czujniki MAP, czujniki piezoelektryczne, sondy lambda, wtryskiwacze oraz magistrala CAN-BUS i LIN.',
        readingTime: '11 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'elektronika', 'czujnik', 'ntc', 'ptc', 'ect', 'maf', 'map', 'piezoelektryczny',
          'spalanie stukowe', 'can', 'magistrala can', '60 om', '120 om', 'lin', 'ecu', 'wtryskiwacz'
        ],
        summary:
          'Współczesny samochód sterowany jest przez rozproszoną sieć sterowników mikroprocesorowych (ECU, ABS, BCM, TCU) komunikujących się po cyfrowej magistrali CAN/LIN. Sterowniki zbierają informacje z czujników (sensorów) i wysterowują elementy wykonawcze (aktuatory).',
        interactiveTool: 'ntc-can-simulator',
        sections: [
          {
            heading: '1. Klasyfikacja i charakterystyka czujników samochodowych',
            content:
              'Mechanik diagnozujący układ sterowania silnikiem musi znać zasadę działania i typowe wartości pomiarowe głównych czujników:',
            table: {
              headers: ['Czujnik (Sensor)', 'Zasada działania', 'Charakterystyka sygnału i diagnostyka'],
              rows: [
                ['Czujnik temp. cieczy (ECT) i powietrza (IAT)', 'Termistor NTC (Negative Temperature Coefficient – ujemny współczynnik temperaturowy)', 'Wraz ze wzrostem temperatury jego rezystancja MALEJE (np. w 20°C ok. 2,5 kΩ, a w 80°C ok. 300 Ω). Odpięta wtyczka = sterownik widzi -40°C!'],
                ['Czujnik ciśnienia w kolektorze (MAP) / na listwie (Rail)', 'Tensometryczny (piezorezystancyjny) zasilany napięciem odniesienia 5,0 V', '3 piny (Masa, Zasilanie 5 V, Sygnał 0,5–4,5 V rosnący liniowo wraz z ciśnieniem)'],
                ['Przepływomierz masowy powietrza (MAF)', 'Termoanemometryczny (gorąca warstwa / drut – Hot Film) lub cyfrowy HFM', 'Mierzy masę zasysanego powietrza [kg/h lub g/s]. Zabrudzenie elementu pomiarowego zaniża dawkę paliwa i ogranicza moc'],
                ['Czujnik spalania stukowego (Knock Sensor)', 'Piezoelektryczny (pasywny – sam generuje napięcie pod wpływem drgań bloku)', 'Wykrywa detonacyjne spalanie i pozwala ECU opóźnić kąt wyprzedzenia zapłonu. Wymaga dokręcenia ściśle określonym momentem (np. 20 Nm)!'],
                ['Czujnik położenia pedału przyspieszenia (APP)', 'Podwójny potencjometr lub podwójny czujnik Halla (6 pinów)', 'Dwa niezależne tory sygnałowe dla bezpieczeństwa (np. Tor 1: 0,5–4,5 V, a Tor 2 dokładnie połowa: 0,25–2,25 V)']
              ]
            }
          },
          {
            heading: '2. Elementy wykonawcze (Aktuatory): Wtryskiwacze elektromagnetyczne i piezoelektryczne',
            content:
              'Sterownik silnika (ECU) steruje elementami wykonawczymi najczęściej od strony masy (podając impulsy masowe PWM przy stałym zasilaniu +12 V):',
            bullets: [
              'Wtryskiwacze pośrednie benzynowe (MPI): wysokoomowe cewki elektromagnetyczne (rezystancja 12 – 16 Ω), zasilane napięciem 12 V.',
              'Wtryskiwacze bezpośrednie (FSI/GDI oraz Common Rail elektromagnetyczne): niskoomowe cewki (ok. 0,3 – 2,5 Ω) wyzwalane początkowym prądem uderzeniowym o napięciu podbitym w przetwornicy ECU do 50 – 90 V!',
              'Wtryskiwacze piezoelektryczne Common Rail: wykorzystują stos kryształów piezoelektrycznych (działają nawet 4 razy szybciej niż elektromagnetyczne). Rezystancja sprawnego stosu piezo wynosi ok. 150 – 200 kΩ, a napięcie sterowania sięga 110 – 200 V. UWAGA BHP: zakaz odpinania wtyczek wtryskiwaczy piezoelektrycznych na pracującym silniku (ryzyko porażenia prądem i zablokowania wtryskiwacza w pozycji otwartej)!'
            ]
          },
          {
            heading: '3. Cyfrowe sieci komunikacyjne: Magistrala CAN-BUS i LIN-BUS',
            content:
              'Aby wyeliminować kilometry przewodów, sterowniki wymieniają dane cyfrowo za pomocą dwuprzewodowej skrętki CAN lub jednoprzewodowej sieci LIN:',
            bullets: [
              'Magistrala CAN (Controller Area Network): dwuprzewodowa skrętka (CAN-High oraz CAN-Low) przesyłająca sygnał różnicowy odporny na zakłócenia elektromagnetyczne.',
              'W szybkiej sieci napędowej CAN High-Speed (500 kbps) w stanie spoczynku (recesywnym) na obu liniach panuje ok. 2,5 V. Podczas nadawania bitu dominującego napięcie CAN-High rośnie do 3,5 V, a CAN-Low spada do 1,5 V (symetryczne odbicie lustrzane!).',
              'Rezystancja terminacji magistrali CAN: na dwóch końcach głównej magistrali znajdują się dwa rezystory terminujące po 120 Ω połączone równolegle. Pomiar omomierzem między pinem 6 (CAN-H) a pinem 14 (CAN-L) w gnieździe OBD przy odłączonym akumulatorze musi wykazać dokładnie 60 Ω!',
              'Magistrala LIN (Local Interconnect Network): tania, jednoprzewodowa sieć podrzędna (12 V, prędkość do 20 kbps) łącząca sterownik główny (Master) z elementami wykonawczymi (Slave), np. alternatorem, silniczkami wycieraczek, czujnikiem deszczu czy klapami nawiewów.'
            ]
          },
          {
            heading: '4. Tabela referencyjnych parametrów pomiarowych czujników i aktuatorów',
            content:
              'Zestawienie wzorcowych rezystancji i napięć sygnałowych wymaganych podczas diagnostyki stanowiskowej na egzaminie MOT.05:',
            table: {
              headers: ['Podzespół elektroniczny', 'Wartość rezystancji (w 20°C)', 'Napięcie zasilania / zakres sygnału'],
              rows: [
                ['Czujnik indukcyjny wału korbowego (CKP – 2 piny)', '450 – 1200 Ω (zależnie od producenta)', 'Brak zasilania zewnętrznego; generuje sinusoidę AC od ~1 V (rozruch) do >20 V (wysokie obroty)'],
                ['Czujnik temperatury cieczy chłodzącej (ECT – NTC)', '2000 – 3000 Ω w 20°C | 250 – 350 Ω w 80°C', 'Układ dzielnika napięcia 5,0 V (napięcie na pinie sygnałowym spada z ~3,5 V na zimnym do ~0,6 V na gorącym)'],
                ['Grzałka sondy lambda', '3 – 14 Ω (w temperaturze pokojowej)', 'Zasilanie 12 V sterowane sygnałem PWM ze sterownika ECU'],
                ['Zawór regulacji ciśnienia paliwa / EGR (elektrozawór PWM)', '8 – 35 Ω', 'Zasilanie stałe +12 V (po zapłonie), wysterowanie masą PWM z ECU'],
                ['Magistrala CAN High-Speed (piny 6 i 14 gniazda DLC)', '60 Ω (sprawna sieć) | 120 Ω (przerwa jednej gałęzi)', 'CAN-H: 2,5 V → 3,5 V | CAN-L: 2,5 V → 1,5 V (różnica w stanie dominującym = 2,0 V)']
              ]
            }
          }
        ],
        examTip:
          'Dwa pewniaki egzaminacyjne z elektroniki MOT.05: 1) Czujnik temperatury cieczy chłodzącej to termistor NTC – gdy silnik się rozgrzewa, jego opór MALEJE. 2) Pomiar rezystancji sprawnej magistrali CAN (dwa rezystory 120 Ω równolegle) daje zawsze 60 Ω. Jeśli miernik pokaże 120 Ω – jeden z rezystorów końcowych jest odłączony (przerwa w wiązce)!',
        quiz: [
          {
            question: 'Jak zmienia się rezystancja czujnika temperatury płynu chłodzącego typu NTC wraz ze wzrostem temperatury silnika?',
            options: [
              'Rezystancja rośnie liniowo od 100 Ω do 100 kΩ',
              'Rezystancja maleje nieliniowo wraz ze wzrostem temperatury',
              'Rezystancja pozostaje stała i wynosi zawsze 60 Ω',
              'Czujnik NTC nie zmienia rezystancji, lecz wytwarza prąd trójfazowy'
            ],
            correctIndex: 1,
            explanation: 'NTC (Negative Temperature Coefficient) oznacza ujemny współczynnik temperaturowy – im wyższa temperatura, tym mniejszy opór elektryczny półprzewodnika.'
          },
          {
            question: 'Jaką wartość rezystancji powinien wskazać omomierz podłączony pomiędzy linię CAN-High (pin 6) a linię CAN-Low (pin 14) sprawnej magistrali CAN High-Speed przy odłączonym zasilaniu?',
            options: [
              'Ok. 60 Ω (dwa rezystory terminujące po 120 Ω połączone równolegle)',
              'Ok. 240 Ω (dwa rezystory po 120 Ω połączone szeregowo)',
              '0 Ω (pełne zwarcie obu przewodów)',
              'Nieskończoność (OL)'
            ],
            correctIndex: 0,
            explanation: 'Na obu końcach szyny CAN znajdują się rezystory 120 Ω zapobiegające odbiciom fal sygnałowych. Ponieważ są połączone równolegle, wypadkowa rezystancja wynosi 120 Ω / 2 = 60 Ω.'
          }
        ]
      }
    ]
  },
  {
    id: 'budowa-pojazdow',
    name: 'Budowa Pojazdów',
    shortName: 'Budowa',
    icon: 'Car',
    code: 'DZIAŁ IV',
    description: 'Rodzaje silników, układ korbowo-tłokowy (korbowody) i rozrządu, układ chłodzenia, klimatyzacji, układy zawieszenia oraz układy hamulcowe.',
    topics: [
      {
        id: 'rodzaje-silnikow',
        title: 'Rodzaje silników',
        subtitle: 'Podział silników spalinowych (ZI vs ZS, 4-suwowe vs 2-suwowe), układy cylindrów (R, V, Boxer, W), stopień sprężania, doładowanie oraz napędy hybrydowe.',
        readingTime: '9 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'rodzaje silników', 'silnik spalinowy', 'zapłon iskrowy', 'zapłon samoczynny', 'diesel',
          'czterosuwowy', 'rzędowy', 'widlasty', 'boxer', 'stopień sprężania', 'kolejność zapłonów', 'hybryda'
        ],
        summary:
          'Silnik spalinowy tłokowy zamienia energię chemiczną paliwa na energię cieplną podczas spalania w cylindrze, a następnie za pośrednictwem układu korbowo-tłokowego przekształca ją w pracę mechaniczną (moment obrotowy na wale korbowym).',
        sections: [
          {
            heading: '1. Podział silników ze względu na rodzaj zapłonu i obieg cieplny (ZI vs ZS)',
            content:
              'W motoryzacji stosuje się dwie podstawowe grupy tłokowych silników spalinowych różniące się sposobem tworzenia mieszanki i inicjacji zapłonu:',
            table: {
              headers: ['Cecha porównawcza', 'Silnik o zapłonie iskrowym (ZI – obieg Otta)', 'Silnik o zapłonie samoczynnym (ZS – obieg Diesla/Sabathé)'],
              rows: [
                ['Stosowane paliwo', 'Benzyna bezołowiowa (PB95/98), LPG, CNG', 'Olej napędowy (ON – charakteryzowany liczbą cetanową)'],
                ['Co jest zasysane w suwie ssania?', 'Mieszanka paliwowo-powietrzna (MPI) lub czyste powietrze (wtrysk bezpośredni GDI/FSI)', 'Wyłącznie czyste powietrze (często sprężone przez turbosprężarkę)'],
                ['Sposób inicjacji zapłonu', 'Wymuszony przeskokiem iskry elektrycznej na elektrodach świecy zapłonowej', 'Samozapłon rozpylonego pod wysokim ciśnieniem (do 2500 bar) oleju napędowego od gorącego, sprężonego powietrza (700–900°C)'],
                ['Stopień sprężania (ε)', 'Niższy: zazwyczaj od 9,5:1 do 12,5:1 (ograniczony ryzykiem spalania stukowego)', 'Wysoki: zazwyczaj od 15,0:1 do 19,5:1 (niezbędny do uzyskania temperatury samozapłonu)'],
                ['Ciśnienie sprężania (kompresja)', 'Ok. 1,0 – 1,4 MPa (10 – 14 bar)', 'Ok. 2,5 – 3,5 MPa (25 – 35 bar)']
              ]
            }
          },
          {
            heading: '2. Podział ze względu na układ konstrukcyjny cylindrów',
            content:
              'Rozmieszczenie cylindrów w kadłubie wpływa na wymiary zewnętrzne silnika, położenie środka ciężkości oraz wyrównoważenie sił bezwładności:',
            table: {
              headers: ['Układ cylindrów', 'Oznaczenie', 'Budowa i właściwości eksploatacyjne'],
              rows: [
                ['Rzędowy (In-line)', 'R3, R4, R5, R6', 'Wszystkie cylindry ustawione w jednym rzędzie (w jednej płaszczyźnie). Najprostsza budowa (jedna głowica). Najczęstsza kolejność pracy silnika R4: 1–3–4–2'],
                ['Widlasty (V-engine)', 'V6, V8, V10, V12', 'Cylindry rozmieszczone w dwóch rzędach rozchylonych pod kątem (najczęściej 60° lub 90°) ze wspólnym wałem korbowym. Krótki i zwarty kadłub, dwie głowice'],
                ['Przeciwsobny (Boxer)', 'B4, B6', 'Kąt rozchylenia cylindrów wynosi 180°, a każda para tłoków ma osobne wykorbienia i porusza się jednocześnie ku sobie i od siebie (jak rękawice boksera). Bardzo niski środek ciężkości i doskonałe wyważenie'],
                ['Wąskokątny / układ W', 'VR6, W8, W12', 'Cylindry przesunięte względem siebie o mały kąt (np. 15° w VR6 z jedną wspólną głowicą) lub kombinacja dwóch bloków VR tworząca układ W']
              ]
            }
          },
          {
            heading: '3. Pojemność skokowa, stopień sprężania i nowoczesne układy hybrydowe',
            content:
              'Podstawowe parametry geometryczne cylindra oraz klasyfikacja zelektryfikowanych układów napędowych:',
            formula: {
              expression: 'ε = (V_s + V_k) / V_k',
              description: 'gdzie: ε – geometryczny stopień sprężania (liczba niemianowana), V_s – pojemność skokowa jednego cylindra (między DMP a GMP), V_k – pojemność komory spalania (nad tłokiem w GMP).'
            },
            bullets: [
              'MHEV (Mild Hybrid – miękka hybryda 48 V): maszyna elektryczna BSG/ISG wspomaga silnik spalinowy przy ruszaniu i odzyskuje energię hamowania, ale nie napędza auta samodzielnie na dłuższym dystansie.',
              'HEV (Full Hybrid – pełna hybryda): umożliwia ruszanie i jazdę wyłącznie na silniku elektrycznym na krótkich odcinkach; akumulator trakcyjny ładuje się wyłącznie z rekuperacji i pracy silnika spalinowego.',
              'PHEV (Plug-in Hybrid): hybryda z dużym akumulatorem trakcyjnym ładowanym z zewnętrznego gniazdka/ładowarki AC, pozwalająca przejechać 50–100 km w trybie czysto elektrycznym.'
            ]
          },
          {
            heading: '4. Pomiar ciśnienia sprężania (kompresji) i próba olejowa – procedura warsztatowa',
            content:
              'Podstawową metodą oceny stanu technicznego grupy tłokowo-cylindrowej i szczelności zaworów bez demontażu głowicy jest pomiar ciśnienia sprężania manometrem (kompresjometrem):',
            table: {
              headers: ['Etap / Parametr diagnostyczny', 'Warunki prawidłowego wykonania pomiaru', 'Kryteria oceny i interpretacja wyników'],
              rows: [
                ['Warunki wstępne pomiaru kompresji', 'Silnik rozgrzany do temp. roboczej (min. 80°C), wykręcone WSZYSTKIE świece zapłonowe (lub żarowe), odcięty wtrysk paliwa i zapłon, przepustnica otwarta na 100% (wciśnięty pedał gazu)', 'Akumulator w pełni naładowany, aby rozrusznik obracał wałem z prędkością min. 200–250 obr./min'],
                ['Ciśnienie nominalne i dopuszczalna różnica', 'Kręcenie rozrusznikiem przez ok. 4–5 sekund do ustabilizowania maksymalnego wskazania manometru', 'Silnik ZI: 1,0 – 1,4 MPa (10–14 bar) | Silnik ZS: 2,5 – 3,5 MPa (25–35 bar). Maksymalna różnica między cylindrami: do 10% (ok. 0,1–0,2 MPa)'],
                ['Próba olejowa (gdy ciśnienie jest za niskie)', 'Wstrzyknięcie do cylindra ok. 5 cm³ czystego oleju silnikowego (uszczelniającego styk tłok–pierścienie–gładź) i powtórzenie pomiaru', 'Jeśli ciśnienie WZROŚNIE: zużyte pierścienie tłokowe lub gładź cylindra. Jeśli ciśnienie NIE WZROŚNIE: nieszczelne zawory (wypalone gniazdo) lub uszkodzona uszczelka pod głowicą (UPG)!']
              ]
            }
          },
          {
            heading: '5. Specyficzne odmiany i oznaczenia silników dla poszczególnych marek i modeli',
            content:
              'Każdy koncern motoryzacyjny stosuje własne oznaczenia handlowe i kody konstrukcyjne dla rodzin silników benzynowych (ZI), wysokoprężnych (ZS) oraz jednostek o nietypowym układzie cylindrów:',
            table: {
              headers: ['Marka / Koncern', 'Oznaczenia silników ZI (Benzynowe)', 'Oznaczenia silników ZS (Diesel)', 'Specyficzne odmiany i flagowe modele'],
              rows: [
                ['Grupa VAG (VW, Audi, Škoda, Seat)', 'FSI, TSI, TFSI (rodziny EA211 1.0/1.4/1.5 TSI oraz EA888 1.8/2.0 TSI)', 'TDI (historycznie VP37 i pompowtryskiwacze PD; obecnie Common Rail EA288 2.0 TDI, 3.0 V6 TDI)', 'VR6 (wąskokątny 15° z jedną głowicą w Golfie R32/Passacie), R5 2.5 TFSI (kolejność 1-2-4-5-3 w Audi RS3), W12 6.0 (Audi A8/Bentley)'],
                ['BMW', 'i / TwinPower Turbo (modułowe B38 1.5 R3, B48 2.0 R4, B58 3.0 R6; S58 w M3/M4)', 'd / TwinPower Turbo Diesel (M47, N47, B47 2.0d R4 oraz M57, N57, B57 3.0d R6)', 'Tradycja wzdłużnych silników rzędowych 6-cylindrowych (R6 – idealne wyrównoważenie sił I i II rzędu) w Serii 3, 5, 7 i X5'],
                ['Mercedes-Benz', 'CGI / EQ Boost 48V (M274, M264, M254 2.0 R4 oraz rzędowy M256 3.0 R6 ISG)', 'CDI / BlueTEC / d (OM646, OM651 2.1 CDI, nowoczesny OM654 2.0d, OM656 3.0 R6)', 'Silnik OM654 (Klasa C W205/W206, Klasa E W213) łączy aluminiowy kadłub z powłoką Nanoslide ze stalowymi tłokami'],
                ['Stellantis (Peugeot, Citroën, Opel, Fiat, Alfa)', 'PSA: 1.2 PureTech (EB2 R3), 1.6 THP (EP6) | FCA: 1.0/1.3 GSE FireFly, 1.4 T-Jet/MultiAir, 2.0 GME', 'PSA: HDi / BlueHDi (1.5 DV5, 2.0 DW10) | FCA: JTD / MultiJet (1.3, 1.6, 2.0, 2.2 JTDm)', 'Alfa Romeo 156 1.9 JTD (1997 r.) to pierwszy na świecie samochód osobowy z wtryskiem Common Rail; Alfa Giulia QV – 2.9 V6 Bi-Turbo (90°)'],
                ['Toyota / Lexus', 'VVT-i, Valvematic, D-4S (podwójny wtrysk MPI+GDI) oraz Hybrid Dynamic Force (1.8 2ZR-FXE, 2.0 M20A-FXS, 2.5 A25A-FXS)', 'D-4D (np. 1.4 D-4D, 2.0/2.2 D-4D, 2.8 D-4D w Land Cruiserze i Hiluxie)', 'Silniki hybrydowe w Corolli, Yarisie i RAV4 pracują w obiegu Atkinsona (opóźnione zamknięcie zaworów dolotowych, sprawność cieplna 41%)'],
                ['Ford', 'EcoBoost (1.0 EcoBoost R3, 1.5 EcoBoost, 2.0/2.3 EcoBoost) oraz 5.0 V8 Ti-VCT Coyote (Mustang)', 'TDCi (Duratorq 1.5/1.6/2.0) oraz najnowsza rodzina 2.0 EcoBlue', 'W 1.0 EcoBoost potrafiono wyłączyć 1 z 3 cylindrów przy niskim obciążeniu; w Mustangu GT wolnossący 5.0 V8 DOHC 32V'],
                ['Renault / Nissan / Dacia', 'TCe / DIG-T (0.9/1.0 TCe R3, 1.2 TCe, 1.3 TCe H5Ht opracowany wspólnie z Daimlerem)', 'dCi (legendarny 1.5 dCi K9K, 1.6 dCi R9M, 2.0 dCi M9R)', 'Nissan wprowadził seryjny silnik o zmiennym stopniu sprężania VC-Turbo (1.5 i 2.0 KR20DDET w Qashqai e-Power i Infiniti QX50)'],
                ['Subaru oraz Porsche', 'Subaru Boxer (2.0 FB20, 2.4 FA24, 2.0/2.5 EJ20/EJ25 Turbo WRX STI) | Porsche Boxer B6/B4 (911, 718 Cayman)', 'Subaru 2.0 Boxer Diesel (EE20 – pierwszy na świecie seryjny diesel przeciwsobny B4) | Porsche V6/V8 TDI (z VAG)', 'Silniki przeciwsobne Boxer (kąt 180°) zapewniają bardzo niski środek ciężkości i symetryczny układ napędowy'],
                ['Honda oraz Mazda', 'Honda: VTEC / i-VTEC / VTEC Turbo (1.5 L15B, 2.0 K20C Type-R) | Mazda: Skyactiv-G oraz e-Skyactiv X (SPCCI)', 'Honda: i-CTDi / i-DTEC (1.6 i 2.2) | Mazda: Skyactiv-D (2.2 z niskim stopniem sprężania 14:1)', 'Mazda rozwija również silniki z tłokiem obrotowym Wankla (13B-MSP Renesis w RX-8 oraz generator prądotwórczy 8C w MX-30 R-EV)']
              ]
            }
          }
        ],
        examTip:
          'Nie myl na egzaminie MOT.05 dwóch pojęć: STOPIEŃ SPRĘŻANIA (ε) to wielkość geometryczna niemianowana (stosunek objętości, np. 10,5:1), natomiast CIŚNIENIE SPRĘŻANIA (kompresja) to wielkość fizyczna mierzona manometrem w otworze świecy wyrażana w MPa lub barach (np. 1,2 MPa = 12 bar)!',
        quiz: [
          {
            question: 'Jaka jest najpopularniejsza kolejność zapłonów (pracy cylindrów) w czterocylindrowym, czterosuwowym silniku rzędowym (R4)?',
            options: [
              '1 – 2 – 3 – 4',
              '1 – 3 – 4 – 2',
              '1 – 4 – 2 – 3',
              '4 – 3 – 2 – 1'
            ],
            correctIndex: 1,
            explanation: 'W silniku R4 tłoki 1 i 4 oraz 2 i 3 poruszają się współbieżnie. Aby suwy pracy następowały równomiernie co 180° obrotu wału korbowego, kolejność zapłonów wynosi 1–3–4–2 (lub rzadziej 1–2–4–3).'
          },
          {
            question: 'Czym charakteryzuje się silnik w układzie przeciwsobnym typu Boxer?',
            options: [
              'Cylindry leżą w jednej płaszczyźnie po obu stronach wału korbowego (kąt 180°), a naprzeciwległe tłoki poruszają się zawsze w kierunkach przeciwnych (jednocześnie do GMP i jednocześnie do DMP)',
              'Wszystkie cylindry są ustawione pionowo w jednym rzędzie',
              'Posiada trzy wały korbowe połączone paskiem zębatym',
              'Nie posiada korbowodów ani sworzni tłokowych'
            ],
            correctIndex: 0,
            explanation: 'W silniku Boxer każdy korbowód ma własny czop na wale korbowym przesunięty o 180°, dzięki czemu tłoki przeciwległych cylindrów zbliżają się do siebie i oddalają jednocześnie, doskonale równoważąc siły bezwładności.'
          }
        ]
      },
      {
        id: 'rodzaje-korbowodow-i-uklad-korbowy',
        title: 'Rodzaje korbowodów i układ korbowo-tłokowy',
        subtitle: 'Budowa korbowodu (główka, trzon, stopa), podział prosty, ukośny i łamany kruszeniowo (fracture-split), korbowody silników widlastych, panewki i sworznie.',
        readingTime: '12 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'korbowód', 'stopa korbowodu', 'główka korbowodu', 'korbowód łamany', 'podział ukośny',
          'panewki', 'zamek panewki', 'sworzeń tłokowy', 'pływający', 'tłok', 'pierścienie tłokowe', 'wał korbowy'
        ],
        summary:
          'Korbowód stanowi główne ogniwo łączące tłok z wałem korbowym. Zamienia ruch posuwisto-zwrotny tłoka na ruch obrotowy wału korbowego, przenosząc gigantyczne siły gazowe (ściskanie w suwie pracy) oraz siły bezwładności (rozciąganie i zginanie wyboczeniowe).',
        sections: [
          {
            heading: '1. Budowa korbowodu i jego elementy składowe',
            content:
              'Korbowód odkuwany jest najczęściej ze stali stopowej do ulepszania cieplnego lub spiekany proszkowo. Składa się z trzech zasadniczych części:',
            bullets: [
              'Główka korbowodu: górna, nierozdzielna część łącząca się ze sworzniem tłokowym. W przypadku sworznia pływającego w główkę wprasowana jest tulejka brązowa smarowana rozbryzgowo lub natryskowo przez otwór olejowy.',
              'Trzon korbowodu: część środkowa o przekroju DWUTEOWYM (zapewniającym najwyższą sztywność na wyboczenie przy minimalnej masie). Często wewnątrz trzonu wywiercony jest kanał olejowy doprowadzający olej ze stopy do główki.',
              'Stopa korbowodu: dolna, DZIELONA część obejmująca czop korbowy wału korbowego. Składa się z części górnej (zintegrowanej z trzonem) oraz odkręcanej pokrywy stopy korbowodu, w których osadzone są dwie półpanewki ślizgowe.'
            ]
          },
          {
            heading: '2. Rodzaje korbowodów ze względu na podział stopy i konstrukcję silnika',
            content:
              'W zależności od technologii wytwarzania oraz średnicy cylindra i czopa wału stosuje się różne konstrukcje korbowodów:',
            table: {
              headers: ['Rodzaj korbowodu', 'Cechy konstrukcyjne', 'Zastosowanie i zasady montażowe'],
              rows: [
                ['Z podziałem prostym (prostopadłym)', 'Płaszczyzna podziału stopy jest prostopadła (90°) do osi podłużnej trzonu korbowodu', 'Silniki o mniejszych średnicach czopów korbowych (stopa bez problemu przechodzi górą przez tuleję cylindra podczas demontażu tłoka)'],
                ['Z podziałem ukośnym (skośnym)', 'Płaszczyzna podziału stopy jest nachylona pod kątem 30° – 60° względem osi trzonu', 'Silniki wysokoprężne (ZS) i wysilone o dużych średnicach czopów wału – ukośny podział zmniejsza szerokość gabarytową stopy, umożliwiając wyjęcie tłoka z korbowodem górą przez cylinder!'],
                ['Korbowód łamany (Fracture-split / kruszeniowy)', 'Stopa wykonywana jako jedna całość, a następnie precyzyjnie przełamywana (rozrywana) po nacięciu laserowym', 'Unikalna, krystaliczna powierzchnia przełomu zapewnia idealne spasowanie pokrywy ze stopą bez tulejek ustalających. UWAGA: pokrywy są absolutnie niewymienne i nie wolno odkładać ich powierzchnią przełomu do metalowego stołu!'],
                ['Korbowody współbieżne (silniki V)', 'Dwa identyczne korbowody z przeciwległych rzędów cylindrów osadzone obok siebie na jednym wspólnym czopie korbowym', 'Najpopularniejsze rozwiązanie we współczesnych silnikach widlastych V6 i V8 (wymaga minimalnego przesunięcia osi cylindrów obu głowic)'],
                ['Korbowód główny i doczepny / widełkowy', 'Jeden korbowód główny obejmuje czop wału, a drugi (doczepny) jest połączony sworzniem ze stopą głównego (lub stopa jednego jest rozwidlona)', 'Silniki widlaste o dużej mocy i silniki gwiazdowe, w których osie cylindrów obu rzędów muszą leżeć w tej samej płaszczyźnie']
              ]
            }
          },
          {
            heading: '3. Rodzaje osadzenia sworznia tłokowego i montaż panewek korbowodowych',
            content:
              'Sworzeń tłokowy łączy główkę korbowodu z piastami tłoka. W praktyce warsztatowej spotyka się dwa rozwiązania:',
            bullets: [
              'Sworzeń pływający: obraca się swobodnie zarówno w tulejce główki korbowodu, jak i w piastach tłoka (po rozgrzaniu). Przed wysunięciem poosiowym i porysowaniem gładzi cylindra zabezpieczają go dwa sprężyste pierścienie osadcze (Segera) w rowkach tłoka.',
              'Sworzeń zaciskowy (stały w główce korbowodu): osadzony w główce korbowodu z pasowaniem ciasnym (wciskowym – montaż po podgrzaniu główki do ok. 250–300°C), a w piastach tłoka obraca się z luzem (nie wymaga pierścieni Segera!).',
              'Panewki korbowodowe i „zamki”: tzw. zamki (wypusty) w półpanewkach służą wyłącznie do USTALENIA POŁOŻENIA osiowego i obwodowego podczas montażu (zamek do zamka!). Przed obróceniem się panewki w stopie podczas pracy silnika chroni wyłącznie ZACISK MONTAŻOWY (odpowiedni moment i kąt dokręcenia śrub stopy korbowodu)!'
            ]
          },
          {
            heading: '4. Pomiary metrologiczne i tolerancje układu korbowo-tłokowego (Weryfikacja MOT.05)',
            content:
              'Podczas naprawy głównej silnika na egzaminie zawodowym wykonuje się precyzyjne pomiary mikrometryczne gładzi cylindrów, tłoków, pierścieni oraz czopów wału korbowego:',
            table: {
              headers: ['Weryfikowany parametr', 'Przyrząd i miejsce pomiaru', 'Typowa wartość nominalna / graniczna'],
              rows: [
                ['Owalizacja i stożkowatość tulei cylindra', 'Średnicówka czujnikowa w 3 poziomach wysokości (góra, środek, dół) i w 2 płaszczyznach (wzdłuż i w poprzek osi wału)', 'Dopuszczalna owalizacja i stożkowatość: maks. 0,03 – 0,05 mm (powyżej -> szlif na wymiar nadwymiarowy +0,25 / +0,50 mm)'],
                ['Średnica płaszcza tłoka i luz montażowy', 'Mikrometr zewnętrzny – pomiar prostopadle do osi sworznia tłokowego ok. 10–15 mm od dolnej krawędzi płaszcza', 'Luz montażowy tłoka w cylindrze: 0,025 – 0,060 mm (zależnie od średnicy i typu silnika ZI/ZS)'],
                ['Luz w zamku pierścienia tłokowego', 'Szczelinomierz listkowy po włożeniu samego pierścienia do cylindra na głębokość ok. 15–20 mm od dołu', 'Nowy pierścień: 0,20 – 0,45 mm | Granica zużycia: 0,80 – 1,00 mm. Przy montażu zamki 3 pierścieni przestawić co 120°!'],
                ['Luz osiowy pierścienia w rowku tłoka', 'Szczelinomierz listkowy wsuwany między boczną powierzchnię pierścienia a ściankę rowka tłoka', 'Nowy: 0,03 – 0,07 mm | Graniczne wybicie rowka tłoka: 0,12 – 0,15 mm'],
                ['Luz olejowy czop–panewka (Plastigage)', 'Kalibrowana nitka plastyczna Plastigage zgnieciona przez dokręconą stopę korbowodu (bez obracania wałem!)', 'Luz olejowy: 0,025 – 0,065 mm (odczyt szerokości rozpłaszczonego paska na skali wzorcowej)'],
                ['Luz poosiowy (wzdłużny) wału korbowego', 'Czujnik zegarowy w statywie magnetycznym przystawiony do czoła wału (regulowany półpierścieniami oporowymi)', 'Wartość nominalna: 0,07 – 0,18 mm (granica zużycia półpierścieni: 0,25 – 0,30 mm)']
              ]
            }
          },
          {
            heading: '5. Specyficzne konstrukcje układu korbowo-tłokowego i gładzi cylindrowych według marek',
            content:
              'W zależności od marki i przeznaczenia silnika producenci stosują unikalne rozwiązania korbowodów, tłoków i powłok tulei cylindrowych:',
            table: {
              headers: ['Rozwiązanie konstrukcyjne', 'Marki i modele / Kody silników', 'Cel techniczny i uwagi warsztatowe'],
              rows: [
                ['Korbowód z główką trapezową (skośną)', 'Grupa VAG (1.9/2.0 TDI, 3.0 V6 TDI), Mercedes (OM651), PSA (2.0 BlueHDi)', 'Główka korbowodu jest szersza u dołu (w kształcie trapezu), a piasty tłoka u góry. Zwiększa to powierzchnię nośną sworznia tłokowego w suwie pracy pod ogromnym ciśnieniem spalania w dieslu!'],
                ['Wielodźwigniowy korbowód o zmiennym stopniu sprężania (VC-Turbo)', 'Nissan / Infiniti (1.5 VC-Turbo e-Power w Qashqai/X-Trail oraz 2.0 KR20DDET)', 'Korbowód połączony jest z czopem wału za pośrednicwem wahliwego łącznika (Multi-link) i wałka sterującego. Siłownik zmienia wysokość GMP tłoka w czasie jazdy (ε od 8:1 do 14:1)!'],
                ['Stalowe tłoki w aluminiowym kadłubie z powłoką Nanoslide', 'Mercedes-Benz (2.0d OM654, 3.0d OM656), Renault/Volvo w wybranych wysilonych ZS', 'Stalowy tłok jest niższy, wytrzymuje większe ciśnienia spalania i rozszerza się cieplnie mniej niż aluminium, a żelazowo-węglowa powłoka Nanoslide zmniejsza tarcie o 50%'],
                ['Panewki bez zamków ustalających (ustalane przyrządem) i panewki Sputter', 'Renault (1.5 dCi K9K), VAG (TDI/TSI), BMW (seria N/B oraz M-Power S65/S85)', 'W 1.5 dCi K9K półpanewki nie posiadają wyciętych zamków! W silnikach TDI GÓRNA panewka korbowodowa (bardziej obciążona) jest wykonana w technologii Sputter (oznaczona napisem SPUTTER – nie wolno zamienić z dolną!)'],
                ['Powłoki bez tulei żeliwnych: Alusil / Nikasil / APS (natrysk plazmowy)', 'VW (1.5 TSI EA211 evo), Renault/Mercedes (1.3 TCe), BMW (M52/N62), Porsche, Nissan GT-R', 'Tuleje z natryskiem plazmowym (0,15–0,20 mm) NIE PODLEGAJĄ szlifowaniu ani klasycznemu honowaniu na wymiar naprawczy!']
              ]
            }
          }
        ],
        examTip:
          'Dwa kluczowe pytania na egzaminie MOT.05: 1) Po co stosuje się ukośny podział stopy korbowodu? Aby szeroka stopa korbowodu przeszła przez mniejszą średnicę cylindra podczas demontażu tłoka do góry! 2) Śruby stopy korbowodu są śrubami plastycznymi (dokręcanymi momentem + kątem, np. 30 Nm + 90°) i przy każdej naprawie podlegają BEZWZGLĘDNEJ WYMIANIE na nowe!',
        quiz: [
          {
            question: 'W jakim celu w wielu silnikach wysokoprężnych stosuje się ukośny (skośny) podział stopy korbowodu zamiast podziału prostopadłego?',
            options: [
              'W celu zmniejszenia wymiaru poprzecznego stopy, co umożliwia wyjęcie tłoka wraz z korbowodem górą przez otwór cylindra mimo dużej średnicy czopa wału',
              'Aby wyeliminować konieczność stosowania panewek ślizgowych',
              'Aby umożliwić smarowanie silnika mieszanką paliwa z olejem jak w dwusuwie',
              'Ponieważ ukośna stopa nie wymaga skręcania śrubami'
            ],
            correctIndex: 0,
            explanation: 'W silnikach o dużym obciążeniu czopy wału korbowego mają dużą średnicę. Prostopadle dzielona stopa byłaby szersza niż średnica cylindra i nie dałoby się wyjąć tłoka z korbowodem przez górną płaszczyznę bloku.'
          },
          {
            question: 'Czym charakteryzuje się korbowód ze stopą dzieloną metodą łamania (kruszenia – fracture-split)?',
            options: [
              'Powierzchnia styku stopy z pokrywą jest idealnie wypolerowana na lustro i można zamieniać pokrywy między cylindrami',
              'Pokrywa jest odłamywana od jednorodnego odkucia korbowodu, a chropowata struktura przełomu gwarantuje idealne, jedyne możliwe spasowanie obu części',
              'Korbowód ten wykonany jest z tworzywa sztucznego wzmacnianego włóknem szklanym',
              'Pokrywa stopy jest przyspawana na stałe po założeniu na wał korbowy'
            ],
            correctIndex: 1,
            explanation: 'Technologia łamania stopy korbowodu tworzy niepowtarzalny mikrozarys przełomu. Pokrywy nigdy nie wolno zamieniać z innym korbowodem ani obrócić o 180°, a śruby dokręca się po nasmarowaniu czopa czystym olejem.'
          }
        ]
      },
      {
        id: 'uklad-rozrzadu',
        title: 'Układ rozrządu',
        subtitle: 'Zadania układu rozrządu, typy OHV, OHC i DOHC, napęd paskiem zębatym i łańcuchem, luz zaworowy oraz zmienne fazy rozrządu (VVT).',
        readingTime: '12 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'rozrząd', 'wałek rozrządu', 'zawór', 'popychacz', 'pasek rozrządu', 'łańcuch',
          'napinacz', 'luz zaworowy', 'szczelinomierz', 'ohv', 'ohc', 'dohc', 'znaki rozrządu', 'kolizyjny'
        ],
        summary:
          'Układ rozrządu w silniku czterosuwowym steruje otwieraniem i zamykaniem zaworów dolotowych oraz wylotowych ściśle w funkcji kąta obrotu wału korbowego. Wałek rozrządu obraca się zawsze 2 razy wolniej niż wał korbowy (przełożenie 2:1).',
        sections: [
          {
            heading: '1. Klasyfikacja układów rozrządu i przeniesienie napędu',
            content:
              'W czterosuwowym silniku spalinowym jeden pełny cykl pracy (ssanie – sprężanie – praca – wydech) trwa 2 obroty wału korbowego (720° OWK) i 1 obrót wałka rozrządu (360°):',
            table: {
              headers: ['Typ rozrządu', 'Umiejscowienie wałka i zaworów', 'Charakterystyka konstrukcyjna'],
              rows: [
                ['OHV (Overhead Valve)', 'Wałek rozrządu w kadłubie, zawory w głowicy', 'Sterowanie za pomocą długich lasek popychaczy i dźwigienek zaworowych – duża masa bezwładnościowa'],
                ['OHC / SOHC (Single Overhead Camshaft)', 'Jeden wałek rozrządu w głowicy', 'Mniejsza liczba elementów pośredniczących, napęd paskiem zębatym lub łańcuchem'],
                ['DOHC (Double Overhead Camshaft)', 'Dwa wałki rozrządu w głowicy (osobny dla zaworów dolotowych i wylotowych)', 'Idealny dla głowic 16-zaworowych (4 zawory na cylinder), ułatwia zastosowanie zmiennych faz rozrządu (VVT)']
              ]
            }
          },
          {
            heading: '2. Luz zaworowy – cel stosowania, pomiar i regulacja',
            content:
              'Podczas pracy silnika trzonki zaworów nagrzewają się znacznie mocniej niż głowica (szczególnie zawory wylotowe osiągające do 800°C) i wydłużają się wskutek rozszerzalności cieplnej:',
            bullets: [
              'Dlaczego luz zaworowy dla zaworów wylotowych jest zawsze WIĘKSZY niż dla zaworów dolotowych? Ponieważ zawory wylotowe pracują w strumieniu gorących spalin i wydłużają się cieplnie znacznie bardziej (np. luz dolotowy: 0,15–0,20 mm, luz wylotowy: 0,25–0,35 mm na zimnym silniku).',
              'Skutki ZBYT MAŁEGO luzu zaworowego: niedomykanie zaworu po rozgrzaniu silnika -> utrata kompresji, wypalenie przylgni zaworu i gniazda zaworowego.',
              'Skutki ZBYT DUŻEGO luzu zaworowego: metaliczne stukanie rozrządu, opóźnione otwarcie i wcześniejsze zamknięcie zaworu (gorsze napełnianie cylindra), przyspieszone zużycie krzywek.',
              'W większości współczesnych silników stosuje się popychacze hydrauliczne zasilane olejem silnikowym, które automatycznie kasują luz zaworowy.'
            ]
          },
          {
            heading: '3. Wymiana paska zębatego rozrządu – kluczowe zasady warsztatowe',
            content:
              'Zerwanie paska lub przeskoczenie o kilka zębów w silniku kolizyjnym prowadzi do uderzenia tłoków w otwarte zawory:',
            steps: [
              'Przed demontażem starego paska ustaw wał korbowy i wałki rozrządu na fabrycznych znakach kontrolnych lub zamontuj dedykowane blokady serwisowe.',
              'Wymieniaj pasek rozrządu zawsze w komplecie z rolką napinającą, rolkami prowadzącymi oraz pompą cieczy chłodzącej (jeśli jest napędzana paskiem rozrządu).',
              'Po zamontowaniu nowego paska i ustawieniu napięcia napinacza wykonaj RĘCZNIE kluczem pełne 2 obroty wału korbowego zgodnie z kierunkiem pracy silnika i ponownie skontroluj pokrywanie się znaków.',
              'Nigdy nie zginaj nowego paska pod ostrym kątem (ryzyko pęknięcia kordu z włókna szklanego) i chroń go przed kontaktem z olejem lub płynem chłodniczym.'
            ]
          },
          {
            heading: '4. Weryfikacja głowicy, zaworów, wałka rozrządu i kolejność dokręcania głowicy',
            content:
              'Podczas naprawy głowicy oraz układu rozrządu mechanik weryfikuje następujące parametry geometryczne i montażowe:',
            table: {
              headers: ['Czynność weryfikacyjna / montażowa', 'Narzędzie pomiarowe', 'Parametry techniczne i zasady'],
              rows: [
                ['Pomiar płaskości (wichrowatości) dolnej płaszczyzny głowicy', 'Liniał krawędziowy precyzyjny + szczelinomierz listkowy (pomiar wzdłużny i po przekątnych)', 'Maksymalna dopuszczalna odchyłka płaskości: 0,05 mm (powyżej -> planowanie głowicy na szlifierce)'],
                ['Kolejność dokręcania i odkręcania śrub głowicy', 'Klucz dynamometryczny + kątomierz (nowe śruby plastyczne TTY!)', 'DOKRĘCANIE: spiralnie / na krzyż OD ŚRODKA na zewnątrz. ODKRĘCANIE: odwrotnie – OD ZEWNĄTRZ do środka!'],
                ['Wznios krzywek i bicie wałka rozrządu', 'Mikrometr zewnętrzny (wysokość H minus średnica podstawy D) oraz czujnik zegarowy w pryzmach', 'Dopuszczalne bicie środkowego czopa wałka rozrządu: maks. 0,02 – 0,03 mm'],
                ['Regulacja zaworów podkładkami / szklankami', 'Mikrometr + szczelinomierz listkowy', 'Wzór na nową grubość płytki: N = S + (L_zmierzony - L_nominalny), gdzie S to grubość starej płytki']
              ]
            }
          },
          {
            heading: '5. Wykaz systemów zmiennych faz i wzniosu zaworów oraz nietypowych rozrządów według marek',
            content:
              'Zestawienie tożsamych i specyficznych systemów sterowania zaworami oraz rozwiązań napędu rozrządu w najpopularniejszych markach:',
            table: {
              headers: ['Marka / Producent', 'Nazwa systemu rozrządu', 'Zasada działania i specyfika serwisowa w modelach'],
              rows: [
                ['Honda', 'VTEC / i-VTEC', 'Skokowa zmiana wzniosu zaworów! Powyżej ~4500 obr./min zawór elektromagnetyczny podaje ciśnienie oleju na sworzeń, który spina dwie dźwigienki z trzecią (środkową) napędzaną wysoką krzywką sportową'],
                ['BMW (oraz PSA/Mini 1.6 VTi)', 'VANOS / Double-VANOS + Valvetronic', 'VANOS zmienia kąt fazowy wałków, a Valvetronic za pomocą silnika elektrycznego i wałka mimośrodowego płynnie zmienia skok zaworów dolotowych (od 0,2 do 9,9 mm), przejmując funkcję przepustnicy!'],
                ['Fiat / Alfa Romeo / Jeep (Stellantis)', 'MultiAir / UniAir / TwinAir', 'Brak wałka rozrządu zaworów dolotowych! Krzywka wydechowa napędza tłoczek komory olejowej. Elektrozawór sterowany przez ECU decyduje, czy olej otworzy zawór na pełny skok, czy upuści ciśnienie (wrażliwy na brudny olej!)'],
                ['Grupa VAG (Audi / VW / Porsche)', 'AVS (Audi Valvelift) / ACT (COD) / VarioCam Plus', 'Przesuwne tuleje na wałku rozrządu ze spiralnymi rowkami. Elektromagnetyczny trzpień przesuwa tuleję na zarys mniejszej krzywki lub krzywki „zerowej” (wyłączającej cylindry 2 i 3 w 1.4/1.5 TSI ACT)'],
                ['Toyota / Lexus', 'VVT-i / Dual VVT-i / VVT-iE / Valvematic', 'Łopatkowe wariatory faz rozrządu sterowane ciśnieniem oleju (VVT-i) lub silnikiem elektrycznym (VVT-iE) oraz system bezstopniowej zmiany wzniosu zaworów Valvematic (np. Avensis/Corolla 1.8 2ZR-FAE)'],
                ['Ford oraz PSA (Peugeot/Citroën/Opel)', 'Pasek rozrządu w kąpieli olejowej (Wet Belt / BIO)', 'Stosowany w Ford 1.0 EcoBoost, 2.0 EcoBlue oraz PSA 1.2 PureTech (EB2). Pasek z kordem odpornym na olej pracuje wewnątrz bloku. Rozpuszczanie się gumy paska (zły olej/paliwo w oleju) zatyka smok pompy oleju!'],
                ['BMW (N47/B47/N57), Audi (3.0 TDI), Mercedes (OM651/OM654)', 'Łańcuch rozrządu od strony skrzyni biegów (z tyłu bloku)', 'Umieszczony przy kole zamachowym ze względu na mniejsze drgania skrętne wału i ochronę pieszych (niższa maska). Wymiana rozrządu wymaga wyjęcia skrzyni biegów lub silnika!']
              ]
            }
          }
        ],
        examTip:
          'Klasyczne pytanie CKE: „Ile obrotów wykona wałek rozrządu w silniku czterosuwowym, gdy wał korbowy wykona 3000 obrotów?” Odpowiedź: dokładnie połowę, czyli 1500 obrotów (koło zębate wałka rozrządu ma 2 razy więcej zębów niż koło na wale korbowym).',
        quiz: [
          {
            question: 'Dlaczego konstrukcyjny luz zaworowy na zimnym silniku jest większy dla zaworów wylotowych niż dla zaworów dolotowych?',
            options: [
              'Ponieważ zawory wylotowe mają zawsze większą średnicę grzybka',
              'Ponieważ zawory wylotowe nagrzewają się do wyższej temperatury i wykazują większe wydłużenie cieplne',
              'Ponieważ zawory dolotowe są chłodzone płynem hamulcowym',
              'Ponieważ sprężyny zaworów wylotowych są wykonane z miedzi'
            ],
            correctIndex: 1,
            explanation: 'Zawory wylotowe omywane są gorącymi spalinami (700–850°C), podczas gdy zawory dolotowe są chłodzone świeżym ładunkiem powietrza. Większe nagrzewanie oznacza większe wydłużenie trzonka.'
          },
          {
            question: 'Co należy bezwzględnie wykonać bezpośrednio po zamontowaniu i napięciu nowego paska rozrządu, przed pierwszym uruchomieniem silnika rozrusznikiem?',
            options: [
              'Nasmarować zęby paska smarem grafitowym dla wyciszenia pracy',
              'Obrócić ręcznie wałem korbowym o dwa pełne obroty (720°) i ponownie sprawdzić znaki ustawcze',
              'Uruchomić silnik na maksymalnych obrotach na czas 30 sekund',
              'Poluzować napinacz o połowę zakresu, aby pasek się ułożył'
            ],
            correctIndex: 1,
            explanation: 'Dwukrotny ręczny obrót wału korbowego pozwala upewnić się, że tłoki nie kolidują z zaworami, pasek ułożył się równomiernie na kołach, a znaki kontrolne nadal się pokrywają.'
          }
        ]
      },
      {
        id: 'uklad-chlodzenia',
        title: 'Układ chłodzenia silnika',
        subtitle: 'Mały i duży obieg cieczy chłodzącej, budowa termostatu, pompa cieczy, korek ciśnieniowy zbiorniczka, płyny G11/G12/G13 oraz badanie refraktometrem.',
        readingTime: '11 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'układ chłodzenia', 'termostat', 'mały obieg', 'duży obieg', 'chłodnica', 'nagrzewnica',
          'pompa wody', 'płyn chłodniczy', 'glikol', 'refraktometr', 'korek zbiorniczka', 'nadciśnienie'
        ],
        summary:
          'Układ chłodzenia utrzymuje optymalną temperaturę pracy silnika spalinowego (ok. 85–105°C). Zbyt niska temperatura zwiększa zużycie paliwa i przyspiesza zużycie cylindrów, natomiast przegrzanie prowadzi do wydmuchania uszczelki pod głowicą (UPG) i zatarcia tłoków.',
        sections: [
          {
            heading: '1. Mały i duży obieg cieczy chłodzącej oraz rola termostatu',
            content:
              'Aby zimny silnik po rozruchu jak najszybciej osiągnął temperaturę roboczą, układ chłodzenia podzielony jest na dwa obiegi przełączane przez termostat:',
            table: {
              headers: ['Obieg chłodzenia', 'Zakres temperatury cieczy', 'Droga przepływu płynu chłodniczego'],
              rows: [
                ['Mały obieg (krótki)', 'Zimny silnik (poniżej ok. 82–87°C)', 'Termostat ZAMKNIĘTY. Pompa tłoczy płyn tylko przez płaszcz wodny bloku, głowicę i nagrzewnicę kabiny (z pominięciem chłodnicy głównej!). Silnik szybko się nagrzewa'],
                ['Duży obieg (pełny)', 'Rozgrzany silnik (powyżej ok. 87–92°C)', 'Wosk w mieszku termostatu rozszerza się i OTWIERA zawór główny. Gorący płyn przepływa przez chłodnicę główną, gdzie oddaje ciepło powietrzu'],
                ['Termostat z grzałką (MAP)', 'Sterowany przez ECU (90–108°C)', 'Przy częściowym obciążeniu ECU utrzymuje wyższą temp. (105°C – niższe spalanie), a przy pełnym obciążeniu włącza grzałkę w termostacie, wymuszając wcześniejsze otwarcie (ok. 85°C)']
              ]
            }
          },
          {
            heading: '2. Korek zbiorniczka wyrównawczego – dlaczego w układzie panuje nadciśnienie?',
            content:
              'Zamknięty układ chłodzenia pracuje w warunkach nadciśnienia wynoszącego zazwyczaj 0,12 – 0,15 MPa (1,2 – 1,5 bar):',
            bullets: [
              'Fizyczna rola nadciśnienia: podwyższenie ciśnienia o ok. 1,4 bar podnosi temperaturę wrzenia płynu chłodniczego (mieszaniny wody i glikolu) ze 106°C do ponad 120–125°C, zapobiegając kawitacji i wrzeniu punktowemu w głowicy.',
              'W korku zbiorniczka wyrównawczego znajdują się DWA zaworki: 1) Zawór nadciśnieniowy (otwiera się powyżej 1,4 bar, chroniąc węże i chłodnicę przed rozerwaniem) oraz 2) Zawór podciśnieniowy (otwiera się podczas stygnięcia silnika, wpuszczając powietrze, aby węże gumowe się nie zapadły!).',
              'Odkręcenie korka na gorącym silniku powoduje natychmiastowy spadek ciśnienia do atmosferycznego i gwałtowne zagotowanie (wyrzut wrzącego płynu)!'
            ]
          },
          {
            heading: '3. Płyny chłodnicze (G11, G12, G13), diagnostyka refraktometrem i próba szczelności',
            content:
              'Płyn eksploatacyjny to mieszanina glikolu etylenowego (lub propylenowego/gliceryny) i wody demineralizowanej w proporcji ok. 50% / 50% (temperatura krzepnięcia ok. -35°C do -37°C):',
            steps: [
              'Kontrola temperatury krzepnięcia płynu chłodniczego: nanieś 2 krople płynu na pryzmat refraktometru optycznego (lub użyj glikometru pływakowego) i odczytaj na skali granicę światłocienia dla glikolu etylenowego/propylenowego (wymagane min. -35°C w klimacie Polski).',
              'Próba szczelności układu chłodzenia: na zimnym silniku nakręć na zbiorniczek wyrównawczy adapter ręcznej pompki ciśnieniowej z manometrem, wytwórz nadciśnienie ok. 1,2 – 1,4 bar i obserwuj przez 10 minut, czy ciśnienie nie spada oraz czy na króćcach i pompie cieczy nie pojawia się wyciek.',
              'Test na obecność spalin (CO₂) w układzie chłodzenia (weryfikacja uszkodzenia uszczelki pod głowicą – UPG): nałóż rurkę fermentacyjną z niebieskim płynem reakcyjnym na zbiorniczek wyrównawczy. Zmiana barwy płynu z niebieskiej na zieloną/żółtą oznacza przedostawanie się spalin do płaszcza wodnego!'
            ]
          },
          {
            heading: '4. Klasyfikacja płynów chłodniczych i badanie termostatu po wymontowaniu',
            content:
              'Dobór płynu chłodniczego oraz weryfikacja wymontowanego termostatu w kąpieli wodnej z termometrem:',
            table: {
              headers: ['Specyfikacja / Badanie', 'Technologia inhibitorów korozji', 'Właściwości i parametry kontrolne'],
              rows: [
                ['G11 (IAT – Inorganic Acid Technology)', 'Krzemiany nieorganiczne (zwykle kolor niebieski lub zielony)', 'Tworzy warstwę ochronną w całym układzie; wymaga wymiany co 2–3 lata'],
                ['G12 / G12+ (OAT – Organic Acid Technology)', 'Kwasy organiczne bezkrzemianowe (kolor różowy / czerwony)', 'Działa miejscowo w ogniskach korozji, chroni chłodnice aluminiowe; trwałość do 5 lat'],
                ['G12++ / G13 (LOBRID)', 'Technologia hybrydowa (kwasy organiczne + dodatek krzemianów na bazie glikolu lub gliceryny)', 'Kolor fioletowy/liliowy; bardzo wysoka ochrona stopów aluminium i żeliwa'],
                ['Badanie wymontowanego termostatu', 'Zanurzenie w naczyniu z podgrzewaną wodą i termometrem laboratoryjnym', 'Początek otwarcia: zgodnie z cechą na korpusie (np. 87°C ± 2°C). Pełny skok zaworu: min. 7–8 mm przy temp. ok. 100–102°C']
              ]
            }
          },
          {
            heading: '5. Specyficzne rozwiązania układów chłodzenia i normy płynów według marek',
            content:
              'Współczesne samochody wykorzystują aktywne zarządzanie temperaturą (ITMS), elektryczne pompy cieczy oraz rozdzielone obiegi chłodzenia dla głowicy i bloku:',
            table: {
              headers: ['Marka / Koncern', 'Fabryczna specyfikacja płynu', 'Specyficzne rozwiązanie konstrukcyjne i procedura odpowietrzania'],
              rows: [
                ['Grupa VAG (VW, Audi, Škoda, Seat)', 'TL 774-J (G13) / TL 774-L (G12 evo)', 'W silnikach 1.8/2.0 TSI (EA888) zastosowano zintegrowany moduł obrotowych przesłon regulujących przepływ z osobnym małym paskiem napędzającym pompę wody z wałka wyrównoważającego; w 2.0 TDI (EA288) pompa cieczy posiada przesuwną tuleję odcinającą tłoczenie na zimnym silniku!'],
                ['BMW', 'BMW LC-87 (G48 niebieski) / LC-18 (HT-12 zielony)', 'Od serii N52/N54/B48/B58 stosowane są główne ELEKTRYCZNE pompy cieczy chłodzącej (ok. 200–400 W). Odpowietrzanie wykonuje się na zgaszonym silniku: włącz zapłon, ustaw ogrzewanie na MAX, dmuchawę na 1 bieg i przytrzymaj wciśnięty pedał gazu przez 10 sekund – pompa elektryczna uruchomi 12-minutowy program odpowietrzania!'],
                ['Toyota / Lexus (Hybrydy HSD)', 'Toyota Super Long Life Coolant (SLLC – różowy)', 'Dwa całkowicie niezależne układy chłodzenia z dwoma zbiorniczkami wyrównawczymi pod maską: 1) Wysokotemperaturowy dla silnika spalinowego (z elektryczną pompą cieczy) oraz 2) Niskotemperaturowy (do 65°C) chłodzący falownik (inwerter) i generatory MG1/MG2!'],
                ['Peugeot / Citroën (PSA) oraz Renault', 'PSA B71 5110 (Glystop) | Renault Typ D (Glaceol RX)', 'W silnikach 1.6 THP / 1.6 VTi (EP6) koło pompy cieczy napędzane jest z koła pasowego wału za pomocą elektrycznie odchylanego koła ciernego (tzw. „gitary”) – pompa włącza się dopiero po rozgrzaniu silnika']
              ]
            }
          }
        ],
        examTip:
          'Jak szybko zdiagnozować uszkodzenie termostatu na egzaminie MOT.05? 1) Jeśli termostat zablokował się w pozycji ZAMKNIĘTEJ: silnik szybko się przegrzewa (ponad 110°C), a chłodnica główna i jej dolny wąż pozostają ZIMNE! 2) Jeśli termostat zablokował się w pozycji OTWARTEJ: silnik bardzo długo się nagrzewa, a podczas jazdy z dużą prędkością temperatura na wskaźniku spada poniżej 70°C.',
        quiz: [
          {
            question: 'Jaki objaw wskazuje na zablokowanie się termostatu układu chłodzenia w pozycji stale zamkniętej?',
            options: [
              'Silnik nie może osiągnąć temperatury roboczej podczas jazdy poza miastem',
              'Silnik szybko ulega przegrzaniu, a chłodnica główna oraz jej wąż powrotny pozostają zimne lub lekko letnie',
              'Wentylator chłodnicy nie wyłącza się po wyjęciu kluczyka ze stacyjki',
              'Temperatura krzepnięcia płynu spada do -50°C'
            ],
            correctIndex: 1,
            explanation: 'Zablokowany zamknięty termostat nie puszcza gorącego płynu na duży obieg do chłodnicy. Cały płyn krąży tylko w małym obiegu, co skutkuje gwałtownym przegrzaniem silnika przy zimnej chłodnicy.'
          },
          {
            question: 'W jakim celu układ chłodzenia silnika jest układem ciśnieniowym zamkniętym (pracującym przy nadciśnieniu ok. 1,2 – 1,5 bar)?',
            options: [
              'Aby podwyższyć temperaturę wrzenia płynu chłodniczego powyżej 120°C i zapobiec powstawaniu pęcherzy parowych w głowicy',
              'Aby przyspieszyć zużycie uszczelnienia pompy cieczy chłodzącej',
              'Aby obniżyć temperaturę zamarzania wody destylowanej do -40°C',
              'Aby zablokować przepływ cieczy przez nagrzewnicę kabiny'
            ],
            correctIndex: 0,
            explanation: 'Zgodnie z prawami fizyki wzrost ciśnienia nad powierzchnią cieczy podnosi jej temperaturę wrzenia. Dzięki nadciśnieniu utrzymywanemu przez korek zbiorniczka płyn nie wrze nawet w temperaturze 115–120°C.'
          }
        ]
      },
      {
        id: 'uklad-klimatyzacji',
        title: 'Układ klimatyzacji i wentylacji',
        subtitle: 'Obieg termodynamiczny klimatyzacji (sprężarka, skraplacz, zawór rozprężny, parownik), czynniki R134a i R1234yf, oleje PAG/POE oraz diagnostyka ciśnień LP/HP.',
        readingTime: '12 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'klimatyzacja', 'sprężarka', 'kompresor', 'skraplacz', 'parownik', 'zawór rozprężny',
          'osuszacz', 'r134a', 'r1234yf', 'pag', 'poe', 'ciśnienie lp', 'ciśnienie hp', 'próżnia', 'ozonowanie'
        ],
        summary:
          'Układ klimatyzacji samochodowej nie „wytwarza chłodu”, lecz odbiera ciepło z powietrza wdmuchiwanego do kabiny (w parowniku) i oddaje je na zewnątrz pojazdu (w skraplaczu przed chłodnicą silnika), wykorzystując przemiany fazowe czynnika chłodniczego (parowanie pod niskim ciśnieniem i skraplanie pod wysokim ciśnieniem).',
        interactiveTool: 'ac-pressure-simulator',
        sections: [
          {
            heading: '1. Budowa obiegu chłodniczego i stany skupienia czynnika',
            content:
              'Obieg klimatyzacji jest podzielony na stronę WYSOKIEGO CIŚNIENIA (HP – od sprężarki do zaworu rozprężnego) oraz stronę NISKIEGO CIŚNIENIA (LP – od zaworu rozprężnego przez parownik do ssania sprężarki):',
            table: {
              headers: ['Element układu (w kolejności obiegu)', 'Strona ciśnienia', 'Przemiana fizyczna czynnika chłodniczego'],
              rows: [
                ['1. Sprężarka (kompresor klimatyzacji)', 'Granica LP -> HP', 'Zasysa zimny GAZ pod niskim ciśnieniem (~2 bar) i spręża go do gorącego GAZU pod wysokim ciśnieniem (~12–16 bar). UWAGA: sprężarka nigdy nie może zassać cieczy (ciecz jest nieściśliwa)!'],
                ['2. Skraplacz (kondensator – przed chłodnicą)', 'Wysokie ciśnienie (HP)', 'Gorący gaz oddaje ciepło powietrzu zewnętrznemu (wspomagany wentylatorem) i SKRAPLA SIĘ, przechodząc w ciepłą CIECZ pod wysokim ciśnieniem'],
                ['3. Filtr-osuszacz (w układach z TXV)', 'Wysokie ciśnienie (HP)', 'Wychwytuje wilgoć (higroskopijny silikażel) oraz opiłki i stanowi zbiornik buforowy ciekłego czynnika'],
                ['4. Zawór rozprężny (TXV) lub dysza dławiąca', 'Granica HP -> LP', 'Gwałtownie dławi ciśnienie ciekłego czynnika z ~14 bar do ~2 bar, obniżając jego temperaturę do ok. 0°C'],
                ['5. Parownik (w obudowie nagrzewnicy w kabinie)', 'Niskie ciśnienie (LP)', 'Rozprężony czynnik WRZE (odparowuje) w niskiej temperaturze, intensywnie odbierając ciepło i wilgoć z powietrza wdmuchiwanego do kabiny']
              ]
            }
          },
          {
            heading: '2. Czynniki chłodnicze (R134a vs R1234yf) oraz oleje sprężarkowe (PAG vs POE)',
            content:
              'W układzie wraz z czynnikiem chłodniczym krąży specjalny olej syntetyczny smarujący elementy tłoczne sprężarki:',
            bullets: [
              'Czynnik R134a (tetrafluoroetan): stosowany w starszych pojazdach (współczynnik GWP = 1430), niepalny. Złączki serwisowe różnią się średnicą (HP większa, LP mniejsza).',
              'Czynnik R1234yf (tetrafluoropropen): stosowany w nowych pojazdach (GWP = 4 – bezpieczny dla klimatu), umiarkowanie palny (klasa A2L). Posiada inne złączki serwisowe niż R134a.',
              'Olej PAG (polialkiloglikolowy): stosowany w sprężarkach napędzanych paskiem wielorowkowym. Jest ekstremalnie HIGROSKOPIJNY – otwarta butelka chłonie wilgoć z powietrza w ciągu kilkunastu minut!',
              'Olej POE (poliestrowy) / nieprzewodzący prądu: obowiązkowy w samochodach hybrydowych (HEV/PHEV) i elektrycznych (EV), w których sprężarka klimatyzacji jest napędzana wewnętrznym silnikiem elektrycznym wysokiego napięcia (400 V). Zastosowanie zwykłego oleju PAG w hybrydzie spowoduje przebicie izolacji uzwojeń!'
            ]
          },
          {
            heading: '3. Procedura obsługi stacją klimatyzacji i dezynfekcja parownika',
            content:
              'Pełny cykl serwisowy wykonywany automatyczną stacją obsługi klimatyzacji obejmuje kolejno:',
            steps: [
              'Odzysk i recykling: odciągnięcie starego czynnika z układu, odseparowanie zużytego oleju i zważenie ilości odzyskanego gazu.',
              'Wytworzenie próżni (min. 20–30 minut): pompa próżniowa usuwa powietrze, a głębokie podciśnienie (~1 mbar) powoduje odparowanie i usunięcie wilgoci z układu (woda w próżni wrze w temperaturze pokojowej!).',
              'Test szczelności podciśnieniowej (lub próba ciśnieniowa mieszanką 95% azotu N₂ + 5% wodoru H₂ z detektorem elektronicznym w razie pustego układu!).',
              'Dozowanie świeżego oleju (tyle mililitrów, ile odseparowano + ewentualny dodatek przy wymianie podzespołu) oraz barwnika kontrastowego UV.',
              'Napełnienie czynnikiem chłodniczym ściśle według MASY [g] podanej na tabliczce znamionowej pod maską oraz wymiana filtra kabinowego i dezynfekcja parownika (ozonowaniem lub metodą ultradźwiękową).'
            ]
          },
          {
            heading: '4. Diagnostyka usterek klimatyzacji na podstawie manometrów LP i HP',
            content:
              'Wskazania manometru niskiego ciśnienia (LP – niebieski) oraz wysokiego ciśnienia (HP – czerwony) przy pracującym silniku (ok. 1500–2000 obr./min) i temp. otoczenia ~22°C pozwalają bezbłędnie wskazać usterkę:',
            table: {
              headers: ['Wskazanie LP (niskie)', 'Wskazanie HP (wysokie)', 'Diagnoza usterki w układzie klimatyzacji'],
              rows: [
                ['1,5 – 2,5 bar (Norma)', '11 – 16 bar (Norma)', 'Układ całkowicie sprawny. Temperatura powietrza u wylotu z kratki środkowej powinna wynosić ok. 4°C – 8°C'],
                ['Zbyt niskie (< 1,0 bar)', 'Zbyt niskie (< 7–8 bar)', 'Zbyt mała ilość czynnika chłodniczego w układzie (wyciek/nieszczelność) – słaba wydajność chłodzenia'],
                ['Zbyt wysokie (> 3,5 bar)', 'Zbyt niskie (< 7 bar) lub równe LP', 'Uszkodzona sprężarka klimatyzacji (brak sprężania / uszkodzony zawór sterujący PWM w kompresorze)'],
                ['Normalne lub wysokie', 'Bardzo wysokie (> 22–25 bar)', 'Brak chłodzenia skraplacza (niedziałający wentylator chłodnicy, zabite błotem lamele skraplacza) lub przepełniony układ'],
                ['Podciśnienie (< 0 bar)', 'Niskie lub normalne', 'Niedrożność (przytkany filtr-osuszacz lub zamarznięty / zablokowany w pozycji zamkniętej zawór rozprężny TXV)']
              ]
            }
          },
          {
            heading: '5. Specyfika konstrukcji układów klimatyzacji w różnych markach pojazdów',
            content:
              'Poszczególni producenci stosują odmienne typy sprężarek, elementów dławiących oraz układów pompy ciepła:',
            table: {
              headers: ['Rozwiązanie konstrukcyjne', 'Marki i modele pojazdów', 'Cechy charakterystyczne i diagnostyka warsztatowa'],
              rows: [
                ['Sprężarka bezsprzęgłowa o zmiennej pojemności skokowej (zawór PWM)', 'Grupa VAG (Climatronic – kompresory Sanden PXE16 / Denso 6SEU14), BMW, Mercedes-Benz, PSA', 'Brak klasycznego sprzęgła elektromagnetycznego! Wałek sprężarki obraca się stale z kołem pasowym (przy wyłączonej klimatyzacji tarcza zataczająca ma minimalny kąt wychylenia ~2% dla smarowania). UWAGA: kategoryczny zakaz uruchamiania silnika przy pustym układzie klimatyzacji (zatarcie sprężarki i zerwanie tarczy sprzęgła zrywalnego)!'],
                ['Układ z dyszą dławiącą (Orifice Tube) i zasobnikiem po stronie LP', 'Audi A4 (B5/B6/B7), Audi A6 (C5), wybrane modele Forda, Opla i aut amerykańskich', 'Zamiast termostatycznego zaworu rozprężnego TXV w rurce znajduje się stała kalibrowana dysza dławiąca z sitkiem, a duży zasobnik (akumulator czynnika) umieszczony jest po stronie NISKIEGO ciśnienia między parownikiem a sprężarką'],
                ['Elektryczna sprężarka wysokonapięciowa (HV) typu Scroll', 'Toyota / Lexus Hybrid (Prius, Corolla, RAV4, Camry), Honda e:HEV, auta elektryczne EV', 'Napędzana wewnętrznym silnikiem bezszczotkowym 3-fazowym AC z falownika (200–400 V). Chłodzi kabinę nawet przy wyłączonym silniku spalinowym na postoju. Wymaga wyłącznie oleju dielektrycznego POE (np. Denso ND-OIL 11)!'],
                ['Klimatyzacja i pompa ciepła na dwutlenek węgla R744 (CO₂)', 'Volkswagen ID.3 / ID.4 / ID.7, Audi Q4/Q8 e-tron, wybrana Mercedes Klasa S (W222/W223) i E (W213)', 'Ekologiczny czynnik R744 (GWP = 1), całkowicie niepalny, ale pracujący pod 10-krotnie wyższym ciśnieniem niż R134a (ciśnienie robocze LP ok. 35–45 bar, a HP aż do 100–130 bar!)']
              ]
            }
          }
        ],
        examTip:
          'Zapamiętaj rolę próżni podczas obsługi klimatyzacji na egzaminie MOT.05: długotrwałe wytwarzanie próżni (min. 20–30 min) nie służy wyłącznie do sprawdzenia szczelności, ale przede wszystkim do OSUSZENIA układu z wilgoci (w głębokiej próżni woda wrze i odparowuje już w temperaturze otoczenia 20°C)!',
        quiz: [
          {
            question: 'W jakim stanie skupienia i pod jakim ciśnieniem czynnik chłodniczy powinien trafiać do króćca ssawnego sprężarki klimatyzacji?',
            options: [
              'W stanie ciekłym pod wysokim ciśnieniem (ok. 15 bar)',
              'W stanie gazowym (para nasycona/przegrzana) pod niskim ciśnieniem (ok. 2 bar)',
              'W stanie stałym (jako suchy lód) pod ciśnieniem atmosferycznym',
              'W stanie ciekłym zmieszanym z płynem chłodniczym G12'
            ],
            correctIndex: 1,
            explanation: 'Ciecze są nieściśliwe – zassanie ciekłego czynnika przez sprężarkę spowodowałoby tzw. uderzenie hydrauliczne i zniszczenie zaworów sprężarki. Do sprężarki ze strony parownika trafia wyłącznie gaz pod niskim ciśnieniem (LP).'
          },
          {
            question: 'Dlaczego w samochodach hybrydowych i elektrycznych z elektryczną sprężarką klimatyzacji wysokiego napięcia nie wolno stosować standardowego oleju PAG?',
            options: [
              'Ponieważ olej PAG ma kolor zielony i brudzi wziernik',
              'Ponieważ standardowy olej PAG przewodzi prąd elektryczny i obniża rezystancję izolacji uzwojeń silnika wysokiego napięcia w sprężarce (wymagany jest olej dielektryczny POE)',
              'Ponieważ olej PAG zamarza w temperaturze +10°C',
              'Ponieważ w samochodach elektrycznych nie stosuje się skraplacza'
            ],
            correctIndex: 1,
            explanation: 'W elektrycznych sprężarkach klimatyzacji (HV) uzwojenia silnika elektrycznego mają bezpośredni kontakt z czynnikiem i olejem. Wymagany jest olej dielektryczny (nieprzewodzący prądu, np. POE), aby zapobiec zwarciu wysokiego napięcia do obudowy.'
          }
        ]
      },
      {
        id: 'budowa-zawieszenia',
        title: 'Układy zawieszenia',
        subtitle: 'Podział na zawieszenia zależne, półzależne (belka skrętna) i niezależne (MacPherson, wielowahaczowe Multi-Link), pneumatyczne oraz zasady napraw.',
        readingTime: '14 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'zawieszenie', 'zależne', 'półzależne', 'niezależne', 'belka skrętna', 'wielowahaczowe',
          'multi-link', 'amortyzator', 'sprężyna', 'wahacz', 'sworzeń wahacza', 'tuleja metalowo-gumowa',
          'silentblock', 'macpherson', 'stabilizator', 'pneumatyczne', 'ściągacz do sprężyn',
          'hydractive', 'airmatic', 'control blade', '4control', 'dcc', 'długa śruba audi'
        ],
        summary:
          'Układ zawieszenia łączy koła jezdne z nadwoziem pojazdu, przenosi siły napędowe, hamowania i boczne, a jednocześnie izoluje kabinę od nierówności drogi i utrzymuje stały docisk opony do nawierzchni.',
        sections: [
          {
            heading: '1. Klasyfikacja konstrukcyjna układów zawieszenia (zależne, półzależne, niezależne)',
            content:
              'Ze względu na kinematykę ruchu kół jednej osi zawieszenia samochodowe dzieli się na trzy główne rodzaje:',
            table: {
              headers: ['Rodzaj zawieszenia', 'Budowa i zasada działania', 'Właściwości jezdne i zastosowanie'],
              rows: [
                ['Zawieszenie zależne (sztywne)', 'Oba koła jednej osi połączone wspólną sztywną belką lub sztywnym mostem napędowym (często z resorami piórowymi)', 'Najedziecie jednego koła na przeszkodę wymusza pochylenie drugiego koła tej samej osi. Duża masa nieresorowana – samochody ciężarowe, dostawcze i terenowe'],
                ['Zawieszenie półzależne (belka skrętna)', 'Dwa wahacze wleczone połączone poprzeczną belką podatną na skręcanie (kształt litery H)', 'Kompromis między ceną, prostotą a prowadzeniem. Belka pełni jednocześnie rolę stabilizatora przechyłów – tylna oś aut miejskich i kompaktowych (segment B i C)'],
                ['Zawieszenie niezależne: Kolumna MacPhersona', 'Dolny wahacz poprzeczny ze sworzniem kulowym + kolumna amortyzatora ze sprężyną śrubową i górnym łożyskiem oporowym', 'Ruch pionowy jednego koła nie wpływa na położenie drugiego koła. Zwarta budowa zostawiająca dużo miejsca na poprzecznie umieszczony silnik i półosie napędowe'],
                ['Zawieszenie niezależne: Wielowahaczowe (Multi-Link) i dwuwahaczowe', 'Zwrotnica prowadzona przez 4 lub 5 oddzielnych wahaczy (wzdłużnych, poprzecznych i skośnych) lub dwa trójkątne wahacze poprzeczne', 'Najwyższa precyzja prowadzenia koła w zakręcie i możliwość niezależnej regulacji kątów geometrii (Camber i Toe) także na tylnej osi – auta klasy średniej, wyższej i sportowe'],
                ['Zawieszenie pneumatyczne / adaptacyjne', 'Zamiast stalowych sprężyn zastosowano gumowe miechy powietrzne zasilane z kompresora przez blok zaworowy + amortyzatory o zmiennym tłumieniu (CDC/DCC)', 'Automatyczne poziomowanie prześwitu niezależnie od załadunku (np. tylna oś kombi/SUV) oraz możliwość regulacji wysokości nadwozia i twardości zawieszenia']
              ]
            }
          },
          {
            heading: '2. Trzy grupy funkcyjne elementów zawieszenia (wodzące, sprężyste, tłumiące)',
            content:
              'Niezależnie od typu konstrukcyjnego każde zawieszenie składa się z trzech współpracujących grup podzespołów:',
            bullets: [
              'Elementy wodzące (prowadzące koło): wahacze poprzeczne i wzdłużne, sworznie kulowe zwrotnicy, tuleje metalowo-gumowe (silentblocki). Wyznaczają tor ruchu koła i przenoszą siły wzdłużne oraz boczne na podłużnice/sanki nadwozia.',
              'Elementy sprężyste: sprężyny śrubowe (o charakterystyce liniowej lub progresywnej), resory piórowe, drążki skrętne, miechy pneumatyczne. Przejmują energię uderzeń kół o nierówności.',
              'Elementy tłumiące i stabilizujące: amortyzatory teleskopowe (dwururowe olejowo-gazowe lub jednorurowe wysokociśnieniowe) wygaszające drgania sprężyn oraz drążek stabilizatora poprzecznego z łącznikami ograniczający przechyły boczne nadwozia w zakręcie.'
            ]
          },
          {
            heading: '3. Złote zasady bezpieczeństwa i technologii naprawy zawieszenia',
            content:
              'Podczas wymiany wahaczy, sprężyn lub amortyzatorów obowiązują krytyczne reguły technologiczne:',
            steps: [
              'DEMONTAŻ KOLUMNY MACPHERSONA: przed odkręceniem centralnej nakrętki tłoczyska amortyzatora BEZWZGLĘDNIE ściśnij sprężynę śrubową za pomocą atestowanego ściągacza do sprężyn. Napięta sprężyna magazynuje ogromną energię potencjalną!',
              'DOKRĘCANIE TULEI METALOWO-GUMOWYCH (SILENTBLOCKÓW): śruby przechodzące przez tuleje metalowo-gumowe wahaczy oraz tylnej belki dokręcamy momentem znamionowym DOPIERO PO OPUSZCZENIU POJAZDU NA KOŁA (w położeniu odpowiadającym normalnemu obciążeniu statycznemu). Dokręcenie tulei na wiszących kołach powoduje trwałe skręcenie i szybkie zerwanie gumy!',
              'Po każdej wymianie elementów wodzących (wahacza, sworznia, kolumny amortyzatora) lub rozpięciu drążków kierowniczych należy obowiązkowo skontrolować i wyregulować geometrię kół jezdnych.'
            ]
          },
          {
            heading: '4. Diagnostyka luzów zawieszenia i tłumienia amortyzatorów (SKP / Warsztat)',
            content:
              'Sposób wykrywania zużycia poszczególnych elementów zawieszenia podczas przeglądu przed regulacją geometrii:',
            table: {
              headers: ['Element zawieszenia', 'Objaw zużycia podczas jazdy i na podnośniku', 'Kryterium weryfikacji i naprawy'],
              rows: [
                ['Sworzeń kulowy wahacza (zwrotnicy)', 'Głuche stuki na nierównościach, wyczuwalny luz promieniowy/osiowy przy szarpaniu kołem w płaszczyźnie pionowej (godz. 12–6) lub łyżką montażową', 'Niedopuszczalny jakikolwiek wyczuwalny luz lub pęknięta osłona gumowa przeciwpyłowa'],
                ['Końcówka i drążek kierowniczy', 'Luz wyczuwalny przy poruszaniu kołem w płaszczyźnie poziomej (godz. 9–3), nieprecyzyjne prowadzenie', 'Natychmiastowa wymiana + obowiązkowe ustawienie zbieżności kół przednich'],
                ['Górne łożysko oporowe kolumny MacPhersona', 'Metaliczne przeskakiwanie („brzdękanie” sprężyny) podczas kręcenia kierownicą na postoju', 'Wymiana górnego mocowania wraz z łożyskiem przy użyciu ściągacza do sprężyn'],
                ['Amortyzatory teleskopowe (badanie metodą Eusama)', 'Wycieki oleju na korpusie, podskakiwanie koła, ząbkowanie bieżnika opon, wydłużona droga hamowania', 'Wskaźnik przylegania koła Eusama: >60% bardzo dobry, 40–60% dobry, <20–30% zużyty. Maks. różnica na jednej osi: 15%']
              ]
            }
          },
          {
            heading: '5. Charakterystyczne rozwiązania układów zawieszenia dla poszczególnych marek i modeli',
            content:
              'W praktyce warsztatowej poszczególne koncerny stosują opatentowane systemy zawieszeń, które wymagają odmiennej technologii obsługi i specjalistycznych narzędzi:',
            table: {
              headers: ['Marka / System fabryczny', 'Reprezentatywne modele', 'Budowa techniczna i pułapki serwisowe w warsztacie'],
              rows: [
                ['Audi / VW (Czterowahaczowe zawieszenie przednie)', 'Audi A4 (B5–B9), A6 (C5–C8), VW Passat B5 / B5 FL, Škoda Superb I', 'Na każde przednie koło przypadają 4 aluminiowe wahacze (2 górne + 2 dolne: nośny i prowadzący). Dwa górne wahacze spina w zwrotnicy słynna „długa śruba” M10x100, która zapieka się elektrochemicznie (stal w aluminium) – nie wolno grzać aluminiowej zwrotnicy palnikiem!'],
                ['Citroën (Hydropneumatyczne Hydractive I–III+ oraz PHC)', 'Citroën Xantia, XM, C5 I–III (X7), C6; nowsze C4/C5 Aircross (PHC)', 'W Hydractive brak klasycznych sprężyn i amortyzatorów – rolę elementu sprężystego pełni azot w stalowych sferach (kulach) oddzielony membraną od płynu hydraulicznego (zielony mineralny LHM lub pomarańczowy syntetyczny LDS w C5/C6). Przed podniesieniem C5 III na podnośniku należy ustawić zawieszenie w pozycji MAX i odkręcić korek zbiornika LDS!'],
                ['BMW (Oś przednia dwuprzegubowa + tył Integral-V / EHC)', 'BMW Serii 3 (E90/F30/G20), Serii 5 (E60/F10/G30), X5 (E70/G05)', 'Z przodu wahacz rozwidlony na dwa pojedyncze wahacze (wahacz poprzeczny + drążek rozciągany z hydropodporą). W modelach Touring (kombi, np. E61/F11) oraz SUV-ach na tylnej osi standardem jest pneumatyczne poziomowanie EHC (miechy powietrzne + kompresor pod podłogą bagażnika)'],
                ['Mercedes-Benz (AIRMATIC / ABC / Magic Body Control)', 'Klasa E (W211/W212/W213), Klasa S (W220/W221/W222), GLE/GLS', 'AIRMATIC: pełna pneumatyka z kompresorem Wabco/AMK, listwą zaworową i czujnikami poziomu na wahaczach. ABC (Active Body Control): zawieszenie aktywne wysokociśnieniowe (ok. 190–200 bar oleju Pentosin CHF 11S) eliminujące przechyły nadwozia bez klasycznych stabilizatorów'],
                ['Ford (Wielowahaczowa oś tylna Control Blade)', 'Ford Focus MK1/MK2/MK3/MK4, Mondeo MK4, Mazda 3 (BK/BL), Volvo S40/V50', 'Niezależne zawieszenie tylne z szerokim blaszanym wahaczem wzdłużnym („ostrzem” – Control Blade) i trzema wahaczami poprzecznymi. Najczęstszą usterką jest zerwanie przednich tulei wahacza wzdłużnego („tulei cukierków”) oraz zapieczenie śrub mimośrodowych regulacji zbieżności'],
                ['Peugeot / Citroën / Renault (Belka tylna na drążkach skrętnych / 4Control)', 'Peugeot 206, 306, Partner, Citroën Berlingo; Renault Laguna III / Talisman (4Control)', 'W starszych autach PSA tylna belka na drążkach skrętnych posiada łożyska igiełkowe – ich zatarcie objawia się pochyleniem kół w „negatyw” (/ \\). Z kolei w Renault 4Control tylna belka skrętna współpracuje z elektrycznym siłownikiem skręcającym tylne koła do 3,5°']
              ]
            }
          }
        ],
        examTip:
          'Pytanie o dokręcanie tulei metalowo-gumowych wahaczy w położeniu pracy zawieszenia (na kołach / pod obciążeniem statycznym) to absolutny klasyk egzaminu MOT.05. Z kolei amortyzatory i sprężyny wymieniamy zawsze PARAMI na jednej osi!',
        quiz: [
          {
            question: 'W jakim położeniu zawieszenia należy ostatecznie dokręcać śruby tulei metalowo-gumowych (silentblocków) wahacza?',
            options: [
              'Przy kołach swobodnie zwisających na podnośniku dwukolumnowym',
              'W położeniu odpowiadającym normalnemu obciążeniu pojazdu stojącego na kołach',
              'Przy maksymalnie skręconych kołach w lewo bez zamontowanego amortyzatora',
              'Przed zamontowaniem wahacza w sankach podramowych'
            ],
            correctIndex: 1,
            explanation: 'Dokręcenie śrub tulei metalowo-gumowych na opuszczonym pojeździe gwarantuje, że w pozycji spoczynkowej guma tulei nie jest wstępnie naprężona skrętnie i pracuje symetrycznie w obie strony.'
          },
          {
            question: 'Który typ zawieszenia tylnej osi składa się z dwóch wahaczy wleczonych połączonych poprzeczką odkształcalną skrętnie i należy do grupy zawieszeń półzależnych?',
            options: [
              'Sztywny most napędowy na resorach piórowych',
              'Zawieszenie z belką skrętną',
              'Zawieszenie pięciowahaczowe Multi-Link',
              'Zawieszenie hydropneumatyczne ze sferami gazowymi'
            ],
            correctIndex: 1,
            explanation: 'Belka skrętna łączy cechy zawieszenia zależnego i niezależnego (stąd nazwa: półzależne) – poprzeczka łącząca wahacze wleczone poddaje się skręcaniu, zastępując jednocześnie drążek stabilizatora.'
          }
        ]
      },
      {
        id: 'uklad-hamulcowy',
        title: 'Układy hamulcowe i systemy ABS/ESP',
        subtitle: 'Rodzaje hamulców (tarczowe ze stałym i pływającym zaciskiem, bębnowe Simplex/Duplex), układy dwuobwodowe X i TT, serwo, płyny DOT i systemy ABS/ASR/ESP.',
        readingTime: '14 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'hamulce', 'tarcza hamulcowa', 'klocki', 'zacisk pływający', 'zacisk stały', 'bębnowy',
          'simplex', 'serwo', 'pompa tandem', 'płyn hamulcowy', 'dot4', 'higroskopijny',
          'odpowietrzanie', 'bicie tarczy', 'abs', 'esp', 'asr', 'epb',
          'dsc', 'vsc', 'vsa', 'psm', 'dstc', 'vdc', 'sbc', 'ibs', 'duo-servo'
        ],
        summary:
          'Hydrauliczny układ hamulcowy wykorzystuje prawo Pascala (ciśnienie wywierane na płyn w układzie zamkniętym rozchodzi się jednakowo we wszystkich kierunkach) oraz zjawisko tarcia do zamiany energii kinetycznej jadącego pojazdu w energię cieplną.',
        sections: [
          {
            heading: '1. Rodzaje mechanizmów hamulcowych i podział obwodów hydraulicznych',
            content:
              'Ze względów bezpieczeństwa każdy samochód posiada dwuobwodowy układ hydrauliczny zasilany dwusekcyjną pompą hamulcową (typu Tandem) wspomaganą podciśnieniowym urządzeniem Serwo:',
            table: {
              headers: ['Rozwiązanie konstrukcyjne', 'Budowa i zasada działania', 'Zalety i zastosowanie'],
              rows: [
                ['Hamulec tarczowy z zaciskiem pływającym (przesuwnym)', 'Tłoczek znajduje się tylko po wewnętrznej stronie tarczy. Obudowa zacisku przesuwa się na sworzniach prowadzących jarzma, dociskając zewnętrzny klocek siłą reakcji', 'Najpopularniejsze rozwiązanie! Mała szerokość zewnętrzna, mniejsze ryzyko przegrzania płynu. Wymaga regularnego czyszczenia i smarowania prowadnic jarzma'],
                ['Hamulec tarczowy z zaciskiem stałym (wielotłoczkowym)', 'Nieruchomy korpus zacisku przykręcony na sztywno do zwrotnicy, wyposażony w parzystą liczbę tłoczków (2, 4, 6 lub 8) po obu stronach tarczy', 'Bardzo wysoka sztywność i równomierny docisk klocków o dużej powierzchni – samochody sportowe, ciężkie SUV-y i auta klasy wyższej'],
                ['Hamulec bębnowy (Simplex / Duplex)', 'Rozpieracz hydrauliczny (cylinderek) lub mechaniczny dociska wewnętrzne szczęki z okładzinami do wirującego bębna. Szczęka współbieżna wykazuje zjawisko samowzmacniania', 'Duża skuteczność hamulca postojowego i dobra osłona przed błotem, ale słabe odprowadzanie ciepła (zjawisko fadingu) – tylna oś aut miejskich i dostawczych'],
                ['Podział obwodów: Układ X (diagonalny / przekątny)', 'Sekcja I pompy zasila koło Lewe Przednie + Prawe Tylne, a Sekcja II zasila koło Prawe Przednie + Lewe Tylne', 'W razie rozszczelnienia jednego obwodu zachowane jest zawsze 50% całkowitej siły hamowania (po jednym kole przednim i jednym tylnym) – standard w autach z napędem FWD'],
                ['Podział obwodów: Układ TT (przód / tył)', 'Sekcja I pompy zasila oba koła przednie, a Sekcja II oba koła tylne', 'Stosowany głównie w autach z napędem na tył (RWD) oraz ciężarowych i terenowych']
              ]
            }
          },
          {
            heading: '2. Właściwości płynu hamulcowego i elektroniczne systemy czynnego bezpieczeństwa',
            content:
              'Płyny glikolowe (DOT 3, DOT 4, DOT 5.1) są silnie HIGROSKOPIJNE (chłoną wilgoć z otoczenia), a ich niską lepkość w ujemnych temperaturach wykorzystują układy aktywne:',
            table: {
              headers: ['Klasa płynu / System', 'Parametry / Działanie w pojeździe', 'Kryteria serwisowe i diagnostyczne'],
              rows: [
                ['DOT 4 / DOT 4 LV (Class 6)', 'Min. temp. wrzenia suchego ≥ 230°C, zawodnionego ≥ 155°C (baza glikolowo-boranowa)', 'Wymiana co 2 lata lub gdy zawartość wody przekroczy 1,5–2,0% (temp. wrzenia < 180°C)'],
                ['DOT 5.1 vs DOT 5', 'DOT 5.1 (glikolowy, mieszalny z DOT 4, wrzenie ≥ 260°C) | DOT 5 (SILIKONOWY – całkowicie NIEMIESZALNY z DOT 3/4/5.1!)', 'Nigdy nie wlewaj silikonowego płynu DOT 5 do klasycznego układu hamulcowego!'],
                ['ABS + EBD + BAS', 'ABS zapobiega blokowaniu kół przy hamowaniu (zachowuje sterowność!), EBD rozdziela siłę hamowania przód/tył, BAS zwiększa ciśnienie przy nagłym uderzeniu w pedał', 'W razie usterki czujnika prędkości koła zapala się kontrolka ABS, ale klasyczne hamulce hydrauliczne nadal działają!'],
                ['ASR (TCS) + ESP (ESC)', 'ASR zapobiega buksowaniu kół napędzanych przy ruszaniu, a ESP stabilizuje tor jazdy (niweluje podsterowność i nadsterowność) poprzez przyhamowywanie pojedynczych kół', 'Układ ESP wykorzystuje czujnik kąta skrętu kierownicy oraz czujnik prędkości kątowej (żyroskop) i przyspieszenia bocznego']
              ]
            }
          },
          {
            heading: '3. Weryfikacja tarcz, odpowietrzanie układu i obsługa zacisków tylnych / EPB',
            content:
              'Podczas obsługi warsztatowej układu hamulcowego należy bezwzględnie przestrzegać procedur pomiarowych i montażowych:',
            steps: [
              'Pomiar grubości (Min TH) i bicia bocznego tarczy: grubość tarczy mierzymy mikrometrem (dopuszczalne zużycie zwykle ok. 2 mm względem nominału), a bicie boczne czujnikiem zegarowym na oczyszczonej piaście (max. 0,05 mm). Minimalna grubość okładziny klocka to 1,5 – 2,0 mm.',
              'Cofanie tłoczków tylnych zacisków: w zaciskach z mechanicznym hamulcem ręcznym tłoczek cofamy JEDNOCZEŚNIE GO WKRĘCAJĄC praską śrubową. W zaciskach z elektrycznym hamulcem postojowym (EPB – silniczki elektryczne na zaciskach) przed demontażem wprowadzamy układ w „Tryb serwisowy wymiany klocków” za pomocą testera diagnostycznego OBD.',
              'Odpowietrzanie układu hamulcowego: metodą klasyczną zaczynamy od koła NAJDALEJ położonego od pompy hamulcowej (PT -> LT -> PP -> LP). W przypadku zapowietrzenia agregatu hydraulicznego ABS/ESP konieczne jest uruchomienie procedury odpowietrzania pompy ABS testerem diagnostycznym.'
            ]
          },
          {
            heading: '4. Tolerancje wymiarowe i wymagania montażowe układu hamulcowego (Tabela MOT.05)',
            content:
              'Zestawienie granicznych wartości zużycia i zasad smarowania podczas montażu hamulców tarczowych i bębnowych:',
            table: {
              headers: ['Mierzony parametr / Czynność', 'Przyrząd pomiarowy / Środek chemiczny', 'Wartość graniczna / Zasada technologiczna'],
              rows: [
                ['Grubość tarczy hamulcowej (Min. TH)', 'Mikrometr zewnętrzny kabłąkowy (pomiar w min. 3–4 punktach na obwodzie z pominięciem rantu)', 'Zwykle o 2,0 – 3,0 mm mniej niż nowa tarcza (np. nowa 25,0 mm -> Min TH = 22,0 mm wybite na obrzeżu tarczy)'],
                ['Bicie osiowe (boczne) tarczy i piasty koła', 'Czujnik zegarowy w statywie magnetycznym ok. 5–10 mm od zewnętrznej krawędzi tarczy', 'Bicie tarczy: maks. 0,05 mm | Bicie samej piasty koła: maks. 0,02 mm. Piastę oczyszczamy na sucho (zakaz smarowania piasty pod tarczą!)'],
                ['Średnica wewnętrzna bębna hamulcowego (Max. Dia)', 'Suwmiarka do bębnów lub średnicówka mikrometryczna', 'Dopuszczalne powiększenie średnicy bębna: maks. +1,0 do +1,5 mm względem wymiaru nominalnego'],
                ['Dobór smarów do zacisku pływającego', 'Smar silikonowy/syntetyczny (np. ATE Plastilube / pasta do tłoczków)', 'Sworznie prowadzące w gumach smarujemy WYŁĄCZNIE smarem syntetycznym/silikonowym (smar miedziowy niszczy gumki i zakłóca czujniki ABS!)'],
                ['Dopuszczalna różnica sił hamowania na jednej osi', 'Urządzenie rolkowe na Stacji Kontroli Pojazdów (SKP)', 'Różnica sił hamowania kół tej samej osi (lewe vs prawe) nie może przekraczać 30% (w odniesieniu do koła o większej sile)']
              ]
            }
          },
          {
            heading: '5. Wykaz tożsamych systemów bezpieczeństwa (ESP / ASR) oraz rozwiązań hamulcowych według marek',
            content:
              'Podczas diagnostyki komputerowej w warsztacie ten sam układ stabilizacji toru jazdy i kontroli trakcji (dostarczany najczęściej przez firmy Bosch, Continental/ATE lub TRW) występuje pod różnymi nazwami handlowymi zależnie od marki:',
            table: {
              headers: ['Marka / Koncern', 'Oznaczenie ESP (Stabilizacja) i ASR (Trakcja)', 'Specyficzne rozwiązania hamulcowe i procedury serwisowe dla marki'],
              rows: [
                ['Grupa VAG, Mercedes, PSA, Renault', 'ESP / ESC (stabilizacja) + ASR / ETS (kontrola trakcji)', 'W autach VAG (Passat B6–B8, Golf VII, Audi A4/A6) i Renault (Scenic/Megane/Talisman) powszechne są tylne zaciski z silniczkami EPB – wymiana klocków wymaga otwarcia zacisków testerem (kanał 53/03). W Mercedesie W211/R230 elektrohydrauliczny układ SBC (Sensotronic Brake Control) wymaga dezaktywacji testerem przed wsunięciem rąk w zacisk!'],
                ['BMW, Mini, Mazda, Jaguar', 'DSC (Dynamic Stability Control) + DTC / ASC+T (trakcja)', 'W starszych modelach BMW (E46, E39, E60, E90), Mercedesach (W203, W204, W211) i Volvo stosowano z tyłu TARCZO-BĘBNY (hamulec zasadniczy działa klockami na tarczę, a wewnątrz kapelusza tarczy znajdują się małe szczęki hamulca postojowego Duo-Servo regulowane pokrętłem zębatym przez otwór śruby koła). W BMW serii G (G20/G30) stosowany jest zintegrowany układ Brake-by-Wire (IBS)'],
                ['Toyota, Lexus', 'VSC (Vehicle Stability Control) + TRC / A-TRAC (trakcja)', 'W hybrydach Toyota/Lexus (HSD – Prius, Corolla, Auris, RAV4) układ ECB (Electronically Controlled Braking) łączy hamowanie rekuperacyjne MG2 z hydraulicznym – odpowietrzanie wymaga procedury testerem Techstream'],
                ['Honda, Alfa Romeo, Subaru, Nissan', 'VSA (Honda) / VDC (Alfa Romeo, Subaru, Nissan)', 'W Alfie Romeo Giulia i Stelvio zastosowano bezpróżniowy elektrohydrauliczny układ Brake-by-Wire Continental MK C1 (IBS) – przed wymianą klocków należy aktywować tryb serwisowy w menu pojazdu/testerem i nie otwierać drzwi kierowcy podczas cofania tłoczków'],
                ['Volvo, Ford, Opel, Porsche', 'DSTC (Volvo) / IVD-ESP (Ford) / PSM (Porsche)', 'W samochodach Porsche (911, Cayenne, Panamera) oraz wersjach sportowych Audi RS / BMW M / Mercedes AMG stosowane są wielotłoczkowe zaciski stałe Brembo/Akebono oraz tarcze ceramiczno-węglowe (PCCB / CCB) wrażliwe na uderzenia mechaniczne przy zdejmowaniu koła']
              ]
            }
          }
        ],
        examTip:
          'Jak sprawdzić na egzaminie MOT.05 działanie podciśnieniowego urządzenia wspomagającego (Serwo)? Na wyłączonym silniku naciśnij kilkukrotnie pedał hamulca (aż stanie się twardy), przytrzymaj go wciśniętego i uruchom silnik – jeśli serwo jest sprawne, pedał hamulca odczuwalnie opadnie (miękko przesunie się w dół) o kilka centymetrów!',
        quiz: [
          {
            question: 'W jaki sposób sprawdza się poprawność działania podciśnieniowego urządzenia wspomagającego układ hamulcowy (tzw. serwa) bez demontażu z pojazdu?',
            options: [
              'Po kilkukrotnym naciśnięciu pedału hamulca na wyłączonym silniku przytrzymujemy wciśnięty pedał i uruchamiamy silnik – sprawny układ spowoduje wyczuwalne opadnięcie pedału',
              'Mierzymy refraktometrem gęstość powietrza w kolektorze wylotowym',
              'Odkręcamy odpowietrznik prawego przedniego koła podczas jazdy z prędkością 50 km/h',
              'Sprawdzamy omomierzem rezystancję tarczy hamulcowej względem opony'
            ],
            correctIndex: 0,
            explanation: 'Wielokrotne naciśnięcie pedału na zgaszonym silniku wyrównuje ciśnienie w obu komorach serwa (pedał twardnieje). Po uruchomieniu silnika wytworzone podciśnienie odciąga przeponę serwa i pedał lekko opada.'
          },
          {
            question: 'Które koła są połączone we wspólny obwód hydrauliczny w dwuobwodowym układzie hamulcowym o podziale diagonalnym (typu X)?',
            options: [
              'Oba koła przednie w jednym obwodzie, a oba koła tylne w drugim obwodzie',
              'Koło przednie lewe z kołem tylnym prawym w pierwszym obwodzie oraz koło przednie prawe z kołem tylnym lewym w drugim obwodzie',
              'Wszystkie cztery koła w jednym wspólnym obwodzie szeregowym',
              'Oba koła lewe w jednym obwodzie, a oba koła prawe w drugim obwodzie'
            ],
            correctIndex: 1,
            explanation: 'Podział diagonalny (krzyżowy X) łączy koła po przekątnej pojazdu (LP+PT oraz PP+LT), dzięki czemu przy awarii jednego obwodu drugie przednie koło nadal zapewnia skuteczne hamowanie bez obrócenia auta.'
          }
        ]
      },
      {
        id: 'oznaczenia-marek-i-systemow',
        title: 'Oznaczenia silników i wykaz systemów tożsamych według marek (Kompendium OEM)',
        subtitle: 'Interaktywne kompendium kodów silników (VAG EA211/EA888/EA288, BMW B47/B48/B58, Mercedes OM651/OM654, Stellantis PureTech/BlueHDi, Toyota, Ford, Renault) oraz słownik tożsamych systemów (VVT, Common Rail, GDI, AWD, ESP, skrzynie biegów).',
        readingTime: '16 min',
        examFrequency: 'Wysoka',
        keywords: [
          'marki', 'modele', 'oznaczenia silników', 'systemy tożsame', 'tsi', 'tfsi', 'tdi', 'hdi',
          'cdti', 'dci', 'multijet', 'tdci', 'ecoboost', 'tce', 'puretech', 'skyactiv', 'vtec',
          'valvetronic', 'vanos', 'multiair', 'vvt-i', 'quattro', 'xdrive', '4matic', 'haldex',
          'torsen', 'dsg', 's-tronic', 'zf 8hp', '9g-tronic', 'dpf', 'fap', 'eolys', 'adblue'
        ],
        summary:
          'Współczesny mechanik i diagnosta samochodowy musi biegle poruszać się w nomenklaturze technicznej różnych producentów. Choć prawa fizyki i budowa podzespołów (np. zasobnikowy układ Common Rail firmy Bosch czy sprzęgło wielopłytkowe BorgWarner/Haldex) są wspólne, każdy koncern samochodowy stosuje własne oznaczenia handlowe, kody rodzin silnikowych oraz specyficzne procedury obsługowe.',
        interactiveTool: 'brand-system-explorer',
        sections: [
          {
            heading: '1. Zbiorczy wykaz tożsamych układów wtryskowych (Benzyna GDI/Turbo oraz Diesel Common Rail)',
            content:
              'Poniższa tabela zestawia nazwy handlowe tych samych konstrukcyjnie układów zasilania paliwem u czołowych producentów samochodów:',
            table: {
              headers: ['Koncern / Marka', 'Wtrysk bezpośredni benzyny (GDI + Turbo)', 'Wtrysk bezpośredni oleju napędowego (Common Rail)', 'Kluczowe rodziny silnikowe i modele'],
              rows: [
                ['Grupa VAG (VW, Audi, Škoda, Seat)', 'TSI / TFSI / FSI (w Gen. 3B/EVO wtrysk kombinowany MPI+TSI)', 'TDI CR (od ok. 2008 r. po wycofaniu pompowtryskiwaczy PD)', 'Benzyna: EA211 (1.0/1.4/1.5 TSI), EA888 (1.8/2.0 TSI) | Diesel: EA189/EA288 (1.6/2.0 TDI), EA897 (3.0 V6 TDI) – Golf, Octavia, Passat, Audi A3/A4/A6'],
                ['BMW / Mini', 'TwinPower Turbo (High Precision Injection – HPI)', 'd / TwinPower Turbo Diesel (np. 18d, 20d, 30d, 40d)', 'Benzyna: B38 (1.5 R3), N20/B48 (2.0 R4), N55/B58 (3.0 R6) | Diesel: N47/B47 (2.0 R4), M57/N57/B57 (3.0 R6) – Seria 1, 3, 5, X3, X5'],
                ['Mercedes-Benz', 'CGI / BlueDIRECT (M274, M264, M254, M256)', 'CDI / BlueTEC / d (np. 200d, 220d, 350d)', 'Benzyna: M270/M274 (1.6/2.0), M282 (1.33 z Renault) | Diesel: OM651 (2.1 CDI), OM654 (2.0d), OM642/OM656 (3.0d) – Klasa A, C, E, GLC, Sprinter'],
                ['Stellantis (Peugeot, Citroën, Opel, Fiat)', 'PureTech / THP (PSA), SIDI Turbo (Opel), T-Jet / MultiAir (Fiat)', 'HDi / BlueHDi (PSA), CDTI (Opel), JTD / MultiJet II (Fiat)', 'Benzyna: 1.2 PureTech (EB2), 1.6 THP/PureTech (EP6), 1.4 T-Jet | Diesel: 1.6/2.0 HDi (DV6/DW10), 1.5 BlueHDi (DV5), 1.3/1.6/2.0 MultiJet – 308, 3008, Corsa, Astra, Ducato'],
                ['Ford', 'EcoBoost (1.0 R3, 1.5 R3/R4, 2.0 R4, 2.3 R4)', 'TDCi / EcoBlue (1.5, 2.0 EcoBlue)', '1.0 EcoBoost (Fox), 1.5/2.0 EcoBoost, 2.0 TDCi (konstrukcja wspólna z PSA DW10), 2.0 EcoBlue (Panther) – Fiesta, Focus, Mondeo, Kuga, Transit'],
                ['Renault / Nissan / Dacia', 'TCe (Renault/Dacia) / DIG-T (Nissan)', 'dCi / Blue dCi (Renault/Nissan)', '0.9/1.0 TCe (H4Bt/H4Dt), 1.2 TCe (H5Ft), 1.3 TCe (H5Ht), 1.5 dCi (K9K), 1.6/2.0 dCi (R9M/M9R) – Clio, Megane, Captur, Duster, Qashqai'],
                ['Toyota / Honda / Mazda / Hyundai-Kia', 'D-4S (Toyota), Earth Dreams Turbo (Honda), Skyactiv-G/X (Mazda), T-GDI (Hyundai/Kia)', 'D-4D (Toyota), i-DTEC (Honda), Skyactiv-D (Mazda), CRDi (Hyundai/Kia)', 'Toyota 1.8/2.0/2.5 Hybrid (2ZR-FXE / A25A-FXS), Mazda 2.0 Skyactiv-G (PE-VPS), Honda 1.5 VTEC Turbo, Hyundai/Kia 1.6 T-GDI / 1.6 CRDi']
              ]
            }
          },
          {
            heading: '2. Wykaz tożsamych napędów 4x4 (AWD) oraz skrzyń biegów według marek',
            content:
              'Jednym z najważniejszych przykładów nazewnictwa marketingowego jest napęd na cztery koła – np. pod tą samą nazwą „Audi quattro” kryją się dwie zupełnie różne konstrukcje mechaniczne zależnie od ułożenia silnika:',
            table: {
              headers: ['System / Podzespół', 'Grupa VAG (Audi / VW / Škoda)', 'BMW & Mercedes-Benz', 'Japonia i pozostali producenci'],
              rows: [
                ['Stały napęd 4x4 (silnik wzdłużnie)', 'quattro z międzyosiowym mechanizmem różnicowym Torsen (typ C) lub przekładnią koronową (Audi A4, A6, A8, Q5, Q7) / quattro ultra', 'BMW xDrive (rozdzielacz ATC z wielopłytkowym sprzęgłem sterowanym serwomotorem – domyślnie ok. 40:60 przód/tył) | Mercedes 4MATIC (planetarny centralny dyferencjał)', 'Subaru Symmetrical AWD (stały napęd z wiskozą lub sprzęgłem wielopłytkowym MPT/VTD + silnik Boxer w osi symetrii podwozia)'],
                ['Dołączany napęd 4x4 (silnik poprzecznie)', 'quattro (w Audi A3, Q2, Q3, TT) = 4MOTION (VW Golf, Tiguan, Passat) = 4x4 (Škoda Octavia, Superb, Kodiaq) – wszystkie wykorzystują sprzęgło wielopłytkowe HALDEX (Gen. I–VI) przy tylnym moście!', 'BMW xDrive na platformie UKL (X1 F48, X2, Seria 1 F40, Mini ALL4) oraz Mercedes 4MATIC w Klasie A/B/CLA/GLA – wykorzystują dołączaną oś tylną przez sprzęgło elektrohydrauliczne (Haldex/BorgWarner)', 'Toyota E-Four (w hybrydach RAV4, Yaris Cross, Corolla Cross tylną oś napędza niezależny silnik elektryczny MGR bez wału napędowego!) | Suzuki AllGrip'],
                ['Dwusprzęgłowe skrzynie biegów (DCT)', 'DSG (VW, Škoda, Seat) = S-tronic (Audi) = PDK (Porsche). Odmiany: DQ200 (7b suche sprzęgła do 250 Nm), DQ250 (6b mokre), DQ381 / DQ500 (7b mokre), DL501 (wzdłużna Audi)', 'BMW M-DCT (7-biegowa Getrag w modelach M) / Steptronic DCT (7b w autach przednionapędowych UKL) | Mercedes 7G-DCT / 8G-DCT (Klasa A, B, CLA, GLA)', 'Ford PowerShift (Getrag 6DCT450 mokra / 6DCT250 sucha), Renault EDC, Hyundai/Kia DCT, Alfa Romeo TCT'],
                ['Klasyczne automaty hydrokinetyczne i e-CVT', 'Tiptronic (w Audi A6/A8/Q7 oraz VW Touareg – 8-biegowa skrzynia planetarna ZF 8HP lub Aisin z przemiennikiem momentu obrotowego)', 'BMW Steptronic (słynna 8-biegowa skrzynia ZF 8HP45/50/70/75) | Mercedes 7G-Tronic (722.9) oraz 9G-Tronic (725.0 własnej konstrukcji Mercedesa)', 'Toyota/Lexus e-CVT (przekładnia planetarna PSD łącząca silnik spalinowy z MG1 i MG2 – brak pasów i stożków!) | Peugeot/Citroën/Opel EAT8 (8-biegowy Aisin)']
              ]
            }
          },
          {
            heading: '3. Różnice w układach oczyszczania spalin Diesla według marek (Suchy DPF vs Mokry FAP + AdBlue SCR)',
            content:
              'Podczas diagnostyki zapchanego filtra cząstek stałych mechanik musi rozróżnić dwa systemy stosowane przez producentów:',
            bullets: [
              'Suchy filtr DPF (Grupa VAG, BMW, Mercedes, Opel, Toyota, Renault): dopalanie sadzy wymaga podniesienia temperatury spalin do ok. 600–650°C poprzez dotrysk paliwa w fazie wydechu (post-injection). Częste przerywanie wypalania w jeździe miejskiej powoduje spływanie niespalonego oleju napędowego po ściankach cylindrów i PRZYBYWANIE stanu oleju silnikowego (ryzyko rozbiegania silnika!).',
              'Mokry filtr FAP z dodatkiem katalitycznym Eolys (Peugeot, Citroën, DS oraz wybrane modele Forda 1.6/2.0 TDCi, Volvo D2/D3/D4 i Mazdy Y6): pod podwoziem przy zbiorniku paliwa znajduje się dodatkowy zbiornik płynu katalitycznego Eolys (Infineum / Powerflex) opartego na związkach ceru lub żelaza. Pompka dozuje dawkę płynu do baku po każdym tankowaniu. Dodatek obniża temperaturę zapłonu sadzy z 600°C do ok. 450°C, dzięki czemu filtr FAP znacznie lepiej znosi jazdę miejską, ale po ok. 120–180 tys. km wymaga uzupełnienia płynu Eolys i wyzerowania licznika dodatku testerem!',
              'Układ SCR z płynem AdBlue (roztwór mocznika 32,5% w wodzie demineralizowanej, np. BlueHDi, BlueTEC, TDI SCR): wtryskuje AdBlue przed katalizatorem SCR w celu redukcji tlenków azotu (NOx) do nieszkodliwego azotu (N2) i pary wodnej (H2O). Płyn AdBlue krystalizuje w kontakcie z powietrzem i zamarza w temperaturze -11°C (dlatego zbiornik i przewody są podgrzewane elektrycznie).'
            ]
          }
        ],
        examTip:
          'Wskazówka serwisowa i egzaminacyjna: W układzie mokrego filtra FAP (Peugeot/Citroën/Ford) po uzupełnieniu płynu katalitycznego Eolys poziom NIE podniesie się sam w sterowniku (zbiornik nie ma pływaka pomiarowego – sterownik zlicza wtryśnięte dawki). Konieczne jest wykonanie procedury „Zerowanie licznika dodatku do paliwa” w testerze diagnostycznym!',
        quiz: [
          {
            question: 'Jak nazywa się w samochodach marki Audi z poprzecznie umieszczonym silnikiem (np. Audi A3, Q3, TT) układ dołączanego napędu na cztery koła, który konstrukcyjnie jest tożsamy z układem 4MOTION w Volkswagenie Golfie i wykorzystuje wielopłytkowe sprzęgło Haldex przy tylnej osi?',
            options: [
              'quattro (w odmianie ze sprzęgłem wielopłytkowym Haldex)',
              'xDrive ze skrzynią rozdzielczą ATC',
              'Symmetrical AWD z silnikiem typu Boxer',
              'E-Four z niezależnym silnikiem elektrycznym przy tylnej osi'
            ],
            correctIndex: 0,
            explanation: 'Audi używa handlowej nazwy „quattro” zarówno dla stałego napędu z mechanizmem Torsen (w autach z silnikiem wzdłużnym, jak A4/A6), jak i dla dołączanego napędu ze sprzęgłem Haldex (w autach z silnikiem poprzecznym na płycie MQB, jak A3/Q3).'
          },
          {
            question: 'Jaka jest główna rola płynu katalitycznego Eolys dozowanego do zbiornika paliwa w układach mokrego filtra cząstek stałych FAP (stosowanych m.in. w samochodach Peugeot i Citroën HDi)?',
            options: [
              'Podnosi liczbę oktanową benzyny o 15 jednostek',
              'Obniża temperaturę zapłonu i dopalania cząstek sadzy w filtrze FAP z ok. 600°C do ok. 450°C',
              'Zastępuje olej silnikowy podczas zimnego rozruchu',
              'Służy do smarowania pompy wysokiego ciśnienia z zewnątrz'
            ],
            correctIndex: 1,
            explanation: 'Związki ceru/żelaza zawarte w dodatku Eolys wiążą się z cząstkami sadzy już w komorze spalania i obniżają temperaturę ich utleniania w filtrze FAP do ok. 450°C, co ułatwia regenerację filtra w ruchu miejskim.'
          }
        ]
      }
    ]
  },
  {
    id: 'diagnostyka',
    name: 'Diagnostyka i Naprawa',
    shortName: 'Diagnostyka',
    icon: 'Activity',
    code: 'DZIAŁ V',
    description: 'Nowoczesna diagnostyka oscyloskopowa czujników, pomiary i regulacja geometrii kół jezdnych oraz obsługa interfejsów diagnostycznych OBD-II/EOBD.',
    topics: [
      {
        id: 'obsluga-oscyloskopu',
        title: 'Obsługa oscyloskopu',
        subtitle: 'Podstawa czasu (ms/div), czułość napięciowa (V/div), przebiegi czujników indukcyjnych i hallotronowych, sygnał PWM oraz sonda lambda.',
        readingTime: '8 min',
        examFrequency: 'Wysoka',
        keywords: [
          'oscyloskop', 'przebieg', 'czujnik indukcyjny', 'czujnik halla', 'hallotronowy',
          'sygnał pwm', 'sonda lambda', 'podstawa czasu', 'wyzwalanie', 'trigger', 'wał korbowy'
        ],
        summary:
          'W przeciwieństwie do multimetru, który uśrednia wartość napięcia kilku razy na sekundę, oscyloskop diagnostyczny wyświetla na ekranie wykres szybkich zmian napięcia w funkcji czasu U = f(t). Jest niezastąpiony do badania czujników położenia wału, magistrali CAN oraz wtryskiwaczy.',
        sections: [
          {
            heading: '1. Podstawowe nastawy oscyloskopu warsztatowego',
            content:
              'Ekran oscyloskopu podzielony jest siatką działek (div). Aby przebieg był czytelny, diagnosta ustawia trzy główne parametry:',
            bullets: [
              'Oś pionowa Y – Czułość napięciowa [V/div lub mV/div]: określa, ile woltów przypada na jedną kratkę w pionie (np. dla sondy cyrkonowej ustawiamy 0,2 V/div, a dla czujnika Halla 2 V/div).',
              'Oś pozioma X – Podstawa czasu [s/div, ms/div lub µs/div]: określa, jaki odcinek czasu przypada na jedną kratkę w poziomie (np. 5 ms/div dla czujnika wału korbowego, 1 s/div dla sondy lambda).',
              'Wyzwalanie (Trigger): ustala próg napięcia i zbocze (narastające lub opadające), od którego oscyloskop stabilizuje (zatrzymuje „pływanie”) wykresu na ekranie.'
            ]
          },
          {
            heading: '2. Rozpoznawanie przebiegów czujników prędkości obrotowej (CKP / CMP / ABS)',
            content:
              'Jednym z najczęstszych zadań na egzaminie MOT.05 jest odróżnienie czujnika indukcyjnego (pasywnego) od czujnika hallotronowego (aktywnego):',
            table: {
              headers: ['Cecha porównawcza', 'Czujnik indukcyjny (np. CKP wału)', 'Czujnik Halla (np. CMP wałka rozrządu)'],
              rows: [
                ['Zasada działania i zasilanie', 'Pasywny (2 piny + ewentualny ekran) – sam wytwarza napięcie przemienne wskutek indukcji elektromagnetycznej', 'Aktywny (3 piny: zasilanie 5V/12V, masa, sygnał) – wymaga zewnętrznego zasilania ze sterownika'],
                ['Kształt przebiegu na oscyloskopie', 'Sinusoida (napięcie przemienne AC) z charakterystyczną przerwą brakującego zęba (np. koło 60-2)', 'Sygnał prostokątny (cyfrowy 0 V / 5 V lub 0 V / 12 V)'],
                ['Wpływ prędkości obrotowej na sygnał', 'Wraz ze wzrostem obr./min ROŚNIE zarówno częstotliwość, jak i AMPLITUDA (wysokość) napięcia!', 'Wraz ze wzrostem obr./min rośnie TYLKO częstotliwość (gęstość impulsów), amplituda napięcia jest STAŁA!']
              ]
            }
          },
          {
            heading: '3. Sygnał PWM oraz przebieg cyrkonowej sondy lambda',
            content:
              'Oscyloskop pozwala również ocenić sterowanie elementami wykonawczymi oraz skład mieszanki paliwowo-powietrznej:',
            bullets: [
              'Sygnał PWM (Pulse Width Modulation – modulacja szerokości impulsu): sygnał prostokątny o stałej częstotliwości i stałej amplitudzie (np. 12 V), w którym sterownik zmienia współczynnik wypełnienia impulsu [%] (Duty Cycle), aby płynnie sterować zaworem EGR, zaworem N75 turbosprężarki lub wentylatorem chłodnicy.',
              'Sonda lambda cyrkonowa (napięciowa) przed katalizatorem: na rozgrzanym silniku (>300°C) na biegu jałowym jej napięcie musi oscylować (falować) w zakresie od ok. 0,1 V (mieszanka uboga) do ok. 0,9 V (mieszanka bogata) z częstotliwością min. 1 Hz.'
            ]
          }
        ],
        examTip:
          'Szybkie rozpoznanie na egzaminie MOT.05: jeśli wykres na oscyloskopie to fala sinusoidalna, której wysokość (amplituda) rośnie po dodaniu gazu – to czujnik INDUKCYJNY. Jeśli wykres to równy prostokąt (0–5 V), który po dodaniu gazu tylko się zagęszcza, ale nie rośnie w górę – to czujnik HALLA!',
        quiz: [
          {
            question: 'Jak zmienia się przebieg oscyloskopowy sprawnego czujnika hallotronowego (Halla) położenia wałka rozrządu podczas zwiększania prędkości obrotowej silnika?',
            options: [
              'Rośnie amplituda napięcia z 2 V do ponad 40 V, a kształt jest sinusoidalny',
              'Amplituda napięcia sygnału prostokątnego pozostaje stała, a zwiększa się jedynie częstotliwość impulsów',
              'Częstotliwość maleje do zera, a napięcie zmienia polaryzację na ujemną',
              'Szerokość impulsu maleje, a napięcie spada poniżej 0,5 V'
            ],
            correctIndex: 1,
            explanation: 'Czujnik Halla generuje sygnał prostokątny o stałej amplitudzie (zależnej od napięcia zasilania, np. 5 V). Wzrost obrotów wałka powoduje jedynie częstsze przełączanie stanu 0/1, czyli wzrost częstotliwości.'
          },
          {
            question: 'Jaki zakres napięcia na oscyloskopie wskazuje na prawidłową pracę cyrkonowej sondy lambda regulacyjnej (przed katalizatorem) w rozgrzanym silniku o zapłonie iskrowym?',
            options: [
              'Stałe napięcie równe dokładnie 12,0 V',
              'Oscylacje napięcia w zakresie od ok. 0,1 V do ok. 0,9 V',
              'Przebieg sinusoidalny o amplitudzie od -15 V do +15 V',
              'Stałe napięcie 5,0 V niezależnie od składu mieszanki'
            ],
            correctIndex: 1,
            explanation: 'Cyrkonowa sonda lambda wytwarza napięcie od ok. 0,1 V (nadmiar tlenu – mieszanka uboga) do ok. 0,9 V (brak tlenu – mieszanka bogata), oscylując wokół współczynnika stechiometrycznego λ = 1 (ok. 0,45 V).'
          }
        ]
      },
      {
        id: 'geometria-kol',
        title: 'Geometria kół',
        subtitle: 'Zbieżność kół, kąt pochylenia koła (camber), kąt wyprzedzenia i pochylenia sworznia zwrotnicy (caster, KPI), warunki wstępne pomiaru.',
        readingTime: '8 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'geometria kół', 'zbieżność', 'rozbieżność', 'kąt pochylenia koła', 'camber',
          'wyprzedzenie sworznia zwrotnicy', 'caster', 'drążek kierowniczy', 'zużycie opon', 'obrotnice'
        ],
        summary:
          'Prawidłowa geometria ustawienia kół i osi warunkuje stabilność kierunkową pojazdu na wprost, samoczynny powrót kierownicy po wyjściu z zakrętu oraz równomierne zużycie bieżnika opon.',
        sections: [
          {
            heading: '1. Cztery główne parametry geometrii zawieszenia',
            content:
              'Na stanowisku pomiarowym 3D lub CCD kontrolowane są kąty oraz zbieżność kół osi przedniej i tylnej:',
            table: {
              headers: ['Parametr geometrii', 'Definicja techniczna', 'Wpływ na prowadzenie i zużycie opon'],
              rows: [
                ['Zbieżność kół (Toe)', 'Różnica odległości między tylnymi a przednimi obrzeżami obręczy kół tej samej osi (w mm lub stopniach/minutach)', 'Najbardziej wpływa na ścieranie opon! Zbyt duża zbieżność ściera zewnętrzne krawędzie bieżnika, a rozbieżność – wewnętrzne (charakterystyczne „ząbkowanie” w poprzek)'],
                ['Kąt pochylenia koła (Camber)', 'Kąt między płaszczyzną koła a pionem w płaszczyźnie poprzecznej pojazdu (+ górą na zewnątrz, - górą do wewnątrz)', 'Zapewnia optymalny styk opony z jezdnią w zakręcie. Nadmierny kąt ujemny („negatyw”) ściera wewnętrzny bark opony'],
                ['Kąt wyprzedzenia sworznia zwrotnicy (Caster)', 'Kąt w płaszczyźnie podłużnej między osią sworznia zwrotnicy a pionem (patrząc z boku pojazdu)', 'Odpowiada za stabilizację kół podczas jazdy na wprost i samoczynny powrót kierownicy po skręcie'],
                ['Kąt pochylenia sworznia zwrotnicy (KPI)', 'Kąt w płaszczyźnie poprzecznej między osią sworznia zwrotnicy a pionem', 'Wyznacza promień zataczania koła, zmniejsza siłę potrzebną do skrętu kierownicy i stabilizuje tor jazdy']
              ]
            }
          },
          {
            heading: '2. Warunki wstępne przed przystąpieniem do pomiaru i regulacji geometrii',
            content:
              'Pomiar geometrii kół na niesprawnym zawieszeniu jest błędem w sztuce warsztatowej. Przed założeniem głowic pomiarowych należy obowiązkowo:',
            steps: [
              'Skontrolować i wyrównać ciśnienie powietrza we wszystkich ogumionych kołach do wartości fabrycznej oraz sprawdzić jednakowy rozmiar opon na osi.',
              'Sprawdzić i wyeliminować wszelkie luzy w układzie kierowniczym (końcówki i drążki kierownicze) oraz w zawieszeniu (sworznie wahaczy, tuleje, łożyska kół).',
              'Odblokować obrotnice pod kołami przednimi i płyty przesuwne pod kołami tylnymi oraz wykonać kompensację bicia obręczy kół (przetoczenie lub podniesienie pojazdu).',
              'Zamontować rozpórkę (blokadę) na pedale hamulca zasadniczego oraz po wypoziomowaniu koła kierownicy zablokować je stelażem w pozycji jazdy na wprost.'
            ]
          },
          {
            heading: '3. Regulacja zbieżności połówkowej kół przednich',
            content:
              'W większości samochodów osobowych regulację zbieżności przedniej wykonuje się poprzez zmianę długości bocznych drążków kierowniczych:',
            bullets: [
              'Poluzowujemy nakrętki kontrujące na obu drążkach kierowniczych (lewy i prawy) przy zablokowanej na wprost kierownicy.',
              'Wkręcając lub wykręcając drążki kierownicze z końcówek drążków, ustawiamy zbieżność połówkową lewego i prawego koła zgodnie z zielonym polem tolerancji producenta.',
              'Dokręcamy nakrętki kontrujące odpowiednim momentem, pilnując, aby osłony harmonijkowe przekładni kierowniczej nie zostały skręcone!'
            ]
          }
        ],
        examTip:
          'Na egzaminie praktycznym MOT.05 nigdy nie zaczynaj regulacji zbieżności bez uprzedniego sprawdzenia ciśnienia w kołach i zablokowania kierownicy na wprost! Jeśli wyregulujesz tylko jeden drążek kierowniczy bez blokady kierownicy, samochód będzie jechał prosto, ale koło kierownicy będzie przekrzywione.',
        quiz: [
          {
            question: 'Którą czynność należy bezwzględnie wykonać PRZED przystąpieniem do pomiaru i regulacji geometrii kół jezdnych?',
            options: [
              'Wymienić płyn hamulcowy i odpowietrzyć wysprzęglik',
              'Sprawdzić i wyrównać ciśnienie w oponach oraz skontrolować brak luzów w zawieszeniu i układzie kierowniczym',
              'Spuścić połowę oleju ze skrzyni biegów',
              'Zdemontować drążek stabilizatora poprzecznego przedniej osi'
            ],
            correctIndex: 1,
            explanation: 'Niewłaściwe ciśnienie w ogumieniu lub luz na końcówce drążka kierowniczego czy sworzniu wahacza całkowicie fałszują wskazania przyrządu do geometrii.'
          },
          {
            question: 'Który kąt geometrii kół odpowiada bezpośrednio za moment stabilizujący koła kierowane i samoczynny powrót kierownicy do położenia jazdy na wprost po wyjściu z zakrętu?',
            options: [
              'Zbieżność kół tylnej osi',
              'Kąt wyprzedzenia i pochylenia sworznia zwrotnicy (Caster / KPI)',
              'Kąt wyprzedzenia zapłonu',
              'Różnica kątów skrętu na obrotnicach powyżej 45°'
            ],
            correctIndex: 1,
            explanation: 'Dodatni kąt wyprzedzenia sworznia zwrotnicy (Caster) oraz kąt pochylenia sworznia zwrotnicy (KPI) wywołują moment stabilizujący, który prostuje koła po wyjściu z łuku drogi.'
          }
        ]
      },
      {
        id: 'odczyt-kodow-bledow-obd',
        title: 'Odczyt kodów błędów (OBD)',
        subtitle: 'Standard OBD-II / EOBD, gniazdo DLC 16-pinowe, struktura pięcioznakowego kodu usterki DTC (P, C, B, U), zamrożone ramki, parametry bieżące i testery fabryczne OEM.',
        readingTime: '10 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'obd', 'obd2', 'eobd', 'dtc', 'kod błędu', 'gniazdo diagnostyczne', 'dlc',
          'check engine', 'mil', 'p0', 'c0', 'b0', 'u0', 'zamrożone ramki', 'live data', 'kasowanie błędów',
          'vcds', 'odis', 'ista', 'xentry', 'diagbox', 'clip', 'techstream', 'forscan'
        ],
        summary:
          'System diagnostyki pokładowej OBD-II / EOBD na bieżąco monitoruje podzespoły wpływające na emisję spalin oraz bezpieczeństwo jazdy. W razie wykrycia nieprawidłowości zapisuje w pamięci sterownika ustandaryzowany 5-znakowy kod usterki DTC (Diagnostic Trouble Code).',
        interactiveTool: 'obd-decoder',
        sections: [
          {
            heading: '1. Budowa 5-znakowego kodu usterki DTC (wg normy SAE J2012 / ISO 15031-6)',
            content:
              'Każdy kod błędu OBD-II składa się z jednej litery na początku oraz czterech cyfr (np. P0115 lub C0035):',
            table: {
              headers: ['Pozycja znaku', 'Możliwe symbole', 'Znaczenie w kodzie DTC'],
              rows: [
                ['1. Znak (Litera – układ pojazdu)', 'P, C, B, U', 'P (Powertrain) – silnik i skrzynia biegów | C (Chassis) – podwozie (ABS, ESP, zawieszenie) | B (Body) – nadwozie (Airbag, klimatyzacja, komfort) | U (Network) – sieć komunikacyjna (magistrala CAN/LIN)'],
                ['2. Znak (Cyfra – standard kodu)', '0, 1, 2, 3', '0 – kod ogólny (międzynarodowy standard ISO/SAE) | 1 – kod specyficzny producenta pojazdu (OEM)'],
                ['3. Znak (Cyfra – podukład)', '1 – 8', '1 i 2 – dawkowanie paliwa i powietrza | 3 – układ zapłonowy i wypadanie zapłonów | 4 – dodatkowa kontrola emisji (EGR, katalizator, DPF) | 5 – prędkość pojazdu i bieg jałowy | 6 – sterownik ECU | 7 i 8 – skrzynia biegów'],
                ['4. i 5. Znak (Dwie cyfry)', '00 – 99', 'Konkretny numer elementu i charakter usterki (np. zbyt niski sygnał, zbyt wysoki sygnał, przerwa w obwodzie)']
              ]
            }
          },
          {
            heading: '2. Standardowe 16-pinowe gniazdo diagnostyczne DLC',
            content:
              'Trapezowe złącze diagnostyczne DLC (Data Link Connector) umieszczone jest w kabinie kierowcy (w promieniu do ok. 60 cm od kolumny kierowniczej):',
            bullets: [
              'Pin 16: stałe zasilanie +12 V z akumulatora (zabezpieczone bezpiecznikiem w skrzynce kabinowej – jeśli tester nie włącza się po wpięciu w gniazdo, sprawdź napięcie między pinem 16 a pinem 4!).',
              'Pin 4: masa nadwozia (Chassis Ground) oraz Pin 5: masa sygnałowa (Signal Ground).',
              'Pin 6 (CAN High) i Pin 14 (CAN Low): szybka magistrala komunikacyjna CAN-BUS (rezystancja terminacji między pinem 6 a 14 przy odłączonym zasilaniu wynosi ok. 60 Ω, ponieważ w sieci są dwa rezystory po 120 Ω połączone równolegle!).',
              'Pin 7: linia K (starszy protokół ISO 9141-2 / KWP2000).'
            ]
          },
          {
            heading: '3. Procedura prawidłowej diagnostyki komputerowej',
            content:
              'Samo odczytanie i skasowanie kodu błędu NIE jest naprawą samochodu! Kod błędu wskazuje obwód elektryczny lub skutek, a nie zawsze uszkodzony czujnik:',
            steps: [
              'Podłącz interfejs diagnostyczny do gniazda DLC przy wyłączonym zapłonie, a następnie włącz zapłon (pozycja ON bez uruchamiania silnika).',
              'Odczytaj i zapisz wszystkie kody błędów (aktywne/stałe oraz oczekujące/sporadyczne) wraz z danymi „Zamrożonej Ramki” (Freeze Frame – obroty, temperatura i obciążenie w ułamku sekundy, gdy wystąpił błąd).',
              'Przejdź do podglądu Parametrów Bieżących (Live Data) i porównaj wskazania badanego czujnika z rzeczywistością (np. czy na zimnym silniku po nocy czujnik temperatury płynu ECT pokazuje temperaturę otoczenia, czy np. -40°C wskazujące na przerwę w wiązce).',
              'Zweryfikuj wiązkę elektryczną i sam element multimetrem lub oscyloskopem, usuń przyczynę usterki i dopiero na końcu skasuj pamięć błędów oraz wykonaj jazdę próbną.'
            ]
          },
          {
            heading: '4. Wykaz fabrycznych testerów i oprogramowania diagnostycznego OEM według marek',
            content:
              'Oprócz uniwersalnych testerów wielomarkowych (np. Bosch KTS, Gutmann Mega Macs, Launch, Autel, Texa), autoryzowane serwisy (ASO) i wyspecjalizowane warsztaty korzystają z oprogramowania fabrycznego OEM umożliwiającego kodowanie, adaptacje online i aktualizacje sterowników:',
            table: {
              headers: ['Koncern / Marka', 'Tester fabryczny ASO (OEM) / Interfejs warsztatowy', 'Typowe procedury specjalne wymagające testera w danej marce'],
              rows: [
                ['Grupa VAG (VW, Audi, Škoda, Seat)', 'ODIS Service / Engineering (dawniej VAS-PC) + popularny warsztatowy VCDS (VAG-COM) / OBDeleven', 'Nastawy podstawowe (Basic Settings – grupa 04, np. adaptacja przepustnicy i skrzyni DSG), kodowanie długie (Long Coding), odblokowanie bramki ochrony komponentu SFD'],
                ['BMW / Mini', 'ISTA+ / ISTA-D (diagnostyka) oraz ISTA-P / E-Sys (programowanie); starsze: INPA / DIS', 'Rejestracja wymiany akumulatora w systemie IBS, nauka skrajnych położeń wałka Valvetronic, kalibracja skrzyni rozdzielczej xDrive (VTG)'],
                ['Mercedes-Benz / Smart', 'XENTRY Diagnosis / DAS (Star Diagnosis) + Vediamo / DTS Monaco', 'Dezaktywacja i aktywacja układu hamulcowego SBC (W211), kalibracja poziomu zawieszenia AIRMATIC (Romess), dopalanie DPF i reset AdBlue'],
                ['Stellantis (Peugeot, Citroën, Opel, Fiat)', 'DiagBox (dawniej Lexia 3 dla Citroëna i Peugeot Planet 2000) | Opel: GDS2 / Tech2 / OP-COM | Fiat/Alfa: Examiner / WiTECH / MultiECUScan', 'Zerowanie licznika dodatku katalitycznego Eolys po dolaniu płynu do FAP, osiowanie Proxi (Proxy Alignment) w autach Fiat/Alfa po wymianie modułu CAN'],
                ['Renault / Dacia', 'Renault CAN Clip (oraz nowszy Alliance ADT)', 'Kodowanie 6-/7-znakowych kodów IMA wtryskiwaczy 1.5/1.6/2.0 dCi, przyuczanie kart Hands-Free, tryb serwisowy tylnych zacisków EPB'],
                ['Ford / Mazda', 'Ford IDS / FDRS (oraz warsztatowy FORScan) | Mazda IDS / MDARS', 'Reset wskaźnika degradacji oleju po wymianie, wypalanie statyczne DPF, kalibracja dwusprzęgłowej skrzyni PowerShift'],
                ['Toyota / Lexus / Honda', 'Toyota Techstream (GTS) | Honda HDS (Honda Diagnostic System)', 'Diagnostyka baterii trakcyjnej NiMH/Li-Ion w układach hybrydowych HSD, odpowietrzanie pompy hamulcowej ECB w Priusie/Corolli Hybrid']
              ]
            }
          }
        ],
        examTip:
          'Zapamiętaj 4 litery kodów OBD: P – Powertrain (silnik/napęd), C – Chassis (podwozie/ABS), B – Body (nadwozie/poduszki), U – komunikacja sieciowa (CAN). Oraz wartość 60 Ω między pinami 6 i 14 gniazda OBD dla sprawnej magistrali CAN!',
        quiz: [
          {
            question: 'Którego obszaru pojazdu dotyczy kod usterki rozpoczynający się od litery C (np. C0035)?',
            options: [
              'Układu napędowego – silnika lub automatycznej skrzyni biegów (Powertrain)',
              'Układu podwozia – np. systemu ABS/ESP lub układu kierowniczego (Chassis)',
              'Komunikacji sieciowej między modułami CAN (Network)',
              'Układu klimatyzacji i poduszek powietrznych w nadwoziu (Body)'
            ],
            correctIndex: 1,
            explanation: 'Litera C pochodzi od angielskiego słowa Chassis (podwozie) i obejmuje usterki układów ABS, ASR, ESP, czujników prędkości kół oraz aktywnego zawieszenia.'
          },
          {
            question: 'Co w pierwszej kolejności należy sprawdzić, jeśli tester diagnostyczny zasilany bezpośrednio z gniazda OBD-II nie uruchamia się po podłączeniu do pojazdu?',
            options: [
              'Ciśnienie sprężania we wszystkich cylindrach silnika',
              'Obecność napięcia +12 V na pinie 16 oraz masy na pinach 4 i 5 gniazda diagnostycznego (i odpowiadający bezpiecznik)',
              'Szczelność układu dolotowego wytwornicą dymu',
              'Grubość okładzin ciernych tylnej osi'
            ],
            correctIndex: 1,
            explanation: 'Pin 16 gniazda OBD-II odpowiada za zasilanie +12 V interfejsu diagnostycznego, a piny 4 i 5 to masa. Przepalenie bezpiecznika gniazda diagnostycznego (często wspólnego z zapalniczką) odcina zasilanie testera.'
          }
        ]
      }
    ]
  }
];
