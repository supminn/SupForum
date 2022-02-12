import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Navigation,
  Footer,
  Landing,
  Login,
  Signup,
  Questions,
  QuestionPage,
  Users,
  UserProfile,
} from "./components";
import { useAuthContext, useDataContext } from "./reducer";

function App() {
  const {
    state: { loadingData },
  } = useDataContext();
  const {
    state: { loadingAuth },
  } = useAuthContext();

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        {loadingData || loadingAuth ? (
          <h4>Loading data...</h4>
        ) : (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/questions/:questionId" element={<QuestionPage />} />
            <Route path="/users/" element={<Users />} />
            <Route path="/users/:userId" element={<UserProfile />} />
          </Routes>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
