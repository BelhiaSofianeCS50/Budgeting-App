//rrd imports 
import { Outlet, useLoaderData } from "react-router-dom";

//assets 
import wave from "../assets/wave.svg";

//helper functions
import { fetchData } from "../helpers";

// comps
import Nav from "../components/Nav";


// loader
export function mainLoader() {
  const userName = localStorage.getItem("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
    <Nav userName={userName} />
      <main>
         <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
