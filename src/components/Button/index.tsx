import React from 'react'
import MaterialButton from '@material-ui/core/Button'

type ButtonProps = {
  children: JSX.Element | string,
}

const Button = ({ children }: ButtonProps) => (
  <MaterialButton>
    { children }
  </MaterialButton>
)

export default Button
