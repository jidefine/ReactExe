import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {

    static defaultProps = {
        name: "기본 이름",
    };
    
    // name은 string을 권장해, 아니면 console에 경고를 날린다
    static propTypes = {
        name: PropTypes.string,
        favoriteNum : PropTypes.number.isRequired,
    }

    render() {
        const {name, favoriteNum, children } = this.props;
        return (
            <div>
                안녕하쇼, 제 이름은 {name}.
                <br/>
                children값은 {children}이고,
                <br/>
                제가 좋아하는 숫자는 {favoriteNum}이지롱~
            </div>
        );
    }
}

export default MyComponent;