import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import Singup from "./pages/auth/Singup";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
