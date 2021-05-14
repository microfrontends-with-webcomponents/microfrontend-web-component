import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button.attrs((props) => ({
  disabled: props.disabled,
  type: props.type
}))`
  &:hover:enabled {
    background-color: ${(props) =>
      props.background
        ? darken(0.2, props.background)
        : darken(0.2, '#ffc900')};
    color: #fff;
  }

  &:active:enabled {
    background-color: ${(props) =>
      props.background
        ? darken(0.3, props.background)
        : darken(0.3, '#ffc900')};
  }

  font-size: 16px;
  height: 40px;

  ${({ fontFamily }) =>
    fontFamily
      ? css`
          font-family: ${fontFamily};
        `
      : `font-family: Roboto`};

  ${({ border }) =>
    border
      ? css`
          border: ${border};
        `
      : `border: #ffc900 solid 1px`};

  ${({ background }) =>
    background
      ? css`
          background-color: ${background};
        `
      : `background-color: #ffc900`};

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: darken(0.2, '#ffc900');
          border-color: darken(0.2, '#ffc900');
        `
      : css``};

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom};
        `
      : ''};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius}px;
        `
      : 'border-radius: 5px;'};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: #FFF`};

  ${({ alignStart, alignCenter, alignEnd }) =>
    alignStart
      ? css`
          align-items: flex-start;
        `
      : alignCenter
      ? css`
          align-items: center;
        `
      : alignEnd
      ? css`
          align-items: flex-end;
        `
      : ''};

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : `display: flex`};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 100px;
        `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 40px;
        `}

    justify-content: space-between;
  align-items: center;

  ${({ marginTop }) =>
    typeof marginTop === 'number'
      ? css`
          margin-top: ${marginTop}px;
        `
      : marginTop
      ? css`
          margin-top: 25px;
        `
      : ''}

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: 25px;
        `
      : ''};

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''};
  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''};

  ${({ opacity }) =>
    opacity
      ? css`
          opacity: ${opacity};
        `
      : 'opacity: 1'};

  ${({ marginSides }) =>
    typeof marginSides === 'number'
      ? css`
          margin-left: ${marginSides}px;
          margin-right: ${marginSides}px;
        `
      : marginSides
      ? css`
          margin-left: 8px;
          margin-right: 8px;
        `
      : ''}

  ${({ padding }) =>
    typeof padding === 'number'
      ? css`
          padding: ${padding}px;
        `
      : padding
      ? css`
          padding: 3px;
        `
      : ''}

    ${({
    justifyCenter,
    justifySpaceBetween,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceEvenly
  }) =>
    justifyCenter
      ? css`
          justify-content: center;
        `
      : justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : justifySpaceAround
      ? css`
          justify-content: space-around;
        `
      : justifySpaceEvenly
      ? css`
          justify-content: space-evenly;
        `
      : justifyStart
      ? css`
          justify-content: flex-start;
        `
      : ''};

  ${({ isLoading }) =>
    isLoading
      ? css`
          background-color: ${darken(0.2, '#ffc900')};
          border: 1px solid ${darken(0.2, '#ffc900')};
        `
      : css``};
`
