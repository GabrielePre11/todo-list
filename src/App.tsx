import Footer from "./components/Footer"
import Header from "./components/Header"
import ToDo from "./components/ToDo"

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-dark-gray overflow-x-hidden font-inter text-white min-h-screen pt-28 pb-20">
        <ToDo />
      </main>
      <Footer />
    </>
  )
}

export default App