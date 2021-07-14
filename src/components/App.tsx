import {Provider} from 'react-redux';
import { store } from '../state'


import {Container} from "./AppStyles"
import { BrandIcon } from './BrandIcon';
import { Navbar } from './Navbar';
import { ContentWrapper } from './ContentWrapper';
import { ContenArea } from './ContenArea';


const App = () => {
  return <Provider store={store}>
    <Container>
      <Navbar icon={<BrandIcon />}/>
      <ContentWrapper>
        <ContenArea />
      </ContentWrapper>
    </Container>
  </Provider>;
  
}

export default App;
