import NavWakesurfing from './NavWakesurfing';
import NavWakeboarding from './NavWakeboarding';
import NavPaddleboarding from './NavPaddleboarding';
import NavWaterskiing from './NavWaterskiing';
import NavKneeboarding from './NavKneeboarding';
import NavTubing from './NavTubing';
import NavFloating from './NavFloating';
import NavRopes from './NavRopes';
import NavLifeJackets from './NavLifeJackets';
import NavGear from './NavGear';

function ObrienDeskMenu(onClick) {
  return (
    <div className="submenu">
      <div className="inside-xxl">
        <NavWakesurfing onClick={onClick} />
        <NavWakeboarding onClick={onClick} />
        <NavPaddleboarding onClick={onClick} />
        <NavWaterskiing onClick={onClick} />
        <NavKneeboarding onClick={onClick} />
        <NavTubing onClick={onClick} />
        <NavFloating onClick={onClick} />
        <NavRopes onClick={onClick} />
        <NavLifeJackets onClick={onClick} />
        <NavGear onClick={onClick} />
      </div>
    </div>
  );
}

export default ObrienDeskMenu;
