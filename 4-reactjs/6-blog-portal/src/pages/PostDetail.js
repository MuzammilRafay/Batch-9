import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostApiService } from "../services/PostApiService";
import { HelperFunction } from "../utils/helperFunction";
import useFetch from "../hooks/useFetch";

function PostDetail() {
  const { postId } = useParams();
  const [singlePostData, setSinglePostData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (postId) {
      setLoader(false);
      PostApiService.getPostById(postId)
        .then((data) => {
          setSinglePostData(data?.results);
        })
        .catch(console.error)
        .finally(() => {
          setLoader(false);
        });
    }
  }, [postId]);

  // const [singlePostData, loader] = useFetch(PostApiService.getPostById, postId);

  if (loader) {
    return <h2>Loading.......</h2>;
  }

  return (
    <>
      {/* <!-- Blog Post --> */}

      {/* <!-- Title --> */}
      <h1>{singlePostData?.post_title}</h1>

      {/* <!-- Author --> */}
      <p className="lead">
        by <a href="#">{singlePostData?.post_author}</a>
      </p>

      <hr />

      {/* <!-- Date/Time --> */}
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on{" "}
        {HelperFunction.convertDateToOurFormat(singlePostData?.post_date)}
      </p>

      <hr />

      {/* <!-- Preview Image --> */}
      <img
        className="img-responsive"
        src={
          singlePostData?.image
            ? singlePostData?.image
            : "http://placehold.it/900x300"
        }
        alt={singlePostData?.post_title}
      />

      <hr />

      {/* <!-- Post Content --> */}
      <p className="lead">{singlePostData?.post_content}</p>

      <hr />

      {/* <!-- Blog Comments --> */}

      {/* <!-- Comments Form --> */}
      <div className="well">
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div className="form-group">
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <hr />

      {/* <!-- Posted Comments --> */}

      {/* <!-- Comment --> */}
      <div className="media">
        <a className="pull-left" href="#">
          <img
            className="media-object"
            src="http://placehold.it/64x64"
            alt=""
          />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
            Start Bootstrap
            <small>August 25, 2014 at 9:30 PM</small>
          </h4>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>

      {/* <!-- Comment --> */}
      <div className="media">
        <a className="pull-left" href="#">
          <img
            className="media-object"
            src="http://placehold.it/64x64"
            alt=""
          />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
            Start Bootstrap
            <small>August 25, 2014 at 9:30 PM</small>
          </h4>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          {/* <!-- Nested Comment --> */}
          <div className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="http://placehold.it/64x64"
                alt=""
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">
                Nested Start Bootstrap
                <small>August 25, 2014 at 9:30 PM</small>
              </h4>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
          {/* <!-- End Nested Comment --> */}
        </div>
      </div>
    </>
  );
}

export default PostDetail;
