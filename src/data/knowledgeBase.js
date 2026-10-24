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
    name: 'Elektrotechnika',
    shortName: 'Elektro',
    icon: 'Zap',
    code: 'DZIAŁ III',
    description: 'Podstawowe prawa elektrotechniki samochodowej, pomiary multimetrem, diagnostyka akumulatora rozruchowego i układu ładowania.',
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
        readingTime: '7 min',
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
      }
    ]
  },
  {
    id: 'budowa-pojazdow',
    name: 'Budowa Pojazdów',
    shortName: 'Budowa',
    icon: 'Car',
    code: 'DZIAŁ IV',
    description: 'Konstrukcja i zasada działania mechanizmów silnika (układ rozrządu), układów jezdnych i zawieszenia oraz hydraulicznych układów hamulcowych.',
    topics: [
      {
        id: 'uklad-rozrzadu',
        title: 'Układ rozrządu',
        subtitle: 'Zadania układu rozrządu, typy OHV, OHC i DOHC, napęd paskiem zębatym i łańcuchem, luz zaworowy oraz zmienne fazy rozrządu (VVT).',
        readingTime: '8 min',
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
        id: 'budowa-zawieszenia',
        title: 'Budowa zawieszenia',
        subtitle: 'Elementy wodzące, sprężyste i tłumiące, kolumna MacPhersona, zawieszenie wielowahaczowe, diagnostyka luzów i zużycia amortyzatorów.',
        readingTime: '7 min',
        examFrequency: 'Wysoka',
        keywords: [
          'zawieszenie', 'amortyzator', 'sprężyna', 'wahacz', 'sworzeń wahacza', 'tuleja metalowo-gumowa',
          'silentblock', 'macpherson', 'stabilizator', 'łącznik stabilizatora', 'łożysko McPhersona', 'ściągacz do sprężyn'
        ],
        summary:
          'Układ zawieszenia łączy koła jezdne z nadwoziem pojazdu, przenosi siły napędowe, hamowania i boczne, a jednocześnie izoluje kabinę od nierówności drogi i utrzymuje stały docisk opony do nawierzchni.',
        sections: [
          {
            heading: '1. Trzy grupy funkcyjne elementów zawieszenia',
            content:
              'Każde zawieszenie samochodowe składa się z trzech współpracujących ze sobą grup podzespołów:',
            table: {
              headers: ['Grupa elementów', 'Przykłady podzespołów', 'Rola w pojeździe'],
              rows: [
                ['Elementy wodzące (prowadzące koło)', 'Wahacze poprzeczne i wzdłużne, sworznie kulowe, tuleje metalowo-gumowe, belka skrętna', 'Wyznaczają tor ruchu koła względem nadwozia i przenoszą siły wzdłużne oraz poprzeczne'],
                ['Elementy sprężyste', 'Sprężyny śrubowe, resory piórowe, drążki skrętne, miechy pneumatyczne', 'Przejmują energię uderzeń kół o nierówności drogi, zamieniając ją na drgania sprężyste'],
                ['Elementy tłumiące i stabilizujące', 'Amortyzatory hydrauliczno-gazowe, stabilizator przechyłów z łącznikami', 'Wygaszają (tłumią) drgania sprężyn i ograniczają przechyły boczne nadwozia na zakrętach']
              ]
            }
          },
          {
            heading: '2. Kolumna zawieszenia typu MacPherson',
            content:
              'Najpopularniejsze rozwiązanie przedniego zawieszenia niezależnego w samochodach osobowych i dostawczych:',
            bullets: [
              'Zwrotnica koła jest połączona na dole ze sworzniem wahacza poprzecznego, a od góry z kolumną amortyzatora, na której osadzona jest sprężyna śrubowa.',
              'Kolumna amortyzatora pełni jednocześnie funkcję elementu tłumiącego oraz górnego elementu wodzącego koło (stanowi oś skrętu zwrotnicy!).',
              'W górnym mocowaniu kolumny znajduje się poduszka gumowa z łożyskiem oporowym (łożyskiem MacPhersona). Zatarcie tego łożyska objawia się przeskakiwaniem sprężyny i metalicznym „brzdękaniem” podczas skręcania kół na postoju.'
            ]
          },
          {
            heading: '3. Złote zasady bezpieczeństwa podczas naprawy zawieszenia',
            content:
              'Podczas wymiany wahaczy, sprężyn lub amortyzatorów obowiązują dwie krytyczne reguły technologiczne:',
            steps: [
              'DEMONTAŻ KOLUMNY MACPHERSONA: przed odkręceniem centralnej nakrętki tłoczyska amortyzatora BEZWZGLĘDNIE ściśnij sprężynę śrubową za pomocą atestowanego ściągacza do sprężyn. Napięta sprężyna magazynuje ogromną energię potencjalną!',
              'DOKRĘCANIE TULEI METALOWO-GUMOWYCH (SILENTBLOCKÓW): śruby przechodzące przez tuleje metalowo-gumowe wahaczy oraz tylnej belki dokręcamy momentem znamionowym DOPIERO PO OPUSZCZENIU POJAZDU NA KOŁA (lub po podparciu zwrotnicy w położeniu odpowiadającym normalnemu obciążeniu statycznemu).',
              'Dokręcenie tulei na wiszących kołach powoduje jej trwałe skręcenie już po opuszczeniu auta z podnośnika i szybkie zerwanie gumy!'
            ]
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
            question: 'Jakie specjalistyczne narzędzie jest niezbędne do bezpiecznego oddzielenia sprężyny śrubowej od amortyzatora w kolumnie MacPhersona?',
            options: [
              'Ściągacz trójramienny do łożysk tocznych',
              'Ściągacz do sprężyn zawieszenia (śrubowy lub stacjonarny hydrauliczny)',
              'Prasa do zarabiania przewodów hamulcowych',
              'Klucz hakowy do nakrętek łożyskowych'
            ],
            correctIndex: 1,
            explanation: 'Sprężyna w kolumnie MacPhersona znajduje się pod dużym napięciem wstępnym. Odkręcenie nakrętki górnego talerzyka bez ściśnięcia zwojów ściągaczem grozi wystrzeleniem sprężyny i ciężkim wypadkiem.'
          }
        ]
      },
      {
        id: 'uklad-hamulcowy',
        title: 'Układ hamulcowy',
        subtitle: 'Budowa hydraulicznego układu hamulcowego, pomiary bicia i grubości tarcz, właściwości płynów hamulcowych (DOT 3, DOT 4, DOT 5.1) oraz system ABS.',
        readingTime: '8 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'hamulce', 'tarcza hamulcowa', 'klocki', 'zacisk', 'płyn hamulcowy', 'dot4',
          'higroskopijny', 'temperatura wrzenia', 'odpowietrzanie', 'bicie tarczy', 'czujnik zegarowy', 'abs'
        ],
        summary:
          'Hydrauliczny układ hamulcowy wykorzystuje prawo Pascala (ciśnienie wywierane na płyn w układzie zamkniętym rozchodzi się jednakowo we wszystkich kierunkach) oraz zjawisko tarcia do zamiany energii kinetycznej jadącego pojazdu w energię cieplną.',
        sections: [
          {
            heading: '1. Właściwości płynu hamulcowego i kryteria jego wymiany',
            content:
              'Płyny hamulcowe glikolowe (DOT 3, DOT 4, DOT 4 LV, DOT 5.1) są silnie HIGROSKOPIJNE – chłoną wilgoć z powietrza atmosferycznego przez mikropory przewodów elastycznych i odpowietrznik zbiorniczka:',
            table: {
              headers: ['Klasa płynu', 'Baza chemiczna', 'Min. temp. wrzenia suchego (ERBP)', 'Min. temp. wrzenia zawodnionego (Wet ERBP)'],
              rows: [
                ['DOT 3', 'Glikolowa', '≥ 205°C', '≥ 140°C'],
                ['DOT 4', 'Glikolowo-boranowa', '≥ 230°C', '≥ 155°C'],
                ['DOT 5.1', 'Glikolowa (niska lepkość dla ESP/ABS)', '≥ 260°C', '≥ 180°C'],
                ['DOT 5 (uwaga!)', 'Silikonowa (NIEMIESZALNA z DOT 3/4/5.1!)', '≥ 260°C', '≥ 180°C (niehigroskopijny)']
              ]
            },
            bullets: [
              'Kryterium wymiany płynu hamulcowego: zawartość wody przekraczająca 1,5% – 2,0% lub spadek temperatury wrzenia poniżej 180°C (dla DOT 4), bądź interwał czasowy co 2 lata.',
              'Skutek wrzenia zawodnionego płynu podczas długotrwałego hamowania: powstanie korka parowego (pęcherzyków pary wodnej, które są ściśliwe) i wpadnięcie pedału hamulca w podłogę!'
            ]
          },
          {
            heading: '2. Weryfikacja tarcz i klocków hamulcowych (pomiary warsztatowe)',
            content:
              'Podczas obsługi układu hamulcowego wykonuje się trzy podstawowe pomiary kontrolne:',
            bullets: [
              'Grubość tarczy hamulcowej (TH / Min TH): mierzona mikrometrem lub suwmiarką do tarcz w kilku punktach na obwodzie (z pominięciem zewnętrznego rantu korozyjnego!). Dopuszczalne zużycie tarczy to zazwyczaj ok. 2,0 mm (po 1 mm na stronę) względem wymiaru nominalnego.',
              'Bicie boczne tarczy hamulcowej: mierzone czujnikiem zegarowym na statywie magnetycznym w odległości ok. 5–10 mm od zewnętrznej krawędzi tarczy. Maksymalne dopuszczalne bicie boczne nowej tarczy wynosi zazwyczaj 0,05 mm (5 setnych milimetra). Nadmierne bicie powoduje pulsowanie pedału i drgania kierownicy przy hamowaniu.',
              'Grubość okładziny ciernej klocka hamulcowego: minimalna dopuszczalna grubość samej warstwy ciernej (bez płytki stalowej nośnej) wynosi zazwyczaj 1,5 – 2,0 mm.'
            ]
          },
          {
            heading: '3. Odpowietrzanie układu hamulcowego i cofanie tłoczków',
            content:
              'Powietrze w układzie hydraulicznym objawia się „miękkim, gąbczastym” pedałem hamulca, który twardnieje dopiero po kilkukrotnym naciśnięciu:',
            steps: [
              'W układach klasycznych bez użycia testera diagnostycznego odpowietrzanie rozpoczynamy od koła NAJDALEJ położonego od pompy hamulcowej (zwykle: prawy tył -> lewy tył -> prawy przód -> lewy przód), kontrolując poziom płynu w zbiorniczku.',
              'W zaciskach tylnych z zintegrowanym mechanizmem ręcznego hamulca postojowego tłoczek należy COFAĆ JEDNOCZEŚNIE GO WKRĘCAJĄC za pomocą praski śrubowej (wciskanie młotkiem lub dźwignią uszkodzi samoregulator!).',
              'W pojazdach z elektrycznym hamulcem postojowym (EPB) przed wymianą tylnych klocków należy wprowadzić zaciski w tryb serwisowy (wymiany klocków) za pomocą testera diagnostycznego OBD.'
            ]
          }
        ],
        examTip:
          'Przed zamontowaniem nowej tarczy hamulcowej bezwzględnie oczyść szczotką drucianą przylgnię piasty koła do czystego metalu i sprawdź czujnikiem zegarowym bicie boczne (max. 0,05 mm). Nieoczyszczona z rdzy piasta to najczęstsza przyczyna bicia nowych tarcz!',
        quiz: [
          {
            question: 'Co oznacza określenie, że płyn hamulcowy DOT 4 jest cieczą higroskopijną?',
            options: [
              'Że nie zamarza w temperaturze do -50°C',
              'Że posiada właściwości smarne dla łożysk tocznych',
              'Że chłonie wilgoć (wodę) z otaczającego powietrza, co obniża jego temperaturę wrzenia',
              'Że po podgrzaniu zwiększa swoją lepkość dwukrotnie'
            ],
            correctIndex: 2,
            explanation: 'Higroskopijność to zdolność wchłaniania pary wodnej z otoczenia. Zawartość zaledwie 3% wody w płynie DOT 4 obniża jego temperaturę wrzenia z ok. 230°C do ok. 155°C.'
          },
          {
            question: 'Jakim przyrządem mierzy się bicie boczne zamontowanej tarczy hamulcowej?',
            options: [
              'Szczelinomierzem listkowym',
              'Czujnikiem zegarowym zamocowanym na statywie magnetycznym',
              'Areometrem pływakowym',
              'Kluczem dynamometrycznym z kątomierzem'
            ],
            correctIndex: 1,
            explanation: 'Bicie boczne tarczy mierzy się czujnikiem zegarowym o dokładności 0,01 mm podczas pełnego obrotu piasty. Wartość graniczna to zwykle 0,05 mm.'
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
        subtitle: 'Standard OBD-II / EOBD, gniazdo DLC 16-pinowe, struktura pięcioznakowego kodu usterki DTC (P, C, B, U), zamrożone ramki i parametry bieżące.',
        readingTime: '7 min',
        examFrequency: 'Bardzo wysoka',
        keywords: [
          'obd', 'obd2', 'eobd', 'dtc', 'kod błędu', 'gniazdo diagnostyczne', 'dlc',
          'check engine', 'mil', 'p0', 'c0', 'b0', 'u0', 'zamrożone ramki', 'live data', 'kasowanie błędów'
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
