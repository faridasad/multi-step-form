type PlanData = {
  title: string;
  plan: string;
  billing: string;
};

type PlanProps = PlanData & {
  updatePlan: (plan: string) => void;
  updateBilling: (billing: string) => void;
};

import {fakePlans} from "../db/FakeData"

function PlanForm({
  title,
  plan,
  billing,
  updatePlan,
  updateBilling,
}: PlanProps) {
  return (
    <div className="wrapper">
      <h2>Select your plan</h2>
      <p>You have the option of monthly of yearly billing</p>
      <div className="selection-container">
        <div className="plans">
          {fakePlans.map((p, i) => (
            <div key={i}>
              <input
                type="radio"
                name="radios"
                id={p.name}
                defaultChecked={plan === p.name}
                onClick={() => {
                  updatePlan(p.name);
                }}
              />
              <label htmlFor={p.name} className={`label ${p.name}`}>
                <span></span>
                <div className="label-texts">
                  <h3>{p.title}</h3>
                  <p className="label-price-text">
                    {billing === "monthly" ? `$${p.price.monthly}/mo` : `$${p.price.yearly}/yr`}
                  </p>
                  {billing === "yearly" && (
                    <p className="label-months">2 months free</p>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="billing-time">
          <span>Monthly</span>
          <input
            type="checkbox"
            name="time"
            id="billing"
            defaultChecked={billing === "yearly"}
            onClick={(e) => {
              const { checked } = e.target as HTMLInputElement;
              updateBilling(checked ? "yearly" : "monthly");
            }}
          />
          <label htmlFor="billing"></label>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  );
}

export default PlanForm;
