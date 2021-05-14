import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  & > * {
    margin: 0 auto;
  }
`

export const Content = styled.div``

export const ContentText = styled.div`
  font: 300 14px 'Calibri';
  color: #5a5a5a;
  align-self: center;
  text-align: center;
  p {
    margin-bottom: 10px;
  }
  strong {
    font: bold 15px 'Calibri';
  }
  a,
  a:hover {
    font: bold 14px 'Calibri';
    color: #8bac2a;
    text-decoration: none;
    cursor: pointer;
  }
`

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BoxInputFile = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #dedede 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  height: 150px;
  width: 100%;
  max-width: 450px;
  margin: 20px auto;
  svg {
    color: #4073ff;
    transition: ease 0.3s;
  }
  &:hover svg {
    transform: translateY(-5px);
    transition: ease 0.2s;
  }
`
