import { AppBar, Box, Toolbar } from "@mui/material";
import { LOGO_URL } from "../../utility";
import React from "react";
import SearchBar from "../SearchBar";

interface IHeader {
    isMobile: boolean
}

const Header: React.FC<IHeader> = ({ isMobile }) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box component="img" src={LOGO_URL} alt="CONNECT" />
                {isMobile && <SearchBar />}
            </Toolbar>
        </AppBar>
    )
}

export default Header;