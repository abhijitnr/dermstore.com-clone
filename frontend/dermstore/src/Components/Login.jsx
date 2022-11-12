import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupDataFromLs = JSON.parse(localStorage.getItem("signup"));

  //   console.log(signupDataFromLs);

  //   check_box: "";
  //   confirm_email_address: "abc@gmail.com";
  //   confirm_password: "123456";
  //   email_address: "abc@gmail.com";
  //   full_name: "Abhi";
  //   password: "123456";
  //   phone_number: "1234567890";

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      signupDataFromLs.email_address === email &&
      signupDataFromLs.password === password
    ) {
      navigate("/");
    } else {
      alert("Credential doesn't match. Please fill correct details !");
    }
  };

  return (
    <div className="login_parent">
      <div className="existing_and_new_users">
        <div className="existing_customer">
          <p className="existing_user_tag">Existing Customers</p>

          <div className="login_form">
            <form onSubmit={handleLogin}>
              {/* For email */}
              <p>
                <label>
                  * Email address
                  <input
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                  />
                </label>
              </p>

              {/* Form password */}
              <p>
                <label>
                  * Password
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </p>

              <p className="forgot_password">FORGOTTEN YOUR PASSWORD?</p>

              <p>
                <button className="login_button">LOGIN TO YOUR ACCOUNT</button>
              </p>
            </form>
          </div>
        </div>

        <div className="new_customers">
          <p className="new_customes_tag">New Customers</p>
          <Link to="/register">
            <button className="continue_to_register">CONTINUE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
