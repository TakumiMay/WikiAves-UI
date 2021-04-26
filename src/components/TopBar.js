import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import messages from "../constants/messages";

export default function TopBar() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    {messages.appTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}