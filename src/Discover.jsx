import united from "./assets/united-kingdom.png";
import norway from "./assets/Norway.png";
import canada from "./assets/Canada.png";
import usa from "./assets/USA.png";


const Discover = () => {
  return (
    <div className="discover categories">
      <div className="cat-top">
        <p>Discover Countries</p>
        <p> view All</p>
      </div>

      <div className="flex-dis">
        <div className="item-dis">
          <img width="115px" height="89px" src={united} alt="united-kingdom" />;
          <h5>United Kingdom</h5>
          <p>23+ Schools</p>
        </div>
        <div className="item-dis">
          <img width="115px" height="89px" src={canada} alt="canada" />
          <h5>Canada</h5>
          <p>23+ Schools</p>
        </div>
        <div className="item-dis">
          <img width="115px" height="89px" src={usa} alt="USA" />
          <h5>USA</h5>
          <p>23+ Schools</p>
        </div>
        <div className="item-dis">
          <img width="115px" height="89px" src={norway} alt="norway" />
          <h5>Norway</h5>
          <p>23+ Schools</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
