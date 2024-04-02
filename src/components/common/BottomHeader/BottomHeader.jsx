import './BottomHeader.sass'

function BottomHeader(props) {
  return (
    <header className="bottomheader">
      <div className="bottomheader__inner">
        <button className="bottomheader__menu">Меню</button>
        <img src="/logo.png" alt="Лого" className="bottomheader__logo" />
        <div className="bottomheader__search">Поиск</div>
        <nav className="bottomheader__nav">
          <a href="#" className="bottomheader__nav-link">Аккаунт</a>
          <a href="#" className="bottomheader__nav-link">Закладки</a>
          <a href="#" className="bottomheader__nav-link">Корзина</a>
          <a href="#" className="bottomheader__nav-link">Заказы</a>
        </nav>
      </div>
    </header>
  )
}

export default BottomHeader;