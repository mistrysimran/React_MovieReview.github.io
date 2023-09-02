import { useEffect, useState } from "react";

import { Box, Typography, styled } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";

import { categoryMovie } from "../services/api";

import { NOWPLAYING_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from "../constants/constant";

import Header from "../common/Header";
import Banner from "../Banner";
import UpNext from "../UpNext";
import Slide from "../Slide";

const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`

const Container = styled(Box)`
    padding: 0 115px;
`

const Home = () => {

    const [movies, setMovies] = useState([]);

    const api = {
        coming_soon: UPCOMING_API_URL,
        top_picks: TOPRATED_API_URL
    }

    useEffect(() => {
        const getData = async () => {
            let res = await categoryMovie(NOWPLAYING_API_URL);
            setMovies(res.results);
        }
        getData();
    }, []);

    return (
        <>
            <Header />

            <Container>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>

                <Typography variant="h4" className="explore">Explore The Cinematic Universe</Typography>
                {/* <Slide movies={movies} /> */}

                <Typography className="titles">Top Picks <ChevronRightRounded sx={{fontSize:45}} /> </Typography>
                <Slide api={api.top_picks} />

                <Typography className="titles">Coming Soon <ChevronRightRounded sx={{fontSize:45}} /> </Typography>
                <Slide api={api.coming_soon} />
                {/* <Slide movies={movies} /> */}
            </Container>

        </>

    )
}

export default Home;