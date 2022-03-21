import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { DisplayUser } from "./AllUserList";
//map function
export function UserList() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const getUsers = () => {
    fetch("https://614ed775b4f6d30017b483a0.mockapi.io/sample", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setUser(mvs));
  };
  useEffect(getUsers, []);
  //calling the delete method and refreshing the user using getUsers Method..
  const removeUser = (id) => {
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/sample/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  };

  return (
    <div className="user-contianer-box">
      {user.map((user, key) => (
        <DisplayUser
          name={user.name}
          pic={user.pic}
          id={user.id}
          key={key}
          delteButton={
            <DeleteIcon
              color="action"
              className="deleteIcon"
              onClick={() => removeUser(user.id)}
            />
          }
          // editIcon
          editButton={
            <EditIcon
              color="action"
              className="editIcon"
              onClick={() => history.push("/user/edit/" + user.id)}
            />
          }
          // like
          Counter_like_disliske={<Counter id={user.id} initUser={user} />}
          // dislike={<Dislike id={id} />}
        />
      ))}
    </div>
  );
}

//Counter function
function Counter({ id, initUser }) {
  const [user, setUser] = useState(initUser);
  // console.log(user);
  return user ? <UpdatedNewCounter user={user} setUser={setUser} /> : "";
}

function UpdatedNewCounter({ user, setUser }) {
  // const [like, setLike] = useState(user.like);
  var [like, setLike] = useState(user.like);
  var [dislike, setDisLike] = useState(user.dislike);

  const editlikeValues = () => {
    setLike(++like);
    const incrementLike = {
      like,
    };

    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/sample/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(incrementLike),
      headers: { "Content-type": "application/json" },
    });
  };

  const editdislikeValues = () => {
    setDisLike(++dislike);
    const incrementDislike = {
      dislike,
    };
    console.log(incrementDislike);
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/sample/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(incrementDislike),
      headers: { "Content-type": "application/json" },
    });
  };
  const styles = { marginLeft: "30px" };
  return (
    <div>
      <div>
        {/*======== Like Button ========*/}
        <Badge
          badgeContent={like}
          color="success"
          aria-label="like"
          onClick={editlikeValues}
        >
          <ThumbUpIcon color="action" />
        </Badge>
        {/*======== DisLike Button ========*/}
        <Badge
          style={styles}
          badgeContent={dislike}
          color="error"
          aria-label="dislike"
          onClick={editdislikeValues}
        >
          <ThumbDownAltIcon color="action" />
        </Badge>
      </div>
    </div>
  );
}
