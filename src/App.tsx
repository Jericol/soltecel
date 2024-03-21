import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Displey from "./components/tienda/Displey"
import Tapas from "./components/tienda/TapasTraseras"
import Visores from "./components/tienda/Visores"




function App() {
  

  return (
    <div className="h-[100rem] ">
      <div className="mb-8">
        <Navbar />
        <Banner />
      </div>
      <Visores />
      <Displey />
      <Tapas />
    </div>
  )
}

export default App
