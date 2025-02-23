import React from 'react'
import Player from '../components/Player'
import { Link } from 'react-router-dom'
const Song = () => {
  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
        <img src="https://i.scdn.co/image/ab67616d00001e025645e61562deebdda78755b6" alt="Imagem da Musica X" /> 
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1"  className='song__artist-image'>
          <img  width={75}
          height={75} src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1" alt="Imagem do Artista Y" />
        </Link>

        <Player />

        <div>
          <p className='song__name'>Coração Partido (Corazón Partío) - Ao Vivo</p>
          <p>Grupo Menos É Mais</p>
        </div>
      </div>

    </div>
  )
}

export default Song