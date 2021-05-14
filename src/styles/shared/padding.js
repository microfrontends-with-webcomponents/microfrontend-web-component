import { css } from 'styled-components'

export default css`
  ${({ padding }) =>
    padding && typeof padding === 'string'
      ? css`
          padding: ${padding};
        `
      : css`
          padding: ${padding}px;
        `}

  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom}px;
    `}

  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft}px;
    `}

  ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${paddingRight}px;
    `}

  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop}px;
    `}
`
