const Image = () => {
  return (
    <div className="hero " >
      <div className="hero-head">
        <h1>Start your business search here</h1>
        <h3>Find popular Nigerian-owned business around you</h3>
      </div>
      <div className="hero-search">
      <input type="search" placeholder="Fashion designer, make up artist, event manager..." className="business-search" />
      <select className="selection">
        <option value="United Kingdom">United Kingdom</option> 
      </select>
      <button className="btn-search">Search</button>
      </div>
    </div>
  );
};

export default Image;
