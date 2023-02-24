import React, { useState } from 'react';
import styled from 'styled-components';
import MovieDetail from './MovieDetail';

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

// Styled Components
const Container = styled.div`
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
`
const MoviesContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const MovieCard = styled.div`
    text-align: center;
    margin: 10px;
    /* border: 1px solid black; */
`
const Image = styled.img`
    border-radius: 20px;
    margin: 0px;
    width: 65%;
    height: 65%;
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 0 0 15px #888;
        transform: scale(1.1);
        cursor: pointer;
    }
`

const Title = styled.h3`
    color: lightgray;
    font-size: 1em;
    margin-top: 10px;
`

const Movies = ({ poster_path, title, release_date, overview }) => {

    // State Management for MovieDetail display
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <Container>
                <MoviesContainer>
                    <MovieCard>
                        {show === true
                        ?
                        <MovieDetail 
                           handleClose={handleShow}
                           poster_path={poster_path}
                           title={title}
                           overview={overview}
                           release_date={release_date}
                        /> 
                        :
                        <>
                            <Image src={`${IMG_URL}/${poster_path}`} onClick={handleShow}/>
                            <Title>
                                {title}
                            </Title>
                        </>

                        }
                    </MovieCard>
                    
                </MoviesContainer>
                
                
            </Container>

        </>
    )
}

export default Movies

