import React from 'react';


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
