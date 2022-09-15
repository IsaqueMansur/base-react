import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';
/* import axios from '../../services/axios'; */

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.cliclaBotaoRequest());
  }

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
      <Title isRed>Login</Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <p>state: {state}</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
