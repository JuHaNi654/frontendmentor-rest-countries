import { useState } from "react";
import Header from "./components/Header";
import CountryListing from "./components/CountryListing";
import ModeBtn from "./components/Mode-btn";
import Country from "./components/Country";

import { Routes, Route } from "react-router-dom";

function Layout(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
  const [countrys, setCountrys] = useState<Array<any>>([]);

  const toggleLayout = (): void => setDarkMode((darkMode) => !darkMode);
  const saveCountrys = (value: Array<any>): void => {
    setCountrys(value);
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode && "dark"}`}>
      <Header>
        <ModeBtn darkMode={darkMode} toggle={toggleLayout} />
      </Header>
      <main className="flex-1 pt-10 px-3 dark:bg-primary-blue-800 lg:px-16">
        <Routes>
          <Route path="/">
            <Route
              index
              element={<CountryListing setCountrys={saveCountrys} />}
            />
            <Route path="/:country" element={<Country countrys={countrys} />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default Layout;
