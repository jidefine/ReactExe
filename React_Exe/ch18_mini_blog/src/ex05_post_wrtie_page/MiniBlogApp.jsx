import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './page/MainPage';
import PostWritePage from './page/PostWritePage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function MiniBlogApp(props) {
    return(
        <BrowserRouter>
            <MainTitleText>나의 미니 블로그</MainTitleText>
            <Routes>
                <Route index element={<MainPage/>} />
                <Route path='post-write' element={<PostWritePage/>} />
                <Route path='post/:postId' element={null} />
            </Routes>
        </BrowserRouter>
    )
}

export default MiniBlogApp;