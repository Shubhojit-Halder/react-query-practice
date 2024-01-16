import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      
        <ul
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super">Traditional</Link>
          </li>
          <li>
            <Link to="/rq-super">RQ Super</Link>
          </li>
        </ul>
    </>
  );
};

export default App;
