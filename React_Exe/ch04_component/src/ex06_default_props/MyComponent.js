// function MyComponent(props){
//     return <div>안녕하세요. 제 이름은 {props.name}. 탐정이죠.</div>
// }

const MyComponent = (props) => {
    return <div>안녕하세요. 제 이름은 {props.name}. 탐정이죠.</div>
}

MyComponent.defaultProps = {
    name: "기본 이름",
};

export default MyComponent;