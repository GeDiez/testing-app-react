import React from "react";
import {render} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'
import Login from '../../components/Login';

describe('Login component', function () {
  it('should render component correctly', () => {
    render(<Login />)
  })

  it('should submit the form with email and password', async () => {
    const onSubmit = jest.fn()
    const {getByRole, getByLabelText, debug} = render(<Login onSubmit={onSubmit} errors={{}} />)

    userEvent.type(getByLabelText('Email'), 'example@bedu.com')
    userEvent.type(getByLabelText('Password'), 'helloWorld')
    userEvent.click(getByRole('button'))

    expect(onSubmit.mock.calls.length).toBe(1)
  })

  it('should show correctly fields with errors', async () => {
    const onSubmit = jest.fn()
    const errors = {
      email: 'Has email error',
      password: 'password incorrect'
    }
    const {getByRole, getByLabelText, getByText, debug} = render(<Login onSubmit={onSubmit} errors={errors} />)

    expect(getByText('Has email error').classList.contains('is-danger')).toBeTruthy()
    expect(getByText('password incorrect').classList.contains('is-danger')).toBeTruthy()
  })
})
