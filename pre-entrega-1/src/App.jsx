import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer mensaje={"♡ El color que tus días necesitan ♡"} />
    <Footer />
    </>
  )
}

export default App;
