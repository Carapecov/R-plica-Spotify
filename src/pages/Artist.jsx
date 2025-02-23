import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SongList from '../components/SongList';

const Artist = () => {
  return <div className='artist'>
  <div className="artist__header" style={{backgroundImage: "linear-gradient(to bottom, var(--_shade), var(--_shade)), url(https://i.scdn.co/image/ab67618600001016e06c8846b7f03fdb987739fb)",}}>

  <h2 className="artist__title">Grupo Menos é Mais</h2>

  </div>

  
  <div className="artist__body">
    <h2>Populares</h2>

   <SongList/>
  </div>
  
   <Link to="/song/1">
  <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
   </Link>
   </div>
  
}

export default Artist