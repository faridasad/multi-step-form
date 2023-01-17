function PlanForm(options : {title: string}) {
  return (
    <form>
      <div className="wrapper">
        <h2>Select your plan</h2>
        <p>You have the option of monthly of yearly billing</p>
        <div className="form-group">
          <input type="checkbox" name="arcade" id="arcade" />
          <label htmlFor="arcade">Arcade</label>
          <input type="checkbox" name="advanced" id="advanced" />
          <label htmlFor="advanced">Advanced</label>
          <input type="checkbox" name="pro" id="pro" />
          <label htmlFor="pro">Pro</label>

          <div className="billing-time">
            <span>Monthly</span>
            <input type="checkbox" name="time" id="billing" />
            <label htmlFor="billing"></label>
            <span>Yearly</span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlanForm;
