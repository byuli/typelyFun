import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllQuizzes from './pages/AllQuizzes';
import QuizDetail from './pages/QuizDetail';
import QuizPlay from './pages/QuizPlay';
import QuizResult from './pages/QuizResult';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<AllQuizzes />} />
          <Route path="/quiz/:id" element={<QuizDetail />} />
          <Route path="/quiz/:id/play" element={<QuizPlay />} />
          <Route path="/quiz/:id/result" element={<QuizResult />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 