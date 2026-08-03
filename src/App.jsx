import { useState } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login_page from "./Pages/login";
import Navbar from "./component/Shared/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Button from "./component/UI/button/button";
import CreatePost from "./Pages/create-post/Create";

import Profile from './Pages/profile/Profile'

function App() {
  const [showCreate, setShowCreat] = useState(false);

  return (
    <>
      {/* <Navbar /> */}
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={
            <>
            <Navbar />
            <Login_page />
            
            </>
            } />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile/>
                
              </>
            }
          ></Route>
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      {showCreate && <CreatePost onClose={() => setShowCreat(false)} />}
      <Button variant="createPost" onClick={() => setShowCreat(true)}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
        </svg>
      </Button>
    </>
  );
}

export default App;
