import Header from "./Header";

export default function Hero() {
  

  return (
    <div className="bg-white">
      <Header />
      {/* HERO SECTION */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
            Explorez votre bibliothèque en un clic
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Bibliotek vous permet d'accéder facilement aux livres, de gérer vos réservations et de suivre vos emprunts en temps réel.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="/login"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500"
            >
              Explorer la Bibliothèque
            </a>
            <a href="/login" className="text-sm font-semibold text-gray-900">
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
