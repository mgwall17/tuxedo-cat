
const SideNav = () => (
  <div className="position-fixed">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Welcome
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#why">
          Why CyVerse?
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
);

export default SideNav;