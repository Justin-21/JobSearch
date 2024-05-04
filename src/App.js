import "./App.css";
import JobCards from "./components/JobCards/index.tsx";
import Filter from "./components/Filters/index.tsx";
import { useEffect, useState } from "react";

function App() {
  const [jobData, setjobData] = useState([]);

  const restructureData = (data) => {
    for (let key in data) {
      if (data[key] === null) {
        return false;
      }
    }
    return true;
  };
  const fetchData = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: data,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let resultArray = result.jdList.filter((obj) => restructureData(obj));
        setjobData(resultArray);
      });
  };
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (
    //     window.innerHeight + document.documentElement.scrollTop ===
    //     document.documentElement.offsetHeight
    //   ) {
    //       fetchData(10);
    //   }
    // });
    fetchData(10);
  },[]);
  return (
    <div className="App">
      <Filter />
      <JobCards jobData={jobData} />
    </div>
  );
}

export default App;
