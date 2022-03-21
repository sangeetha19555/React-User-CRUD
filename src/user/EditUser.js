import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function EditUser() {
  const { user_id } = useParams(); //important
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/sample/${user_id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setUser(mvs));
  }, [user_id]);

  // return user ? <UpdatedNewUser user={user} /> : "";
  //updateMovies is child ... is hanliding the display part...
  return user ? <UpdatedNewUser user={user} /> : "";
}

function UpdatedNewUser({ user }) {
  console.log("hello", user.id);
  const history = useHistory();
  const [name, setName] = useState(user.name);
  const [pic, setPic] = useState(user.pic);

  const edituser = () => {
    // history.push("/user");
    const updatedUser = {
      name,
      pic,
    };
    console.log(updatedUser);
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/sample/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: { "Content-type": "application/json" },
    }).then(() => history.push("/user"));
  };
  return (
    <div className="Adduser-container">
      <h1>Edit User</h1>
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
        label="Enter the Name"
        variant="outlined"
        className="input-box"
        color="success"
        value={pic}
        onChange={(event) => setPic(event.target.value)}
      />
      {/* <input
        value={name}
        placeholder="enter the color"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        value={pic}
        placeholder="enter the color"
        onChange={(event) => setPic(event.target.value)}
      /> */}
      <Button
        variant="contained"
        onClick={edituser}
        className="input-box_button"
      >
        Edit user
      </Button>
      {/* <button onClick={edituser}>Edit user</button> */}
    </div>
  );
}
