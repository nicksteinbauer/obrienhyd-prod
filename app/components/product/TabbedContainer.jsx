import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';

import TabImage from '../obrien/meta/TabImage';
import CustomVisibilitySensor from './CustomVisibilitySensor';

const Fracks = () => {
  return (
    <>
      <div className="frack top" />
      <div className="frack right" />
      <div className="frack bottom" />
      <div className="frack left" />
    </>
  );
};

const PerformanceOne = () => (
  <div className="graphGauge">
    <Fracks />
    <div className="box-front">
      <div className="number">1</div>
    </div>
    <div className="black-box box1"></div>
  </div>
);

const PerformanceTwo = () => (
  <div className="graphGauge">
    <Fracks />
    <div className="box-front">
      <div className="number">2</div>
    </div>
    <div className="black-box box1"></div>
    <div className="black-box box2"></div>
  </div>
);

const PerformanceThree = () => (
  <div className="graphGauge">
    <Fracks />
    <div className="box-front">
      <div className="number">3</div>
    </div>
    <div className="black-box box1"></div>
    <div className="black-box box2"></div>
    <div className="black-box box3"></div>
  </div>
);

const PerformanceFour = () => (
  <div className="graphGauge">
    <Fracks />
    <div className="box-front">
      <div className="number">4</div>
    </div>
    <div className="black-box box1"></div>
    <div className="black-box box2"></div>
    <div className="black-box box3"></div>
    <div className="black-box box4"></div>
  </div>
);

const PerformanceFive = () => (
  <div className="graphGauge">
    <Fracks />
    <div className="box-front">
      <div className="number">5</div>
    </div>
    <div className="black-box box1"></div>
    <div className="black-box box2"></div>
    <div className="black-box box3"></div>
    <div className="black-box box4"></div>
    <div className="black-box box5"></div>
  </div>
);

function TabbedContainer({
  metaMainDescription,
  metaTab2,
  metaPerformanceTitle1,
  metaPerformanceAnimation1,
  metaPerformanceTitle2,
  metaPerformanceAnimation2,
  metaPerformanceTitle3,
  metaPerformanceAnimation3,
  metaPerformanceTitle4,
  metaPerformanceAnimation4,
  metaPerformanceTitle5,
  metaPerformanceAnimation5,
  metaPerformanceImage1,
  metaPerformanceImage1Title,
  metaPerformance1Description,
  metaPerformanceImage2,
  metaPerformanceImage2Title,
  metaPerformanceTitleBottom,
}) {
  return (
    <div id="tabbedContainer" className="obrien-tabbed">
      <Tabs defaultActiveKey="tab1" className="ob-tabs">
        {metaMainDescription && (
          <Tab eventKey="tab1" title="Description">
            <div
              className="inside-lg"
              dangerouslySetInnerHTML={{__html: metaMainDescription}}
            />
          </Tab>
        )}
        {metaTab2 && (
          <Tab eventKey="tab2" title={metaTab2}>
            <div className="inside-xl">
              <div className="flex-gauge top-graph">
                {metaPerformanceTitle1 && (
                  <div>
                    {metaPerformanceAnimation1 === '1' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation1 === '2' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation1 === '3' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation1 === '4' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation1 === '5' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle1}</h3>
                    </div>
                  </div>
                )}
                {metaPerformanceTitle2 && (
                  <div>
                    {metaPerformanceAnimation2 === '1' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation2 === '2' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation2 === '3' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation2 === '4' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation2 === '5' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle2}</h3>
                    </div>
                  </div>
                )}
                {metaPerformanceTitle3 && (
                  <div>
                    {metaPerformanceAnimation3 === '1' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation3 === '2' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation3 === '3' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation3 === '4' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation3 === '5' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle3}</h3>
                    </div>
                  </div>
                )}
                {metaPerformanceTitle4 && (
                  <div>
                    {metaPerformanceAnimation4 === '1' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation4 === '2' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation4 === '3' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation4 === '4' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation4 === '5' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle4}</h3>
                    </div>
                  </div>
                )}
                {metaPerformanceTitle5 && (
                  <div>
                    {metaPerformanceAnimation5 === '1' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation5 === '2' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation5 === '3' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation5 === '4' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    {metaPerformanceAnimation5 === '5' && (
                      <CustomVisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </CustomVisibilitySensor>
                    )}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle5}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {metaPerformanceImage1 && (
              <div className="inside-xl flex-md">
                <div className="fifty padding-10">
                  {metaPerformanceImage1 &&
                    metaPerformanceTitleBottom === 'false' && (
                      <h3 className="text-center">
                        {metaPerformanceImage1Title}
                      </h3>
                    )}
                  <TabImage myImage={metaPerformanceImage1} />
                  {metaPerformanceImage1 &&
                    metaPerformanceTitleBottom === 'true' && (
                      <h3 className="text-center">
                        {metaPerformanceImage1Title}
                      </h3>
                    )}
                  {metaPerformance1Description && (
                    <p className="text-center">{metaPerformance1Description}</p>
                  )}
                </div>
                <div className="fifty padding-10">
                  {metaPerformanceImage1 && (
                    <h3 className="text-center">
                      {metaPerformanceImage2Title}
                    </h3>
                  )}
                  <TabImage myImage={metaPerformanceImage2} />
                </div>
              </div>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default TabbedContainer;
