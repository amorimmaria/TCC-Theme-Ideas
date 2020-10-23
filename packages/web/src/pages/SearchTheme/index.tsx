import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import ThemesItem, { Themes } from '../../components/ThemesItem';
import api from '../../service/api';


import './styles.css';


function SearchTheme(){

  const [themes, setThemes] = useState([]);
 
  const [curso, setCurso]= useState('');
  const [area, setArea]= useState('');

  async function searchThemes(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('themes',{
      params: {
        curso,
        area,
      }
    });
    setThemes(response.data);
   
  }

  return (
    <div id="page-search" className="container">
      <PageHeader title="Estes são os temas disponíveis.">
        <form  id="search-themes" onSubmit={searchThemes}>
          <Select
            name="curso"
            label="Curso"
            value={curso}
            onChange= {(e) => {setCurso(e.target.value)}}
            options={[
              {value: 'Sistemas de Informação', label:'Sistemas de Informação'},
              {value: 'Ciência da Computação', label:'Ciência da Computação'},
              {value: 'Ciências e Tecnologias', label:'Ciências e Tecnologias'},
              {value: 'Design', label:'Design'},
              {value: 'Engenharia de Computação', label:'Engenharia de Computação'},
              {value: 'Engenharia de Software', label:'Engenharia de Software'},
              {value: 'Matemática', label:'Matemática'},
            ]}
        
          />
          <Select 
            name="area"
            label="Área"
            value={area}
            onChange= {(e) => {setArea(e.target.value)}}
            options={[
              {value: 'Iot', label:'IoT'},
              {value: 'Segurança', label:'Segurança'},
              {value: 'Banco de Dados', label:'Banco de Dados'},
              {value: 'Desenvolvimento', label:'Desenvolvimento'},
              {value: 'Engenharia de Software', label:'Engenharia de Software'},
              {value: 'Inteligência Artificial', label:'Inteligência Artificial'},
              {value: 'Ciência de Dados', label:'Ciência de Dados'},

            ]}
          />

          <button type="submit">
           Buscar
          </button>
        </form> 
      </PageHeader>

      <main>
        {themes.map((themes: Themes) => {
          return <ThemesItem key={themes.id} themes={themes} />;
        })}
      </main>
    </div>
  )
}

export default SearchTheme;