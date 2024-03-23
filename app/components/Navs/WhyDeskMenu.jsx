import WhyMenu from './WhyMenu';
import SupportMenu from './SupportMenu';
// import NavFooterMenu from './NavFooterMenu';

function WhyDeskMenu(onClick) {
  return (
    <div className="submenu lakefrontMenu">
      <div className="submenuJump">
        <div className="subLine" />
        <div className="always-flex inside-xl menuPadd">
          <div className="notAside">
            <WhyMenu onClick={onClick} />
          </div>
          <div className="aside">
            <SupportMenu onClick={onClick} />
          </div>
        </div>
        <footer className="megaFooter">
          <nav className="inside-xl">
            {/* <NavFooterMenu onClick={onClick} /> */}
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default WhyDeskMenu;
