import React from "react";
import SwipeableViews from "react-swipeable-views";
import MobileStepper from "@material-ui/core/MobileStepper";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
}));

export default function DetailPhotos({ data }) {
  const cls = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

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
      <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {data.prdSwipeImg.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={cls.image} src={step.url} alt={step.url} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        variant="dots"
        steps={data.prdSwipeImg.length}
        position="static"
        activeStep={activeStep}
      />
    </div>
  );
}

DetailPhotos.propTypes = {
  data: PropTypes.object.isRequired,
};
