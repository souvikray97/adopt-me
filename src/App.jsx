
import ReactDOM from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams /> 
    </div>
  );
};
  
const container = document.getElementById("root"); 
const root = ReactDOM.createRoot(container);
root.render(<App />);
