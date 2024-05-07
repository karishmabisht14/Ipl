import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { items } from "./pages/home/navbar/Navigation";
// import Navbar from "./pages/home/navbar/Navbar";
// import { Layout } from "antd";
// import FooterFile from "./pages/home/footer/FooterFile";
// import UpcomingMatchesPage from "./pages/matches/upcoming matches/UpcomingMatchesPage";
// import CompletedMatchesPage from "./pages/matches/completed matches/CompletedMatchesPage";
import { AuthWrapper } from "./auth/AuthWrapper";

function App() {
  return (
    // <Router>
    //   <Layout>
    //     <Navbar />
    //     <Routes>
    //       {items.map((item) => (
    //         <Route key={item.key} path={item.path} element={item.component} />
    //       ))}
    //       <Route path="/upcomingMatches" element={<UpcomingMatchesPage />} />
    //       <Route path="/completedMatches" element={<CompletedMatchesPage />} />
    //     </Routes>
    //     <FooterFile />
    //   </Layout>
    // </Router>
    <AuthWrapper />
  );
}

export default App;
