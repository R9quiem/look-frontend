import './TopHeader.sass'
function TopHeader(props){
  return (
    <header className="topheader">
      <div className="topheader__inner">
        <button className="topheader__nav-item">Город доставки: Санкт-Петербург</button>
        <nav className="topheader__nav">
          <a className="topheader__nav-item">Помощь</a>
          <a className="topheader__nav-item">О возврате</a>
          <a className="topheader__nav-item">Наш номер</a>
          <a className="topheader__nav-item">Партнерам</a>
          <a className="topheader__nav-item">О нас</a>
        </nav>
      </div>
    </header>
  )

}

export default TopHeader;