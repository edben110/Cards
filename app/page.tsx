import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-400 p-4">
      <div className="flex w-full max-w-6xl flex-row justify-center gap-4 overflow-x-auto sm:gap-6">
        {/* Card 1 */}
        <div className="relative flex min-w-[280px] max-w-[320px] flex-1 flex-col overflow-hidden rounded-xl shadow-lg">
          <div className="relative h-[400px] w-full sm:h-[500px]">
            <Image
              src="/OIP.webp"
              alt="Card Premium"
              width={320}
              height={500}
              className="h-full w-full object-cover"
            />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-6 w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h2 className="text-lg font-bold text-white sm:text-xl">Card Premium</h2>
              </div>
              <p className="mb-4 text-sm text-gray-100 sm:text-base">
                Descripción de la primera card con texto informativo y atractivo.
              </p>
              <button className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600 sm:text-base">
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex min-w-[280px] max-w-[320px] flex-1 flex-col rounded-xl bg-white shadow-lg overflow-hidden h-[400px] sm:h-[500px]">
          <div className="relative h-[200px] w-full overflow-hidden sm:h-[250px]">
            <Image
              src="/OIP (1).webp"
              alt="Card Pro"
              width={320}
              height={250}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h2 className="text-lg font-bold text-gray-800 sm:text-xl">Card Pro</h2>
              </div>
              <p className="text-sm text-gray-600 sm:text-base">
                Descripción de la segunda card con información relevante para el usuario.
              </p>
            </div>
            <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 sm:text-base">
              Explorar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
