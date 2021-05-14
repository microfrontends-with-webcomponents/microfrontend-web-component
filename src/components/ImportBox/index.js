import React from 'react'

import { InputFile } from '../InputFile'
import { Text } from '../Text'

import { Container, ContentText, FileContainer, BoxInputFile } from './styles'

export const ImportBox = ({ setFiles, maxWidth = 450, ...props }) => {
  const { contentText } = props

  return (
    <Container maxWidth={maxWidth}>
      {contentText && <ContentText>{contentText}</ContentText>}
      <InputFile id='input-component' {...props} setFiles={setFiles} hidden />
      <BoxInputFile htmlFor='input-component'>
        <FileContainer>
          <Text
            text='Arraste seu arquivo aqui ou'
            marginBottom={1}
            marginTop={1}
            font="16px / 20px 'Calibri Regular'"
            color='#60656C'
          />
          <Text
            text='procure em seu computador'
            color='#ffc900'
            marginBottom={1}
            marginTop={1}
          />
        </FileContainer>
      </BoxInputFile>
    </Container>
  )
}
