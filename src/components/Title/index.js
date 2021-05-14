import React from 'react'

import { Container } from './styles'

export const Title = ({ variant = 'h1', ...props }) => {
  const { text } = props
  return (
    <Container variant={variant} {...props}>
      {text}
    </Container>
  )
}
