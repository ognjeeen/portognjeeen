# Portfolio kao autorska projekcija

Predlog od 12. septembra 2026. Zasnovan na postojećim komponentama i pregledu lokalne stranice.

## Biografija kao scenario

Rukopis je dopunjen oznakama sa proba: dvostrukim podvlačenjem naslova, beleškom "keep this personal.", podvučenim izrazima, krugom oko TypeScripta, potezom markera i zagradom uz pasus o održavanju widgeta. Naslov se više ne pomera pri ulasku. Potezi se iscrtavaju, a beleške otkrivaju jednom kada dođu u kadar i ostaju nakon povratka. Smanjeno kretanje prikazuje sve oznake odmah. Sedam originalnih pasusa ostalo je neizmenjeno; samo su izabrani delovi vizuelno naglašeni.

Provera oznaka u browseru obuhvatila je desktop, tablet širine 820px i telefon širine 390px. Nije bilo horizontalnog prelivanja. Podvlačenje naslova i krug završili su iscrtavanje, a glavni tekst ostao je potpuno vidljiv. Na telefonu su oznake ostale uz odgovarajuće reči, dok su beleške prešle ispod pasusa.

Vraćeno je svih sedam pasusa duže biografije iz commita `cfe724e`, bez skraćivanja. Jedan rukopis sadrži uvod i četiri scene: početak sa HTML-om i JavaScriptom, profesionalni rad, istraživanje drugih tehnologija i open source, pa interesovanja van posla. Courier daje tekstu izgled scenarija, dok Instrument Serif ostaje za naslov, ime i beleške preuzete iz same biografije. Postojeća svetla podloga sada ostaje pune širine.

Sadržaj poglavlja prati rukopis na desktopu. Skrol pomera marker čitanja i ističe trenutno poglavlje. Na uskim i niskim ekranima navigacija ostaje u normalnom toku stranice. Linkovi vode direktno do scena, a tekst je vidljiv i bez animacije. Pregled na desktopu i širini 390px potvrdio je čitljiv raspored bez horizontalnog prelivanja; skok na treću scenu prikazao je odgovarajući naslov i aktivnu stavku sadržaja. Poređenje sa prethodnom verzijom potvrdilo je očuvanih sedam pasusa.

## Ranije izmene animacija

Implementirani su uvodni naslov, zajednički SVG prelaz rolne u pokazivače, kružno otkrivanje postojećih slika aplikacija, zadržana projekcija na dovoljno velikim ekranima, maske arhivskih slika, svetla podloga biografije, marker iskustva i završni kadar.

Naknadna ispravka uklanja sužavanje same podloge, koje je ostavljalo sadržaj izvan njenog okvira. Skrol sada prolazi kroz poster i screenshot MovieTwista, zatim kroz poster i screenshot Codex widgeta. Povratak prati iste scene obrnutim redom. Ručni izbor pomera i poziciju u sekvenci. Na ekranima na kojima projekcija ne staje i uz smanjeno kretanje oba projekta stoje jedan ispod drugog.

Posle prijave prebrzog prelaza, prostor po projektu povećan je sa 1,2 na 2,2 visine ekrana. Poster ostaje na mestu tokom prvih 28% svoje scene, a potpuno otvoren screenshot tokom narednog zasebnog intervala. Klik prolazi kroz sekvencu za 1,25 sekundi umesto trenutnog skoka. Prelaz simbola i boje traje 1,15 sekundi. Hover neaktivnog taba više ne koristi boju aktivnog taba.

Browser provera pre ove promene potvrdila je da klik odmah postavlja masku na potpuno otvoreno stanje. Novi test zadržavanja postera prvo je pao, zatim prošao sa produženim intervalom. Završnu browser proveru prekinuli su timeouti pri osvežavanju i otvaranju novog taba, pa novi ritam još nije vizuelno potvrđen.

Regresioni test `npm test` proverava izbor projekta i otvaranje prikaza kroz celu sekvencu u oba smera. Početni test je pao sa prethodnim pravilom za samo jedan projekat; sa novim pravilom prolazi. Za ovu naknadnu ispravku browser alat nije imao dostupan browser, pa vizuelna provera novog rasporeda, promena veličine prozora i stvarni skrol ostaju neprovereni.

