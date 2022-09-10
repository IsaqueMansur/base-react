import styled from 'styled-components';

export const Title = styled.h1`
  background-color: orange;
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  color: green;
`;
