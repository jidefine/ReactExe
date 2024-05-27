function Card(props){
    const {title,backgroundColor,children } = props;

    // 객체지향 언어는 상속을 이용해서 Specialization을 구현
    // 그러나 React는 결국 합성을 사용해서 구현
    // 속성의 정보를 구체적으로 부여함으로써, 컴포넌트의 기능을 특별하게 만듦

    return (
        <div 
        // style 속성을 사용하여 직접 스타일을 지정할 수 있음
        // JSX에서 JavaScript 객체를 사용하여 스타일을 정의
        style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white",
        }}>
            {/* 
            Specilization 기법 
            Specialization을 위해 title(직접 정의한 props) 사용*/}
            {title && <h1>{title}</h1>} {/*조건부 렌더링 : title이 존재하는 경우에만 <h1> 요소를 렌더링  */}

            {/* 
            Containment 기법 
            Containment를 위해 props.children 사용*/}
            {children}
        </div>
    )
}

export default Card;