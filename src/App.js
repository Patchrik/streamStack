import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./providers/DataProvider";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <Router>
      <DataProvider>
        <ApplicationViews />
      </DataProvider>
    </Router>
  );
}

export default App;
