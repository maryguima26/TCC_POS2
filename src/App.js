import logo from "./imgs/logo-sembg.png";
import "./App.css";
import Icone from "./new_components/Icone";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import Navegacao from "./new_components/Navegacao";
import Corpo from "./new_components/Corpo";
import Botao from "./new_components/Botao";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Icone />

      <Navegacao />
      <Corpo />
      <br />
      <br />
      <Botao />

      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="50px" />
              <span className="ml-3 h2 font-weight">TFAll</span>
            </a>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; TFAll, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}

export default App;
