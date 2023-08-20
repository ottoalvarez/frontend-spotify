export const Library = () => {
  return (
    <>
        <div className="px-4 my-2 py-3 bg-[#121212] rounded-lg h-screen">
            <div className="flex justify-between">
                <div className="flex content-center">
                    <span className="material-symbols-outlined mr-3">width_normal</span> Tu biblioteca
                </div>
                <div>
                    <span className="material-symbols-outlined">add</span>
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-auto text-center gap-2 text-xs my-3">
                <span className="rounded-full p-2 bg-[#2A2929]">Playlist</span>
                <span className="rounded-full p-2 bg-[#2A2929]">Artist</span>
                <span className="rounded-full p-2 bg-[#2A2929]">Albums</span>
                <span className="rounded-full p-2 bg-[#2A2929]">Podcasts & Shows</span>
            </div>
        </div>
    </>
  )
}
