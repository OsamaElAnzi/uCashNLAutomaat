import OpnemenView from "./View/OpnemenView"
import OverzichtView from "./View/OverzichtView"
import StortView from "./View/StortView"
import "./View/style.css"

function App() {
  return (
    <div className="page">
      <div className="screen-simulator">
        <div className="screen-content">
          <div className="row">
            <div className="button-slot">
              <OpnemenView />
            </div>
            <div className="button-slot">
              <StortView />
            </div>
          </div>
          <div className="overview-slot">
            <OverzichtView />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
