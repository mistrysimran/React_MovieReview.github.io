import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { categoryMovie } from './services/api';

const StyledBanner = styled('img')({
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    marginTop: '20px',
});

const Title = styled(Typography)`
    color: #fff;
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Slide = ({ api }) => {

    const [movies, setMovies] = useState([]);
    console.log('here', api);

    useEffect(() => {
        const getData = async () => {
            let res = await categoryMovie(api);
            setMovies(res.results);
        }
        getData();
    }, [])

    return (

        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            keyBoardControl={true}
            infinite={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            slidesToSlide={1}
            itemClass='carouselItem'
            partialVisbile={true}
        >
            {

                movies.splice(0, 10).map(movie => (
                    <>
                        <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='banner' />
                        <Title>{movie.title}</Title>
                    </>
                ))
            }
        </Carousel>

    )
}

export default Slide;
