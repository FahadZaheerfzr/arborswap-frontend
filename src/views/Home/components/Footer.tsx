import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'

import FooterBg from '../assets/footer-bg.png'
import LogoWhite from '../assets/logo-white.svg'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  padding-top: 166px;
  overflow: hidden;
  min-height: 666px;
  background: url(${FooterBg});
  background-size: cover;
`

const WrapperInner = styled(Flex)`
  position: relative;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
`
const FirstColumn = styled(Flex)`
  position: relative;
  width: 500px;
  flex-direction: column;
`

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <Container>
          <WrapperInner>
            <FirstColumn>
              <img src={LogoWhite} alt="white" width="260px" />
              <Text textAlign="left" color="white" marginTop="64px">
                Want to join Arbor on this new Journey?
              </Text>
            </FirstColumn>
            <Text textAlign="center" color="white">
              Products
            </Text>
          </WrapperInner>
        </Container>
      </Wrapper>
    </>
  )
}

export default Footer
