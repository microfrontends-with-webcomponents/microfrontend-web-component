import React from 'react'

import { Container } from './styles'

function Button({
  text,
  type,
  onClick,
  marginBottom,
  color,
  children,
  padding,
  justifyCenter,
  justifySpaceBetween,
  justifyEnd,
  justifyStart,
  justifySpaceAround,
  justifySpaceEvenly,
  alignStart,
  alignCenter,
  alignEnd,
  display,
  width,
  height,
  marginTop,
  marginSides,
  disabled,
  opacity,
  borderRadius,
  background,
  border,
  fontFamily,
  marginRight,
  isLoading,
  disableHover,
  marginLeft,
  fontSize
}) {
  return (
    <Container
      type={type}
      onClick={onClick}
      text={text}
      marginBottom={marginBottom}
      color={color}
      padding={padding}
      justifyCenter={justifyCenter}
      justifySpaceBetween={justifySpaceBetween}
      justifyEnd={justifyEnd}
      justifyStart={justifyStart}
      justifySpaceAround={justifySpaceAround}
      justifySpaceEvenly={justifySpaceEvenly}
      alignStart={alignStart}
      alignCenter={alignCenter}
      alignEnd={alignEnd}
      display={display}
      width={width}
      height={height}
      marginTop={marginTop}
      marginSides={marginSides}
      disabled={disabled}
      opacity={opacity}
      borderRadius={borderRadius}
      background={background}
      border={border}
      fontFamily={fontFamily}
      marginRight={marginRight}
      isLoading={isLoading}
      disableHover={disableHover}
      marginLeft={marginLeft}
      fontSize={fontSize}
    >
      {children}
    </Container>
  )
}

export default Button
