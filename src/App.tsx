// components
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navegator from "./components/Navegator";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <>
        <Navegator />
        <Main />
        <Footer />
      </>
    </DataProvider>
  );
}

export default App;
