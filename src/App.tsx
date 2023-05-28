import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Singup from "./pages/auth/Singup";
import Home from "./pages/home/Home";
import { DARK_THEME } from "./constants";
import NewInvoice from "./pages/invoice/NewInvoice";
import InvoiceDetail from "./pages/invoice/InvoiceDetail";
import { PrivateOutlet } from "./components/CheckPageNavigation";

function App() {
    const [theme, setTheme] = useState(DARK_THEME);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateOutlet>
                            <Home theme={theme} setTheme={setTheme} />
                        </PrivateOutlet>
                    }
                />
                <Route
                    path="/invoice"
                    element={
                        <PrivateOutlet>
                            <NewInvoice theme={theme} setTheme={setTheme} />
                        </PrivateOutlet>
                    }
                />
                <Route
                    path="/invoice/:id"
                    element={
                        <PrivateOutlet>
                            <InvoiceDetail theme={theme} setTheme={setTheme} />
                        </PrivateOutlet>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
