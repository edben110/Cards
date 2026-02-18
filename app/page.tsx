import Image from "next/image";

const PlaneIcon = ({ color = "text-purple-300", className = "" }) => (
  <svg className={`h-6 w-6 ${color} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m0 18l2-2m-2 2l-2-2M20 8v12m-5-4.5a5 5 0 0 0 9.5 2.5m-6.42-7A5 5 0 0 0 20 6" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-400 p-4">
      <div className="flex w-full max-w-6xl flex-row justify-center gap-4 overflow-x-auto md:gap-6">
        {/* Card 1 - Paris */}
        <div className="relative flex min-w-[280px] max-w-[320px] flex-1 flex-col overflow-hidden rounded-3xl border-6 border-white shadow-lg">
          <Image
            src="/OIP.webp"
            alt="Paris"
            width={320}
            height={500}
            className="h-[400px] w-full object-cover sm:h-[500px]"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="bg-black/40 p-4 backdrop-blur-sm sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <PlaneIcon color="text-purple-300" />
                <h2 className="text-lg font-bold text-white sm:text-2xl">Paris</h2>
              </div>
              <p className="mb-4 text-sm text-gray-100 sm:text-base">
                Descripción de la primera card con texto informativo y atractivo.
              </p>
              <button className="w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-purple-600 sm:text-base">
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Las Lajas */}
        <div className="flex min-w-[280px] max-w-[320px] flex-1 flex-col rounded-3xl bg-white shadow-lg h-[400px] sm:h-[500px]">
          <div className="relative flex h-4/6 w-full items-center justify-center overflow-hidden p-3 sm:p-6">
            <Image
              src="/OIP (1).webp"
              alt="Las Lajas"
              width={320}
              height={250}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          
          <div className="flex h-2/6 flex-col justify-between p-3 sm:p-6">
            <div>
              <h2 className="mb-2 text-base font-bold text-gray-800 sm:mb-3 sm:text-2xl">Las Lajas</h2>
              <p className="text-xs text-gray-600 sm:text-base">
                Descripción de la segunda card con información relevante.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-black/80 px-3 py-2 text-xs font-semibold text-white transition sm:px-4 sm:text-base">
                Explorar
              </button>
              <PlaneIcon color="text-blue-500" className="sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
