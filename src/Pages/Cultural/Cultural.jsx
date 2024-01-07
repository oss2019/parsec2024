import React from "react";
import './Cultural.css';
import photo from '/Images/DJ.jpg';
function Cultural() {
  return (
  <div className="pt-20 relative">
    <main>
  <div className= "card">
    <img src={photo} alt="DJ image"/>
    <div className="card-content font-hero font-bold">
      <h2>
        Binary Beats
      </h2>
      <p>
        DJ Night organised by Parsec 4.0.
      </p>
      <a href="#" className="button">
        Pay Here
        <span className="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
</main>
<main>
  <div className = "card">
    <img src={photo} alt="DJ image"/>
    <div className="card-content font-hero font-bold">
      <h2>
        Binary Beats
      </h2>
      <p>
        DJ Night organised by Parsec 4.0.
      </p>
      <a href="#" className="button">
        Pay Here
        <span className="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
</main>
  </div>
  );
}

export default Cultural
