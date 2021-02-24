import React, { useContext, useState } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      email: user.email,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container style={{ width: "60%"}}>
      <Grid
        container
        justify={"center"}
        style={{ height: window.innerHeight - 50, margin: "0 auto" }}
      >
        <div
          style={{
            width: "100%",
            height: "60vh",
            overflowY: "auto",
            backgroundColor: "rgba(255,255,255,0.3)"
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                padding: 15,
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                borderRadius: "25px",
                backgroundColor:
                  user.uid === message.uid
                    ? "#4c9066"
                    : "#08070787",
                color: "#fff"
              }}
            >
              <Grid container>
                <div>{message.email}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "100%" }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{backgroundColor: "rgba(255,255,255,0.6)"}}
          />
          <Button onClick={sendMessage} variant={"outlined"} color="primary" variant="contained" style={{ marginTop: "20px"}} >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
