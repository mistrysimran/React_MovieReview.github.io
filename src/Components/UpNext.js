import { Box, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 20px;

    & > p {
        color: #f5c518;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
    }
`

const Wrapper = styled(Box)`
    color: #fff;
    display: flex;
    margin-bottom: 10px;
    & > p {
        margin-left: 20px;
    }
`

const Poster = styled('img')({
    width: 90
})

const UpNext = ({ movies }) => {
  return (
    <StyledBox>
        <Typography>Up Next</Typography>
        {
            movies.splice(0,3).map(movie => (
                <Wrapper>
                    <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='poster' />
                    <Typography>{movie.original_title}</Typography>
                </Wrapper>
            ))
        }
    </StyledBox>
  )
}

export default UpNext;
