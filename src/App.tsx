import './App.css'
import AddOnsForm from './components/AddOnsForm'
import PlanForm from './components/PlanForm'
import Summary from './components/Summary'
import UserForm from './components/UserForm'
import { useMultiStepForm } from './useMultiStepForm'


function App() {
  const steps = [
    <UserForm title="your info"/>,
    <PlanForm title="select plan"/>,
    <AddOnsForm title="add-ons"/>,
    <Summary title="summary"/>
  ]

  const {stepIndex, step, next, prev, title} = useMultiStepForm(steps)

  return(
    <div className="app">
      <div className="content-wrapper">
        <div className="form-sidebar">
          {steps.map((s, i) => {
            return (
              <div key={i} className={`step ${i === stepIndex ? 'active' : ''}`}>
                <div className="step-number">{i + 1}</div>
                <div className="step-title">{s.props.title}</div>
              </div>
            )
          })}
        </div>
        <div className="form-content">
          <div className="current-form">
            {step}
          </div>
          <div className="buttons">
            <button onClick={prev}>Go Back</button>
            <button onClick={next}>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
