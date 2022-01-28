import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import theme from 'theme'
import { Text } from 'components'
import { DefaultLayout } from 'layouts'

const StyledButton = styled.button`
  ${theme.textStyle('title')}
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.white};
  font-weight: 700;
  padding: ${theme.spacing(1, 2)};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.shape.borderRadius};
    color: ${theme.colors.black};
    transition: all 0.5s ease-in-out;
  }
`

const AboutScreen = () => {
  const navigate = useNavigate()

  return (
    <DefaultLayout>
      <Text textStyle="h1" color="white">
        Router is working
      </Text>
      <StyledButton onClick={() => navigate(-1)}>Go back</StyledButton>
    </DefaultLayout>
  )
}

export default AboutScreen
