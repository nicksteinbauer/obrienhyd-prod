import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function ActivitiesKneeboarding({act4Image}) {
  return (
    <div className="activity">
      <MediaFile
        data={act4Image}
        className="act5test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="activityOverlay text-center">
        <h3>Kneeboarding</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/kneeboarding">
            All Kneeboarding
          </Link>
        </div>
      </div>
    </div>
  );
}
