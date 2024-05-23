import styled from "styled-components";
import Wrapper from "./Wrapper";
import Block from "./Block";

const Blocks = (props) => {
    return (
        // 부모가 전달해준 props를 그대로 자식 컴포넌트에 전달하기
        <Wrapper {...props}>
            {/* App.js에서 items로 전달해서, items로 받음 */}
            {props.items.map((blockItem) => {
                return (
                    <Block padding={blockItem.padding}
                            // backgroundColor={blockItem.backgroundColor}
                            backgroundImage={blockItem.backgroundImage}
                            >
                                {blockItem.label}
                            </Block>
                );
            })}
        </Wrapper>
    )
}

export default Blocks;
