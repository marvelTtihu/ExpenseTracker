import { Route, Routes } from "react-router";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Expense from "./pages/Expense";

const App = () => {

    return(
        <div className="flex">
                <Sidebar />

            <main className="flex-1"> 
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/analytics" element={<Analytics /> } />
                    <Route path="/expense" element={<Expense />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;