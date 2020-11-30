import React from "react";
import { Link } from "@reach/router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Showcase - Golden Retriever",
    imgPath: "/assets/gd3.jpg",
  },
  {
    label: "Showcase - Pug",
    imgPath: "/assets/pg.jpg",
  },
  {
    label: "Showcase - Chow Chow",
    imgPath: "/assets/cc.jpg",
  },
  {
    label: "Showcase - Beagle",
    imgPath: "/assets/bg.jpg",
  },
  {
    label: "Showcase - Bull Terrier",
    imgPath: "/assets/bt.jpg",
  },
  {
    label: "Showcase - Samoyedo",
    imgPath: "/assets/sd.jpg",
  },
  {
    label: "Showcase - Schnauzer",
    imgPath: "/assets/sz.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "75vh",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    fontFamily: "Muli, Helvetica, Arial, sans-serif",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "59vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
}));

export const Carousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

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
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <h1
        style={{
          fontFamily: "Muli, Helvetica, Arial, sans-serif",
          fontWeight: '450',
          fontSize: "0.8rem",
          paddingLeft: "45px",
          backgroundColor: '#fafafa',
        }}
      >
        Clickeame para ir a ver a tu raza favorita
      </h1>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Link to="/categories">
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              </Link>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};
