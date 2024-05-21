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
  return (
    <div>
      <Header title='REACT'/>
      <Nav />
      <Acticle title='WHAT' body='Hell! 뽀로로!'/>
      <Acticle title='WHY' body='Hell! 포비!'/>
    </div>
  );
}