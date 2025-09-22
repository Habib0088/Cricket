import { Suspense } from "react";
import "./App.css";
import Nav from "./assets/component/nav/Nav";
import Playes from "./assets/component/players/Playes";

let fetchData = async () => {
  let res = await fetch("./../public/players.json");
  return res.json();
};

function App() {
  let jsonData = fetchData();
  return (
    <>
      <Nav></Nav>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Playes jsonData={jsonData}></Playes>
      </Suspense>
    </>
  );
}

export default App;
