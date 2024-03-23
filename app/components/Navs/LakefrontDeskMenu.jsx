import LakeFrontMenu from './LakeFrontMenu';
import NavFooterMenu from './NavFooterMenu';

function LakefrontDeskMenu(onClick) {
  return (
    <div className="submenu lakefrontMenu">
      <div className="submenuJump">
        <div className="subLine" />
        <div className="always-flex inside-xl menuPadd">
          <div className="notAside">
            <LakeFrontMenu onClick={onClick} />
          </div>
          <div className="aside"></div>
        </div>
        <footer className="megaFooter">
          <nav className="inside-xl">
            <NavFooterMenu onClick={onClick} />
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default LakefrontDeskMenu;
