const menuSections = [
  {
    title: "Meat",
    subtitle: "Wyselekcjonowane mięsa premium",
    accent: "from-amber-200 via-orange-200 to-rose-200",
    items: [
      {
        name: "Ribeye Prime",
        description: "Sezonowany stek wołowy, puree ziemniaczane, sos pieprzowy.",
        price: "34 €",
      },
      {
        name: "Polędwica wołowa",
        description: "Polędwica z masłem ziołowym, warzywa sezonowe, demi-glace.",
        price: "38 €",
      },
      {
        name: "Jagnięcina z rozmarynem",
        description: "Soczysta jagnięcina z pieczonymi ziemniakami i młodą marchewką.",
        price: "32 €",
      },
    ],
  },
  {
    title: "Seafood",
    subtitle: "Świeże smaki oceanu",
    accent: "from-sky-200 via-cyan-200 to-teal-200",
    items: [
      {
        name: "Grillowana ośmiornica",
        description: "Ośmiornica z oliwą cytrynową, ziemniaki confit i rukola.",
        price: "29 €",
      },
      {
        name: "Krewetki tygrysie",
        description: "Krewetki w maśle czosnkowym, białe wino, świeże zioła.",
        price: "27 €",
      },
      {
        name: "Filet z dorady",
        description: "Filet z dorady z kremem z kalafiora i warzywami.",
        price: "31 €",
      },
    ],
  },
  {
    title: "Pizza",
    subtitle: "Włoska klasyka z nowoczesnym twistem",
    accent: "from-orange-200 via-amber-100 to-yellow-100",
    items: [
      {
        name: "Tartufo Bianca",
        description: "Mozzarella fior di latte, pasta truflowa, grana padano, rukola.",
        price: "19 €",
      },
      {
        name: "Frutti di Mare",
        description: "Pomidor San Marzano, owoce morza, czosnek, oliwa i pietruszka.",
        price: "21 €",
      },
      {
        name: "Prosciutto e Burrata",
        description: "Prosciutto crudo, burrata, pomidorki cherry i bazylia.",
        price: "20 €",
      },
    ],
  },
  {
    title: "Sushi",
    subtitle: "Subtelna japońska selekcja",
    accent: "from-slate-200 via-zinc-100 to-stone-100",
    items: [
      {
        name: "Dragon Roll",
        description: "Tempura krewetkowa, awokado, ogórek, sos unagi.",
        price: "22 €",
      },
      {
        name: "Nigiri Selection",
        description: "Zestaw nigiri z łososiem, tuńczykiem i maślaną rybą.",
        price: "18 €",
      },
      {
        name: "Omakase Mini",
        description: "Autorski wybór szefa kuchni – 10 eleganckich kawałków.",
        price: "28 €",
      },
    ],
  },
];

const reviews = [
  {
    name: "Sofia M.",
    text: "Wyjątkowe miejsce w marinie. Przepiękny klimat, doskonała obsługa i świetne owoce morza. Wracam za każdym razem, gdy jestem w Cascais.",
  },
  {
    name: "Miguel R.",
    text: "Gordini łączy elegancję z luźnym nadmorskim klimatem. Stek był perfekcyjny, a karta win bardzo dobrze dobrana.",
  },
  {
    name: "Anna K.",
    text: "Pięknie podane dania, świetna lokalizacja i bardzo wysoki poziom kuchni. Idealne miejsce zarówno na kolację, jak i spokojny lunch.",
  },
];

