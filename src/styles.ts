import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const AppContainer = styled.div`
  background: rgb(255, 255, 255);
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0px auto;

  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    outline: none !important;
  }
`;
