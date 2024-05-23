import styled from 'styled-components';

const PrimaryButton = styled.button `
    margin: 10px;
    // 함수 형태도 가능
    color: ${function(props){
        if(props.primary)
            return 'white';
        else
            return 'black';
    }};
    background-color: ${function(props){
        if(props.primary)
            return 'black';
        else
            return 'white';
    }};
`;

export default PrimaryButton;