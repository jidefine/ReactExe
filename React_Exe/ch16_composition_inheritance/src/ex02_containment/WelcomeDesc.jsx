import FancyBorder from "./FancyBorder";

export default function WelcomeDesc(props){
    return (
        <FancyBorder color="red">
            <h1 className="Desc-title">
                어서와
            </h1>
            <p>
                <img src="" alt="뽀로로"/>
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