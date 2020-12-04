import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import Signup from '../../pages/Register/Signup'


const mockedHistoryPush = jest.fn()
const mockedSignUp = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignUp,
    }),
  }
})


describe('Sigup page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear()
  })

  it('should not be able to signup with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<Signup />)

    const nameField = getByPlaceholderText('Nome')
    const surnameField = getByPlaceholderText('Sobrenome')
    const emailField = getByPlaceholderText('E-mail')
    const passwordField = getByPlaceholderText('Senha')
    const buttonElement = getByText('Concluir cadastro')

    fireEvent.change(nameField, {
      target: { value: 'Compila' },
    })
    fireEvent.change(surnameField, {
      target: { value: 'Girl' },
    })
    fireEvent.change(emailField, {
      target: { value: 'not-valid-email' },
    })
    fireEvent.change(passwordField, {
      target: { value: 'compila' },
    })

    fireEvent.click(buttonElement)

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled()
    })
  })
})
