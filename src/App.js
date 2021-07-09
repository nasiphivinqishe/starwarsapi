import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import People from "./components/People";
import PersonDetails from "./components/PersonDetails";
const useStyles = makeStyles((theme) =>
  createStyles({
    personMainContainer: {
      height: "64vh",
      paddingTop: "1%",
      overflowY: "scroll",
      paddingRight: "2%",
      paddingLeft: ".5%",
      marginBottom: ".5%",
      marginRight: "+15px",
      marginLeft: "+15px",
    },
    navHeading: {
      fontFamily: "'Lucida Console', Monaco, monospace",
      color: "white !important",
      fontSize: "165%",
    },
    myNavigationBar: {
      height: "10vh",
      position: "relative",
    },
    myMainCOntainer: {
      height: "90vh",
      width: "60vw",
      position: "relative",
      overflowY: "hidden",
    },
    /*
      .homeWorld {
        color: #2596be;
        text-decoration: underline;
      }
    */
  })
);

const App = () => {
  const styleClasses = useStyles();
  const [displayedComponent, setDisplayedComponent] = useState("people");
  const [personDetailsData, setPersonDetailsData] = useState({});

  const displayComponent = (name) => {
    switch (name) {
      case "personDetails":
        return (
          <PersonDetails
            setDisplayedComponent={setDisplayedComponent}
            personDetailsData={personDetailsData}
          />
        );

      case "people":
        return (
          <People
            setDisplayedComponent={setDisplayedComponent}
            setPersonDetailsData={setPersonDetailsData}
          />
        );

      default:
        return "";
    }
  };

  return (
    <div>
      <div className={`w3-bar w3-grey w3-top ${styleClasses.myNavigationBar}`}>
        <span className="w3-bar-item">
          <h3>
            <b className={`w3-cursive ${styleClasses.navHeading}`}>
              Star Wars - Web
            </b>
          </h3>
        </span>
      </div>
      <div className={`container ${styleClasses.myMainCOntainer}`}>
        {displayComponent(displayedComponent)}
      </div>
    </div>
  );
};

export default App;
