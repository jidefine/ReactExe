import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../data/data.json';

const Wrapper = styled.div`
    padding: 16px;
    widthL calc(100% - 32px);
    display: flex;
    flex-direction; column;
    align-items: center;
    justify-content: center;  
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:list-child){
        margin-bottom:16px;
    }
`;

function MainPage(props){
    const {} = props;

    const navigate = useNavigate();
    
    return(
        <Wrapper>
            <Container>
                <Button title='글 작성하기' onClick={()=>{
                     // 버튼을 눌러서 onClick이 실행되면 
                     // 이 주소에 Route된 컴포넌트로 이동
                    navigate('/post-write');
                }}/>
                <PostList posts={data} onClickItem={(item)=>{
                    navigate(`/post/${item.id}`);
                }}/>
            </Container>
        </Wrapper>
    );
}

export default MainPage;