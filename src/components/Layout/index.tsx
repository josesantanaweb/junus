
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.bg};
  overflow-x: hidden;
`
const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
  z-index: 300;
  border-bottom: 3px solid rgba(255, 255, 255, 1);
  height: 119px;
  background: ${({ theme }) => theme.bg};
`

const Content = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 90px);
  background: ${({ theme }) => theme.bg};
  
`

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <Wrapper>
      <HeaderWrap>
        <NavBar />
      </HeaderWrap>
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}
