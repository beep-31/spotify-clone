
import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import noImage from "./img/no_image.png";
function Header({spotify}) {
  const [{user}, dispatch] = useDataLayerValue();
  let userImage;
  try {
    userImage = user?.images[0].url;
  } catch(TypeError){
    userImage = noImage;
  }
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon/>
        <input className="header__left__input" placeholder="Search for artists, songs or podcasts"/>
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={userImage} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
