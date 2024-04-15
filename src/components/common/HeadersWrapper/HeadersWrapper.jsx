import {Outlet} from "react-router-dom";
import "./HeadersWrapper.sass";
function HeadersWrapper(props){
  return (
    <div className="headers-wrapper">
      {props.children}
    </div>
  )
}
export default HeadersWrapper;