import React from 'react'
import { Link } from 'react-router-dom'


const SongItem = () => {
  return (
    <Link to="/song/1" className='song-item'>
     <div className='song-item__number-album'>

    <p>1</p>
    <div className='song-item__album'>
      
    <img src="https://i.scdn.co/image/ab67616d00001e025645e61562deebdda78755b6" alt="Imagem da Musica X" className='song-item__image'/>

    <p className='song-item__name'>Coração Partido (Corazón Partío) - Ao Vivo</p>
      </div>
    </div>

    <p>03:15</p>
    </Link>
  )
}

export default SongItem