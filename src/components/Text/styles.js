import styled, { css } from 'styled-components'

const textType = {
  headlineOne: css`
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
  `,
  headlineTwo: css`
    font-family: 'work_sans';
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
  `,
  subHead: css`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
  `,
  body: css`
    font-family: 'work_sans';
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.15px;
  `
}

export const Container = styled.p`
  font: ${({ font }) => (font ? `${font}` : `14px Calibri Regular`)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : `0.48px`};
  color: ${({ color }) => color || '#dedede'};
  opacity: ${({ opacity }) => opacity || `1`};
  text-align: ${({ center, right }) =>
    center ? `center` : right ? `right` : 'left'};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '20px')};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  cursor: ${({ cursor }) => cursor || 'text'};

  ${({ height }) =>
    height &&
    css`
      max-height: ${height}px;
      height: ${height}px;
      min-height: ${height}px;
    `}
  ${({ width }) =>
    width &&
    css`
      max-width: ${width}px;
      width: ${width}px;
      min-width: ${width}px;
    `}

  ${({ tipo }) => (tipo ? textType[tipo] : '')}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}


  ${({ capitalize }) =>
    capitalize &&
    css`
      text-transform: capitalize;
    `}
  ${({ noWrap }) =>
    noWrap &&
    css`
      white-space: nowrap;
    `}
  ${({ small, big, huge, extraHuge }) =>
    small
      ? css`
          font-size: 11px;
        `
      : big
      ? css`
          font-size: 14px;
        `
      : huge
      ? css`
          font-size: 18px;
        `
      : extraHuge
      ? css`
          font-size: 24px;
        `
      : ''}
  ${({ highlight }) =>
    highlight &&
    css`
      width: fit-content;
      color: #4073ff;
      background-color: #dedede;
    `}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}

  @media (max-width: 768px) {
    ${({ small, big, huge }) =>
      small
        ? css`
            font-size: 11px;
          `
        : big
        ? css`
            font-size: 14px;
          `
        : huge
        ? css`
            font-size: 18px;
          `
        : ''}
  }
`
