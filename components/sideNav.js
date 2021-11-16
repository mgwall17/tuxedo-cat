
const SideNav = () => (
  <div className="position-fixed zindex-fixed">
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
        <a className="nav-link" href="#tools">
          Our Tools
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Our Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Get Started</a>
      </li>
    </ul>
  </div>
);

export default SideNav;