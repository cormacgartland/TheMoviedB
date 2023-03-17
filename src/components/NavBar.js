import React from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.div`
    height: 50px;
    padding: 20px;
    color: #fff;
    font-size: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-image: linear-gradient(90deg, #282c34, #687387); */
    background-color: rgb(35, 40, 48);
    box-shadow: 0 2px 8px lightgray;
`

const NavHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavBarHome = styled.a`
    display: flex;
    text-decoration: none;
    padding: 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #ddd7;
        box-shadow: 0 0 20px #dddf;
    }
`

// const SearchBar = styled.input`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: none;
//     border-radius: 20px;
//     background-color: #ddd7;
//     color: black;

//     &::placeholder {
//         text-align: center;
//     }
// `

const PageItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const NavBarItems = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    margin: 10px;
    padding: 18px;
    bottom: 30px;
    border-radius: 25px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #ddd4;
        box-shadow: 0 0 20px #ddda;
    }
`
const NavBar = ({ pageIncrease, pageDecrease, goHome }) => {
  return (
    <NavBarContainer>
        <NavHome>
            <NavBarHome onClick={goHome}>Home</NavBarHome>
        </NavHome>
        {/* <SearchBar type="text" placeholder='Search...?' /> */}
        <PageItems>
            <NavBarItems onClick={pageDecrease}>&lt; Page</NavBarItems>
            <NavBarItems onClick={pageIncrease}>Page &gt;</NavBarItems>        
        </PageItems>
    </NavBarContainer>
  )
}

export default NavBar