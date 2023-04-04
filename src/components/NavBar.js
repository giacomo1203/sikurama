import { FiArrowLeft, FiBell } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickHome = (path) => {
    navigate("/home", { replace: true });
  };

  const handleClickNews = (path) => {
    navigate("/news", { replace: true });
  };

  return (
    <>
      {location.pathname !== "/" && (
        <div className="navbar">
          {location.pathname !== "/home" && (
            <button className="navbar__back" onClick={handleClickHome}>
              <FiArrowLeft />
            </button>
          )}
          <span>Sikurama</span>

          <button className="navbar__notification" onClick={handleClickNews}>
            <FiBell />
          </button>
        </div>
      )}
    </>
  );
}
