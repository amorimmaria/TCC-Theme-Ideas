import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function SuggestTheme(){

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [curso, setCurso]= useState('');
  const [sugestaoDeTema, setSugestaoDeTema] = useState('');
  const [descricao, setDescricao] = useState('');
  const [area, setArea]= useState('');
  const [linksArtigos, setLinksArtigos]= useState('');

  async function suggestThemes(e: FormEvent) {
    e.preventDefault();

    /*api.post('themes',{
      name,
      avatar,
      curso,
      sugestaoDeTema,
      descricao,
      area,
      linksArtigos

    });

    setThemes(response.data);*/
  }

  return (
    <div id="page-suggest" className="container">
      <PageHeader 
        title="Que incrível que você quer sugerir um tema"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input 
              name="name" 
              label="Nome completo" 
              value={name} 
              onChange={(e) => { setName(e.target.value) }}
          />

           <Input 
              name="avatar" 
              label="Avatar"
              value={avatar} 
              onChange={(e) => { setAvatar(e.target.value) }}
          />

        </fieldset>

        <fieldset>
          <legend>Sobre sugestão do tema</legend>

          <Select 
            name="Curso" 
            label="Curso"
            value={curso}
            onChange= {(e) => {setCurso(e.target.value)}}
            options={[
              {value: 'Ciência da Computação', label: 'Ciência da Computação'},
              {value: 'Ciências e Tecnologias', label: 'Ciências e Tecnologias'},
              {value: 'Design', label: 'Design'},
              {value: 'Engenharia de Computação', label: 'Engenharia de Computação'},
              {value: 'Engenharia de Software', label: 'Engenharia de Software'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Sistemas de Informação', label: 'Sistemas de Informação'},
            ]}
          />
          <Input 
            name="suggest" 
            label="Sugestão de tema"
            value={sugestaoDeTema} 
            onChange={(e) => { setSugestaoDeTema(e.target.value) }}
          />

          <Textarea 
            name="descricao" 
            label="Descrição"
            value={descricao}
            onChange={(e) => { setDescricao(e.target.value) }}
          />

          <Select 
            name="area" 
            label="Área"
            value={area}
            onChange= {(e) => {setArea(e.target.value)}}
            options={[
              {value: 'IoT', label: 'IoT'},
              {value: 'Segurança', label: 'Segurança'},
              {value: 'Banco de Dados', label: 'Banco de Dados'},
              {value: 'Desenvolvimento', label: 'Desenvolvimento'},
              {value: 'Engenharia de Software', label: 'Engenharia de Software'},
              {value: 'Inteligencia Artificial', label: 'Inteligencia Artificial'},
              {value: 'Ciencia de Dados', label: 'Ciencia de Dados'},
            ]}
          />
          <Input 
            name="linksArtigos" 
            label="Links de Artigos"
            value={linksArtigos}
            onChange= {(e) => {setLinksArtigos(e.target.value)}}
          />
                    
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="submit">
            Salvar sugestão
          </button>
        </footer>
      </main> 
    </div>
  )
}

export default SuggestTheme;