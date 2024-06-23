import './App.css';
import { RouterProvider } from 'react-router-dom';
import root from "./router/root";

function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello react!
    // </h1>
    <RouterProvider router={root}/>
  );
}

export default App;
