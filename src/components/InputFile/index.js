import React, { useRef, useCallback } from 'react'

import {
  Container,
  IconContainer,
  HiddenInput,
  LabelContainer,
  LabelText
} from './styles'

const ContainerLabel = ({ children, ...props }) => (
  <LabelContainer {...props}>{children}</LabelContainer>
)

export const InputFile = ({
  setFiles,
  placeHolder,
  shapeFile = (file) => file,
  customValidations = (files) => files,
  name = '',
  id,
  ...props
}) => {
  const { labelText } = props
  const fileInputRef = useRef(null)

  const handleFiles = useCallback(
    async (fileArray) => {
      let newFiles = await Promise.all(
        Object.values(fileArray).map(async (file) => {
          const ret = shapeFile(file)
          return ret
        })
      )

      newFiles = customValidations(newFiles)

      setFiles(newFiles)
    },
    [customValidations, setFiles, shapeFile]
  )

  const onFilesAdded = useCallback(
    async (e) => {
      const { files } = e.target
      await handleFiles(files)
    },
    [handleFiles]
  )

  const preventDefault = useCallback((e) => {
    e.preventDefault()
  }, [])

  const fileDrop = useCallback(
    (e) => {
      e.preventDefault()
      const { files } = e.dataTransfer

      if (files.length) {
        handleFiles(files)
      }
    },
    [handleFiles]
  )

  return (
    <React.Fragment>
      <ContainerLabel {...props}>
        <LabelText>{labelText}</LabelText>
        <Container
          {...props}
          onChange={onFilesAdded}
          onDragOver={preventDefault}
          onDragEnter={preventDefault}
          onDragLeave={preventDefault}
          onDrop={fileDrop}
        >
          <p>{placeHolder}</p>
          <HiddenInput
            id={id}
            name={name}
            ref={fileInputRef}
            className='FileInput'
            type='file'
            multiple
            data-testid='input-file'
          />
        </Container>
      </ContainerLabel>
    </React.Fragment>
  )
}
