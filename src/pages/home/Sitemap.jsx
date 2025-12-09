import React from "react";
import Menu from "../../utils/menuConfig";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="row justify-evenly">
      {Menu.map((menuItem, index) => {
        return (
          <div key={index} className="col-lg-6 p-1">
            <h4>{index + 1 + ") " + menuItem.name}</h4>
            {menuItem.subMenu && menuItem.subMenu.length > 0 && (
              <ul>
                {menuItem.subMenu.map((subMenuItem, subIndex) => {
                  return (
                    <li key={subIndex}>
                      {subMenuItem.link ? (
                        <a
                          href={subMenuItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {subMenuItem.name}
                        </a>
                      ) : (
                        <Link to={subMenuItem.path}>{subMenuItem.name}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sitemap;
