import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Section = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-bottom: 30px;
`;

const CardsContainer = ({newsArray}) => {
 return (
  <Section>
  {/* Recorda siempre poner una key cuando hagas un map en JSX, asi evitas el warning en la consola
  y le facilitas el trabajo a React. 
  En general el mejor ID es el que te trae la API para cada objeto, pero en esta API en particular
  hay muchos null. La solucioón de compromiso acá es usar el indice en el array como key, asi:
  {newsArray.map((noticia, i) => <Card key={i} noticia={noticia}/>)} */}
   {newsArray.map((noticia) => <Card noticia={noticia}/>)}
  </Section>
 )
};  

export default CardsContainer;
