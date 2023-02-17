// components
import Footer from "./components/Footer";
import Global from "./components/Global";
import Main from "./components/Main";
import Navegator from "./components/Navegator";

// context
import { DataProvider } from "./context/dataContext";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <>
          <Navegator />
          <Main />
          <Footer />
          <Global />
        </>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
