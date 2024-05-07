import "./App.css";

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
