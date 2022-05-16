import React from "react";
import { Image } from "./children/image";
import LikeButton from "./children/like_button";
import UnlikedIcon from "./children/like_button/children/unliked_icon";
import Comments from "./children/comments";
import styles from "./styles";
import { useState } from "react";
import Header from "./children/header";

const App = (props) => {
  const { data } = props;

  const text1 = data.edge_media_to_caption.edges[0].node.text
    .split("\n")
    .map((str, index) =>
      index === 0 && !str.startsWith("#") ? (
        <p key={index}>
          <span style={{fontWeight:'bold'}}>{data.owner.username}</span> {str}
        </p>
      ) : (
        <>
          <br />
          <a href={str} style={styles.hashtag} key={index}>
            {str}
          </a>
        </>
      )
    );

  const commentsdetails = data.edge_media_to_comment.edges;

  const viewerDetails = data.viewer_has_liked;
  const [isLiked, setIsLiked] = useState(viewerDetails);

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <div style={styles.timeLine}>
          <Header data={data} />
          <div style={styles.commentWrapper}>
            <div>
              <p style={{ lineHeight: "8px" }}>{text1}</p>
            </div>
            <div style={{ marginRight: "10px" }}>
              <Comments commentsdetails={commentsdetails} />
            </div>
          </div>
        </div>
        <div style={styles.commentFooter}>
          <div style={{ color: "#777" }}>
            {`${data.edge_media_preview_like.count} likes`}
          </div>
          <div
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            {isLiked === false ? <UnlikedIcon /> : <LikeButton />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
