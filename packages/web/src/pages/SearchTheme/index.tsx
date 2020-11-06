import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from '../../axios-config'
import { useHistory } from 'react-router-dom'

// Components
import PageHeader from '../../components/PageHeader'
import ThemeItem from '../../components/ThemeItem'
import Select from '../../components/UI/Select'
import Spinner from '../../components/UI/Spinner'

// Contexts
import { useAuth } from '../../contexts/auth'

// Images
import notFoundIcon from '../../assets/images/icons/not-found.svg'

// Icons
import { Icon } from '@iconify/react'
import searchIcon from '@iconify/icons-mdi/magnify'

// CSS styles
import './styles.css'

interface ClassItem {
    id: number,
    name: 'string',
    avatar: string,
    whatsapp: number,
    sugestaoDeTema: string,
    tipoDeUsuario: string,
    curso: string,
    descricao: string,
    area: string,
    linksArtigos: string
}

function SearchTheme() {

    const [classList, setClassList] = useState<ClassItem[]>([])
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [loadingFeedback, setLoadingFeedback] = useState('')
    const [reFetch, setReFetch] = useState(true)

    const [pageNumber, setPageNumber] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const observer: any = useRef()
    const searchMoreNodeRef = useCallback(node => {
        if (loadingMore) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(pageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loadingMore, hasMore, classList.length]) //eslint-disable-line

    const [curso, setCurso] = useState<string | null>(null)
    const [tipoDeUsuario, setTipoDeUsuario] = useState<string | null>(null)
    const [area, setArea] = useState<string | null>(null)

    const history = useHistory()
    const authContext = useAuth()

    useEffect(() => {
        (function fetchThemes() {
            if (reFetch && hasMore) {
                setReFetch(false)
                setLoading(true)
                axios.get('/themes', {
                    headers: {
                        authorization: 'Bearer ' + authContext.token
                    }
                })
                    .then(response => {
                        setLoading(false)
                        setClassList(response.data.resultsInfo.results)
                        setHasMore(!!response.data.resultsInfo.next)
                    })
                    .catch(() => {
                        setLoading(false)
                        alert('Ocorreu um erro desconhecido ao carregar os temas.')
                        history.replace('/')
                    })
            }
        })()
    }, [reFetch]) // eslint-disable-line

    useEffect(() => {
        setLoadingMore(true)
        axios.get('/themes', {
            params: {
                curso,
                tipoDeUsuario,
                area,
                page: pageNumber
            },
            headers: {
                authorization: 'Bearer ' + authContext.token,
                userid: authContext.user?.__id
            }
        })
            .then(response => {
                setLoadingMore(false)
                setClassList([...classList, ...response.data.resultsInfo.results])
                setHasMore(!!response.data.resultsInfo.next)
                if(!!!response.data.resultsInfo.next)
                    setLoadingFeedback('Estes são todos os resultados')
            })
            .catch(() => {
                setLoadingMore(false)
                setLoadingFeedback('Erro ao buscar mais temas. Tente novamente mais tarde.')
            })
    }, [pageNumber]) // eslint-disable-line

    function filterThemes(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setPageNumber(1)
        setClassList([])
        axios.get('/themes', {
            params: {
                curso,
                tipoDeUsuario,
                area
            },
            headers: {
                authorization: 'Bearer ' + authContext.token,
                userid: authContext.user?.__id
            }
        })
            .then(response => {
                setLoading(false)
                setClassList([...response.data.resultsInfo.results])
                setHasMore(!!response.data.resultsInfo.next)
            })
            .catch(() => {
                setLoading(false)
                alert('Erro ao aplicar filtros. Mostrando todos os resultados.')
                setCurso(null)
                setTipoDeUsuario(null)
                setArea(null)
                setReFetch(true)
            })
    }

    return (
        <div id="page-theme-list" className="container">
            <PageHeader
                title="Estes são os temas disponíveis."
            >
                <form id="search-themes" onSubmit={filterThemes}>
                    <Select
                        selectLabel="Curso"
                        selected={{ value: "", label: "Todos os cursos" }}
                        items={[
                            {value: "", label: "Todos os cursos" },
                            {value: 'Ciência da Computação', label: 'Ciência da Computação'},
                            {value: 'Ciências e Tecnologias', label: 'Ciências e Tecnologias'},
                            {value: 'Design', label: 'Design'},
                            {value: 'Engenharia de Computação', label: 'Engenharia de Computação'},
                            {value: 'Engenharia de Software', label: 'Engenharia de Software'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Sistemas de Informação', label: 'Sistemas de Informação'},
                          ]}
                        onOptionSelect={selected => setCurso(selected.value)}
                    />
                    <Select
                        selectLabel="Tipo de usuário"
                        selected={{ value: "", label: "Todos os usuários" }}
                        items={[
                            {value: "", label: "Todos os usuários"},
                            {value: 'Docente', label: 'Docente'},
                            {value: 'Discente', label: 'Discente'}
                          ]}
                        onOptionSelect={selected => setTipoDeUsuario(selected.value)}
                    />
                    <Select
                        selectLabel="Área"
                        selected={{ value: "", label: "Todas as áreas" }}
                        items={[
                            {value: "", label: "Todas as áreas"},
                            {value: 'IoT', label: 'IoT'},
                            {value: 'Segurança', label: 'Segurança'},
                            {value: 'Banco de Dados', label: 'Banco de Dados'},
                            {value: 'Desenvolvimento', label: 'Desenvolvimento'},
                            {value: 'Engenharia de Software', label: 'Engenharia de Software'},
                            {value: 'Inteligencia Artificial', label: 'Inteligencia Artificial'},
                            {value: 'Ciencia de Dados', label: 'Ciencia de Dados'},
                          ]}
                        onOptionSelect={selected => setArea(selected.value)}
                    />
                    <button type="submit">
                        <Icon icon={searchIcon} />
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {
                    loading
                        ? <div className="spinner-resizer"><Spinner /></div>
                        : classList.length > 0
                            ? (
                                <>
                                    {classList.map((currentClass, index) => {
                                        if (index === classList.length - 4)
                                            return (
                                                <ThemeItem
                                                    key={index}
                                                    themeRef={searchMoreNodeRef}
                                                    themeId={currentClass.id}
                                                    themePhotoURL={currentClass.avatar}
                                                    themeName={currentClass.name}
                                                    themeCurso={currentClass.curso}
                                                    themeDescricao={currentClass.descricao}
                                                    themeArea={currentClass.area}
                                                    themeSugestaoDeTema={currentClass.sugestaoDeTema}
                                                    themeTipoDeUsuario={currentClass.tipoDeUsuario}
                                                    themeLinksArtigos={currentClass.linksArtigos}
                                                    themeWhatsapp={currentClass.whatsapp}
                                                />
                                            )
                                        return (
                                            <ThemeItem
                                                key={index}
                                                themeId={currentClass.id}
                                                themePhotoURL={currentClass.avatar}
                                                themeName={currentClass.name}
                                                themeCurso={currentClass.curso}
                                                themeDescricao={currentClass.descricao}
                                                themeArea={currentClass.area}
                                                themeSugestaoDeTema={currentClass.sugestaoDeTema}
                                                themeTipoDeUsuario={currentClass.tipoDeUsuario}
                                                themeLinksArtigos={currentClass.linksArtigos}
                                                themeWhatsapp={currentClass.whatsapp}
                                            />
                                        )
                                    })}
                                    {
                                        hasMore
                                            ? loadingMore && <div className="spinner-resizer"><Spinner /></div>
                                            : <p id="all-results">{loadingFeedback}</p>
                                    }
                                </>
                            )
                            : (
                                <section className="no-themes-found">
                                    <header>
                                        Oops! Parece que não foi encontrado nenhum tema <br />
                                        disponível. Tente alterar os filtros.
                                    </header>

                                    <img src={notFoundIcon} alt="Nenhum tema foi encontrado" />
                                </section>
                            )
                }
            </main>
        </div>
    )
}

export default SearchTheme