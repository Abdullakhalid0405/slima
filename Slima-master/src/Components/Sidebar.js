import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-44">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h2 className="font-bold pt-5">Subscriptions</h2>
      <ul>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h2 className="font-bold pt-5">Watch Later</h2>
      <ul>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
