
function AddOnsForm(options : {title: string}) {
  return (
      <div className="wrapper">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
        <div className="form-group">
          <input type="checkbox" name="online-service" id="online-service" />
          <label htmlFor="online-service">Online Service</label>
          <input type="checkbox" name="larger-storage" id="larger-storage" />
          <label htmlFor="larger-storage">Larger Storage</label>
          <input type="checkbox" name="Customizable Profile" id="Customizable Profile" />
          <label htmlFor="Customizable Profile">Customizable Profile</label>
        </div>
      </div>
  )
}

export default AddOnsForm