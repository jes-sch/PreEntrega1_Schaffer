import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <CartWidget />
    <ItemListContainer mensaje={"♡ El color que tus días necesitan ♡"} />
    <Footer />
    </>
  )
}

export default App;
