import { useRouter } from "next/router";
import Home from "../../pages";
import classes from "./navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const hompageHandler = () => {
    router.push("./");
  };
  const compeletdapgehandler = () => {
    router.push("./completedTodo");
  };
  return (
    <div className={classes.navbar}>
      <h3>TODO </h3>
      <ul>
        <li onClick={hompageHandler}>Home</li>
        <li onClick={compeletdapgehandler}>Completed Todo</li>
      </ul>
    </div>
  );
};

export default Navbar;
