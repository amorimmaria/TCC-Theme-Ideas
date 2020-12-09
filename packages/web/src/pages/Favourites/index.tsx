import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from '../../axios-config'
import { useHistory } from 'react-router-dom'

// Components
import PageHeader from '../../components/PageHeader'
import ThemeItem from '../../components/ThemeItem'
import Spinner from '../../components/UI/Spinner'

// hooks
import { useAuth } from '../../hooks/auth'

// Images
import notFoundIcon from '../../assets/images/icons/not-found.svg'

// CSS styles
import './styles.css'

interface ClassItem {
  id: number,
  name: 'string',
  avatar: string,
  emailContato: string,
  sugestaoDeTema: string,
  tipoDeUsuario: string,
  curso: string,
  descricao: string,
  area: string,
  linksArtigos: string,
  isFavourited: boolean
}
// Interfaces
// import  ClassItem  from '../SearchTheme' //eslint-disable

type FavouriteData = [ClassItem[], number | null, number]

function ThemesFavourites(props: { navigation: any }) {
  const [favourites, setFavourites] = useState<ClassItem[]>([])
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

  const history = useHistory()
  const authContext = useAuth()

  useEffect(() => {
    (function fetchFavourites() {
      if (reFetch && hasMore) {
        setReFetch(false)
        setLoading(true)
        axios.get('/themes/favourites', {
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
  axios.get('/themes/favourites', {
    params: {
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






  return (
    <div id="page-theme-list" className="container">
      <PageHeader
        title="Estes são os seus temas favoritados."
      >
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
                        themeEmailContato={currentClass.emailContato}
                        isFavourited={favourites.map(f => f.id).includes(currentClass.id)}
                      />
                    )
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
                      themeEmailContato={currentClass.emailContato}
                      isFavourited={favourites.map(f => f.id).includes(currentClass.id)}
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
                    disponível.
                  </header>

                  <img src={notFoundIcon} alt="Nenhum tema foi encontrado" />
                </section>
            )
      }
      </main>
    </div>
  )
}

export default  ThemesFavourites
