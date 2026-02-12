// src/App.tsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@components/layout/dashboard/DashboardLayout";
import HomePage from "@pages/dashboard/HomePage";
import AuthLayout from "./components/layout/dashboard/AuthLayout";
import AuthPage from "./pages/dashboard/AuthPage";
import { ThemeProvider } from "@components/provider/ThemeProvider";
import { ToastProvider } from "@components/provider/ToastProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ToastProvider>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<AuthPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;