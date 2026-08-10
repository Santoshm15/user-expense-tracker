import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Users from "./pages/Users";
import Expenses from "./pages/Expenses";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* First Selection Screen */}

        <Route
          path="/"
          element={
            <div className="selection-page">
              <div className="selection-container">
                <div className="selection-header">
                  <h1>Application Portal</h1>

                  <p>Select an application to continue</p>
                </div>

                <div className="selection-cards">
                  {/* User Directory */}

                  <Link to="/users" className="selection-card user-selection">
                    <div className="selection-icon">👥</div>

                    <div>
                      <h2>User Directory</h2>

                      <p>Search and browse users</p>

                      <span>Open User Directory →</span>
                    </div>
                  </Link>

                  {/* Expense Tracker */}

                  <Link
                    to="/expenses"
                    className="selection-card expense-selection"
                  >
                    <div className="selection-icon">💰</div>

                    <div>
                      <h2>Expense Tracker</h2>

                      <p>Track and manage your expenses</p>

                      <span>Open Expense Tracker →</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        {/* User Directory */}

        <Route path="/users" element={<Users />} />

        {/* Expense Tracker */}

        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
