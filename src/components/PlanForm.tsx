type PlanData = {
  title: string;
  plan: string;
  billing: string;
};

type PlanProps = PlanData & {
  updatePlan: (plan: string) => void;
  updateBilling: (billing: string) => void;
};



function PlanForm({ title, plan, billing, updatePlan, updateBilling }: PlanProps) {
  return (
    <div className="wrapper">
      <h2>Select your plan</h2>
      <p>You have the option of monthly of yearly billing</p>
      <div className="selection-container">
        <div className="plans">
          <input type="radio" name="radios" id="arcade" defaultChecked={
            plan === "arcade"
          } onClick={() => {
            updatePlan("arcade");
          }} />
          <label htmlFor="arcade">Arcade</label>
          <input type="radio" name="radios" id="advanced" defaultChecked={
            plan === "advanced"
          } onClick={() => {
            updatePlan("advanced");
          }} />
          <label htmlFor="advanced">Advanced</label>
          <input type="radio" name="radios" id="pro" defaultChecked={
            plan === "pro"
          } onClick={() => {
            updatePlan("pro");
          }} />
          <label htmlFor="pro">Pro</label>
        </div>

        <div className="billing-time">
          <span>Monthly</span>
          <input type="checkbox" name="time" id="billing" defaultChecked={
            billing === "yearly"
          } onClick={(e) => {
            const { checked } = e.target as HTMLInputElement;
            updateBilling(checked ? "yearly" : "monthly");
          }} />
          <label htmlFor="billing"></label>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  );
}

export default PlanForm;
