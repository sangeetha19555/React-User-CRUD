import { useState } from "react";
import "./AddColor.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function AddColor() {
  const colors = ["red"];
  const [addcolor, setAddColor] = useState(colors); //newcolor

  const [color, setColor] = useState(""); //inital color
  const text_box_styles = {
    background: color,
  };
  return (
    <div className="Adduser-container">
      <h1 className="color-game-title">Color Game</h1>
      <TextField
        id="outlined-basic"
        label="Enter the Color"
        variant="outlined"
        className="input-box"
        color="success"
        style={text_box_styles}
        onChange={(event) => setColor(event.target.value)}
      />
      {/* <input
        style={text_box_styles}
        placeholder="enter the color"
        onChange={(event) => setColor(event.target.value)}
      /> */}
      <Button
        variant="contained"
        onClick={() => setAddColor([...addcolor, color])}
        className="input-box_button"
      >
        Add color
      </Button>
      {/* <button onClick={() => setAddColor([...addcolor, color])}>
        Add color
      </button> */}
      <p>{color}</p>{" "}
      {addcolor.map((el, index) => (
        <ColorBox key={index} color={el} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const color_style = {
    background: color,
    width: "120px",
    height: "100px",
    marginBottom: "10px",
  };
  return <div style={color_style}></div>;
}
