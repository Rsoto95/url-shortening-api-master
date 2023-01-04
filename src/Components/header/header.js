import "./header.css";
import { logo } from "../../svgs";
console.log(logo());
const Header = () => {
  return (
    <section className="wholeHeader">
      <div className="headerLeftSide">
        {logo()}

        <div>Features</div>
        <div>Pricing</div>
        <div>Resources</div>
      </div>
      <div className="HeaderRightSide">
        <div>Login</div>
        <div>Sign up</div>
      </div>
    </section>
  );
};

export default Header;
