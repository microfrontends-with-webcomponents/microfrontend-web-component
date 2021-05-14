import React from 'react'

import { Container } from './styles'

export const WrapperFlex = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)
