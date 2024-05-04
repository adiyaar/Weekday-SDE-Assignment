import './App.css';
import React, { useState } from "react";
import CardComponent from './components/CardComponent';
import Filter from './components/Filter/FilterComponent';
import { Grid } from "@mui/material";

const levelOptions = ["Beginner", "Intermediate", "Expert"];
const locationOptions = ["New York", "Los Angeles", "Chicago"];


function App() {
  const [locationFilters, setLocationFilters] = useState([]);
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Filter
            options={levelOptions}
            value={undefined}
            onChange={undefined}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Filter
            options={locationOptions}
            value={locationFilters}
            onChange={setLocationFilters}
          />
        </Grid>
      </Grid>
      <CardComponent />
    </div>
  );
}

export default App;