Pre ove ispravke, browser provera na širinama 390px i 1440px potvrdila je prikaz bez horizontalnog prelivanja dokumenta, odsustvo pinovanja na uskom ekranu, ručno i skrolom pokrenuto otvaranje prikaza aplikacije i jedan aktivan panel. Home i End menjali su projekat uz odgovarajući fokus. Položaj arhive u dokumentu ostao je identičan pre i posle promene projekta. Produkcioni pregled nije prijavio greške ni upozorenja u konzoli. Ta provera nije obuhvatila poravnanje animirane podloge sa sadržajem ni automatsku smenu oba projekta.

Lenis sada koristi `lerp: 0.12` i isti GSAP ticker kao animacije. Uzrok prijavljenog povremenog trzanja nije potvrđen; kraća inercija je podešavanje odziva. Početna browser provera potvrdila je aktivan Lenis, odsustvo CSS smooth-scroll konflikta i odsustvo grešaka u konzoli, ali nije dala pouzdanu reprodukciju pada frejmova.

Sledeći tekst čuva originalni predlog. Demonstracije stvarnih tokova rada i dodatna autorska priča zahtevaju novi materijal. Implementirani prikazi koriste postojeće screenshotove i ne predstavljaju video, interaktivnu kopiju aplikacija ili žive podatke.

## Šta danas čini stranicu statičnom

Portfolio već ima prepoznatljiv filmski okvir. Instrument Serif, tamna ljubičasta pozadina, pastelni posteri i naslovi poput "Behind the screen" pripadaju istoj priči. Zadržao bih ih. Problem je u odnosu između delova stranice.

| Mesto | Zatečeno stanje | Posledica i prilika |
| --- | --- | --- |
| Uvod | Veliki naslov i opis odmah stoje u konačnom rasporedu. Projekcija počinje ispod njih kao odvojena kartica. | Uvod obećava zaplet, ali skrol još ne donosi promenu. Povezati ga sa ulaskom u projekciju. |
| Odabrani projekti | `ProjectScreening` odmah menja vidljivi panel. Oba panela dele visinu, što sprečava skakanje sadržaja. | Postoji dobra osnova za prelaz unutar jednog stabilnog kadra. Sačuvati tu stabilnost. |
| Posteri | MovieTwist ima rolnu, widget kružne pokazivače. Prikaz ostaje ilustracija. | Posetilac vidi identitet projekta, ali ne i kako se aplikacija koristi. Poster može da otvori stvarni prikaz rada. |
| Dokazi o radu | Opisi pominju više od 1.000 korisnika MovieTwista u mesecu i nekoliko stotina preuzimanja widgeta. | Te informacije sada imaju istu težinu kao prateći tekst. Povezati ih sa prikazanom funkcijom, uz potvrdu izvora pre isticanja. |
| Arhiva | Četiri projekta u pravilnoj mreži, odmah posle projekcije. | Duga lista tehnologija prekida centralnu priču. Arhivi odgovara kraći, brži prolaz. |
| Biografija | Svetla sekcija oštro prekida tamnu pozadinu. Četiri pasusa stoje zajedno. | Promena svetla može da označi izlazak iz projekcije i susret sa autorom. |
| Iskustvo i kontakt | Obrnuta hronologija, zatim veliko "What happens next?". | Završetak može da vrati motiv iz uvoda i ostavi kontakt kao poslednju jasnu radnju. |

Trenutni kod nema sekvence animacija vezane za skrol. Postojeći CSS `scroll-behavior: smooth` odnosio se na programsko pomeranje i sidrene linkove. Za traženu inerciju točkića dodat je Lenis.

## Priča koju bih ispričao

"Pravim stvari koje prvo želim da koristim, a onda ih pustim da žive kod drugih ljudi."

To proizlazi iz postojećeg sadržaja. MovieTwist povezuje ljubav prema filmovima sa izborom šta gledati. Widget rešava potrebu tokom svakodnevnog rada. Biografija već govori o povratnim informacijama, prijavljenim problemima i doprinosima korisnika. Taj prelaz od lične potrebe do održavanja proizvoda ima više sadržaja za priču od samog spiska tehnologija.

Glavni vizuelni motiv bio bi krug. Već postoji u znaku sajta, filmskoj rolni i pokazivačima widgeta. Jedan oblik može da promeni značenje dok prolazimo kroz radove. Tu bih uložio najviše animatorskog rada.

## Vizuelna pravila

Zadržati osnovu `#271b2c`, podlogu projekcije `#38273c`, tekst `#f1e8e7`, MovieTwist lavandu `#d2bce8` i widget plavu `#c8cee3`. Instrument Serif ostaje za velike naslove, DM Sans za opis i kontrole. Paleta projekta menja kadar, a ostatak stranice ostaje miran.

