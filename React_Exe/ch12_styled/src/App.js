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

function App() {
  return (
    <>
    <ReactButton>안녕하세요</ReactButton>
    <StyledButton>YO~~</StyledButton>
    <SimpleButton>행복합니다</SimpleButton>
    <LargeButton>자유</LargeButton>
    <PrimaryButton>출근</PrimaryButton>
    <PrimaryButton primary>퇴근</PrimaryButton>
    <SecondButton>Happy</SecondButton>
    <SecondButton primary>Hell</SecondButton>
    </>
  );
}

export default App;
