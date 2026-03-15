import OpnemenView from "./View/OpnemenView"
import OverzichtView from "./View/OverzichtView"
import StortView from "./View/StortView"
import "./View/style.css"

function App() {
  return (
    <div className="page">
      <div className="row">
        <OpnemenView />
        <StortView />
      </div>
      <OverzichtView />
    </div>
  )
}

export default App
