import React from 'react'
import styled from 'styled-components'

const TextStyled = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.size};
`

const TextComponent = ({color, size, children}) => {
  return (
    <TextStyled color={color} size={size}>{children}</TextStyled>
  )
}

export default TextComponent