import { css } from 'styled-components'

export default css`
  ${({ margin }) =>
    margin && typeof margin === 'string'
      ? css`
          margin: ${margin};
        `
      : css`
          margin: ${margin}px;
        `}

  ${({ marginSides }) =>
    marginSides &&
    css`
      margin-left: ${marginSides}px;
      margin-right: ${marginSides}px;
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop}px;
    `};

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom}px;
    `};

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft}px;
    `};

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `};
`
