import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Components
import Movies from './components/Movies';
import NavBar from './components/NavBar';

// API Stuff
const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '92658958da9ffd5361fd1a67e3b34d5d'

// style
const Cont = styled.div`
  background-color: #282c34;
`
const Arp = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 0.2em;
  justify-content: center;
`

function App() {
  const [movieData, setMovieData] = useState([]);
  var [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`${API_URL}/movie/popular?&page=${pageNumber}&api_key=${API_KEY}`)
      .then(movies => {
        setMovieData(movies.data.results)
        setPageNumber(movies.data.page)
        console.log(movies)
      })
      .catch(error => {
        console.log(error.response)
      })

  }, [pageNumber, setPageNumber])


  const pageIncrease = () => {
    pageNumber = setPageNumber(pageNumber + 1)
    return pageNumber;
  }

  const pageDecrease = () => {
    pageNumber = setPageNumber(pageNumber - 1) ? pageNumber > 1 : pageNumber = 1;
    return pageNumber;
  }

  const goHome = () => {
    pageNumber = setPageNumber(pageNumber = 1);
  }



  return (
    <>
    <Cont>
      <NavBar
        pageNumber={pageNumber}
        pageIncrease={pageIncrease}
        pageDecrease={pageDecrease}
        goHome={goHome}
      />
      <Arp>
        {movieData.map((data) => {
          return(
            <Movies {...data} key={data.id} />
            )
          })}
      </Arp>
      </Cont>    
            
    </>
  );
}

export default App;
