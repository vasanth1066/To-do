import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h3>TODO </h3>
      <ul>
        <li>Home</li>
        <li>Completed</li>
      </ul>
    </div>
  );
};

export default Navbar;
