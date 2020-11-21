import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'

import Login from '../../pages/Register/Login'

const mockedHistoryPush = jest.fn()
const mockedSignIn = jest.fn()

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
      signIn: mockedSignIn,
    }),
  }
})

describe('SignIn page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear()
  })

  it('should be able to sign in', async () => {
    const { getByPlaceholderText,
      getByText } = render(<Login />)

    const emailField = getByPlaceholderText('E-mail')
    const passwordField = getByPlaceholderText('Senha')
    const buttonElement = getByText('Entrar')

    fireEvent.change(emailField, {
      target: { value: 'compilagirl@gmail.com' },
    })
    fireEvent.change(passwordField, { target: { value: 'Compila123' } })

    fireEvent.click(buttonElement)

    await wait(() => {
      // expect(mockedHistoryPush).toHaveBeenCalledWith('/menu')
      expect(mockedHistoryPush).toHaveBeenCalled()
    })
  })

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />)

    const emailField = getByPlaceholderText('E-mail')
    const passwordField = getByPlaceholderText('Senha')
    const buttonElement = getByText('Entrar')

    fireEvent.change(emailField, {
      target: { value: 'not-valid-email' },
    })
    fireEvent.change(passwordField, {
      target: { value: 'Compila123' },
    })

    fireEvent.click(buttonElement)

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled()
    })
  })

})
