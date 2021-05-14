import React, { useCallback, useRef, useState } from 'react'

import { Container } from './styles'

const Input = ({ name, icon: Icon, width, ...rest }) => {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      width={width}
      {...rest}
    >
      {Icon && <Icon size={20} fill='#202020' />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}
export default Input
