import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login.jsx";
import Join from "./page/Join.jsx";
import QnABoard from "./qna/QnABoard.jsx";
import PostDetail from "./PostDetail.js";
import Notice from "./Notice.jsx";
import GhostLegApp from "./ghost-leg/App.js";
import Signup from "./Sigup/signup";
import FindIdPage from "./page/FindIdPage";
import FindPasswordPage from "./page/FindPasswordPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QnABoard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/QnABoard" element={<QnABoard />} />
                <Route path="/QnABoard/:id" element={<PostDetail />} />
                <Route path="/Notice" element={<Notice />} />
                {/*<Route path="/FindIdPage" element={<FindIdPage />} />*/}
                <Route path="/FindPasswordPage" element={<FindPasswordPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;