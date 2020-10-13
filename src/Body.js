import React from "react";
import "./Body.css";
import Header from "./Header.js";
import DiscoverWeekly from "./img/discover.jpg";
import {useDataLayerValue} from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={DiscoverWeekly} alt="Discover Weekly"/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body_shuffle"/>
          <FavoriteIcon className="body_fav" fontSize="large"/>
          <MoreHorizIcon className="body_dots"/>
        </div>
        {discover_weekly?.tracks.items.map((item)=> (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
