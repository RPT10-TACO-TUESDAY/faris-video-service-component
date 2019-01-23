import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const VideoPlayerStyle = styled.div`
  display: inline-block;
  width: 100%;
  box-sizing: content-box;
  borderStyle: solid;
  borderWidth: 1px;
  text-align: left;
  vertical-align: top;
  font-size: 19px;
  font-weight: 350;
  background-color: #faf9fa;
  box-shadow: 5px 5px 2px 1px #dad8de;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 5%;
`;

const CategoryStyle = styled.span`
  font-size: 15px;
`;

const ImageStyle = styled.div`
  float: left;
  padding-right: 10px;
`;

const ViewStyle = styled.div`
  float: right;
  text-align: right;
  color: #999999;
`;

const GameNameStyle = styled.span`
  padding-left: 2px;
  font-size: 15px;
  color: #6441a4;
  cursor: pointer;
  &: hover {
    text-decoration: underline;
  }
`;

const VideoPlayer = (props) => {
  return (
    <div>
      <iframe className="embed-responsive-item"
        src={'https://player.twitch.tv/?video=v' + props.video.id}
        height="780"
        width="100%"
        scrolling="no"
        allowFullScreen={true}>
      </iframe>
      <VideoPlayerStyle>
        <ImageStyle><img src={props.game.box_art_url}/></ImageStyle>
        <p>{props.video.title} · {moment(props.video.created_at).fromNow()}</p>
        <ViewStyle>
          <svg width="5%" height="5%" viewBox="0 0 20 20">
            <path
              d="M10 15c-4.044 0-7-3.288-7-5 0-1.712 2.956-5 7-5 4.044 0 7 3.288 7 5 0 1.712-2.956 5-7
            5m0-12c4.763 0 9 3.914 9 7s-4.237 7-9 7-9-3.914-9-7 4.237-7 9-7zm3 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"
              fill="#999999"
              fillRule="evenodd"/>
          </svg>
          <span> {props.video.view_count}</span>
        </ViewStyle>
        <div>
          <CategoryStyle>Category:
            <GameNameStyle>{props.game.name}</GameNameStyle>
          </CategoryStyle>
        </div>
      </VideoPlayerStyle>
    </div>
  );
};

export default VideoPlayer;