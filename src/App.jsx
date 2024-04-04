import TopHeader from "./components/common/TopHeader/TopHeader";
import BottomHeader from "./components/common/BottomHeader/BottomHeader";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/pages/HomePage/HomePage";
import MainWrapper from "./components/common/MainWrapper/MainWrapper";

function App() {
  return (
    <BrowserRouter>
      <TopHeader/>
      <BottomHeader/>
      <MainWrapper>
        <Routes>
          <Route path="/" element={
            <HomePage/>
          }/>
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
