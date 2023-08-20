export const Library = () => {
  return (
    <>
        <div className="px-6 my-2 py-4 bg-[#121212] rounded-lg h-screen">
            <div className="flex justify-between">
                <div className="flex content-center">
                    <span className="material-symbols-outlined mr-3">width_normal</span> Tu biblioteca
                </div>
                <div>
                    <span className="material-symbols-outlined">add</span>
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-auto text-center gap-2 text-xs my-4">
                <span className="rounded-full py-2 bg-[#2A2929]">Playlist</span>
                <span className="rounded-full py-2 bg-[#2A2929]">Artist</span>
                <span className="rounded-full py-2 bg-[#2A2929]">Albums</span>
                <span className="rounded-full py-2 bg-[#2A2929]">Podcasts & Shows</span>
            </div>
            <div className="flex justify-between">
                <div>
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className="flex content-center items-center text-sm">
                    Recents <span className="material-symbols-outlined ml-2">arrow_drop_down</span>
                </div>
            </div>
            <div className="grid gap-3 row-auto my-3">
                <div className="flex">
                    <img src="https://picsum.photos/50" className="rounded-sm" alt="RandomizeImage" />
                    <div className="flex flex-col mx-4">
                        <strong>Liked Songs</strong>
                        <div className="text-xs text-[#A7A7A7]">
                            <span className="material-symbols-outlined text-sm rotate-45 text-[#1BD760] mr-2">push_pin</span>
                            <strong>Playlist · 228 canciones</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
