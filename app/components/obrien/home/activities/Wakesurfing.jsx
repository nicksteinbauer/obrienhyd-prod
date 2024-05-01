import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function ActivitiesWakesurfing({act2Image}) {
  return (
    <div className="activity">
      <MediaFile
        data={act2Image}
        className="act2test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="activityOverlay text-center">
        <h3>Wakesurfing</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/wakesurfing">
            All Wakesurfing
          </Link>
        </div>
      </div>
    </div>
  );
}
