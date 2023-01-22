type AddOnsData = {
  title: string;
  billing: string;
  addons: string[];
};

type AddOnsProps = AddOnsData & {
  updateAddOns: (addon: string) => void;
};

function AddOnsForm({ title, addons, billing, updateAddOns }: AddOnsProps) {
  return (
    <div className="wrapper">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="add-ons">
        <input
          type="checkbox"
          name="online-service"
          id="online-service"
          defaultChecked={addons.includes("online-service")}
          onClick={(e) => {
            const { name } = e.target as HTMLInputElement;
            updateAddOns(name);
          }}
        />
        <label htmlFor="online-service">
          <span></span>
          <div>
            <h3>Online Service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className="price-text">{billing === "monthly" ? "+$1/mo" : "+$10/yr"}</p>
        </label>
        <input
          type="checkbox"
          name="larger-storage"
          id="larger-storage"
          defaultChecked={addons.includes("larger-storage")}
          onClick={(e) => {
            const { name } = e.target as HTMLInputElement;
            updateAddOns(name);
          }}
        />
        <label htmlFor="larger-storage">
        <span></span>
          <div>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className="price-text">{billing === "monthly" ? "+$2/mo" : "+$20/yr"}</p>
        </label>
        <input
          type="checkbox"
          name="customizable-profile"
          id="Customizable Profile"
          defaultChecked={addons.includes("customizable-profile")}
          onClick={(e) => {
            const { name } = e.target as HTMLInputElement;
            updateAddOns(name);
          }}
        />
        <label htmlFor="Customizable Profile">
        <span></span>
          <div>
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className="price-text">{billing === "monthly" ? "+$2/mo" : "+$20/yr"}</p>
        </label>
      </div>
    </div>
  );
}

export default AddOnsForm;
