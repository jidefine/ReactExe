// function MyComponent(props){
//     return <div>안녕하세요. 제 이름은 {props.name}. 탐정이죠.</div>
// }

const MyComponent = (props) => {
    return (
    <div>
        <div>안녕하세요. 제 이름은 {props.name}. 탐정이죠.</div>
        <div>퐘된 값은 {props.children}</div>
    </div>
    );
};

MyComponent.defaultProps = {
    name: "기본 이름",
};

export default MyComponent;