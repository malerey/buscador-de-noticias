import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
 padding: 20px;
 width: auto;
 display: flex;
 height: 60px;
 justify-content: flex-start;
 align-items: center;
 ul {
  display: flex;
  list-style: none;
  margin-right: 30px;
  li {
   text-decoration: none;
   color: #000;
   font-size: 20px;
   padding: 0 15px 10px;
   cursor: pointer;
  }
 }
 a {
   text-decoration: none;
   color: #000;
 }
`;

const Form = styled.form`
 width: 30%;
 input {
  width: 100%;
  padding: 5px;
  border: 1.5px solid #ccc;
 }
`;

const RedBorderLi = styled.li`
 border-bottom: 5px solid red;
`;

const GreenBorderLi = styled.li`
 border-bottom: 5px solid green;
`;

const OrangeBorderLi = styled.li`
 border-bottom: 5px solid orange;
`;

const BlueBorderLi = styled.li`
 border-bottom: 5px solid blue;
`;


const Nav = ({ filtroFuente, busqueda }) => {

  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`./search&${searchInput}`);
    busqueda(searchInput);
  }
  
  const handleChange = e => {
    setSearchInput(e.target.value);
  }  

  return (
    <NavBar>
      <h2>JOURNAL NEWS</h2>
      <ul>
        <Link to='./source/google-news-ar'>
          <RedBorderLi id='google-news-ar' onClick={filtroFuente}>
            Google News
          </RedBorderLi>
        </Link>

        <Link to='./source/la-gaceta' id="la-gaceta">
          <GreenBorderLi id='la-gaceta' onClick={filtroFuente}>
            La Gaceta
        </GreenBorderLi>
        </Link>

        <Link to='./source/Infobae'>
          <OrangeBorderLi id='Infobae' onClick={filtroFuente}>
            Infobae
        </OrangeBorderLi>
        </Link>

        <Link to='./source/La-Nacion'>
          <BlueBorderLi id='La-Nacion' onClick={filtroFuente}>
            La Nacion
        </BlueBorderLi>
        </Link>
      </ul>
      <Form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text"/>
      </Form>
    </NavBar>
  )
};

export default Nav;