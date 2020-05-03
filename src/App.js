import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

const App = () => {

  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetch(`http://newsapi.org/v2/top-headlines?country=ar&apiKey=API_KEY`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles);
      })
  }, []);

  const filtroFuente = e => {
    fetch(`http://newsapi.org/v2/top-headlines?sources=${e.target.id}&apiKey=API_KEY`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles);
      })  
  };

  const busqueda = searchInput => {
    fetch(`http://newsapi.org/v2/everything?language=es&q=${searchInput}&apiKey=API_KEY`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles);
      }) 
  };

  return (
    <Router>
      <Nav filtroFuente={filtroFuente} busqueda={busqueda}/>      
      <CardsContainer newsArray={news}/>
      <Footer/>      
      
      <Switch>
       <Route exact path='./source/:sourceName' component= {() => <CardsContainer newsArray={news}/>}/>
       <Route path='./search/:searchInput' component={() => <CardsContainer newsArray={news}/>}/>
      </Switch>
    </Router>
  );
}

export default App;