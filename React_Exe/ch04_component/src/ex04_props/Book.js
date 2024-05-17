function Book(props){
    return (
    <div>
        <h1>{`이 애니의 이름은 ${props.name}`}</h1>
        <h3>{`이 애니은 총 ${props.numOfPage} 편으로 이뤄줘 있습니다.`}</h3>
    </div>
    );
}

export default Book;