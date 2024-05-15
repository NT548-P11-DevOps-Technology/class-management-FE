import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import Student from './pages/Student';
import Lecture from './pages/Lecture';
import Class from './pages/Class';


function App() {
  return (
    <main style={{ backgroundColor: '#161925' }}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/student" element={<Student />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/class" element={<Class />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
