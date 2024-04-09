import { NavLink, Outlet} from "react-router-dom";

function ProfilePage(props){
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/profile/favorite-products">Favorite Products</NavLink></li>
          <li><NavLink to="/profile/favorite-shops">Favorite Shops</NavLink></li>
          <li><NavLink to="/profile/messages">Messages</NavLink></li>
          <li><NavLink to="/profile/orders">Orders</NavLink></li>
          <li><NavLink to="/profile/seller-invitation">Seller Invitation</NavLink></li>
          <li><NavLink to="/profile/user-info">User Info</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default ProfilePage;