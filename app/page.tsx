export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Nawigacja */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-black tracking-tight">
            KM<span className="text-lime-400">FIT</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#oferta" className="transition hover:text-white">
              Oferta
            </a>
            <a href="#o-mnie" className="transition hover:text-white">
              O mnie
            </a>
            <a href="#kontakt" className="transition hover:text-white">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-lime-300"
          >
            Umów trening
          </a>
        </div>
      </header>

      {/* Główna sekcja */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-300">
              Treningi personalne w Warszawie
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Zbuduj formę, która zostanie z Tobą na dłużej.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              Indywidualny plan treningowy, pełne wsparcie i trening
              dopasowany do Twoich możliwości oraz celu.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-lime-400 px-7 py-4 text-center font-bold text-zinc-950 transition hover:bg-lime-300"
              >
                Zarezerwuj pierwszy trening
              </a>

              <a
                href="#oferta"
                className="rounded-full border border-white/15 px-7 py-4 text-center font-bold transition hover:bg-white/5"
              >
                Zobacz ofertę
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-black">8+</p>
                <p className="mt-1 text-sm text-zinc-500">
                  lat doświadczenia
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">150+</p>
                <p className="mt-1 text-sm text-zinc-500">
                  podopiecznych
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">4.9</p>
                <p className="mt-1 text-sm text-zinc-500">
                  średnia ocen
                </p>
              </div>
            </div>
          </div>

          {/* Karta po prawej */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
              <div className="flex min-h-[420px] flex-col justify-end rounded-2xl bg-gradient-to-br from-lime-300 via-lime-400 to-emerald-500 p-8 text-zinc-950">
                <span className="mb-auto w-fit rounded-full bg-zinc-950/90 px-4 py-2 text-sm font-bold text-white">
                  Pierwsza konsultacja gratis
                </span>

                <p className="text-sm font-bold uppercase tracking-widest">
                  Twój trener
                </p>

                <h2 className="mt-2 text-4xl font-black">
                  Krystian Michalski
                </h2>

                <p className="mt-3 max-w-sm font-medium text-zinc-800">
                  Trening siłowy, redukcja wagi i przygotowanie motoryczne.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-zinc-900 p-5 shadow-xl">
              <p className="text-sm text-zinc-400">Najbliższy termin</p>
              <p className="mt-1 font-bold">Jutro, 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="border-t border-white/10 bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
            Oferta
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Trening dopasowany do Twojego celu
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Trening personalny",
                description:
                  "Indywidualna sesja treningowa dopasowana do Twojego poziomu i możliwości.",
              },
              {
                number: "02",
                title: "Plan treningowy",
                description:
                  "Kompletny plan ćwiczeń wraz z instrukcją i regularnym sprawdzaniem postępów.",
              },
              {
                number: "03",
                title: "Trening online",
                description:
                  "Współpraca zdalna, konsultacje oraz stały kontakt niezależnie od miejsca.",
              },
            ].map((service) => (
              <article
                key={service.number}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-lime-400/40"
              >
                <span className="text-sm font-black text-lime-400">
                  {service.number}
                </span>

                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-lime-400 px-8 py-14 text-center text-zinc-950 sm:px-14">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Gotowy na pierwszy trening?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-zinc-800">
              Napisz lub zadzwoń. Wspólnie ustalimy Twój cel i wybierzemy
              odpowiedni termin.
            </p>

            <a
              href="mailto:kontakt@kmfit.pl"
              className="mt-8 inline-block rounded-full bg-zinc-950 px-8 py-4 font-bold text-white transition hover:bg-zinc-800"
            >
              kontakt@kmfit.pl
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KMFIT. Wszelkie prawa zastrzeżone.</p>
          <p>Warszawa</p>
        </div>
      </footer>
    </main>
  );
}