import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-min.png";

export default function Onboarding(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className="onboarding">
      <h1 className="onboarding__title">SIKURAMA</h1>
      <p className="onboarding__detail">repertorio central</p>
      <button className="btn" onClick={handleClick}>
        Empecemos
      </button>
      <img className="onboarding__logo" src={logo} alt="Sikurama" />
    </div>
  );
}
