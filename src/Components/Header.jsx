import { FaUserCircle } from "react-icons/fa";
import {FaShopify} from "react-icons/fa";

const Header = () => {
  return (
    <div className="hd-top ">
      <div className="hd-1">
        <FaShopify/>
        <p>NaijaOwned</p>
      </div>
      <div className="hd-2">
        <p>Food</p>
        <p>Fashion</p>
        <p>Makeup</p>
        <p>Health & Wellness</p>
        <p>Events</p>
      </div>
      <div className="hd-3">
        <FaUserCircle />
        <p>My Account</p>
      </div>
    </div>
  );
};

export default Header;
