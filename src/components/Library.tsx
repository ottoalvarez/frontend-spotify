import { type Album as Template } from "../dto/Albums";

const Albums:Template[] = [
    {
        id:1,
        image: 'https://picsum.photos/50',
        name: 'Liked Songs',
        description: 'Playlist · 228 canciones',
        active: true
    },
    {
        id:4,
        image: 'https://picsum.photos/50',
        name: 'Spotify Web API Testing playlist',
        description: 'Playlist · JMPerez',
        active: false
    },
    {
        id:2,
        image: 'https://picsum.photos/50',
        name: 'Heroes del Silencio',
        description: 'Artista',
        active: false
    },
    {
        id:3,
        image: 'https://picsum.photos/50',
        name: 'Pennywise',
        description: 'Artista',
        active: false
    }
]

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
                {
                    Albums.map(album=>(
                        <div className="flex" key={album.id}>
                            <img src={album.image} className={album.description === 'Artista' ? 'rounded-full' : 'rounded-md'} alt="RandomizeImage" />
                            <div className="flex flex-col mx-4">
                                <strong>{album.name}</strong>
                                <div className="text-xs text-[#A7A7A7]">
                                    { album.active && <span className="material-symbols-outlined text-sm rotate-45 text-[#1BD760] mr-2">push_pin</span> }
                                    <strong>{album.description}</strong>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
