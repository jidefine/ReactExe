import { Component } from "react";

// state는 Hook의 일종으로
// 컴포넌트의 상태를 컴포넌트 내부에 저장하기 위해 리액트가 지원해주는 문법
// 내부에 저장하는 이유는 컴포넌트의 외부 의존도를 낮추고 독립성을 가지기 위함

// 선언은 this.state = {변수명 : 값}으로 하고
// this.state의 내부 변수값을 변경할 때는 반드시
// this.setState = ({변수명 : 변수명 + 변화값})으로 해야
// 리액트의 Virtual DOM이 이 요소의 변화를 감지하여 화면상에 반영(render)한다.

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            fixedNum : 0
        };
    }

    render(){
        const {number, fixedNum} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNum}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                onClick={() => {
                    this.setState(
                    {
                        number: number + 1
                    },
                    () => {
                        console.log('방금 setState가 호출되었습니다.');
                        console.log(this.state);
                    }
                    );
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;