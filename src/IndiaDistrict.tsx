import React, { useRef, useEffect } from "react";
import { geoMercator, geoPath, select } from "d3";
import * as topojson from "topojson-client";
import india from "../public/india-districts-727.json";

interface IndiaMapProps {
  data: {
    id: string;
    name: string;
    gstNumber: string;
    phoneNumber: string;
    role: string;
    address: {
      latitude: number;
      longitude: number;
    };
    createAt: string;
  }[];
}

const IndiaMap: React.FC<IndiaMapProps> = ({ data }) => {
  const mapRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const [width, height] = [500, 800];
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);

    const meshStates = [];
    const meshDistricts = [];

    svg
      .select(".state-borders")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(meshStates, (d) => d.id)
      .join(
        (enter) => enter.append("path").attr("d", path).attr("stroke", "#fff0"),
        (update) => update,
        (exit) => exit.transition(T).attr("stroke", "#fff0").remove()
      )
      .transition(T)
      .attr("stroke", strokeColor.bind(this, "40"));

    svg
      .select(".district-borders")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(meshDistricts, (d) => d.id)
      .join(
        (enter) => enter.append("path").attr("d", path).attr("d", path).attr("stroke", "#fff0"),
        (update) => update,
        (exit) => exit.transition(T).attr("stroke", "#fff0").remove()
      )
      .transition(T)
      .attr("stroke", strokeColor.bind(this, "40"));
  }, [data]);

  return (
    <div ref={mapRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default IndiaMap;
