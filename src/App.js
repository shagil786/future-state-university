import React, { Suspense, useState } from "react";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { DeveloperDataContext } from "./utils/appContext";
import CommonLoader from "./common/components/CommonLoader/CommonLoader";
import Nav from "./components/Nav/Nav";

const Home = React.lazy(() => import("./Pages/Home/Home"));

function App() {
  const [appData, setAppData] = useState({ active: "" });

  return (
    <DeveloperDataContext.Provider
      value={{
        appData,
        setAppData,
      }}
    >
      <Suspense fallback={<CommonLoader />}>
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </DeveloperDataContext.Provider>
  );
}

export default App;
