import LikeButton from "../../../like_button";
import UnlikedIcon from "../../../like_button/children/unliked_icon";
import styles from "../../../../styles";

const Comment = ({ node }) => {
  return (
    <div>
      <div key={node.id} style={styles.comment}>
        <p style={styles.username}>
          {`${node.owner.username}`}{" "}
          <span style={styles.spanText}>
            {node.text.includes("#") || node.text.includes("@")
              ? node.text.split(" ").map((word) =>
                  word.startsWith("#") || word.startsWith("@") ? (
                    <a
                      key={word}
                      style={{ textDecoration: "none" }}
                      href={`/${word}`}
                    >
                      {" "}
                      {word}{" "}
                    </a>
                  ) : (
                    word
                  )
                )
              : node.text}
          </span>
        </p>
        <div style={styles.commentLike}>
          {node.viewer_has_liked === false ? (
            <UnlikedIcon style={{ height: 10, width: 10 }} />
          ) : (
            <LikeButton />
          )}
        </div>
      </div>
    </div>
  );
};
export default Comment;
