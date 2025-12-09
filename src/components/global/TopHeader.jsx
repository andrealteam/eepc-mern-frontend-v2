import React from "react";
import { Link } from "react-router-dom";
import { Logos } from "../../utils/constants";

const TopHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img src={Logos.logoLeft.imgSrc} alt={Logos.logoLeft.altText} />
        </Link>
        {/* Logo on the Middle */}
        <Link className="navbar-brand" to="/">
          <img src={Logos.logoMiddle.imgSrc} alt={Logos.logoMiddle.altText} />
        </Link>

        {/* Logo on the right */}
        <Link className="navbar-brand" to="/">
          <img
            src={Logos.logoRight.imgSrc} // Use logoRight from Logos object
            alt={Logos.logoRight.altText} // Use altText from Logos object
          />
        </Link>
      </div>
    </nav>
  );
};

export default TopHeader;
