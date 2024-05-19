import React from 'react'
import styled from 'styled-components'
import checkoff from '../../assets/checkoff.svg'
import checkon from '../../assets/checkon.svg'

function Checkbox({ text }) {
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput
        type="checkbox"
        id={text}
        name={text}
      />
      <StyledP>{text}</StyledP>
    </StyledLabel>
  )
}

export default Checkbox

const StyledInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${checkoff});
  background-size: 100% 100%;
  background-position: 50%;

  &:checked {
    border-color: transparent;
    background-image: url(${checkon});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`

const StyledP = styled.p`
  margin-left: 0.25rem;
`
