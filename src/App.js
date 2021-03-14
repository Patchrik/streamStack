import "./App.css";
import Home from "./pages/Home";
import { DataProvider } from "./providers/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
