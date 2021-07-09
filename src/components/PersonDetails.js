import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    hidden: {
      display: "inline",
    },
    hidden: {
      display: "none",
    },
    personDetailsHeading: {
      fontWeight: "bold",
    },
    homeWorld: {
      color: "#2596be !important",
      textDecoration: "underline",
    },
  })
);

const PersonDetails = ({ setDisplayedComponent, personDetailsData }) => {
  const styleClasses = useStyles();
  const handleNavigationToHome = () => {
    setDisplayedComponent("people");
  };

  return (
    <div className="container">
      <i
        className="fas fa-chevron-left"
        onClick={() => handleNavigationToHome()}
      >
        &nbsp; go back
      </i>
      <div>
        <h3 className="personDetailsHeading">Name: {personDetailsData.name}</h3>
        <hr></hr>
        <p>Height: {personDetailsData.height}</p>
        <p>Mass: {personDetailsData.mass}</p>
        <p>Gender: {personDetailsData.gender}</p>
        <p>
          Home World:
          <a
            className={styleClasses.homeWorld}
            target="_blank"
            href={personDetailsData.homeworld}
          >
            {personDetailsData.homeworld}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PersonDetails;
