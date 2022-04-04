import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Lobby } from "../components/Lobby";
import { Questions } from "../components/Questions";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions/:id" element={<Questions />} />

        <Route path="/" element={<Lobby />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
