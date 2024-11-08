import React from "react";
import { Link } from "react-router-dom";
import { HelperFunction } from "../../utils/helperFunction";

function SinglePost({ singlePost }) {
  return (
    <div>
      <h2>
        <Link to={`/post/${singlePost?.id}`}>{singlePost?.post_title}</Link>
      </h2>
      <p className="lead">
        by <a href="index.php">{singlePost?.post_author}</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on{" "}
        {HelperFunction.convertDateToOurFormat(singlePost?.post_date)}
      </p>
      <hr />

      <img
        className="img-responsive"
        src={
          singlePost?.image ? singlePost?.image : "http://placehold.it/900x300"
        }
        alt={singlePost?.post_title}
      />

      {/* {singlePost?.image ? (
                <img
                  className="img-responsive"
                  src={singlePost?.image}
                  alt={singlePost?.post_title}
                />
              ) : (
                <img
                  className="img-responsive"
                  src="http://placehold.it/900x300"
                  alt=""
                />
              )} */}

      <hr />
      <p>{singlePost?.post_content}</p>
      <a className="btn btn-primary" href="#">
        Read More <span className="glyphicon glyphicon-chevron-right"></span>
      </a>

      <hr />
    </div>
  );
}

export default SinglePost;
