import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Hungry? Let Biteezy fix that!</h2>
        <p>
          Burgers, sushi, pizza, desserts - whatever you're craving, it's just a
          bite away. Tap, order, chill. We'll bring the flavor while you bring
          the appetite.
        </p>
        <button>Bring the Bites</button>
      </div>
    </div>
  );
};

export default Header;
