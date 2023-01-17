
function UserForm(options : {title: string}) {
  return (
    <form>
        <div className="wrapper">
            <h2>Personal Info</h2>
            <p>Please provide your name, email address, and phone number</p>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" />
            </div>
        </div>
    </form>
  )
}

export default UserForm