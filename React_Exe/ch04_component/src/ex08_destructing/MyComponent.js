/*
상위 컴포넌트에서 props로 묶어서 전달해도 되지만
아래처럼 각각 변수에 나눠서 할당하느 것도 가능
이것을 비구조화 할당(destructing assignment)이라 하고
'구조 분해 문법'이라고도 함
*/

const MyComponent = ({name, children}) => {
    return (
    <div>
        <div>안녕하세요. 제 이름은 {name}. 탐정이죠.</div>
        <div>퐘된 값은 {children}이죠!</div>
    </div>
    );
};

MyComponent.defaultProps = {
    name: "기본 이름",
};

export default MyComponent;