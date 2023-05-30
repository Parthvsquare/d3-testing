import { useMemo, useRef, useState } from "react";
import "./App.css";
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
        stateDistrict: "Mumbai City",
        stateCode: 519,
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
        stateDistrict: "Mumbai City",
        stateCode: 519,
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
        stateDistrict: "Mumbai City",
        stateCode: 519,
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
        stateDistrict: "Mumbai City",
        stateCode: 519,
      },
      createAt: "2023-05-06T20:55:02.553Z",
    },
  ];

  type GradeSystemTemplate = {
    gradeId: string;
    itemName: string;
    gradeName: string;
    gradeUpperLimit: number;
    gradeLowerLimit: number;
    makePublic: boolean;
    userId: string;
  };
  const [gradesArray, setGradesArray] = useState([0]);
  console.log("===> ~ file: App.tsx:88 ~ App ~ gradesArray:", gradesArray);

  const defaultTemplate = {
    gradeName: "",
    gradeLowerLimit: gradesArray.at(-1),
    gradeUpperLimit: "",
    itemName: "",
  };

  const inputRef = useRef(null);

  const [gradeTemplateArray, setGradeTemplateArray] = useState<Partial<GradeSystemTemplate>[]>([structuredClone(defaultTemplate)]);
  const itemName = "banana";

  const onEdit = ({ index, gradeLowerLimit, gradeName, gradeUpperLimit }: Partial<GradeSystemTemplate> & { index: number }) => {
    const gradesArrayClone = structuredClone(gradesArray);
    gradesArrayClone[index] = gradeLowerLimit;
    gradesArrayClone[index + 1] = gradeUpperLimit;

    setGradesArray(gradesArrayClone);
    console.log("===> ~ file: App.tsx:124 ~ onEdit ~ gradesArrayClone:", gradesArrayClone);

    const newArray = gradeTemplateArray.map((record, recordIndex) => {
      if (recordIndex === index) {
        return {
          itemName: itemName,
          gradeName: gradeName,
          gradeLowerLimit: gradesArrayClone[recordIndex],
          gradeUpperLimit: gradesArrayClone[recordIndex + 1],
        };
      } else {
        return {
          ...record,
          gradeLowerLimit: gradesArrayClone[recordIndex],
          gradeUpperLimit: gradesArrayClone[recordIndex + 1],
        };
      }
    });
    setGradeTemplateArray(newArray);
  };

  const removeTemplate = ({ index }: { index: number }) => {
    const gradesArrayClone = structuredClone(gradesArray);
    gradesArrayClone.splice(index, 1);
    setGradesArray(gradesArrayClone);

    const gradeTemplateArrayClone: Partial<GradeSystemTemplate>[] = structuredClone(gradeTemplateArray);
    const filteredGradeTemplateArrayClone = gradeTemplateArrayClone.filter((_, i) => i !== index);

    setGradeTemplateArray(filteredGradeTemplateArrayClone);
    const newGradeTemplateArrayClone = filteredGradeTemplateArrayClone.map((record, recordIndex) => {
      return {
        gradeName: record.gradeName,
        gradeLowerLimit: gradesArrayClone[recordIndex],
        gradeUpperLimit: gradesArrayClone[recordIndex + 1],
        itemName: record.itemName,
      };
    });

    setGradeTemplateArray(newGradeTemplateArrayClone);
  };

  const addDefaultTemplate = () => {
    setGradeTemplateArray((prevArray) => [...prevArray, structuredClone(defaultTemplate)]);
  };

  const handleChange = (index: number, field: keyof GradeSystemTemplate, value: any) => {
    setGradeTemplateArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = {
        ...newArray[index],
        [field]: value,
      };
      return newArray;
    });
  };

  const userId = "2039423=23423409234";

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <IndiaMap data={data} />
        {/* {gradeTemplateArray?.map((value, index) => {
          const inputKey = `${userId}-${index}`;
          console.log("===> ~ file: App.tsx:169 ~ {gradeTemplateArray?.map ~ inputKey:", inputKey);
          return (
            <div key={value.gradeName + userId}>
              <input type="text" placeholder="gradeName" key={inputKey} value={value.gradeName} onInput={(e) => handleChange(index, "gradeName", e.currentTarget.value)} />
              <input type="number" placeholder="lower limit" value={value.gradeLowerLimit} onChange={(e) => handleChange(index, "gradeLowerLimit", Number(e.target.value))} />
              <input type="number" placeholder="upper limit" value={value.gradeUpperLimit} onChange={(e) => handleChange(index, "gradeUpperLimit", Number(e.target.value))} />
              <button type="button" onClick={() => onEdit({ index, gradeLowerLimit: value.gradeLowerLimit, gradeName: value.gradeName, gradeUpperLimit: value.gradeUpperLimit })}>
                Save
              </button>
            </div>
          );
        })} */}
        {gradeTemplateArray?.map((value, index) => {
          const handleFocus = () => {
            inputRef.current.focus();
          };

          const handleBlur = () => {
            inputRef.current.blur();
          };

          return (
            <div key={index + userId}>
              <input
                type="text"
                placeholder="gradeName"
                value={value.gradeName}
                ref={inputRef}
                onInput={(e) => handleChange(index, "gradeName", e.currentTarget.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input type="number" placeholder="lower limit" value={value.gradeLowerLimit} onChange={(e) => handleChange(index, "gradeLowerLimit", Number(e.target.value))} />
              <input type="number" placeholder="upper limit" value={value.gradeUpperLimit} onChange={(e) => handleChange(index, "gradeUpperLimit", Number(e.target.value))} />
              <button type="button" onClick={() => onEdit({ index, gradeLowerLimit: value.gradeLowerLimit, gradeName: value.gradeName, gradeUpperLimit: value.gradeUpperLimit })}>
                Save
              </button>

              <button type="button" onClick={() => removeTemplate({ index: index })}>
                Remove
              </button>
            </div>
          );
        })}

        {/* <input type="number" placeholder="lower limit" value={gradeTemplateArray?.gradeLowerLimit} />
              <input type="number" placeholder="upper limit" value={gradeTemplateArray?.gradeUpperLimit} /> */}
        <button type="button" onClick={addDefaultTemplate}>
          Add New
        </button>
      </div>
    </>
  );
}

export default App;
