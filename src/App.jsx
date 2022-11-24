import React, { Suspense } from "react";
import { Logo } from "./components/Logo";
import  {GlobalStyle}  from "./styles/GlobalStyle";
import {
  Route,
  BrowserRouter,
  redirect as Redirect,
  Routes,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { NotRegisteredUser } from "./pages/NotRegisterUser";
import { User } from "./pages/User";
import Context from "./Context";
import { PageNotFound } from "./pages/404";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

// import { Favs } from "./pages/Favs";
const Favs = React.lazy(() => import("./pages/Favs"));

function App(props) {
  return (
    <Suspense fallback={<div />}>
      <Context.Consumer>
        {({ isAuth }) => (
          <>
            <BrowserRouter>
              <GlobalStyle />
              <Logo />
              <Routes>
                <Route path="/Petgram" element={<Home />}></Route>
                <Route path="/pet/:categoryId" element={<Home />}></Route>
                <Route path="/search" element={<Detail />}>
                                    
                                        
                                    
                                </Route>
                <Route
                  path="/favs"
                  element={isAuth ? <Favs /> : <NotRegisteredUser />}
                />
                <Route
                  path="/user"
                  element={isAuth ? <User /> : <NotRegisteredUser />}
                />
                {!isAuth && <Route element={NotRegisteredUser} path="/login" />}
                {!isAuth && <Route from="/favs" to="/login" />}
                {!isAuth && <Route from="/user" to="/login" />}
                {isAuth && <Route from="/login" to="/" />}

                <Route path="/login" element={NotRegisteredUser} />
                <Route path="*" element={PageNotFound} />
              </Routes>
              <NavBar />
            </BrowserRouter>
          </>
        )}
      </Context.Consumer>
    </Suspense>
  );
}

export default App;
