import { lazy, Suspense } from 'react'
import styled from 'styled-components'

import Home from './components/home'

const ContentWrapper = lazy(() => import('./components/contentWrapper'))

const Loading = () => (
  <LoadingWrap>
    <h3>Page is Loading. Relax, have a cookie 🍪</h3>
  </LoadingWrap>
)

const App = () => {
  return (
    <Suspense fallback={Loading()}>
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    </Suspense>
  )
}

export default App

const LoadingWrap = styled.div`
  border: 5px solid;

  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #dedede;
`
