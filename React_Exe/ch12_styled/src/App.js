import logo from './logo.svg';
import './App.css';
import ReactButton from './ex01_non_styled/ReactButton';
import StyledButton from './ex02_styled/StyledButton';
// import SimpleButton from "./ex03_styled/SimpleButton";
// import SimpleButton from "./ex04_styled/SimpleButton";
import SimpleButton from './ex05_styled/SimpleButton';
import LargeButton from './ex05_styled/LargeButton';
// import PrimaryButton from './ex06_styled/PrimaryButton';
// import PrimaryButton from './ex07_styled/PrimaryButton';
import PrimaryButton from './ex08_styled/PrimaryButton';
import SecondButton from './ex09_styled/SecondButton';
// import Blocks from './ex10_styled/Blocks';
// import Blocks from './ex11_styled/Blocks';
import Blocks from './ex12_styled/Blocks';

const blockItems = [
  {
      label: '1',
      padding: '1rem',
      backgroundImage: `url("https://image.newsis.com/2023/07/12/NISI20230712_0001313626_web.jpg")`,
  },
  {
      label: '2',
      padding: '1rem',
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0CkrU5svQxG748DXNaMlQ-5TFDDebsWxpQXeMYx1WAw&s")`,
  },
  {
      label: '3',
      padding: '1rem',
      backgroundImage: `url("https://api.nudge-community.com/attachments/35176")`,
  },
];


function App() {
  return (
    <>
    {/* <ReactButton>안녕하세요</ReactButton>
    <StyledButton>YO~~</StyledButton>
    <SimpleButton>행복합니다</SimpleButton>
    <LargeButton>자유</LargeButton>
    <PrimaryButton>출근</PrimaryButton>
    <PrimaryButton primary>퇴근</PrimaryButton>
    <SecondButton>Happy</SecondButton>
    <SecondButton primary>Hell</SecondButton> */}
    {/* <Blocks />
    <Blocks column/>
    <Blocks stretch/>
    <Blocks baseline/> */}
    <Blocks items={blockItems}/> {/* items로 전달하면, Blocks.jsx가 items로 받음 */}
    </>
  );
}

export default App;
