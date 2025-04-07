import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import ProductCard from './components/ProductCard'
import Rowblue from './components/rowBlue'
import Jumbotron from './components/Jumbotron'

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

const arrayFooter = [
  "Characters",
  "Comics",
  "Movies",
  "TV",
  "Games",
  "Videos",
  "News",
  "Shop DC",
  "Shop DC Collectibles",
  "Term Of Use",
  "Privacy policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  "Subscriptions",
  "CPSC Certificates",
  "Ratings",
  "Shop Help",
  "Contact Us",
  "DC",
  "MAD Magazine",
  "DC Kids",
  "DC Universe",
  "DC Power Visa"
];


function App() {

  return (
    <>
      <Header child={arrayLink} />
      <Jumbotron />
      <Main />
      <Footer childFooter={arrayFooter} />
    </>
  )
}

export default App
