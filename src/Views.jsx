import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Team from "./Pages/Team/Team";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
      </Route>
      <Route index element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Views;
