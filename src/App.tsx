import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import Singup from "./pages/auth/Singup";
import Home from "./pages/home/Home";
import { DARK_THEME } from "./constants";
import NewInvoice from "./pages/invoice/NewInvoice";

function App() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState(DARK_THEME);

    return (
        <BrowserRouter>
            <Header setTheme={setTheme} theme={theme} />
            <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/invoice" element={<NewInvoice theme={theme} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
