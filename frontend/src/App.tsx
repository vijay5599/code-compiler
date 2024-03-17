import "./App.css";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <Toaster position="bottom-right" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/compiler/:urlId" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
