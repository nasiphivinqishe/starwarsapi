import "w3-css/w3.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    hidden: {
      display: "inline",
    },
    hidden: {
      display: "none",
    },
    personContainer: {
      padding: "2% !important",
    },
    homeWorld: {
      color: "#2596be !important",
      textDecoration: "underline",
    },
  })
);

const Person = ({
  personData,
  setDisplayedComponent,
  setPersonDetailsData,
}) => {
  const styleClasses = useStyles();
  const handleClickOnPerson = () => {
    setDisplayedComponent("personDetails");
    setPersonDetailsData(personData);
  };

  return (
    <div>
      <div className={`w3-row w3-card ${styleClasses.personContainer}`}>
        <div>
          <h3 style={{ fontWeight: "bold" }}>Name: {personData.name}</h3>
          <hr></hr>
          <p>Height: {personData.height}</p>
          <p>Mass: {personData.mass}</p>
          <p>Gender: {personData.gender}</p>
          <p>
            Home World:
            <a
              target="_blank"
              href={personData.homeworld}
              className={styleClasses.homeWorld}
            >
              {personData.homeworld}
            </a>
          </p>
        </div>

        <button
          onClick={() => handleClickOnPerson()}
          className="btn btn-md btn-success w3-right"
        >
          Details
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default Person;
