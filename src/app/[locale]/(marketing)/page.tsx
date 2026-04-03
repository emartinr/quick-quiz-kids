export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl border p-8 shadow-sm">
        <h1 className="mb-4 text-3xl font-bold">
          Quick Quiz Kids
        </h1>

        <p className="mb-6 text-base text-gray-600">
          Configura el examen con IA y genera preguntas adaptadas.
        </p>

        <button className="rounded-xl border px-6 py-3 font-semibold transition hover:shadow-md">
          Comenzar examen
        </button>
      </div>
    </main>
  );
}