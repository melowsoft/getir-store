import {Provider} from 'react-redux';
import { store } from '../state'


import {Container} from "./AppStyles"
import { BrandIcon } from './BrandIcon';
import { Navbar } from './Navbar';
import { ContentWrapper } from './ContentWrapper';


const App = () => {
  return <Provider store={store}>
    <Container>
      <Navbar icon={<BrandIcon />}/>
      <ContentWrapper >
        <h1>Hello from Wrapper</h1>
      </ContentWrapper>
    </Container>
  </Provider>;
  
}

export default App;
