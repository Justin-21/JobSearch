import "./App.css";
import JobCards from "./components/JobCards/index.tsx";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";

const App = () => {
  const [filter, setFilter] = useState({
    minExperience: "",
    company_name: "",
    location: "",
    workModel: "",
    tech_stack: "",
    role: "",
    pay: "",
  });
  const filterOptions = {
    min_experience: ["Entry Level", "Mid-Level", "Senior Level"],
    company_name: [
      "Sony",
      "Adobe",
      "Hp",
      "Tencent",
      "Intel",
      "Asus",
      "Microsoft",
      "Apple",
      "Amazon.",
      "Facebook",
      "IBM",
      "Oracle",
    ],
    location: ["Bangalore", "Delhi Ncr", "Mumbai", "Hyderabad", "Pune"],
    workModel: ["Remote", "On-site", "Hybrid"],
    tech_stack: [
      "JavaScript",
      "Python",
      "Jav",
      "C#",
      "Ruby",
      "PHP)",
      "Swift",
      "Kotlin",
    ],
    role: ["Frontend", "Team lead", "Android", "Backend", "Ios"],
    pay: [
      "₹10,00,000",
      "₹15,00,000",
      "₹20,00,000",
      "₹25,00,000",
      "₹30,00,000",
      "₹35,00,000",
      "₹40,00,000",
    ],
  };
  const [jobData, setjobData] = useState([]);

  const restructureData = (data) => {
    data["showDes"] = false;
    for (let key in data) {
      if (data[key] === null) {
        return false;
      }
    }
    return true;
  };
  const filterOut = (data, type) => {
    if (type != "pay") {
      for (let key in data) {
        if (
          typeof data[key] == "string" &&
          data[key].toLowerCase() == type.toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    } else {
      for (let key in data) {
        if (data[key] === type) {
          return false;
        }
      }
      return true;
    }
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
        let resultArray = result.jdList.filter((obj) =>
          restructureData(obj, null)
        );
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
  }, []);

  useEffect(() => {
    fetchData(100);
    Object.keys(filter).map((key) => {
      if (filter[key] != "") {
        debugger;
        let resultArray = jobData.filter((obj) => filterOut(obj, filter[key]));
        debugger;
        setjobData(resultArray);
      }
    });
  }, [filter]);

  return (
    <div className="App">
      {/* Filter Component */}
      <div className="filter" style={{ paddingLeft: "4px", width: "98%" }}>
        {/* Minimun experience */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="min_experience">Min Experience</InputLabel>
            <Select
              labelId="min_experience"
              id="min_experience"
              label="Min Experience"
              defaultValue={filter.minExperience ? filter.minExperience : ""}
              onChange={(event) => {
                setFilter({
                  minExperience: event.target.value,
                });
              }}
            >
              {filterOptions.min_experience.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        {/* Company Name */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="company_name">Company Name</InputLabel>
            <Select
              labelId="min_experience"
              id="min_experience"
              label="Min Experience"
              defaultValue={filter.company_name ? filter.company_name : ""}
              onChange={(event) => {
                setFilter({
                  company_name: event.target.value,
                });
              }}
            >
              {filterOptions.company_name.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        {/* Location */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="location">Location</InputLabel>
            <Select
              labelId="location"
              id="location"
              label="Location"
              defaultValue={filter.location ? filter.location : ""}
              onChange={(event) => {
                setFilter({
                  location: event.target.value,
                });
              }}
            >
              {filterOptions.location.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        {/* word model */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="workModel">Work Model</InputLabel>
            <Select
              labelId="workModel"
              id="workModel"
              label="Work Model"
              defaultValue={filter.workModel ? filter.workModel : ""}
              onChange={(event) => {
                setFilter({
                  workModel: event.target.value,
                });
              }}
            >
              {filterOptions.workModel.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        {/* tech stack */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="tech_stack">Tech stack</InputLabel>
            <Select
              labelId="tech_stack"
              id="tech_stack"
              label="Tech stack"
              defaultValue={filter.tech_stack ? filter.tech_stack : ""}
              onChange={(event) => {
                setFilter({
                  tech_stack: event.target.value,
                });
              }}
            >
              {filterOptions.tech_stack.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        {/* Role */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="techStack"
              label="Role"
              defaultValue={filter.role ? filter.role : ""}
              onChange={(event) => {
                setFilter({
                  role: event.target.value,
                });
              }}
            >
              {filterOptions.role.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        {/* Pay */}
        <div className="filterItem">
          <FormControl fullWidth>
            <InputLabel id="pay">Pay</InputLabel>
            <Select
              labelId="pay"
              id="pay"
              label="Pay"
              defaultValue={filter.pay ? filter.pay : ""}
              onChange={(event) => {
                setFilter({
                  pay: event.target.value,
                });
              }}
            >
              {filterOptions.pay.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      {/* Job cards */}
      <InfiniteScroll
        datalength={jobData.length}
        next={fetchData(100)}
        hasMore={true}
      >
        <div className="container">
          {jobData.map((item, key) => {
            return <JobCards key={key} item={item} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
