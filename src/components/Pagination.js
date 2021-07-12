import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    hidden: {
      display: "inline",
    },
    hidden: {
      display: "none",
    },
    paginationContainer: {
      marginRight: "+45px",
      marginLeft: "+45px",
      position: "absolute",
      bottom: "-.3%",
      background: "#9e9e9e",
      color: "white !important",
      left: "0",
      right: "0"
    }
  })
);

const Pagination = ({ props }) => {
  const styleClasses = useStyles();

  let setPagination = props[0],
    setCurrentPath = props[1],
    previousPath = props[2],
    nextPath = props[3],
    searching = props[4],
    pagination = props[5],
    peopleCouter = props[6],
    setLoading = props[7],
    currentPath = props[8];

  const handleNavigationClick = (path, direction) => {
    let tempPagination = [...pagination];

    if (currentPath.includes(path)) return;

    if (direction == "forth") {
      tempPagination.push(tempPagination[tempPagination.length - 1] + 1);
      tempPagination.shift();
      setPagination(tempPagination);

      setCurrentPath(path);
    } else if (direction == "back") {
      if (tempPagination[0] - 1 >= 1) {
        tempPagination.unshift(tempPagination[0] - 1);
        tempPagination.pop();
        setPagination(tempPagination);

        setCurrentPath(path);
      } else {
        setLoading(false);
      }
    } else {
      setCurrentPath(path);
    }
    setLoading(true);
  };

  return (
    <div
      className={`${searching ? styleClasses.hidden : styleClasses.display}`}
    >
      <div className="w3-container" >
        <div className={`w3-bar w3-border" ${styleClasses.paginationContainer}`}>
          <span
            style={{ display: pagination[0] == 1 ? "none" : "inline" }}
            className="w3-bar-item w3-button"
            onClick={() => handleNavigationClick(previousPath, "back")}
          >
            &laquo;
          </span>

          {pagination.map((number, index) => {
            let link = `/?page=${number}`;

            return (
              <span
                className="w3-bar-item w3-button"
                key={index}
                onClick={() => handleNavigationClick(link, "neutral")}
              >
                {number}
              </span>
            );
          })}

          <span
            className="w3-bar-item w3-button"
            onClick={() => handleNavigationClick(nextPath, "forth")}
          >
            &raquo;
          </span>

          <span className="w3-bar-item w3-right">Total: {peopleCouter}</span>
        </div>
      </div>
    </div >
  );
};

export default Pagination;
