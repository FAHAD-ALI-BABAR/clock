
import './App.css'
import Btn from './components/Btn'
import Container from './components/Container'
import Counter from './components/Counter'
import Displaycounter from './components/Displaycounter'

function App() {
 

  return (
    <>

    <div className="fullpage px-4 py-5 my-5 text-center">
      <Container>
    <Counter></Counter>
    <div className="col-lg-6 mx-auto">
      <Displaycounter></Displaycounter>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <Btn></Btn>
      </div>
    </div>
    </Container>
  </div>
     
    </>
  )
}

export default App
