import styled, { css } from 'styled-components'

import flex from '../../styles/shared/flex'
import margin from '../../styles/shared/margin'
import padding from '../../styles/shared/padding'

export const Container = styled.div`
  ${margin}
  ${padding}
  ${flex}

  ${({ column }) =>
    column
      ? css`
          flex-direction: column;
        `
      : ''};

  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: wrap;
    `};

  ${({ overflowHidden }) =>
    overflowHidden &&
    css`
      overflow: hidden;
    `};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  width: ${({ fullWidth, halfWidth, percentageWidth, minContent, width }) => {
    if (fullWidth) return `100%`
    if (halfWidth) return `50%`
    if (percentageWidth) return `${percentageWidth}%`
    if (minContent) return `min-content`
    if (width) return `${width}px`

    return 'auto'
  }};

  height: ${({ fullHeight, halfHeight, percentageHeight, height }) => {
    if (fullHeight) return `100%`
    if (halfHeight) return `50%`
    if (percentageHeight) return `${percentageHeight}%`
    if (height) return `${height}px`

    return 'auto'
  }};

  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '')};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : '')};

  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '')};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : '')};
`
