import "./App.css";
import IndianDistrict from "../public/india-districts-2019-734.json";
import * as d3 from "d3";
import IndiaMap from "./IndiaDistrict";

function App() {
  // const chart = () => {
  //   const projection = d3.geoMercator().fitSize([800, 800], IndianDistrict as unknown);
  //   const path = d3.geoPath().projection(projection);

  //   const width = 900;
  //   const height = 600;
  //   const margin = 30;
  //   const svg = d3.create("svg").attr("viewBox", [-margin, 0, width + margin, height + margin]);

  //   svg.selectAll("path");

  //   return path;
  // };
  const data = [
    {
      id: "user_2POHqHyQOdEptCToYlG8nBlRF6o",
      name: " ",
      gstNumber: "",
      phoneNumber: "testing",
      role: "BASIC",
      address: {
        latitude: 18.5204,
        longitude: 73.8567,
      },
      createAt: "2023-05-05T21:16:37.960Z",
    },
    {
      id: "user_2POHxXXloTmENs9RdhOjQQqJYJ5",
      name: " ",
      gstNumber: "",
      phoneNumber: "orion028",
      role: "BASIC",
      address: {
        latitude: 21.1458,
        longitude: 79.0882,
      },
      createAt: "2023-05-05T21:17:35.859Z",
    },
    {
      id: "user_2POMJr2nhoKEIRsO35ONKE4bhR5",
      name: "John Doe",
      gstNumber: "23423423455",
      phoneNumber: "testingupda",
      role: "BASIC",
      address: {
        latitude: 19.076,
        longitude: 72.8777,
      },
      createAt: "2023-05-05T21:53:35.151Z",
    },
    {
      id: "user_2PR4KjdpMK0GrmogOG8lrbKYz8U",
      name: " ",
      gstNumber: "",
      phoneNumber: "testing2",
      role: "ADMIN",
      address: {
        latitude: 18.995933,
        longitude: 72.821959,
      },
      createAt: "2023-05-06T20:55:02.553Z",
    },
  ];

  return (
    <>
      <div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <IndiaMap data={data} />
      </div>
    </>
  );
}

export default App;
