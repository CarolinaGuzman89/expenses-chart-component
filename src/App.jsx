
import './App.css'
import "./index.css"
import Balance from './components/Balance'
import Graph from './components/Graph'

function App() {


  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center  py-12 sm:px-6 lg:px-8">
    <div className="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <Balance />
      <Graph />
      </div>
    </div>
    </>
  )
}

export default App
