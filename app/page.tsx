import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-400 p-4">
      <div className="flex w-full max-w-6xl flex-col gap-6 md:flex-row md:justify-center">
        {/* Card 1 */}
        <div className="flex w-full flex-col rounded-xl bg-white p-6 shadow-lg md:w-80">
          <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
            <Image
              src="/OIP.webp"
              alt="Card Premium"
              width={320}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-800">Card Premium</h2>
          </div>
          <p className="mb-4 text-gray-600">
            Descripción de la primera card con texto informativo y atractivo.
          </p>
          <button className="rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white transition hover:bg-purple-600">
            Ver más
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex w-full flex-col rounded-xl bg-white p-6 shadow-lg md:w-80">
          <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
            <Image
              src="/OIP (1).webp"
              alt="Card Pro"
              width={320}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-800">Card Pro</h2>
          </div>
          <p className="mb-4 text-gray-600">
            Descripción de la segunda card con información relevante para el usuario.
          </p>
          <button className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600">
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
}
