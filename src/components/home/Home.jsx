import Navigation from '../navigation'

import { Wrap, NavigationSide } from './home.styled.js'

const Home = () => (
  <Wrap className="HOME_WRAPPER">
    <NavigationSide>
      <Navigation />
    </NavigationSide>
  </Wrap>
)

export default Home
