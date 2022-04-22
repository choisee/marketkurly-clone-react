import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwippableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";

const AutoPlaySwappableViews = autoPlay(SwippableViews);

export default function Banner({ data }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      {isMobile ? (
        <>
          <AutoPlaySwappableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {data.bannerImg.map((step, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className="banner_img" src={step.url} alt={step.url} />
                ) : null}
              </div>
            ))}
          </AutoPlaySwappableViews>
          <MobileStepper
            variant="dots"
            steps={data.bannerImg.length}
            position="static"
            activeStep={activeStep}
          />
        </>
      ) : (
        <>
          <AutoPlaySwappableViews
            className="web-react-swipeable-view-container"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {data.webBannerImg.map((step, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className="web-banner-img" src={step.url} alt={step.url} />
                ) : null}
              </div>
            ))}
          </AutoPlaySwappableViews>
          <MobileStepper
            variant="dots"
            steps={data.webBannerImg.length}
            position="static"
            activeStep={activeStep}
          />
        </>
      )}
    </div>
  );
}

Banner.propTypes = {
  data: PropTypes.object.isRequired,
};
