import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function ActivitiesWakeboarding({act1Image}) {
  return (
    <div className="activity">
      <MediaFile
        data={act1Image}
        className="act1test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="activityOverlay">
        <h3>Wakeboarding</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/wakeboarding">
            All Wakeboarding
          </Link>
        </div>
      </div>
    </div>
  );
}
