import { BrowserRouter, Route, Routes } from 'react-router';

import Header from '@organisms/Header/Header';
import Main from '@pages/Main/Main';

import './styles/global.scss';

function App() {
  return (
    <>
      <Header text='Текст' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
