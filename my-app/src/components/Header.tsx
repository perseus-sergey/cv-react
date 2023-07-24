const LOGO_WRAP = 'logo-wrapper';
const LOGO = 'logo';

export default const Header: React.FC = () =≥ {
  return (
    <header>
      <div className={LOGO_WRAP}>
        <div className={LOGO}>
          <h1>Sergey Gubriy</h1>
          <span>Web developer</span>
        </div>
        <img src="./assets/images/ukraine_stand.png" alt="Stand With Ukraine" />
      </div>
      <div className='.menu-btn-wrapper'>
        <div className='menu-btn'></div>
      </div>
      <nav className="menu">
        <div className="menu__header">
          <a href="#main">Main</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About me</a>
        </div>
      </nav>
    </header>
  );
}
