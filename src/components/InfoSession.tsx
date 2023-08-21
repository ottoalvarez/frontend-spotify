export const InfoSession = () => {
  return (
    <div className="py-6 px-7 bg-gradient-to-b from-[#1B0301] from-30% to-black to-70% rounded-lg h-screen">
        <div className="flex justify-between">
            <div className="bg-black/30 rounded-full p-1 w-9 h-9 flex content-center items-center">
                <span className="material-symbols-outlined">chevron_left</span>
            </div>
            <div className="bg-black/30 rounded-full p-1 w-10 h-10 flex content-center items-center">
                <img src="https://unavatar.io/twitter/ofrehley" className="rounded-full w-11/12" alt="ofrehley" />
            </div>
        </div>

        <div className="text-4xl my-3 mx-2 font-bold">Buenas noches</div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 mx-2 my-10">
          <div className="flex items-center content-center w-full bg-[#4E4E4E]/60 rounded-l-md rounded-r-md">
            <img src="https://picsum.photos/80" className="rounded-l-md" alt="" />
            <span className="mx-5">Quién Lleva Las Armas</span>
          </div>
          <div className="flex items-center content-center w-full bg-[#4E4E4E]/60 rounded-l-md rounded-r-md">
            <img src="https://picsum.photos/80" className="rounded-l-md" alt="" />
            <span className="mx-5">Raconto</span>
          </div>
          <div className="flex items-center content-center w-full bg-[#4E4E4E]/60 rounded-l-md rounded-r-md">
            <img src="https://picsum.photos/80" className="rounded-l-md" alt="" />
            <span className="mx-5">31 Minutos - Grandes Éxitos</span>
          </div>
          <div className="flex items-center content-center w-full bg-[#4E4E4E]/60 rounded-l-md rounded-r-md">
            <img src="https://picsum.photos/80" className="rounded-l-md" alt="" />
            <span className="mx-5">Pennywise</span>
          </div>
          <div className="flex items-center content-center w-full bg-[#4E4E4E]/60 rounded-l-md rounded-r-md">
            <img src="https://picsum.photos/80" className="rounded-l-md" alt="" />
            <span className="mx-5">Turnstile</span>
          </div>
          <div className="flex items-center content-center w-full bg-[#4E4E4E]/60 rounded-l-md rounded-r-md">
            <img src="https://picsum.photos/80" className="rounded-l-md" alt="" />
            <span className="mx-5">De Tripas Corazón</span>
          </div>
        </div>

        <div className="flex justify-between my-3 mx-2">
          <div className="text-3xl font-bold">Hecho para Claudio Alvarez Rivera</div>
          <span className="text-[#A7A7A7]">Mostrar todo</span>
        </div>

        <div className="grid grid-cols-4 gap-10 my-8">
          <div className="flex flex-col p-4 bg-[#262626]/30 rounded-lg">
            <img src="https://picsum.photos/200" className="rounded-md" alt="" />
            <span className="mt-4 text-sm">Mix diario 1</span>
            <span className="mt-4 text-xs text-[#A7A7A7]">Ghost, Disturbed, Sabaton y más</span>
          </div>
          <div className="flex flex-col p-4 bg-[#262626]/30 rounded-lg">
            <img src="https://picsum.photos/200" className="rounded-md" alt="" />
            <span className="mt-4 text-sm">Mix diario 2</span>
            <span className="mt-4 text-xs text-[#A7A7A7]">Ghost, Disturbed, Sabaton y más</span>
          </div>
          <div className="flex flex-col p-4 bg-[#262626]/30 rounded-lg">
            <img src="https://picsum.photos/200" className="rounded-md" alt="" />
            <span className="mt-4 text-sm">Mix diario 3</span>
            <span className="mt-4 text-xs text-[#A7A7A7]">Ghost, Disturbed, Sabaton y más</span>
          </div>
          <div className="flex flex-col p-4 bg-[#262626]/30 rounded-lg">
            <img src="https://picsum.photos/200" className="rounded-md" alt="" />
            <span className="mt-4 text-sm">Mix diario 4</span>
            <span className="mt-4 text-xs text-[#A7A7A7]">Ghost, Disturbed, Sabaton y más</span>
          </div>
        </div>
    </div>
  )
}