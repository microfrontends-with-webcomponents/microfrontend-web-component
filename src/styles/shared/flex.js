import { css } from 'styled-components'

export default css`
  display: flex;

  ${({ flex }) =>
    flex &&
    css`
      flex: 1;
    `}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}

  ${({ alignStart, alignCenter, alignEnd }) => {
    if (alignStart)
      return css`
        align-items: flex-start;
      `

    if (alignCenter)
      return css`
        align-items: center;
      `
    if (alignEnd)
      return css`
        align-items: flex-end;
      `

    return ''
  }};

  ${({
    justifyCenter,
    justifySpaceBetween,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceEvenly
  }) => {
    if (justifyCenter)
      return css`
        justify-content: center;
      `
    if (justifySpaceBetween)
      return css`
        justify-content: space-between;
      `
    if (justifyEnd)
      return css`
        justify-content: flex-end;
      `
    if (justifySpaceAround)
      return css`
        justify-content: space-around;
      `
    if (justifySpaceEvenly)
      return css`
        justify-content: space-evenly;
      `
    if (justifyStart)
      return css`
        justify-content: flex-start;
      `
    return ''
  }};
`
