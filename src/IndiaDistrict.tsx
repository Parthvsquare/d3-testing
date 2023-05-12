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

    svg
      .selectAll(".arcs")
      .data(india.arcs)
      .join("path")
      .attr("class", "")
      .attr("d", (india) => pathGenerator(india));
  }, [data]);

  return (
    <div ref={mapRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default IndiaMap;
