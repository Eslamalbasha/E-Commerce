import Silder from "./../../Components/Home/Silder";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Silder />
    </div>
  );
};

export default HomePage;
