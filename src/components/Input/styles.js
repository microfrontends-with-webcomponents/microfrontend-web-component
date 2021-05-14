import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #cccccc;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  ${({ isErrored }) =>
    isErrored &&
    css`
      input {
        font-weight: 500;
      }
      border-color: #c53030;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      input {
        font-weight: 500;
      }
      border-color: #0080ff;
      & > svg {
        fill: #0080ff;
      }
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      input {
        font-weight: 500;
      }
      & > svg {
        fill: #0080ff;
      }
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #202020;
    }
  }
  svg {
    margin-right: 16px;
  }
`
