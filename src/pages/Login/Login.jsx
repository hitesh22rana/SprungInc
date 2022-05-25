import { React, useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import pablo from "../../assets/pablo.png";

import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleBtn = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.leftWrapper}>
          <div>
            <span>TweetX</span>
            <Link to="/signup">
              <button>Create Account</button>
            </Link>
          </div>

          <span>Login</span>

          <form>
            <div className={styles.formInputs}>
              <input
                type="text"
                value={formData.name}
                placeholder="Email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button onClick={toggleBtn}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>
            </div>
            <div className={styles.formActions}>
              <span>Forgot Password ?</span>
              <Link to="/feed">
                <button>Login</button>
              </Link>
            </div>
          </form>
        </div>
        <div className={styles.rightWrapper}>
          <img src={pablo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
