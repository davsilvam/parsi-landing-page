import { ThemeProvider } from 'styled-components'
import Benefits from './components/Benefits'
import Closing from './components/Closing'
import Footer from './components/Footer'
import Functionalities from './components/Functionalities'
import Header from './components/Header'
import Hero from './components/Hero'
import { GlobalStyles } from './styles/global-styles'
import { DarkTheme } from './styles/themes/theme'

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Benefits />
      <Functionalities />
      <Closing />
      <Footer />
    </ThemeProvider>
  )
}

export default App
