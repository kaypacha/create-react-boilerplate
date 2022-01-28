import React from 'react'
import { Text } from 'components'
import { DefaultLayout } from 'layouts'
import { Link } from 'react-router-dom'
import { routesPath } from 'constants.js'
import styled from 'styled-components'
import theme from 'theme'

const StyledLink = styled(Link)`
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

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <Text textStyle="h1" color="white">
        React is working
      </Text>
      <StyledLink to={routesPath.ABOUT}>Test Router</StyledLink>
    </DefaultLayout>
  )
}

export default HomeScreen
