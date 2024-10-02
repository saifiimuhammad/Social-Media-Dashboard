

const Signup = () => {

  return (
    <main className="signup">
          <div className="signup-container container">
            <h1 className="signup-title">Join us today!</h1>
            <div className="signup-content">
              <form action="" className="signup-form">
                <label htmlFor="name" className="signup-labels">Username</label>
              <input type="text"  name="user-name" id="user-name"  className="signup-inputs" required />
                <label htmlFor="name" className="signup-labels">Email Address</label>
                <input type="email" name="user-email" id="user-email" className="signup-inputs" required />
              </form>
            </div>
          </div>
    </main>
  );
}


export default Signup;