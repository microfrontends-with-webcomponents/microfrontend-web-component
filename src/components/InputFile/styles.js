import styled, { css } from 'styled-components'
import margin from '../../styles/shared/margin'

export const Container = styled.div`
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #808080;
  margin-top: 3px;
  div {
    justify-content: flex-end;
  }
  border: 1px solid #c1bbbb;
  background: #c1bbbb 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  color: #c1bbbb
  font: 15px Calibri Regular;
  text-align: left;
  width: 504px;
  height: 30px;
`

export const HiddenInput = styled.input`
  display: none;
`

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 29px;
  border: 1px solid #c1bbbb;
  border-radius: 0px 5px 5px 0px;
  border-right: none;
  background-color: #fff;
  & > svg {
    margin: 0 auto;
  }
  &:hover > svg {
    transform: translateY(-1px);
    transition: all 0.3s;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const LabelContainer = styled.label`
  display: block;
  opacity: 1;
  margin: 5px;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
  ${margin}
`

export const LabelText = styled.p`
  font: 14px 'Calibri Regular';
  letter-spacing: 0.48px;
  color: rgb(161, 161, 161);
  text-align: left;
  opacity: 1;
  margin: 0;
`
