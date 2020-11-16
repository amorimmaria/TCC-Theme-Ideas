import React, { useContext, createContext, useState } from 'react'

interface ProcessFinishedContext {
  title: string,
  description: string,
  defineTitle(newTitle: string): void,
  defineDescription(newDescription: string): void
}

const ProcessFinishedContext = createContext({} as ProcessFinishedContext)

export const ProcessFinishedContextProvider: React.FC = ({ children }) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function defineTitle(newTitle: string) {
    setTitle(newTitle)
  }

  function defineDescription(newDescription: string) {
    setDescription(newDescription)
  }

  return (
    <ProcessFinishedContext.Provider
      value={{
        title,
        description,
        defineTitle,
        defineDescription
      }}
    >{ children }</ProcessFinishedContext.Provider>
  )
}

export function useProcessFinished() {
  return useContext(ProcessFinishedContext)
}
