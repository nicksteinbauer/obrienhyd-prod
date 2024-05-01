import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function ActivitiesMargaritaville({act5Image}) {
  return (
    <div className="activity">
      <MediaFile
        data={act5Image}
        className="act4test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="activityOverlay text-center">
        <h3>Margaritaville</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/margaritaville">
            All Margaritaville
          </Link>
        </div>
      </div>
    </div>
  );
}
