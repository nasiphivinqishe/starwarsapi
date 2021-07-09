import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import SwapiService from "../services/swapi_service";
import Person from "./Person";
import SearchUser from "./SearchUser";
import Pagination from "./Pagination";

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
    loading: {
      position: "fixed",
      zIndex: "999",
      overflow: "show",
      margin: "auto",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      width: "50px",
      height: "50px",
    },
  })
);

const People = ({ setDisplayedComponent, setPersonDetailsData }) => {
  const styleClasses = useStyles();
  const swapiService = new SwapiService();

  const [pagination, setPagination] = useState([1, 2, 3]);
  const [currentPath, setCurrentPath] = useState("/");
  const [previousPath, setPreviousPath] = useState("");
  const [nextPath, setNextPath] = useState("");
  const [error, setError] = useState("");
  const [people, setPeople] = useState([]);
  const [peopleCouter, setPeopleCounter] = useState(0);
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    swapiService
      .getAllPeople(currentPath)
      .then((response) => {
        response = response.data;
        //update states
        if (response.count > 0) {
          setPeople(response.results);
        } else if (!response.count) {
          setPeople([]);
        }

        setPeopleCounter(response.count);

        response.next &&
          setNextPath(response.next.replace(swapiService.base_url, ""));

        response.previous &&
          setPreviousPath(response.previous.replace(swapiService.base_url, ""));

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [currentPath]);

  return (
    <div className="container">
      <div
        className={styleClasses.loading}
        style={{ display: loading ? "inline" : "none" }}
      ></div>

      <div className="row container">
        <div className="col-sm-5">
          <SearchUser
            setCurrentPath={setCurrentPath}
            setSearching={setSearching}
          />
        </div>
      </div>
      <h4 className="container">
        <b>People List</b>
      </h4>
      <div className={styleClasses.personMainContainer}>
        {people.map((person, index) => (
          <Person
            personData={person}
            setDisplayedComponent={setDisplayedComponent}
            setPersonDetailsData={setPersonDetailsData}
            key={index}
          />
        ))}
      </div>

      <Pagination
        props={[
          setPagination,
          setCurrentPath,
          previousPath,
          nextPath,
          searching,
          pagination,
          peopleCouter,
          setLoading,
          currentPath,
        ]}
      />
    </div>
  );
};

export default People;
