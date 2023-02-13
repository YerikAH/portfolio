// components
import Main from "./components/Main";
import Navegator from "./components/Navegator";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <>
        <Navegator />
        <Main />
      </>
    </DataProvider>
  );
}

export default App;
