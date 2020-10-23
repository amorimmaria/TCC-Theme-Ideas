import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg';
import './styles.css';
import api from '../../service/api';

function SuggestTheme(){

  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [tipoDeUsuario, setTipoDeUsuario] = useState('');
  const [curso, setCurso]= useState('');
  const [sugestaoDeTema, setSugestaoDeTema] = useState('');
  const [descricao, setDescricao] = useState('');
  const [area, setArea]= useState('');
  const [linksArtigos, setLinksArtigos]= useState('');

  function handleCreateSuggest(e: FormEvent) {
    e.preventDefault();

    api.post('themes',{
      name,
      avatar,
      tipoDeUsuario,
      curso,
      sugestaoDeTema,
      descricao,
      area,
      linksArtigos
    }).then(() => {
      alert('Cadastro realizado com sucesso');

      history.push('/');
    }).catch(() => {
      alert('Erro ao cadastrar');

    });
  }

  return (
    <div id="page-suggest" className="container">
      <PageHeader 
        title="Que incrível que você quer sugerir um tema"
      />

      <main>
        <form onSubmit={handleCreateSuggest}>
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

              <Select 
                name="tipoDeUsuario" 
                label="Docente ou discente?"
                value={tipoDeUsuario} 
                onChange={(e) => { setTipoDeUsuario(e.target.value) }}
                options={[
                  {value: 'docente', label: 'Docente'},
                  {value: 'discente', label: 'Discente'}
                ]}
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
              name="sugestaoDeTema" 
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
            <Textarea
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
        </form>
      </main> 
    </div>
  );
}

export default SuggestTheme;