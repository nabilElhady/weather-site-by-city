import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Input.css";
import Api from "./Api";
export const Input = ({ change, setchange, submitted, setsubmited, state }) => {
  return (
    <div className="biggest">
      <Box
        sx={{
          width: "500px",
          border: "1px solid black",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <TextField
            className="font"
            id="outlined-password-input"
            label="state"
            onChange={(e) => {
              setsubmited(e.target.value);
            }}
            autoComplete="current-password"
            sx={{ marginTop: "20px", borderRadius: "200px", color: "red" }}
          />
          <a
            style={{ marginBottom: "20px" }}
            onClick={() => {
              state(submitted);
            }}
            href="#"
            class="btn btn-white"
          >
            submit
          </a>
        </div>
      </Box>
    </div>
  );
};
