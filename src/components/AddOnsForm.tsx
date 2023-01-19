import { FormEvent } from "react";

type AddOnsData = {
  title: string;
  addons: string[];
};

type AddOnsProps = AddOnsData & {
  updateAddOns: (addon: string) => void;
};

function AddOnsForm({ title, addons, updateAddOns }: AddOnsProps) {
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
        <label htmlFor="online-service">Online Service</label>
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
        <label htmlFor="larger-storage">Larger Storage</label>
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
        <label htmlFor="Customizable Profile">Customizable Profile</label>
      </div>
    </div>
  );
}

export default AddOnsForm;
