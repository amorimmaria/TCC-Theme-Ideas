import React from 'react';
import api from '../../service/api';


import './styles.css';

export interface Themes{ 
  id: number;
  name: string;
  avatar: string;
  tipoDeUsuario: string;
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
    api.post('connections',{
      user_id: themes.id,
    });
    
  }
 
  /*return (
    <article className="themes-item">
      <header>
        <img src={themes.avatar} alt={themes.name}/>
        <div>
        <strong>{themes.name}</strong>
          <span>{themes.tipoDeUsuario}</span>
        </div>
        <div>
          <span>{themes.curso}</span>
        </div>
        <div>
          <span>{themes.sugestaoDeTema}</span>
        </div>
        <div>
          <span>{themes.descricao}</span>
        </div>
        <div>
          <span>{themes.area}</span>
        </div>
        <div>
          <span>{themes.linksArtigos}</span>
        </div>
      </header>

        <a 
          onClick = {createNewConnection} 
          href="teste">
        </a>
    </article>
  )*/
  return (
    <article className="themes-item">
      <header>
        <img src={themes.avatar} alt={themes.name}/>
        <div>
        <strong>{themes.name}</strong>
          <span>{themes.tipoDeUsuario}</span>
        </div>
        <span>
          <p><strong>Curso:&nbsp; &nbsp; </strong>{themes.curso}</p>
          <p><strong>Sugestão de Tema:&nbsp; &nbsp;</strong>{themes.sugestaoDeTema}</p>
          <p><strong>Descrição:&nbsp; &nbsp;</strong>{themes.descricao}</p>
          <p><strong>Área:&nbsp; &nbsp;</strong>{themes.area}</p>
          <p><strong>Links de Artigos:&nbsp; &nbsp;</strong>{themes.linksArtigos}</p>
        </span>
      </header>
        <a 
          onClick = {createNewConnection} 
          href={"teste"}
        >
        </a>
    </article>
  )
}

export default ThemesItem;