Uvod i završetak ostaju centrirani. Projekcija dobija najveću površinu. Opisi, biografija i iskustvo ostaju poravnati ulevo. Ne dodavati tehničke oznake, brojeve kadrova ili lažni timecode samo kao ukras.

Poredio sam dva pravca. Film sa zavesom, odbrojavanjem, zrnom i treperenjem brzo postaje generička bioskopska dekoracija. Biram kontinuitet postojećih oblika i prikaz stvarnog rada. Najupadljiviji trenutak treba da bude prelaz između projekata.

## Predlog scena

### Otvaranje koje odmah možeš da preskočiš skrolom

Naslov je prva informacija. Pri prvom ulasku njegove dve linije kratko izlaze iz maski, sa oko 100 ms razmaka, i za 700 do 900 ms zauzimaju konačno mesto. Opis dolazi neposredno zatim. Animira se linija teksta kao celina, uz očuvan jedan čitljiv naslov u HTML-u.

Nema obaveznog čekanja. Ako posetilac odmah skroluje ili otvori `#work`, uvod prelazi u završno stanje. Povratak sa drugog sajta ne treba da ponavlja otvaranje i vraća korisnika na početak.

### Uvod ulazi u projekciju

Kako uvod napušta ekran, okvir projekcije širi se ka ivicama. Bočne margine se smanjuju, a poster preuzima kadar. Naslov se povlači blagim pomeranjem dok projekat dolazi napred. Maksimalno približavanje sadržaja ostaje malo, da tekst ne postane mutan.

Na desktopu bih probao jedan kadar koji kratko ostaje na mestu, kroz približno jednu visinu ekrana dodatnog skrola. To je polazna mera za prototip. Ako put do samog projekta deluje spor, skratiti trajanje. Na nižim ekranima kadar ne sme da odseče opis ili dugme.

### MovieTwist otkriva šta radi

Rolna se pomera samo dok korisnik skroluje. Otvor u njenom centru raste i otkriva stvarni ekran aplikacije. Izbor filmova, pokretanje izbora i dobijeni rezultat čine kratku demonstraciju. Sadržaj mora da prati stvarni tok aplikacije, koji treba proveriti pre izrade animacije.

Poster prelazi u aplikaciju kroz istu poziciju i isti oblik. To daje osećaj približavanja unutar kadra. Opis problema se pojavljuje pre rešenja, a podatak o korišćenju posle njega. Dugme za otvaranje projekta ostaje dostupno tokom cele scene.

Za prvi prototip koristiti postojeći screenshot iz `public/projects/movieTwist.png`. Za konačnu demonstraciju treba nov snimak ili nekoliko precizno pripremljenih stanja interfejsa. Sam screenshot ne može da dokaže ponašanje proizvoda.

### Rolna postaje pokazivač widgeta

Ovo bi bio glavni potpis portfolia. Pri izboru Codex widgeta centar rolne ostaje na istom mestu. Spoljašnje linije zauzimaju koncentričan raspored, otvor rolne nestaje i krugovi postaju pokazivači. Lavanda prelazi u hladniju plavu. Novi naslov i opis dolaze kada oblik uspostavi sledeći kadar.

Prelaz bi trajao oko 650 do 850 ms. Koristiti zajednički SVG sloj, sa usklađenim geometrijskim elementima, umesto direktnog pretvaranja nepovezanih postojećih HTML i SVG struktura. Kontrole moraju odmah da prihvate novi izbor i tokom prelaza. Brzi klikovi vode do poslednjeg izabranog projekta.

Nakon prelaza pokazivači otvaraju stvarni widget na desktopu. Demonstracija objašnjava gde korisnik vidi limit, reset ili aktivnost. Animirane vrednosti moraju biti jasno demonstracione; postojeće ilustrativne vrednosti 74 i 42 nisu živi podaci.

Zadržao bih ručni izbor projekta u prvom prototipu. Automatsko menjanje tabova skrolom može da se sukobi sa namernim klikom i sakrije izabrani projekat. Ako kasnije želimo da oba projekta svi vide redom, napraviti dve uzastopne scene, a meni koristiti kao skok između njih.

### Arhiva i izlazak iza ekrana

Posle glavnog rada dolazi kraća montaža ranijih projekata. Sličice se otkrivaju prolaskom jedne maske kroz njihov red, uz blag pomak između redova. Naslovi, status i linkovi ostaju dostupni. Bez dugog zadržavanja ekrana na arhivi.

