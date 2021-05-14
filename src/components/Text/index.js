import React from 'react'

import { Container } from './styles'

export const Text = ({ ...props }) => {
  const { text } = props
  return <Container {...props}>{text}</Container>
}
