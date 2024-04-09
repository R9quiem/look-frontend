import {Outlet} from "react-router-dom";
import "./HeadersWrapper.sass";
function HeadersWrapper(props){
  return (
    <section className="headers-wrapper">
      {props.children}
    </section>
  )
}
export default HeadersWrapper;