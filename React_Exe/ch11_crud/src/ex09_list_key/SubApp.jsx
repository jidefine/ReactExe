// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용
function Header(props){
  return (
    <header>
    <h1><a href="/">{props.title}</a></h1>

  </header>
  )
}

function Nav(props){
  //props로 부터 받은 데이터를 <li></li>로 만든어서 lis에 저장
  const lis = [];

  for(let i=0; i < props.topics.length; i++){
    let t = props.topics[i]; // 부모로부터 전달된 객체를 1개씩 추출
    lis.push(<li key={t.id}><a href={"/read/" + t.id}>{t.title}</a></li>)
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

  const topics = [
    {id:1, title: 'html', body:'html is...'},
    {id:2, title: 'css', body:'css is...'},
    {id:3, title: 'js', body:'js is...'},
  ]

  return (
    <div>
      <Header title='REACT'/>
      <Nav topics={topics} />
      <Acticle title='WHAT' body='Hell! 뽀로로!'/>
      <Acticle title='WHY' body='Hell! 포비!'/>
    </div>
  );
}