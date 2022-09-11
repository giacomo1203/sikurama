import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';

export default function MainButton(props) {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/home', {replace: true});
  };

  return (
    <>
      { location.pathname !== '/' &&
        <div className="navbar">
            { location.pathname !== '/home' &&
              <button className="navbar__back" onClick={handleClick}>
                <FiArrowLeft />
              </button>
            }
          <span>Sikurama</span>
        </div>
      }
    </>
  );
}
