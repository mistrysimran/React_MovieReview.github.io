import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Box, Divider, Typography, styled } from '@mui/material';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { categoryMovie } from '../services/api';
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL, movieType } from '../constants/constant';
import Header from '../common/Header';
import MoviesList from '../MoviesList';

const Container = styled(Box)`
  width: 80%;
  margin: auto;
`

const StyledBanner = styled('img')({
  width: '100%',
  height: '450px'
});

const Title = styled(Typography)`
    color: #f5c518;
    font-size: 1.7rem;
`
const TitleBox = styled(Box)`
  height: 60px;
  // width: 500px;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  position: absolute;
  top: 362px;
  left: 10px;
  padding: 10px;
`

const StyledBox = styled(Box)`
  background: #f5f5f5;
  padding: 10px;

`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Categories = () => {

  const [movies, setMovies] = useState([]);

  const { search } = useLocation();


  useEffect(() => {
    const getData = async (API_URL) => {
      let res = await categoryMovie(API_URL);
      setMovies(res.results);
    }

    let API_URL;

    if (search.includes('popular')) { API_URL = POPULAR_API_URL; }
    else if (search.includes('toprated')) { API_URL = TOPRATED_API_URL; }
    else if (search.includes('upcoming')) { API_URL = UPCOMING_API_URL; }

    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />

      <Container>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          slidesToSlide={1}
        >
          {
            movies.map(movie => (
              <>
                <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='banner' />
                <TitleBox>
                  <Title>{movie.title}</Title>
                </TitleBox>
              </>
            ))
          }
        </Carousel>

        <StyledBox>
          <Typography variant='h6'>IMDb Charts</Typography>
          <Typography variant='h4'>IMDb {movieType[search.split('=')[1]]} Movies</Typography>
          <Typography sx={{ fontSize: 12, margin: 0.5 }}>IMDb Top {movies.length} as rated by regular voters.</Typography>

          <Divider />

          <MoviesList movies={movies} />

        </StyledBox>
      </Container>
    </>
  )
}

export default Categories;
