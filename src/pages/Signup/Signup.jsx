// External Imports
import { React, useState } from "react";
import { Link } from "react-router-dom";

// Internal Imports
import styles from "./Signup.module.scss";
import pablo from "../../assets/pablo.png";

function Signup() {
  // Form data States to capture data Inputs
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.leftWrapper}>
          <div>
            <span>TweetX</span>
            <Link to="/">
              <button>Login</button>
            </Link>
          </div>

          <span>Create Account</span>

          <form>
            <div className={styles.formInputs}>
              <input
                type="text"
                value={userData.name}
                placeholder="Name"
                required
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />

              <input
                type={"text"}
                value={userData.email}
                placeholder="Email"
                required
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />

              <input
                type={"password"}
                value={userData.password}
                placeholder="Password"
                required
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />

              <input
                type={"password"}
                value={userData.confirmPassword}
                placeholder="Confirm Password"
                required
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
              />
            </div>

            <div className={styles.formActions}>
              <Link to="/feed">
                <button>Sign up</button>
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

export default Signup;
