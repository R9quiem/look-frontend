import TopHeader from "./components/common/TopHeader/TopHeader";
import BottomHeader from "./components/common/BottomHeader/BottomHeader";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopHeader/>
      <BottomHeader/>
    </BrowserRouter>
  );
}

export default App;
