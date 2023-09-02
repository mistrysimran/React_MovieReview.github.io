import { useState } from "react";

import { AppBar, Box, InputBase, Toolbar, Typography, styled } from "@mui/material";
import { BookmarkAdd, ExpandMore, Menu, SearchOutlined } from "@mui/icons-material";

import { logo } from "../constants/constant";

//components
import HeaderMenu from "./HeaderMenu";
import { routePath } from "../constants/route";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > * {
        padding: 0 16px;
    }
    & > div{
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-size: 14px;
            font-weight: 600;
        }
    }
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
    & > p > span {
        color: skyblue;
    }
`

const Logo = styled('img')({
    width: 64
})

const Search = styled(InputBase)`
    background: #fff;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Header = () => {

    const [open, setOpen] = useState(null);

    const navigate = useNavigate();

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    
    const handleClose = () => {
        setOpen(null);
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Logo src={logo} alt='logo' onClick={()=> navigate(routePath.home)}/>

                <Box onClick={handleClick} >
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />

                <Search placeholder="Search IMDb" className="search"/>

                <Typography>IMDb<Box component="span">Pro</Box></Typography>

                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>

                <Typography>Sign In</Typography>
                
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>

            </StyledToolbar>
        </AppBar>
    )
}

export default Header
