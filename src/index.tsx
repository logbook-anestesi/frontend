import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import AuthProvider from "./contexts/AuthContext";
import { AppContainer } from "./styles";
import { ChakraProvider } from "@chakra-ui/react";
import AddCasesProvider from "./routes/AddCases/contexts";
import ApprovingProcessProvider from "./routes/ApprovingProcess/contexts";
import ApprovalEditProvider from "./routes/ApprovingProcessEdit/contexts";
import IlmiahProvider from "./routes/Ilmiah/contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppContainer>
          <AddCasesProvider>
            <ApprovalEditProvider>
              <ApprovingProcessProvider>
                <IlmiahProvider>
                  <ChakraProvider>
                    <MainRoutes />
                  </ChakraProvider>
                </IlmiahProvider>
              </ApprovingProcessProvider>
            </ApprovalEditProvider>
          </AddCasesProvider>
        </AppContainer>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
