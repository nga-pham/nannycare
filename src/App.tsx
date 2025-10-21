import { useState } from 'react'
import './App.css'
import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sooner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "../src/pages/NotFound";

const App = () => (
    <TooltipProvider>
        {/*<Toaster />
        <Sonner />*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </TooltipProvider>
);

export default App
