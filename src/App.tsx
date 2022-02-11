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

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/:userId" element={<UserProfile />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
