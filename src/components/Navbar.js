import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid } from "@material-ui/core";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar color={"primary"} position="static">
      <Toolbar variant={"dense"}>
        <span style={{minWidth: "200px" }}>WEATHE WITH CHAT APP</span>
        <Grid container justify={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={"contained"} color={"secondary"} >
              Log out
            </Button>
          ) : 
          false
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
