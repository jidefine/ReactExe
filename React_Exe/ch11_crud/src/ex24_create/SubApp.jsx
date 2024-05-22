
import {useState} from 'react';

function Header(props){

  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  )
  
}

function Nav(props){

  const lis = [];
  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];   
    lis.push(<li key={t.id}>
              <a id={t.id} href={"/read/" + t.id}
                onClick={event=>{
                  event.preventDefault();  
                  props.onChangeMode(Number(event.target.id));  
                }}>
                {t.title}
              </a>
            </li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props){

  return (
    <article>
      <h2>Create</h2>
      {/* submit 버튼을 누르면, formdptj onSubmit이 호출됨 */}
      <form onSubmit={event=>{
        event.preventDefault(); // 기본 동작 막음(페이지 reload)
        const title = event.target.title.value;
        const body = event.target.body.value;

        // 부모 영역에서 props를 통해 전달한 onCreate 함수를 호출함
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value={'Create'}/></p>
      </form>
    </article>
  );
}

export default function SubApp(){

  const [mode, setMode] = useState('WELCOME'); // 리액트가 관리하는 전역변수로 볼 수 있음
  const [id, setId] = useState(null); // nav의 어떤 항목(id)이 선택되었는지

  // 새로운 id 발급, topics의 마지막 id가 3이므로, 새로운 id는 4부터 시작
  const [nextId, setNextId] = useState(4); 

  // topics는 리스트 객체라서
  // 항목이 추가되었지만 참조값(객체, 위치값)이 동일해서 React 변화를 감지하지 못함(Hook이 인지를 못함)
  // 그래서 Hook 이벤트인 rerendering이 발생되지 않음

  // 새로운 topics 객체를 할당하고 기존 내용과 추가된 내용을 setTopics에 담아서 넘겨야 됨
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);

  let content = null;
  
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hell, 뽀로로'></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(id, typeof id);

      // 선택된 id와 같은 항목을 찾았으면
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article>
  }else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id : nextId, title : _title, body : _body};
      const newTopics = [...topics]; // topics를 복제해서 새로운 객체 생성
      newTopics.push(newTopic);      // 새로운 항목 추가
      setTopics(newTopics);          // 바뀐 객체를 전달 => Hook 전달 이벤트 발생
      setNextId(nextId+1);           // id 갱신
    }}/>
  }

    return (
        <div>
          <Header title='WEB' onChangeMode={()=>{
            setMode('WELCOME');
          }} />
          <Nav topics={topics} onChangeMode={(id)=>{
            setMode('READ');
            setId(id);
          }} />
          {content}
          <a href='/create' onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </div>
      );
}