import API from "../../utils/API";
import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/index";
import SearchResults from "../../components/SearchResults/index";
import formatDate from "../../utils/Date";
import Container from "../../components/Container/index";
import Row from "../../components/Row/index";
import Col from "../../components/Col/index";
import Jumbotron from "../../components/Jumbotron.jsx";

// state object w/ all needed var
class Search extends Component {
  state = {
    order: "ASC",
    // an empty string for search input to be stored at
    search: "",
    // an empty array for results from API call to be stored at on page load
    results: [],
    // another empty array to store only filtered results of whatever is entered or deleted from search string
    filtered: [],
  };

  componentDidMount() {
    API.getRandomUser().then((res) => {
      console.log(res.data.results);
      // mapping to get relevant data from the call
      const mappedRes = res.data.results.map((apiData) => ({
        first: apiData.name.first,
        last: apiData.name.last,
        thumbnail: apiData.picture.large,
        email: apiData.email,
        phone: apiData.phone,
        dob: formatDate(apiData.dob.date),
      }));
      this.setState({
        results: mappedRes,
        filtered: mappedRes,
      });
    });
  }

  // If there an input change run function below 

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.filterSearch);
  };

  filterSearch = () => {
    // var text = ["pen"]
    // var other = [...text]
    // other.push("cup")
    // console.log(other, text)
    this.setState({
      filtered: this.state.results.filter((searchRes) => {
        const searchRes2 = {
          ...searchRes,
        };
        delete searchRes2.thumbnail;
        delete searchRes2.email;
        const values = Object.values(searchRes2).toString().toLowerCase();
        return values.includes(this.state.search.toLowerCase());
      }),
    });
  };

  sortBy = (key) => {
    let sorted;
    if (this.state.order === "ASC") {
      sorted = this.state.filtered.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      sorted = this.state.filtered.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }

    this.setState({
      filtered: sorted,
      order: this.state.order === "ASC" ? "DESC" : "ASC",
    });
  };

  // render page with components and state

  render() {
    // console.log(["pen", "cap"]);
    // console.log({ name: "Viktoriia", job: "Dev" });
    return (
      <Container>
        <Jumbotron />
        <Row>
          <Col>
            <SearchForm
              handleInputChange={this.handleInputChange}
              search={this.state.search}
            />
            <SearchResults results={this.state.filtered} sortBy={this.sortBy} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
