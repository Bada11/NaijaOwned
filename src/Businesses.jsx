import coventry from "./assets/Coventry.png";
import birkbeck from "./assets/Birkbeck.png";
import anglia from "./assets/Anglia.png";
import maskCoventry from "./assets/maskcoventry.png";
import maskAnglia from "./assets/Mask-Anglia.png";
import maskBirkbeck from "./assets/Mask-birkbeck.png";

const Businesses = () => {
  return (
    <div className="businesses categories">
      <div className="cat-top">
        <p>Discover Countries</p>
        <p> view All</p>
      </div>

      <div className="flex-bus">
        <div className="item-bus">
          <div className="flex-item">
            <span>
              <img src={coventry} alt="coventry" />
            </span>
            <div>
              <h5>Drecy Fabrics</h5>
              <p>Hull, United Kingdom</p>
            </div>
          </div>
          <div className="flex-info">
            <img
              width="353px"
              height="185px"
              src={maskCoventry}
              alt="maskcoventry"
            />
            <button>View School Detials</button>
          </div>
        </div>
        <div className="item-bus">
          <div className="flex-item">
            <span>
              <img width="83px" height=" 30px" src={anglia} alt="Anglia" />
            </span>

            <div>
              <h5>Digital Consult Network</h5>
              <p>Hull, United Kingdom</p>
            </div>
          </div>
          <div className="flex-info">
            <img
              width="353px"
              height="185px"
              src={maskAnglia}
              alt="maskanglia"
            />
            <button>View School Detials</button>
          </div>
        </div>
        <div className="item-bus">
          <div className="flex-item">
            <span>
              <img src={birkbeck} alt="Birkbeck" />
            </span>

            <div>
              <h5>Bashbop</h5>
              <p>London, United Kingdom</p>
            </div>
          </div>
          <div className="flex-info">
            <img
              width="353px"
              height="185px"
              src={maskBirkbeck}
              alt="maskbirkbeck"
            />
            <button>View School Detials</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businesses;
