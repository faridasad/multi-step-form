import "./styles/App.css";
import AddOnsForm from "./components/AddOnsForm";
import PlanForm from "./components/PlanForm";
import Summary from "./components/Summary";
import UserForm from "./components/UserForm";
import { useMultiStepForm } from "./useMultiStepForm";
import { FormEvent, useMemo, useState } from "react";
import { fakeAddOns, fakePlans } from "./db/FakeData";

function App() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    plan: string;
    billing: string;
    addons: string[];
    total: number;
  };

  const INITIAL_DATA: FormData = {
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    billing: "monthly",
    addons: [],
    total: 0,
  };

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function updateAddOns(addon: string) {
    if (data.addons.includes(addon)) {
      setData((prev) => {
        return {
          ...prev,
          addons: prev.addons.filter((a) => a !== addon),
        };
      });
      return;
    }

    setData((prev) => {
      return {
        ...prev,
        addons: [...prev.addons, addon],
      };
    });
  }

  function updatePlan(plan: string) {
    setData((prev) => {
      return {
        ...prev,
        plan,
      };
    });
  }

  function updateBilling(billing: string) {
    setData((prev) => {
      return {
        ...prev,
        billing,
      };
    });
  }

  function UpdateTotal(total: number) {
    setData((prev) => {
      return {
        ...prev,
        total,
      };
    });
  }

  const totalCost = useMemo(() => {
    const planPrice =
      data.billing === "monthly"
        ? fakePlans.find((p) => p.name === data.plan)?.price.monthly
        : fakePlans.find((p) => p.name === data.plan)?.price.yearly;

    if (!planPrice) return null;

    const addonsPrice = data.addons.reduce((total, item) => {
      const addon = fakeAddOns.find((a) => a.name === item);

      if (!addon) return total;

      if (data.billing === "monthly") {
        total += addon.price.monthly;
      } else {
        total += addon.price.yearly;
      }

      return total;
    }, 0);

    return planPrice + addonsPrice;
  }, [data.plan, data.billing, data.addons]);


  const steps = [
    <UserForm title="your info" {...data} updateFields={updateFields} />,
    <PlanForm
      title="select plan"
      {...data}
      updatePlan={updatePlan}
      updateBilling={updateBilling}
    />,
    <AddOnsForm title="add-ons" {...data} updateAddOns={updateAddOns} />,
    <Summary title="summary" {...data} />,
  ];

  const { stepIndex, step, next, prev, title, isFirstStep, isLastStep } =
    useMultiStepForm(steps);

  const handleSubmit = (e: FormEvent) => {
    UpdateTotal(totalCost!);
    e.preventDefault();
    if (isLastStep) {
      alert("You have successfully submitted the form!");
    }
    next();
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
                <div className="step-index">
                  <span>{i + 1}</span>
                </div>
                <div className="step-info">
                  <span className="step-num">STEP {i + 1}</span>
                  <span className="step-title">{steps[i].props.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-content">
          <form className="current-form" onSubmit={handleSubmit}>
            {step}
            <div className="buttons">
              {!isFirstStep ? (
                <button type="button" className="prev-btn" onClick={prev}>
                  Go Back
                </button>
              ) : (
                <span></span>
              )}
              <button type="submit" className="next-btn">
                {!isLastStep ? "Next Step" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
