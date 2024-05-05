import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
import checkIcon from "../../assets/check.png";
import highVoltageIcon from "../../assets/highVoltageIcon.png";

export default function JobCards(props: any) {
  const [loadagain, setLoadagain] = useState<any>(0);
  const handleChange = (item: any) => {
    setLoadagain(loadagain + 1);
    item.showDes = true;
  };
  const capitalize = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className="container">
      {props.jobData.map((item: any) => {
        return (
          <Box key={item.jdUid} sx={{ minWidth: 350, maxWidth: 400, minHeight: 675 }}>
            <Card
              variant="outlined"
              style={{ borderRadius: "16px", padding: 10 }}
            >
              <CardContent className="mainContainer">
                <div className="leftCard">
                  <img src={item.logoUrl} alt="" height={38} width={28} />
                  <div className="innerCard">
                    <Typography
                      textAlign={"start"}
                      color="text.secondary"
                      fontSize={14}
                    >
                      {item.companyName}
                    </Typography>
                    <Typography
                      textAlign={"start"}
                      color="text.primary"
                      fontSize={14}
                    >
                      {capitalize(item.jobRole)}
                    </Typography>
                    <Typography
                      textAlign={"start"}
                      color="text.primary"
                      fontSize={12}
                      fontWeight={500}
                    >
                      {capitalize(item.location)}
                    </Typography>
                  </div>
                </div>
                <div className="salaryCard">
                  <Typography fontSize={14} color="text.secondary">
                    Estimated Salary:
                  </Typography>
                  <span style={{ fontSize: "14px" }}>
                    ₹{item.minJdSalary} - {item.maxJdSalary} LPA
                  </span>
                  <img src={checkIcon} height={16} width={16} alt="" />
                </div>
                <div className="aboutUs">
                  <Typography variant="body2" textAlign={"start"}>
                    About Company:
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="start"
                    fontWeight={600}
                  >
                    About us
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    textAlign={"start"}
                    className={`des ${item.showDes ? "show" : ""}`}
                  >
                    {item.jobDetailsFromCompany}
                  </Typography>
                  {!item.showDes && (
                    <div className="viewjob" onClick={() => handleChange(item)}>
                      View job
                    </div>
                  )}
                </div>
                <div className="experience">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    letterSpacing={1.5}
                    fontSize={12}
                  >
                    Minimum experience:
                  </Typography>
                  <Typography variant="body2" fontSize={14}>
                    {item.minExp} {item.minExp > 1 ? "years" : "year"}
                  </Typography>
                </div>
                <Button
                  style={{
                    backgroundColor: "#54efc3",
                    color: "black",
                    borderRadius: "8px",
                  }}
                  fullWidth
                  href={item.jdLink}
                  target="_blank"
                >
                  <div className="btn">
                    <img src={highVoltageIcon} alt="" width={20} height={20} />
                    <span>Easy Apply</span>
                  </div>
                </Button>
                <Button
                  style={{
                    backgroundColor: "#4943da",
                    color: "white",
                    borderRadius: "8px",
                    textTransform: "none",
                  }}
                  fullWidth
                  variant="text"
                  href={item.jdLink}
                  target="_blank"
                >
                  <div className="btn">
                    <span>Unlock referral asks</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </div>
  );
}
