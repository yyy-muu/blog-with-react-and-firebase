import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";
import {
  faHouse,
  faFilePen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faRightToBracket} />
        ログイン
      </Link>
    </nav>
  );
};

export default Navbar;
