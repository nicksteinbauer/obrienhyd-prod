import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import TabImage from '../obrien/meta/TabImage';

import VisibilitySensor from 'react-visibility-sensor';

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

const PerformanceOne = () => {
  return (
    <div className="graphGauge">
      <Fracks />
      <div className="box-front">
        <div className="number">1</div>
      </div>
      <div className="black-box box1"></div>
    </div>
  );
};
const PerformanceTwo = () => {
  return (
    <div className="graphGauge">
      <Fracks />
      <div className="box-front">
        <div className="number">2</div>
      </div>
      <div className="black-box box1"></div>
      <div className="black-box box2"></div>
    </div>
  );
};
const PerformanceThree = () => {
  return (
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
};
const PerformanceFour = () => {
  return (
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
};
const PerformanceFive = () => {
  return (
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
};

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
        {metaMainDescription ? (
          <Tab eventKey="tab1" title="Description">
            <div
              className="inside-lg"
              dangerouslySetInnerHTML={{__html: metaMainDescription}}
            />
          </Tab>
        ) : null}
        {metaTab2 ? (
          <Tab eventKey="tab2" title={metaTab2}>
            <div className="inside-xl">
              <div className="flex-gauge top-graph">
                {metaPerformanceTitle1 ? (
                  <div>
                    {metaPerformanceAnimation1 == '1' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation1 == '2' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation1 == '3' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation1 == '4' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation1 == '5' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle1}</h3>
                    </div>
                  </div>
                ) : null}
                {metaPerformanceTitle2 ? (
                  <div>
                    {metaPerformanceAnimation2 == '1' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation2 == '2' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation2 == '3' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation2 == '4' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation2 == '5' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle2}</h3>
                    </div>
                  </div>
                ) : null}
                {metaPerformanceTitle3 ? (
                  <div>
                    {metaPerformanceAnimation3 == '1' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation3 == '2' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation3 == '3' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation3 == '4' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation3 == '5' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle3}</h3>
                    </div>
                  </div>
                ) : null}
                {metaPerformanceTitle4 ? (
                  <div>
                    {metaPerformanceAnimation4 == '1' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation4 == '2' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation4 == '3' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation4 == '4' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation4 == '5' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle4}</h3>
                    </div>
                  </div>
                ) : null}
                {metaPerformanceTitle5 ? (
                  <div>
                    {metaPerformanceAnimation5 == '1' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p1 graph isvisible' : 'p1 graph'
                            }
                          >
                            <PerformanceOne />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation5 == '2' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p2 graph isvisible' : 'p2 graph'
                            }
                          >
                            <PerformanceTwo />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation5 == '3' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p3 graph isvisible' : 'p3 graph'
                            }
                          >
                            <PerformanceThree />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation5 == '4' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p4 graph isvisible' : 'p4 graph'
                            }
                          >
                            <PerformanceFour />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    {metaPerformanceAnimation5 == '5' ? (
                      <VisibilitySensor partialVisibility>
                        {({isVisible}) => (
                          <div
                            className={
                              isVisible ? 'p5 graph isvisible' : 'p5 graph'
                            }
                          >
                            <PerformanceFive />
                          </div>
                        )}
                      </VisibilitySensor>
                    ) : null}
                    <div className="title text-center">
                      <h3>{metaPerformanceTitle5}</h3>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            {metaPerformanceImage1 ? (
              <div className="inside-xl flex-md">
                <div className="fifty padding-10">
                  {metaPerformanceImage1 &&
                  metaPerformanceTitleBottom === 'false' ? (
                    <h3 className="text-center">
                      {metaPerformanceImage1Title}
                    </h3>
                  ) : null}
                  <TabImage myImage={metaPerformanceImage1} />
                  {metaPerformanceImage1 &&
                  metaPerformanceTitleBottom === 'true' ? (
                    <h3 className="text-center">
                      {metaPerformanceImage1Title}
                    </h3>
                  ) : null}
                  {metaPerformance1Description ? (
                    <p className="text-center">{metaPerformance1Description}</p>
                  ) : null}
                </div>
                <div className="fifty padding-10">
                  {metaPerformanceImage1 ? (
                    <h3 className="text-center">
                      {metaPerformanceImage2Title}
                    </h3>
                  ) : null}
                  <TabImage myImage={metaPerformanceImage2} />
                </div>
              </div>
            ) : null}
          </Tab>
        ) : null}
      </Tabs>
    </div>
  );
}

export default TabbedContainer;
