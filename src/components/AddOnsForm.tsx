type AddOnsData = {
  title: string;
  billing: string;
  addons: string[];
};

type AddOnsProps = AddOnsData & {
  updateAddOns: (addon: string) => void;
};

import {fakeAddOns} from "../db/FakeData"

function AddOnsForm({ title, addons, billing, updateAddOns }: AddOnsProps) {
  return (
    <div className="wrapper">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="add-ons">
        {fakeAddOns.map((a, i) => (
          <div key={i}>
            <input
              type="checkbox"
              name={a.name}
              id={a.name}
              defaultChecked={addons.includes(a.name)}
              onClick={(e) => {
                const { name } = e.target as HTMLInputElement;
                updateAddOns(name);
              }}
            />
            <label htmlFor={a.name}>
              <span></span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
              <p className="price-text">
                {billing === "monthly" ? `+$${a.price.monthly}/mo` : `+$${a.price.monthly}/yr`}
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddOnsForm;
