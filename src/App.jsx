import { Suspense, useState } from "react";
import "./App.css";
import Nav from "./assets/component/nav/Nav";
import Playes from "./assets/component/players/Playes";
import Selected from "./assets/component/selectedPlayers/Selected";

let fetchData = async () => {
  let res = await fetch("./../public/players.json");
  return res.json();
};

  let jsonData = fetchData();

function App() {
  let [availableBalance, setAvailableBalance] = useState(500000);

  let [toogle, setToogle] = useState(true);
  return (
    <>
      <Nav availableBalance={availableBalance}> </Nav>

      <div className="flex justify-between max-w-[1250px] m-auto">
        <h2 className="font-bold text-2xl">Avilable Players</h2>
        <div className="flex font-bold">
          <button
            onClick={() => setToogle(true)}
            className={`border-2 border-gray-200 py-3 px-4 rounded-l-2xl border-r-0 ${
              toogle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToogle(false)}
            className={`border-2 border-gray-200 py-3 px-4 rounded-r-2xl border-l-0 ${
              toogle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected (<span>0</span>)
          </button>
        </div>
      </div>

      {toogle ? (
        <Suspense
          fallback={
            <h2 className="text-center font-bold">Loading .........</h2>
          }
        >
          <Playes jsonData={jsonData} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></Playes>
        </Suspense>
      ) : (
        <Selected></Selected>
      )}
    </>
  );
}

export default App;
