import React from 'react';
import api from '../../service/api';


import './styles.css';

export interface Themes{ 
  id: number;
  name: string;
  avatar: string;
  curso: string;
  sugestaoDeTema: string;
  descricao: string;
  area: string;
  linksArtigos: string;
};


interface ThemesItemProps{
  themes: Themes;
}

const ThemesItem: React.FC <ThemesItemProps> = ({themes}) =>{
  function createNewConnection(){
    api.post('themes',{
      user_id: themes.id,
    });
    
  }
  
  return (
    <article className="themes-item">
      <header>
        <img src={themes.avatar} alt={themes.name}/>
        <div>
        <strong>{themes.name}</strong>
          <span>{themes.curso}</span>
          <span>{themes.sugestaoDeTema}</span>
          <span>{themes.descricao}</span>
          <span>{themes.area}</span>
          <span>{themes.linksArtigos}</span>
        </div>
      </header>

     <footer>
        <a 
          onClick = {createNewConnection} 
        >
          
        </a>
      </footer>
    </article>
  )
}

export default ThemesItem;