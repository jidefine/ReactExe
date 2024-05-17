import Book from './Book';

function Library(props){
    return (
        <div>
            <h1>{props.title} 그 시절 우리가 좋아했던 애니</h1>
            <Book name='코난' numOfPage={101}/>
            <Book name='괴도키드' numOfPage={101}/>
            <Book name='짱구' numOfPage={101}/>
            <Book name='도라에몽' numOfPage={101}/>
        </div>
    );
}

export default Library;