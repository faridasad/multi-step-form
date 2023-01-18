import '../styles/userForm.css'

function UserForm(options: { title: string }) {
  return (
    <div className="wrapper">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="text-input" type="text" name="name" id="name" placeholder='e.g. Stephen King' />
        <label htmlFor="email">Email Address</label>
        <input className="text-input" type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com '/>
        <label htmlFor="phone">Phone Number</label>
        <input className="text-input" type="tel" name="phone" id="phone" placeholder='e.g. +1 234 567 890' />
      </div>
    </div>
  );
}

export default UserForm;
