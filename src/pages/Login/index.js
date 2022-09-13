import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
/* import axios from '../../services/axios'; */

export default function Login() {
  /* React.useEffect(() => {
    async function getData() {
      const response = await axios('/alunos');
      console.log(response.data);
    }
    getData();
  }); */
  const { state } = useLocation();
  return (
    <Container>
      <Title isRed>
        Login
        <small>Opa</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <p>state: {state}</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
