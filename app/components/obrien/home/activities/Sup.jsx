import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function ActivitiesSup({act3Image}) {
  return (
    <div className="activity">
      <MediaFile
        data={act3Image}
        className="act3test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="activityOverlay text-center">
        <h3>Paddleboarding</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/stand-up-paddleboarding">
            All SUP
          </Link>
        </div>
      </div>
    </div>
  );
}
