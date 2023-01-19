type UserData = {
  title: string;
  name: string;
  email: string;
  phone: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function UserForm({ title, name, email, phone, updateFields }: UserFormProps) {
  return (
    <div className="wrapper">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          className="text-input"
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />
        <label htmlFor="email">Email Address</label>
        <input
          required
          className="text-input"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          required
          className="text-input"
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
    </div>
  );
}

export default UserForm;
