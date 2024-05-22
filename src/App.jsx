
import ReactDOM from "react-dom";
import Pet from "./Pet";  

const App = () => {
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal="Dog" name="Luna" breed="Havanese" />
      <Pet animal="Bird" name="Pepper" breed="Cockatiel" />
      <Pet animal="Cat" name="Doink" breed="Mixed" />
    </div>
};
  
const container = document.getElementById("root"); 
const root = ReactDOM.createRoot(container);
root.render(<App />);
