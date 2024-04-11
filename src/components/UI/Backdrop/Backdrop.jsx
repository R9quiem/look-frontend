import './Backdrop.sass';

const Backdrop = ({ isActive,close }) => {
  return (
    <div className={"backdrop " + (isActive ? "backdrop-active" : "")} onClick={close} ></div>
  );
};

export default Backdrop;