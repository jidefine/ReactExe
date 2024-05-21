// 1) 리액트는 '사용자 정의 태그를 만드는 기술이다'
// 2) 사용자 정의 태그 === 컴포넌트 ===jsx 객체
// 3) 프론트 App을 컴포넌트의 조립형태로 구조화

function Header(){

}

function Nav(){

}

function Acticle(){

}

export default function SubApp() {
  return (
    <div>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hell! 뽀로로!
      </article>
    </div>
  );
}