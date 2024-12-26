import { Routes, Route } from 'react-router-dom';
import { Home, Diary, New, NotFound, Edit } from './pages';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title={"Header"} leftChild={<Button text={'Left'}/>} rightChild={<Button text={"Right"}/>}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App;
