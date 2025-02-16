import "@/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import store from "@/store";
import { Provider } from "react-redux";
import Tickets from "./page/Tickets";
import {  QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/Query";

export default function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route
                path="dashboard"
                element={<p>this is dashboard route</p>}
              />
              <Route path="tickets" element={<Tickets />} />
            </Route>
            <Route path="*" element={<p>page not found error 404</p>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}
