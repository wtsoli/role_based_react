import React, { Component } from "react";
// import { connect } from "react-redux";
import { getData } from "../actions/index";

import store from "../store/index";

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = ({remoteArticles: [{id: 1, title: "title1"},{id: 2, title: "title2"}]});
  }

  componentDidMount() {
    // this.props.getData();
    // this.props.getData();
    store.dispatch(getData(this));
  }

  render() {
    //console.log("component: ", this);
    return (
      <ul>
        {this.state.remoteArticles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData())
  };
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Post);

export default Post;