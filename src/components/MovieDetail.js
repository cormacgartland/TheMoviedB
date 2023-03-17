import React from 'react'
import styled from 'styled-components';

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const Background = styled.div`
  width: 40vw;
  height: 75vh;
  background: rgba(0, 0, 0, 0.7);
  border: 5px solid rgba(255, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin-top: 0;
`;

const ModalContainer = styled.div`
  height: 75%;
  width: 75%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: lightgrey;
  z-index: 10;
`
const Image = styled.img`
  border-radius: 20px;
  margin: 0px;
  width: 25%;
  height: 75%;
  transition: all .2s ease-in-out;
  
  &:hover {
    transform: scale(2.1);
  }
`

const Title = styled.h1`
  border-bottom: 5px lightgrey dotted;
  padding: 0;
  margin: 0;
`

const ReleaseDate = styled.h3`
  padding: 15px;
  margin: 0;
`

const Description = styled.p`
  width: 85%;
  margin: 0;
`

const Button = styled.button`
  text-decoration: none;
  background-color: rgba(255, 0, 0, 0.2);
  color: lightgrey;
  /* box-shadow: 0 0 15px #888; */
  font-size: 24px;
  border: none;
  border-radius: 20px;
  margin-top: 2em;
  padding: 10px 60px;
  transition: all .2s ease-in-out;

  &:hover {
        box-shadow: 0 0 15px #888;
        background-color: rgba(255, 0, 0, 0.4);
        transform: scale(1.1);
        cursor: pointer;
    }
`

const MovieDetail = ( { handleClose, poster_path, title, overview, release_date, modal} ) => {
  return (
    <>
      <Background>
        <ModalContainer>
          <Image src={`${IMG_URL}/${poster_path}`} />
            <Title>{title}</Title>
            <ReleaseDate>{release_date}</ReleaseDate>
            <Description>{overview}</Description>                
            <Button onClick={handleClose}>
              Close
          </Button>
        </ModalContainer>
      </Background>
    </>
  )
}

export default MovieDetail