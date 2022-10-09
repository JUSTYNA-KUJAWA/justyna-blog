import React from "react";
import { Link } from "react-router-dom";

const ArticleJustyna = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.postContainer}>
          <img
            alt={post.title}
            src={
              post.image
                ? post.image
                : "https://www.freeiconspng.com/uploads/no-image-icon-1.jpg"
            }
          />
          <div className={styles.infoContainer}>
            <h1>title</h1>
            {post.location && (
              <div className={styles.address}>
                <PlaceOutlinedIcon />
                <h1>{post.location}</h1>
              </div>
            )}
            <div className={styles.text}>
              <p>{post.text}</p>
            </div>
            <div className={styles.price}>
              <p>Price: USD / day</p>
            </div>
            <div className={styles.contactInfo}>
              <h3>Contact info:</h3>
              <p>
                <span>email:</span>{" "}
              </p>
              <p>
                <span>phone number:</span>{" "}
              </p>
            </div>
            <div className={styles.dates}>
              <p>
                Published: {utils.dateToStr(post.created)}{" "}
                {post.updated && (
                  <span>Edited: {utils.dateToStr(post.updated)}</span>
                )}
              </p>
            </div>
            <Link to={`/posts`} className={styles.link}>
              <OfflineButton>Back to posts</OfflineButton>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArticleJustyna;
