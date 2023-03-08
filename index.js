const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <div>
        <img
          class="img-1"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
      </div>
      <h1 className="heading-2">Kiran V</h1>
      <p className="para">University of north carolina at charlotte. USA</p>
      <div>
        <img
          class="img-2"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
