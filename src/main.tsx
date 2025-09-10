import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin.tsx";
import { createTheme, MantineProvider } from "@mantine/core";
import ClientManagementPage from "./pages/ClientManagementPage.tsx";
import AccountManagementPage from "./pages/AccountManagementPage.tsx";
import ClientCreate from "./pages/ClientCreate.tsx";
import AccountCreate from "./pages/AccountCreate.tsx";

const queryClient = new QueryClient();

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<ClientManagementPage />} />
              <Route path="admin" element={<AccountManagementPage />} />
              <Route path="admin/create" element={<AccountCreate />} />
              <Route path="signin" element={<Signin />} />
              <Route path="create" element={<ClientCreate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
