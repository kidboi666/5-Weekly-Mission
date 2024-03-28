// css
import "./App.css";

// components
import Nav from "./components/Navigation";

function App() {
  return (
    <div>
      <Nav />
      <div>header</div>
      <div className="body">
        <div className="search-form"></div>
        <div>
          <div>card '반복문 map'</div>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
}

export default App;
