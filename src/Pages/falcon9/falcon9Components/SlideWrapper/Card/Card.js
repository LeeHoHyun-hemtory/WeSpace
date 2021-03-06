import React, { Component } from "react";
import CardContents from "./CardContents/CardContents";
import "./Card.scss";

class Card extends Component {
  state = {
    activeTab: 0,
  };

  handleTab = (idx) => {
    this.setState({ activeTab: idx });
  };

  render() {
    const { cardInformation, shouldParallaxAppear, isEnterView } = this.props;
    const { activeTab } = this.state;
    const { handleTab } = this;
    const { backgroundImgUrl, videoUrl, cardContents } = cardInformation;
    const [linesVideo, renderVideo] = videoUrl;
    return (
      <div className="Card">
        <div
          className="background"
          style={{
            backgroundImage: `url(${backgroundImgUrl[activeTab]})`,
          }}
        />
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            src={shouldParallaxAppear ? renderVideo : linesVideo}
            className="backgroundVideo"
          />
        )}
        <CardContents
          cardContents={cardContents}
          activeTab={activeTab}
          shouldParallaxAppear={shouldParallaxAppear}
          isEnterView={isEnterView}
          handleTab={handleTab}
        />
      </div>
    );
  }
}

export default Card;
