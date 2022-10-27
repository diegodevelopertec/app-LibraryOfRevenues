import * as S from './style'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RoutesList } from './RoutesList'

const App=()=>{
  return <>
  <S.Body>
    <Header />
    <S.Main>
      <RoutesList />

    </S.Main>
    <Footer />
  </S.Body>
  
  </>
}

export default App