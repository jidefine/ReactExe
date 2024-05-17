import logo from './logo.svg';
import './App.css';
// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
// import MyComponent from "./ex03_props/MyComponent";
// import Library from "./ex04_props/Library";
// import MyComponent from "./ex05_props/MyComponent";
// import MyComponent from "./ex06_default_props/MyComponent";
// import MyComponent from "./ex07_children/MyComponent";
// import MyComponent from "./ex08_destructing/MyComponent";
// import MyComponent from "./ex09_prop_types/MyComponent";
import MyComponent from "./ex10_prop_required/MyComponent";

function App() {
  // return <Child />;
  return (
    // <Library title="조선 선비들의" />

    // <>
    //   <MyComponent />
    //   <MyComponent name="리액트" />
    // </>

    // <MyComponent>리액트 프로그래밍</MyComponent>

    // <MyComponent name="happy happy">리액트 프로그래밍</MyComponent>

    // <MyComponent name="행운">리액트 프로그래밍</MyComponent>

    <MyComponent name="행운" favoriteNum={3}>리액트 프로그래밍</MyComponent>
  );
}

export default App;
