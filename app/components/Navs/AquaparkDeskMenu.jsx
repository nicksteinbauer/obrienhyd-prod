import PlayStructuresMenu from './PlayStructuresMenu';
import OperationMenu from './OperationMenu';
import ConfigurationsMenu from './ConfigurationsMenu';
import NavFooterMenu from './NavFooterMenu';

function AquaparkDeskMenu(onClick) {
  return (
    <div>
      <div className="submenu">
        <div className="submenuJump">
          <div className="subLine" />
          <div className="flex-sm inside-xl menuPadd">
            <div className="notAside">
              <PlayStructuresMenu onClick={onClick} />
            </div>
            <div className="aside extraSpace">
              <OperationMenu onClick={onClick} />
            </div>
            <div className="aside">
              <ConfigurationsMenu onClick={onClick} />
            </div>
          </div>
          <footer className="megaFooter">
            <nav className="inside-xl">
              <NavFooterMenu onClick={onClick} />
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AquaparkDeskMenu;
