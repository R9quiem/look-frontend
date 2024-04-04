import TopHeader from "./components/common/TopHeader/TopHeader";
import BottomHeader from "./components/common/BottomHeader/BottomHeader";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/pages/HomePage/HomePage";
import MainWrapper from "./components/common/MainWrapper/MainWrapper";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage";

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
          <Route path="/catalog" element={
            <CatalogPage/>
          }/>
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