Na ulazu u "Behind the screen" svetla površina raste iz donje ivice poslednjeg kadra i zauzima širinu stranice. To je izlazak iz projekcije. Animacija se završava pre nego što korisnik počne da čita duže pasuse.

Biografiji bih dodao konkretan detalj iz nastanka ili održavanja jednog projekta, kada ga autor obezbedi. Na primer, stvarni problem koji je prijavio korisnik i odluku koja je usledila. Takav materijal daje razlog da se posetilac zadrži. Ne izmišljati citate, radni proces ili rezultate.

### Iskustvo i poslednji kadar

"The backstory" ostaje čitljiva lista u postojećem redosledu. Tanak marker može da prati trenutno vidljiv zapis. Tekst svih zapisa ostaje vidljiv; ne vezivati svaku godinu za zasebno zaustavljanje skrola.

Na kraju se kružni znak iz uvoda vraća uz "What happens next?". Jedan kratak završni pokret i zatim mirovanje. Kontakt ostaje odmah upotrebljiv, bez automatske odjavne špice koja bi ga pomerala dok korisnik pokušava da klikne.

## Ritam i kontrola

Otvaranje je kratko. Projekcija dobija vreme i prostor. Arhiva ubrzava prolaz. Biografija usporava čitanje. Kontakt zaustavlja pokret. Različit ritam ovih delova treba da bude vidljiv i kada se uklone svi hover efekti.

Skrol kontroliše napredovanje kroz scenu. Kada stane, staje i scena. Klik pokreće samo lokalni prelaz između projekata. Ne uvoditi automatski skrol, obavezno preskakanje na sledeću sekciju ili zaključavanje točkića.

Za mobilni prikaz koristiti kraće maske i normalan vertikalni tok, bez duge zadržane projekcije. Na uređajima sa smanjenim pokretom prikazati konačna stanja i trenutne promene projekta. Svaka važna informacija mora da postoji i bez animacije.

## Kako bih to izveo

Lenis je sada zadužen za inerciju. Za scenu koja prati skrol predlažem GSAP sa ScrollTriggerom, koji podržava povezivanje vremenske linije sa skrolom i zadržavanje kadra. [ScrollTrigger dokumentacija](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

Kada GSAP uđe u projekat, povezati Lenis sa njegovim jednim animation loopom i isključiti sadašnji `autoRaf`. Ne dodavati veliko dodatno kašnjenje scene preko već izglađenog skrola. Zvanična dokumentacija opisuje vezu Lenisa i ScrollTriggera. [Lenis integracija](https://github.com/darkroomengineering/lenis#gsap-scrolltrigger)

Desktop, mobilne i reduced-motion varijante odvojiti pomoću `gsap.matchMedia`, uz uklanjanje animacija i pinovanja pri promeni uslova. [GSAP matchMedia dokumentacija](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)

Tekst i podaci ostaju u serverskim komponentama. Klijentska komponenta upravlja projekcionim kadrom i njegovim referencama. Ne ažurirati React state na svakom frejmu. Prednost dati transformacijama, providnosti i jednom jednostavnom maskiranom području. Izmeriti trošak velikih maski pre dodavanja novih.

Za ovu ideju prvo su dovoljni HTML, CSS i SVG. WebGL ne rešava nijedan obavezni deo predloženog prelaza. Dodao bih ga tek ako prototip pokaže konkretnu scenu koju postojeći alati ne mogu da izvedu kako treba.

## Redosled izrade

1. Prototip uvoda, širenja projekcije i prelaza rolna → pokazivači. Koristiti postojeće materijale. Oceniti ga u stvarnom skrolu pre izrade ostatka scena.
2. Pripremiti prikaze stvarnog rada obe aplikacije. Potvrditi podatke o korišćenju i izabrati jednu stvarnu odluku iz razvoja za prateći tekst.
3. Ugraditi demonstracije, pa povezati projekciju sa svetlom biografijom i završetkom.
4. Doterati mobilni ritam, pristupačnost i performanse na stvarnom telefonu i desktopu.

Provera mora da obuhvati brz skrol u oba smera, prekid klikom na navigaciju, uzastopno menjanje projekata, direktan ulaz preko hash linka, browser Back, promenu veličine prozora i promenu reduced-motion postavke tokom rada. Neaktivan panel ostaje van redosleda fokusa. Posetilac koji koristi tastaturu dobija isti sadržaj.

Merilo uspeha je konkretno: posle glavne scene posetilac ume da kaže šta rade MovieTwist i widget, zašto si ih napravio i gde može da ih otvori. Ako pamti samo prelaz, potrebno je ojačati sadržaj scene.
