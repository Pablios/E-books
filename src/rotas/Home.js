import Pesquisa from '../components/Pesquisa'
import styled from 'styled-components';
import UltimosLancamentos from '../components/UltimosLancamentos'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;