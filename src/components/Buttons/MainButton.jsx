import React from 'react'
import { ButtonStyled } from './Button.styled'

export const MainButton = (props) => {
  return (
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
  )
}
