// React-Router를 활용해서 마치 기존의 웹페이지처럼
// 브라우저 주소창에 따라서 다양한 컴포넌트 출력

// 동일한 레이아웃과 동일한 상단 메뉴를 사용
// 화면마다 필요한 부분만 구현해서 화면에 출력

// Suspense 컴포넌트: React의 비동기 로딩 지원
// Suspense, lazy를 통한 지연로딩(코드 분할, 분할 로딩): 필요할 때만 컴포넌트를 메모리상에 올림

//root.js는 createBrowserRouter를 통해 어떤 경로에 어떤 컴포넌트를 보여줄 것인지 결정
//import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))

const root = createBrowserRouter([
    {
        path: "", // 빈 문자열 ""은 기본 경로를 의미
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about", // 빈 문자열 ""은 기본 경로를 의미
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
])

export default root;