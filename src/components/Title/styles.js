import styled, { css } from 'styled-components'

import padding from '../../styles/shared/padding'
import margin from '../../styles/shared/margin'

export const Container = styled.h1.attrs(({ variant }) => ({
  as: variant
}))`
  margin: 0px;
  padding: 0px;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : `0px`};
  text-align: ${({ textAlign }) => textAlign || `left`};
  opacity: ${({ opacity }) => opacity || `1`};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '34px')};
  color: ${({ color }) => color || '#dedede'};
  ${({ font }) =>
    font
      ? css`
          font: ${font};
        `
      : css`
          font-family: 'Roboto';
        `};
  ${padding}
  ${margin}
`
