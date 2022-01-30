import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Adduser({ user, setUser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  // const [like, setlike] = useState("");

  const adduser = () => {
    const newuser = {
      name: name,
      pic: pic,
      like: 0,
      dislike: 0,
    };
    // setUser([...user, newuser]);
    // restUser_Form();
    // history.push("/user");

    //1.method:POST
    //2.body: data & JSON
    //3.header - JSON data

    fetch("https://614ed775b4f6d30017b483a0.mockapi.io/sample", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { "Content-type": "application/json" },
    }).then(() => history.push("/user"));
  };
  return (
    <div className="Adduser-container">
      <h1>Add User</h1>
      <TextField
        id="outlined-basic"
        label="Enter the Name"
        variant="outlined"
        className="input-box"
        color="success"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Enter the Pic"
        variant="outlined"
        className="input-box"
        color="success"
        value={pic}
        onChange={(event) => setPic(event.target.value)}
      />
      {/* <input
        value={name}
        placeholder="enter the name"
        onChange={(event) => setName(event.target.value)}
      /> */}
      {/* <input
        value={pic}
        placeholder="enter the pic"
        onChange={(event) => setPic(event.target.value)}
      /> */}
      <Button
        variant="contained"
        onClick={adduser}
        className="input-box_button"
      >
        Add user
      </Button>
      {/* <button onClick={adduser}>Add user</button> */}
    </div>
  );
}
