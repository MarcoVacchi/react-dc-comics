import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Rowblue from './components/rowBlue'

const arrayLink = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP"]

function App() {

  return (
    <>
      <Header child={arrayLink} />
      <Main />
      <Rowblue />
      <Footer />
    </>
  )
}

export default App
