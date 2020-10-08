import React from "react";
import "./Sidebar.css";
import Logo from "./img/Spotify_sidebar.jpg";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={Logo} />
      <div className="sidebar__options">
        <SidebarOption option="Home" Icon={HomeIcon} />
        <SidebarOption option="Search" Icon={SearchIcon} />
        <SidebarOption option="Your Library" Icon={LibraryMusicIcon} />
      </div>
      <strong className="sidebar__title">Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
