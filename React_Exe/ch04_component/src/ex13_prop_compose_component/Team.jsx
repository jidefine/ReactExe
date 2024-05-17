import Student from "./Student";

// 컴포넌트 합성

function Team(props) {
    return (
        <>
            <h1>프로젝트 주제는 {props.title}</h1>
            <Student name='Mike' work='db설계'/>
            <Student name='뚜비' work='서버설계'/>
            <Student name='나나' work='프론트설계'/>
            <Student name='보라돌이' work='JPA 프로그래밍'/>
            <Student name='뽀' work='스프링부트'/>
            <Student name='왓썹' work='React'/>
        </>
    )
}

export default Team;