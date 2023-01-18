import "./styles/App.css";
import AddOnsForm from "./components/AddOnsForm";
import PlanForm from "./components/PlanForm";
import Summary from "./components/Summary";
import UserForm from "./components/UserForm";
import { useMultiStepForm } from "./useMultiStepForm";

function App() {
  
  const steps = [
    <UserForm title="your info" />,
    <PlanForm title="select plan" />,
    <AddOnsForm title="add-ons" />,
    <Summary title="summary" />,
  ];

  const { stepIndex, step, next, prev, title, isFirstStep, isLastStep } = useMultiStepForm(steps);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="form-sidebar">
          {steps.map((s, i) => {
            return (
              <div
                key={i}
                className={`step ${i === stepIndex ? "active" : ""}`}
              >
                <div className="step-number">{i + 1}</div>
                <div className="step-title">{s.props.title}</div>
              </div>
            );
          })}
        </div>
        <div className="form-content">
          <form className="current-form" onSubmit={handleSubmit}>
            {step}
            <div className="buttons">
              {!isFirstStep ? <button className="prev-btn" onClick={prev}>Go Back</button> : <span></span>}
              <button className="next-btn" onClick={next}>{!isLastStep ? "Next Step" : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
