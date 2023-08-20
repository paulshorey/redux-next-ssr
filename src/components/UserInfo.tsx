import React from "react";
import useStore from "@/redux/useStore";

function App() {
  const user = useStore((state) => state.user);
  // const dispatch = useDispatch();
  return (
    <header className="px-6 py-3">
      {/* user status */}
      <p className="flex justify-between">
        <span>
          {user.ip}&emsp; {user.city}, {user.region}
          &emsp;
          {user.isp}&emsp;
        </span>
        {/* <span
                    className="cursor-pointer"
                    // onClick={() => {
                    //   dispatch(toggleDarkMode());
                    // }}
                >
                    {ui.darkMode ? '🌚' : '🌞'}
                </span> */}
      </p>
    </header>
  );
}

export default App;
