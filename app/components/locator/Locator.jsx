import {useState} from 'react';
import {Button} from 'react-bootstrap';

export default function Locator() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const iframe =
    '<div id="storelocatorwidget" class="dealers-page" style="width:100%;"><p>Loading <a href="https://www.storelocatorwidgets.com">Locator Software</a>...</p></div> <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyBmuZ4dB6S3kpFgkUviSfAoP5h9QoH8Pbg&libraries=places"></script> <script type="text/javascript" id="storelocatorscript" data-uid="MKPAHXoXV568tSmJYOG1dMsHyOYmxF5t" data-settings="store_list_layout=Left" src="//cdn.storelocatorwidgets.com/widget/widget.js"></script>';
  return (
    <div className="locally">
      <div id="retailers" className="retailers">
        <h2>Check Out Our Retailers</h2>
        <div className="inside-xl">
          <div className="upc-contain flex-md">
            <div className="sixty">
              <div className="text-center">
                <Button
                  className="button-book"
                  color="warning"
                  size="md"
                  onClick={toggleClass}
                >
                  View Map
                </Button>
              </div>
              <div className={isActive ? 'clicky active' : 'clicky notactive'}>
                <div className="clicky-container">
                  <Button className="clicky-close" onClick={toggleClass}>
                    <span>Close Window</span>
                    {/* <Button close /> */}
                  </Button>
                  <div dangerouslySetInnerHTML={{__html: iframe}} />
                </div>
              </div>
            </div>
            <div className="forty">
              <div className="flex-vertical text-center">
                <h3>Find It Online</h3>
                <div className="upc-button">
                  <a href="https://www.obrien.com/dealers">
                    View Online Retailers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="locOverlay"></div>
      </div>
    </div>
  );
}
