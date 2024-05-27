/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Home,
  Calender,
  Employees,
  Stacked,
  Customers,
  TaskBoard,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Editor,
  Line,
  Timer,
  TeamStatus,
  Analytics,
} from "./pages";
import {useStateContext} from './contexts/ContextProvider'
import "./App.css";

import ProtectedRoute from "./components/ProtectedRoute";
import LogIn from "./pages/Authentication/LogIn";
import SignUp from "./pages/Authentication/SignUp";




function App() {
  const {activeMenu , isAuthenticated} = useStateContext()
  return (
    
      <div>
        
        <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
        {isAuthenticated && (
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl
              hover:bg-light-gray text-white"
                style={{ background: "grey", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        )}
          {isAuthenticated && activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : isAuthenticated ?(
            <div className="w-0 dark: bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ): null}
          <div
            className={isAuthenticated && activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }> {isAuthenticated && (
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            )}
          <div>
            <Routes>
              {/* Auth */}
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<LogIn/>} />

              {/* Home */}
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              

              {/* Pages */}
              <Route path="/teamstatus" element={<ProtectedRoute><TeamStatus /></ProtectedRoute>} />
              <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
              <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />

              {/* Apps */}
              <Route path="/taskboard" element={<ProtectedRoute><TaskBoard/></ProtectedRoute>} />
              <Route path="/editor" element={<ProtectedRoute><Editor /></ProtectedRoute>} />
              <Route path="/calendar" element={<ProtectedRoute><Calender /></ProtectedRoute>} />
              <Route path="/timer" element={<ProtectedRoute><Timer /></ProtectedRoute>} />

              {/* Charts */}
              <Route path="/line" element={<ProtectedRoute><Line /></ProtectedRoute>} />
              <Route path="/area" element={<ProtectedRoute><Area /></ProtectedRoute>} />
              <Route path="/bar" element={<ProtectedRoute><Bar /></ProtectedRoute>} />
              <Route path="/pie" element={<ProtectedRoute><Pie /></ProtectedRoute>} />
              <Route path="/financial" element={<ProtectedRoute><Financial /></ProtectedRoute>} />
              <Route path="/color-mapping" element={<ProtectedRoute><ColorMapping /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
              <Route path="/stacked" element={<ProtectedRoute><Stacked /></ProtectedRoute>} />
            </Routes>
          </div>
          {isAuthenticated && <Footer /> }
          </div>
        </div>
      </BrowserRouter>

      </div>
      
    
  );
}

export default App;
