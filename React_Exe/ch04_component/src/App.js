import logo from './logo.svg';
import './App.css';
// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
import MyComponent from "./ex07_children/MyComponent";

function App() {
  // return <Child />;
  return (
    // <Library title="조선 선비들의" />

    // <>
    //   <MyComponent />
    //   <MyComponent name="리액트" />
    // </>

    <MyComponent>리액트 프로그래밍</MyComponent>
  );
}

export default App;
