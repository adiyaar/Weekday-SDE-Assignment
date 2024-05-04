import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import './CardComponent.css';

const CardComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {});
        setJobs(response.data.jdList); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <Box key={job.jdUid} className="card-container">
          {/* <img src={job.logoUrl} alt="" className="logo" />
          <Typography variant="h6" className="heading">
            {job.companyName}
          </Typography>
          <Typography variant="body1" className="description">
            {job.jobDetailsFromCompany}
          </Typography>
          <Button variant="contained" color="primary" className="action-button">
            Apply Now
          </Button> */}
          <Box sx={{ display: "flex", gap: 1 }}>
        <Box sx={{ width: "40px" }}>
          <img src={job.logoUrl} width="100%" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body"
            sx={{
              color: "grey",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            {job.companyName}
          </Typography>
          <Typography
            mt={0.5}
            variant="body"
            sx={{ fontSize: 14, textTransform: "capitalize" }}
          >
            {job?.jobRole}
          </Typography>
          <Typography
            mt={0.5}
            variant="body"
            sx={{ fontSize: 12, textTransform: "capitalize" }}
          >
            {job?.location}
          </Typography>
        </Box>
      </Box>
      <Typography mt={1} variant="body" sx={{ color: "grey", fontSize: 16 }}>
        {/* Estimated Salary: &#x20B9; {DisplaySalary(job)} &#x2705; */}
      </Typography>

      <Typography mt={1} variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
        About Company:
      </Typography>

      <Typography
        mt={0.2}
        variant="body2"
        sx={{ fontSize: 14, fontWeight: 700 }}
      >
        About us
      </Typography>
      <Box
        sx={{
          maskImage: showMore
            ? ""
            : "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
        }}
      >
        <Typography
          mt={0.5}
          variant="body"
          sx={{ fontSize: 16, fontWeight: 400 }}
        >
          {job?.jobDetailsFromCompany
            ? showMore
              ? job?.jobDetailsFromCompany
              : job?.jobDetailsFromCompany?.slice(0, 400)
            : " "}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="body"
          sx={{ color: "blue", cursor: "pointer", fontSize: 14 }}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {" "}
          {showMore ? "Show Less" : "Show More"}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{
            color: "grey",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Minimum Experience
        </Typography>

        <Typography mt={0.5} variant="body2" sx={{ fontSize: 14 }}>
          {job?.minExp ? `${job?.minExp} Years` : "NA"}
        </Typography>
      </Box>
      <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => window.open(job?.jdLink)}
          style={{
            padding: "1rem 2rem",
            border: "0px",
            borderRadius: 4,
            background: "rgb(85, 239, 196)",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 1,
            cursor: "pointer",
          }}
        >
          ⚡ Easy Apply
        </button>
      </Box>
        </Box>
      ))}
    </div>
  );
};

export default CardComponent;