import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function ActivitiesWaterskiing({act6Image}) {
  return (
    <div className="activity">
      <MediaFile
        data={act6Image}
        className="act6test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="activityOverlay text-center">
        <h3>Waterskiing</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/water-skiing">
            All Waterskiing
          </Link>
        </div>
      </div>
    </div>
  );
}
