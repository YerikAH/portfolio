// context
import { Route, Routes } from "react-router-dom";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import { DataProvider } from "./context/dataContext";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
