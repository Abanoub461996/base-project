// Modularity
import { useLocation } from "react-router-dom";

// Component
import Login from "./Login";
// import ChangePassword from "./ChangePassword";
// import ForgetPassword from "./ForgetPassword";

// Images
import mainImg from "../../assets/images/Auth/Group171483.svg";

// Styles
import { Conatiner } from "./Auth.style";

const MainAuthForm = () => {
  const location = useLocation();
  // const { pathname } = location;

  return (
    <Conatiner>
      <div className="authform">
        {/* {pathname === "/forget-password" ? (
          <ForgetPassword />
        ) : pathname === "/reset-password" ? (
          <ChangePassword />
        ) : (
          <Login />
        )} */}
          <Login />

      </div>
      <div className="loginImg">
        <img className="mainImg" src={mainImg} alt="" />
        <>dsadsadasdasdss</>
      </div>
    </Conatiner>
  );
};

export default MainAuthForm;
