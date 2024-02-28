import OperationMenu from './OperationMenu';
import ConfigurationsMenu from './ConfigurationsMenu';

function AquaparkDeskMenu(onClick, AquaparkMenu) {
  return (
    <div className={`fade-in-out ${AquaparkMenu ? 'visible' : ''}`}>
      <div className="submenu">
        <div className="flex-md">
          <div className="sixty">
            <OperationMenu onClick={onClick} />
          </div>
          <div className="forty">
            <ConfigurationsMenu onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AquaparkDeskMenu;
