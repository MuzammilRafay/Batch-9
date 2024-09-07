/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function PostListing() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Post Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody id="todos-listing">
        <tr>
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
        </tr>
      </tbody>
    </table>
  );
}

export default PostListing;