const openingHours = [
  { day: "Poniedziałek – Piątek", hours: "10:00 – 22:00" },
  { day: "Sobota – Niedziela", hours: "10:00 – 24:00" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-sky-300 via-cyan-200 to-amber-100 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10">
              G
            </div>
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.35em]">
                Gordini
              </p>
              <p className="text-xs text-slate-400">Marina de Cascais</p>
            </div>
          </a>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300 md:justify-center">
            <a href="#menu" className="transition hover:text-white">
              Menu
            </a>
            <a href="#onas" className="transition hover:text-white">
              O nas
            </a>
            <a href="#opinie" className="transition hover:text-white">
              Opinie
            </a>
            <a href="#dojazd" className="transition hover:text-white">
              Dojazd
            </a>
            <a href="#godziny" className="transition hover:text-white">
              Godziny
            </a>
          </nav>

          <div className="flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Zobacz menu
            </a>
            <a
              href="/menu-gordini.pdf"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Pobierz PDF
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.10),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Elegancka restauracja w Marina de Cascais
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Nadmorska elegancja, wyjątkowe smaki i atmosfera premium.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Gordini to nowoczesna restauracja przy marinie w Cascais,
              łącząca najlepsze mięsa, świeże owoce morza, autorską pizzę i
              starannie przygotowane sushi w spokojnym, luksusowym wydaniu.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Zobacz menu
              </a>
              <a
                href="/menu-gordini.pdf"
                className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/5"
              >
                Pobierz menu PDF
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold">4</p>
                <p className="mt-1 text-sm text-slate-400">główne kuchnie w menu</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold">Premium</p>
                <p className="mt-1 text-sm text-slate-400">jakość i obsługa</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold">Marina</p>
                <p className="mt-1 text-sm text-slate-400">wyjątkowa lokalizacja</p>
              </div>
            </div>
          </div>

          {/* Placeholdery pod zdjęcia AI */}
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-200/30 via-cyan-300/10 to-slate-900 p-6 sm:row-span-2">
                <div className="flex h-full min-h-[340px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
                  <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
                    AI image placeholder
                  </span>
                  <div>
                    <p className="text-sm text-slate-300">Widok restauracji</p>
                    <h2 className="mt-2 text-3xl font-semibold">
                      Luksusowa przestrzeń przy marinie
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Tu później podmienisz główne zdjęcie restauracji lub
                      wygenerowaną grafikę AI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-100/30 to-orange-300/10 p-5">
                <div className="flex min-h-[160px] flex-col justify-end rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5">
                  <p className="text-sm text-slate-300">Steki premium</p>
                  <p className="mt-1 text-xl font-semibold">Meat Selection</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-100/30 to-sky-300/10 p-5">
                <div className="flex min-h-[160px] flex-col justify-end rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5">
                  <p className="text-sm text-slate-300">Owoce morza i sushi</p>
                  <p className="mt-1 text-xl font-semibold">Ocean Flavours</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-black/30">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                od 2012
              </p>
              <p className="mt-1 font-semibold">Rodzinna restauracja w Cascais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
                Menu
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Smaki, które łączą morze, ogień i elegancję
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Krótkie menu degustacyjne poniżej. Pełną kartę dań możesz
                pobrać w formacie PDF.
              </p>
            </div>

            <a
              href="/menu-gordini.pdf"
              className="w-fit rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5"
            >
              Pobierz pełne menu PDF
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {menuSections.map((section) => (
              <article
                key={section.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950"
              >
                <div className={`h-36 bg-gradient-to-r ${section.accent} p-6`}>
                  <div className="flex h-full flex-col justify-end">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-950/70">
                      Signature
                    </p>
                    <h3 className="mt-1 text-3xl font-semibold text-slate-950">
                      {section.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm text-slate-900/75">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-5">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              {item.description}
                            </p>
                          </div>
                          <span className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O nas */}
      <section id="onas">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
              O nas
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Rodzinna historia z widokiem na marinę
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Gordini powstało z miłości do wspólnego stołu, prostych składników
              najwyższej jakości i wyjątkowej atmosfery nad oceanem. Od lat
              tworzymy miejsce, w którym portugalska lekkość spotyka się z
              międzynarodową kuchnią premium.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Nasza rodzinna restauracja w Marina de Cascais została stworzona z
              myślą o gościach, którzy cenią smak, spokój, dobrą obsługę i
              estetykę. To przestrzeń zarówno na elegancką kolację, jak i
              relaksujący lunch z widokiem na marinę.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold">2012</p>
                <p className="mt-1 text-sm text-slate-400">rok otwarcia</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold">4</p>
                <p className="mt-1 text-sm text-slate-400">sekcje menu</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold">Premium</p>
                <p className="mt-1 text-sm text-slate-400">doświadczenie gości</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-200/20 to-cyan-300/10 p-5">
                  <div className="flex min-h-[150px] flex-col justify-end rounded-xl border border-white/10 bg-slate-900/40 p-4">
                    <p className="text-sm text-slate-300">Przestrzeń restauracji</p>
                    <p className="mt-1 text-xl font-semibold">Naturalny luksus</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-100/20 to-yellow-200/10 p-5">
                  <div className="flex min-h-[150px] flex-col justify-end rounded-xl border border-white/10 bg-slate-900/40 p-4">
                    <p className="text-sm text-slate-300">Autorskie dania</p>
                    <p className="mt-1 text-xl font-semibold">Sezonowe składniki</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-100/20 to-sky-300/10 p-5 sm:col-span-2">
                  <div className="flex min-h-[180px] flex-col justify-end rounded-xl border border-white/10 bg-slate-900/40 p-4">
                    <p className="text-sm text-slate-300">Miejsce na zdjęcie AI</p>
                    <p className="mt-1 text-2xl font-semibold">
                      Widok na marinę i spokojny klimat Cascais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section id="opinie" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
            Opinie
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Goście, którzy wracają dla smaku i atmosfery
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[2rem] border border-white/10 bg-slate-950 p-7"
              >
                <p className="text-4xl text-cyan-200">“</p>
                <p className="mt-4 leading-8 text-slate-300">{review.text}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-slate-400">Gość restauracji Gordini</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dojazd */}
      <section id="dojazd">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
              Dojazd
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Znajdź nas w sercu Marina de Cascais
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Gordini mieści się przy marinie w Cascais — w miejscu, które łączy
              nadmorski spokój, piękne widoki i łatwy dojazd.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Adres
                </p>
                <p className="mt-2 font-medium">
                  Marina de Cascais 50-51 Lj, 2750-800 Cascais, Portugalia
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Kontakt
                </p>
                <div className="mt-2 space-y-2 text-slate-200">
                  <p>Telefon: +351 912 345 678</p>
                  <p>E-mail: hello@gordini.pt</p>
                  <p>Instagram: @gordini.marina</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Marina+de+Cascais+50-51+Lj,+2750-800+Cascais,+Portugal"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Otwórz w mapach
                </a>
                <a
                  href="mailto:hello@gordini.pt?subject=Rezerwacja%20w%20Gordini"
                  className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5"
                >
                  Skontaktuj się
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <iframe
              title="Mapa Gordini"
              src="https://www.google.com/maps?q=Marina+de+Cascais+50-51+Lj,+2750-800+Cascais,+Portugal&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Godziny */}
      <section id="godziny" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
                  Godziny otwarcia
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Zapraszamy przez cały tydzień
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Od spokojnych lunchów po późne kolacje przy marinie — jesteśmy
                  otwarci codziennie.
                </p>
              </div>

              <div className="space-y-4">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="text-lg font-medium">{item.day}</p>
                    <p className="text-lg text-cyan-100">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.3em]">
                Gordini
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                Elegancka restauracja w Marina de Cascais. Mięsa premium, owoce
                morza, pizza i sushi w spokojnym, luksusowym klimacie.
              </p>
            </div>

            <div>
              <p className="font-semibold">Kontakt</p>
              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>+351 912 345 678</p>
                <p>hello@gordini.pt</p>
                <p>@gordini.marina</p>
              </div>
            </div>

            <div>
              <p className="font-semibold">Adres</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Marina de Cascais 50-51 Lj
                <br />
                2750-800 Cascais
                <br />
                Portugalia
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © 2026 Gordini. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </main>
  );
}