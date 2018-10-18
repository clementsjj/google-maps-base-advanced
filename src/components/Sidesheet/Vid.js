import React, { Component } from "react";

class Vid extends Component {
  state = {};

  render() {
    var vidSrc = `https://www.youtube.com/embed/${
      this.props.vidName
    }?rel=0&controls=0&showinfo=0&start=1002`;
    return (
      <div className="container">
        <iframe
          width="560"
          height="315"
          src={vidSrc}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Vid;
