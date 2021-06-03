import React from "react";
import Img from "../Img/index";
import "./index.css";

function SearchResults(props) {

  return (
    <div className="table-responsive" id="emp">
      {props.results.length ? (
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="cursor" scope="col">
                Picture
            </th>
              <th
                className="cursor"
                scope="col"
                onClick={() => props.sortBy("last")}
              >
                <b>Name</b>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </th>
              <th
                className="cursor"
                scope="col"
                onClick={() => props.sortBy("email")}
              >
                <b>Email</b>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </th>
              <th className="cursor" scope="col" id="filterCell">
                Cell
            </th>
              <th className="cursor" scope="col" id="filterDOB">
                DOB
            </th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((x, i) => (
              <tr key={i + "-row"}>
                <td>
                  {" "}<Img url={x.thumbnail} />{" "}
                </td>
                <td>
                  {x.first} {x["last"]}
                </td>
                <td>{x.email}</td>
                <td>{x["phone"]}</td>
                <td>{x.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
          <h3>No results!</h3>
        )}
    </div>
  )
}

export default SearchResults;
