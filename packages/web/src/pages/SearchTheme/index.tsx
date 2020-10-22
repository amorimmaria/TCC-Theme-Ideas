import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
//import Select from '../../components/Select';
//import api from '../../service/api';


import './styles.css';

interface Themes {
  id: number;
}

function SearchTheme(){

  //const [themes, setThemes] = useState([]);
 
  const [curso, setCurso]= useState('');
  const [area, setArea]= useState('');

  async function searchThemes(e: FormEvent) {
    e.preventDefault();

    /*const response = await api.get('themes',{
      params: {
        curso,
        area,
      }
    });

    setThemes(response.data);*/
   
  }

  return (
    <div id="page-search" className="container">
      <PageHeader title="Estes são os temas disponíveis.">
        <form  id="search-themes" onSubmit={searchThemes}>
          <Input
            name="curso"
            label="Curso"
            value={curso}
            onChange= {(e) => {setCurso(e.target.value)}}
        
          />
          <Input 
            name="area"
            label="Área"
            value={area}
            onChange= {(e) => {setArea(e.target.value)}}
 
          />

          <button type="submit">
           Buscar
          </button>
        </form> 
      </PageHeader>
    </div>
  )
}

export default SearchTheme;