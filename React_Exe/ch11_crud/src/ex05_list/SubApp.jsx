// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용
function Header(props){
  return (
    <header>
    <h1><a href="/">{props.title}</a></h1>

  </header>
  )
}

function Nav(){
  return (
    <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
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