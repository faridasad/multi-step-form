type PlanData = {
  title: string;
  plan: string;
  billing: string;
};

type PlanProps = PlanData & {
  updatePlan: (plan: string) => void;
  updateBilling: (billing: string) => void;
};

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
          <input
            type="radio"
            name="radios"
            id="arcade"
            defaultChecked={plan === "arcade"}
            onClick={() => {
              updatePlan("arcade");
            }}
          />
          <label htmlFor="arcade" className="label arcade">
            <span></span>
            <div className="label-texts">
              <h3>Arcade</h3>
              <p className="label-price-text">{billing === "monthly" ? "$9/mo" : "$90/yr"}</p>
              {billing === "yearly" && <p className="label-months">2 months free</p>}
            </div>
          </label>
          <input
            type="radio"
            name="radios"
            id="advanced"
            defaultChecked={plan === "advanced"}
            onClick={() => {
              updatePlan("advanced");
            }}
          />
          <label htmlFor="advanced" className="label advanced">
            <span></span>
            <div className="label-texts">
              <h3>Advanced</h3>
              <p className="label-price-text">{billing === "monthly" ? "$12/mo" : "$120/yr"}</p>
              {billing === "yearly" && <p className="label-months">2 months free</p>}
            </div>
          </label>
          <input
            type="radio"
            name="radios"
            id="pro"
            defaultChecked={plan === "pro"}
            onClick={() => {
              updatePlan("pro");
            }}
          />
          <label htmlFor="pro" className="label pro">
            <span></span>
            <div className="label-texts">
              <h3>Pro</h3>
              <p className="label-price-text">{billing === "monthly" ? "$15/mo" : "$150/yr"}</p>
              {billing === "yearly" && <p className="label-months">2 months free</p>}
            </div>
          </label>
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
