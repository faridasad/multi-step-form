function PlanForm(options: { title: string }) {
  return (
    <div className="wrapper">
      <h2>Select your plan</h2>
      <p>You have the option of monthly of yearly billing</p>
      <div className="selection-container">
        <div className="plans">
          <input type="radio" name="radios" id="arcade" defaultChecked />
          <label htmlFor="arcade">Arcade</label>
          <input type="radio" name="radios" id="advanced" />
          <label htmlFor="advanced">Advanced</label>
          <input type="radio" name="radios" id="pro" />
          <label htmlFor="pro">Pro</label>
        </div>

        <div className="billing-time">
          <span>Monthly</span>
          <input type="checkbox" name="time" id="billing" />
          <label htmlFor="billing"></label>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  );
}

export default PlanForm;
