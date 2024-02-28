import LakefrontMenu from './LakefrontMenu';

function LakefrontDeskMenu(onClick) {
  return (
    <div className="submenu">
      <div className="flex-md">
        <div className="sixty">
          <LakefrontMenu onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default LakefrontDeskMenu;
