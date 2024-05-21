// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용
function Header(props){
  return (
    <header>
    <h1>
        <a href="/" onClick={(event) => {
        event.preventDefault(); // 원래 <a>태그의 기능을 막음
        props.onChangeMode();   // onChangeMode에 전달된 함수가 호출
      }}>{props.title}</a>
    </h1>

  </header>
  )
}

function Nav(props){
  //props로 부터 받은 데이터를 <li></li>로 만든어서 lis에 저장
  const lis = [];

  for(let i=0; i < props.topics.length; i++){
    let t = props.topics[i]; // 부모로부터 전달된 객체를 1개씩 추출

    // onChangeMode에 어떤 list가 호출되었는지 전달하기 위해 
    // 사용자 정의 속성인 'id'를 저장
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read/" + t.id} onClick={event=>{
        event.preventDefault(); // <a>태그의 기능 막음
        props.onChangeMode(event.target.id);   // props 내의 onChangeMode에 전달된 
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

function Acticle(props){
  return (
    <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}

export default function SubApp() {

  let mode = 'WELCOME'; // 요소 클릭 시 변경할 값

  const topics = [
    {id:1, title: 'html', body:'html is...'},
    {id:2, title: 'css', body:'css is...'},
    {id:3, title: 'js', body:'js is...'},
  ]

  // html 요소 클릭시 mode에 저장된 값에 따라서 content가 바뀌어서 보여짐
  let content = null;

  if(mode === 'WELCOME'){
    content = <Acticle title='WHAT' body='Hell! 뽀로로!'></Acticle>
  } else if(mode === 'READ'){
    content = <Acticle title='WHY' body='Hell! 크롱!'></Acticle>
  }

  return (
    <div>
      <Header title='REACT' onChangeMode={() => {
        mode = 'WELCOME';
      }}/>
      <Nav topics={topics} onChangeMode={(id) => {
        mode = 'READ';
      }}/>
      {content}
    </div>
  );
}