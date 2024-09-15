/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import useCommonInputFields from "../../hooks/useCommonInputFields";
import { PostServices } from "../../services/PostService";

function EditPost() {
  const {
    titleInputField,
    commonInputFields,
    postTitleOnChange,
    onChangeCommonInputFieldHandler,
  } = useCommonInputFields();

  const [loading, setLoading] = useState(false);

  const editPostSubmitHandler = (e) => {
    e.preventDefault();

    const payload = {
      titleInputField,
      ...commonInputFields,
    };

    // PostServices.updatePost(postId, payload).then((data) => {});
  };

  return (
    <>
      {/* <!-- EDIT POST POPUP --> */}
      <div className="modal fade" id="edit-post">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Update Post</h4>
            </div>
            <div className="modal-body">
              <form
                action=""
                method="POST"
                role="form"
                id="create-post-form"
                onSubmit={editPostSubmitHandler}
              >
                <div className="form-group">
                  <label>Post Title </label>
                  <input
                    type="text"
                    className="form-control"
                    id="post_title"
                    placeholder="Title"
                    name="post_title"
                    onChange={postTitleOnChange}
                    value={titleInputField}
                  />
                </div>

                <div className="form-group">
                  <label>Post Author</label>
                  <input
                    type="text"
                    className="form-control"
                    id="post_author"
                    placeholder="Post Author"
                    name="post_author"
                    onChange={onChangeCommonInputFieldHandler}
                    value={commonInputFields?.post_author}
                  />
                </div>

                <div className="form-group">
                  <label>Post Content</label>
                  <textarea
                    id="post_content"
                    cols="30"
                    rows="10"
                    placeholder="Post Content"
                    className="form-control"
                    onChange={onChangeCommonInputFieldHandler}
                    name="post_content"
                    value={commonInputFields?.post_content}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPost;
