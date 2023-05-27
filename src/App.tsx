import { ThemeProvider } from 'styled-components'
import {
  Benefits,
  Closing,
  Footer,
  Functionalities,
  Header,
  Hero,
} from './components'
import { GlobalStyles } from './styles/global'
import { DarkTheme } from './styles/themes/theme'

export function App() {
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
