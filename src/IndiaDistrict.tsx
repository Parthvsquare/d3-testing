import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
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
      stateDistrict: string;
      stateCode: number;
    };
    createAt: string;
  }[];
}
const IndiaMap: React.FC<IndiaMapProps> = ({ data }) => {
  const [userCounts, setUserCounts] = useState<Array<{ districtCode: number; count: number }>>([]);

  useEffect(() => {
    // Fetch user data or use the provided data directly
    const userData = data;
    // Group users by district and count the number of users per district
    const districtCounts: { [key: string]: number } = userData.reduce((counts: Record<string, number>, user) => {
      const { stateDistrict } = user.address;
      counts[stateDistrict] = (counts[stateDistrict] || 0) + 1;
      return counts;
    }, {});

    // Create mapping from district names to district codes
    const districtCodeMap: Record<string, number> = {
      // Example: 'District Name': 'District Code',
      "Mumbai City": 519,
      "District 2": 900,
    };

    // Generate choropleth data
    const choroplethData = Object.entries(districtCounts).map(([district, count]) => ({
      districtCode: districtCodeMap[district],
      count,
    }));

    setUserCounts(choroplethData);
  }, [data]);

  // const colorScale = scaleQuantize().domain([1, 10]).range([]);

  return (
    <ComposableMap
      projection="geoMercator"
      height={1920}
      width={1080}
      projectionConfig={{
        center: [80, 10],
        scale: 1500,
      }}
    >
      <Geographies geography={india}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const districtCode = geo.properties["dt_code"];
            const userCount = userCounts.find((item) => item.districtCode === Number(districtCode))?.count || 0;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  // Customize the style of each district based on the user count
                  default: {
                    fill: userCount > 1 ? "red" : "#EEE",
                  },
                  pressed: {
                    fill: "#EEE",
                  },
                  hover: {
                    fill: "#EEE",
                  },
                  // Other style properties
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default IndiaMap;
