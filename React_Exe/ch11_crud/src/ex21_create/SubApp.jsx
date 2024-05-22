
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

        // 부모 영역
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
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);
  // const topics = [
  //   {id:1, title:'html', body:'html is ...'},
  //   {id:2, title:'css', body:'css is ...'},
  //   {id:3, title:'javascript', body:'javascript is ...'},
  // ]

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
    // <Create/>내부에서 submit이벤트가 발생하면
    // 부모에서 전달한 함수인 onCreate에 title, body를 전달하여 호출한다.
    content = <Create onCreate={(title, body)=>{
      // alert(`${title}-${body}`);

      // 이제 topics 리스트에 새로운 항목을 추가해야 되는데
      // topics가 일반 지역변수이므로,
      // 다시 SubApp가 rerendering 될때 호출되면
      // 초기화 되버리므로, 새로 추가한 것이 무효가 됨
      // 그러므로 topics를 state 변수로 전환함

      // topics로 가서 useState를 사용하자~
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