import ReactDOM from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <>
      <div>
      {/* <GuestList/> */}
        {/* <Parent/> */}
        <UserSearch/>
      </div>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
