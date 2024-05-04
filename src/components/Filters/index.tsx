import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React from "react";
import "./index.css";

const filterOptions = {
  min_experience: ["Entry Level", "Mid-Level", "Senior Level"],
  company_name: [
    "Alphabet Inc.",
    "Microsoft Corporation",
    "Apple Inc.",
    "Amazon.com Inc.",
    "Facebook, Inc.",
    "Tesla, Inc.",
    "IBM",
    "Oracle Corporation",
  ],
  location: [
    "Bangalore",
    "Delhi Ncr",
    "Mumbai",
    "Hyderabad",
    "Pune",
  ],
  workModel: ["Remote", "On-site", "Hybrid"],
  tech_stack: [
    "JavaScript (Node.js, React.js)",
    "Python (Django, Flask)",
    "Java (Spring Boot)",
    "C# (.NET Core)",
    "Ruby (Rails)",
    "PHP (Laravel)",
    "Swift (iOS Development)",
    "Kotlin (Android Development)",
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
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 20px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function Filter() {
  return (
    <div className="filter" style={{paddingLeft:"4px", width : "98%"}}>
      {/* Minimun experience */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="min_experience">Min Experience</InputLabel>
          <Select
            labelId="min_experience"
            id="min_experience"
            label="Min Experience"
          >
            {filterOptions.min_experience.map((item: any) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {/* Company Name */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="company_name">Company Name</InputLabel>
          <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
      </div>
      {/* Location */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="location">Location</InputLabel>
          <Select labelId="location" id="location" label="Location">
            {filterOptions.location.map((item: any) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {/* word model */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="workModel">Work Model</InputLabel>
          <Select labelId="workModel" id="workModel" label="Work Model">
            {filterOptions.workModel.map((item: any) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {/* tech stack */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="tech_stack">Tech stack</InputLabel>
          <Select labelId="tech_stack" id="tech_stack" label="Tech stack">
            {filterOptions.tech_stack.map((item: any) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {/* Role */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="role">Role</InputLabel>
          <Select labelId="role" id="techStack" label="Role">
            {filterOptions.role.map((item: any) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {/* Pay */}
      <div className="filterItem">
        <FormControl fullWidth>
          <InputLabel id="pay">Pay</InputLabel>
          <Select labelId="pay" id="pay" label="Pay">
            {filterOptions.pay.map((item: any) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
