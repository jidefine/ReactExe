import FancyBorder from "./FancyBorder";

export default function WelcomeDesc(props){
    return (
        <FancyBorder color="red">
            {/* 아래 부분이 FancyBorder의 children으로 구성된다. */}
            <h1 className="Desc-title">
                어서와
            </h1>
            <p>
            {/* - 바깥의 중괄호 {}는 JSX 내에서 JavaScript 표현식을 포함하고 있음을 나타냄
            - 내부의 중괄호 {}는 CSS 속성 width와 height를 가진 JavaScript 객체를 생성하고, 
                style 속성의 값으로 전달 */}
                <img style={{width: '50%', height: '50%'}} 
                src="https://news.nateimg.co.kr/orgImg/ch/2023/05/16/YK26FZCEWZAWNOJLP4F2DWIL5Y.jpg" alt="잔망루피"/>
            </p>
            <p className="Desc-summing">
                노는 게 제일 좋아
            </p>
            <p className="Desc-description">
                친구들 모여라
            </p>
        </FancyBorder>
    )
}