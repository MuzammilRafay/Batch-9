/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../constant";
import Loader from "../Loader/Loader";

function PostListing({ loading, getPosts, postData, setLoading }) {
  useEffect(() => {
    //first load
    getPosts();
  }, []);

  const deletePostHandler = (postId) => {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      fetch(`${BASE_API_URL}/posts/${postId}`, {
        method: "DELETE",
      })
        .then(() => {
          setLoading(false);
          getPosts();
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <Loader loading={loading} />

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Category Id</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="todos-listing">
          {/* <tr>
          <td>asdf</td>
          <td>asdfa</td>
          <td>asdfasdf</td>
          <td>
            <a className="btn btn-primary edit-btn" href="#edit-post">
              Edit
            </a>
          </td>
          <td>
            <a href="#" className="btn btn-danger delete-btn">
              Delete
            </a>
          </td>
        </tr> */}

          {postData?.map((singlePostData) => {
            return (
              <tr key={singlePostData?.id}>
                <td>{singlePostData?.id}</td>
                <td>{singlePostData?.post_category_id}</td>
                <td>{singlePostData?.post_title}</td>
                <td>
                  <a className="btn btn-primary edit-btn" href="#edit-post">
                    Edit
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="btn btn-danger delete-btn"
                    onClick={() => deletePostHandler(singlePostData?.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default PostListing;
