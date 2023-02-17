import {FaCity} from "react-icons/fa";


const Categories = () => {
  return (
    <div className="categories">
      <div className="cat-top">
        <p>Browse by categories</p>
        <FaCity/>
      </div>

      <div className="flex-cat">
        <div className="item-cat">
        <span><FaCity/></span>
        <p>Business and Management</p>
        </div>
        <div  className="item-cat">
        <span><FaCity/></span>
        <p>Computer Science and IT</p>
        </div>
        <div  className="item-cat">
        <span><FaCity/></span>
        <p>Social sciences and Humanities</p>
        </div>
        <div  className="item-cat">
        <span><FaCity/></span>
        <p>Engineering and Technology</p>
        </div>
        <div  className="item-cat">
        <span><FaCity/></span>
        <p>Journalism and Media</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
