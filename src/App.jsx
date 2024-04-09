import TopHeader from "./components/common/TopHeader/TopHeader";
import BottomHeader from "./components/common/BottomHeader/BottomHeader";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/pages/HomePage/HomePage";
import MainWrapper from "./components/common/MainWrapper/MainWrapper";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import CatalogPageWrapper from "./components/common/CatalogPageWrapper/CatalogPageWrapper";
import ProfilePage from "./components/pages/ProfilePages/ProfilePage";
import FavoriteProductsPage from "./components/pages/ProfilePages/FavoriteProductsPage/FavoriteProductsPage";
import MessagesPage from "./components/pages/ProfilePages/MessagesPage/MessagesPage";
import FavoriteShopsPage from "./components/pages/ProfilePages/FavoriteShopsPage/FavoriteShopsPage";
import OrdersPage from "./components/pages/ProfilePages/OrdersPage/OrdersPage";
import SellerInvitationPage from "./components/pages/ProfilePages/SellerInvitationPage/SellerInvitationPage";
import UserInfoPage from "./components/pages/ProfilePages/UserInfoPage/UserInfoPage";

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
          <Route path="/catalog" element={ <CatalogPageWrapper/> }>
            <Route path="/catalog/" element={<CatalogPage/>} />
            <Route path="/catalog/:key" element={<ProductPage/>} />
          </Route>
          <Route path="/profile" element={<ProfilePage/>}>
            <Route path="/profile/favorite-products" element={<FavoriteProductsPage />} />
            <Route path="/profile/favorite-shops" element={<FavoriteShopsPage />} />
            <Route path="/profile/messages" element={<MessagesPage />} />
            <Route path="/profile/orders" element={<OrdersPage />} />
            <Route path="/profile/seller-invitation" element={<SellerInvitationPage />} />
            <Route path="/profile/user-info" element={<UserInfoPage />} />
          </Route>
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
