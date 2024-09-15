/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { BASE_API_URL } from "../../constant";
import { PostServices } from "../../services/PostService";
import useCommonInputFields from "../../hooks/useCommonInputFields";

function CreatePost({ getPosts }) {
  const {
    titleInputField,
    commonInputFields,
    postTitleOnChange,
    onChangeCommonInputFieldHandler,
    setTitleInputField,
    setCommonInputFields,
  } = useCommonInputFields();

  const [loading, setLoading] = useState(false);

  const createPostSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submitting");
    setLoading(true);

    const payload = {
      ...commonInputFields,
      post_title: titleInputField,
      post_status: "PUBLISH",
      post_date: "20/10/24",
      post_tags: "default",
      post_category_id: 259,
    };

    PostServices.createPost(payload)
      .then((data) => {
        setLoading(false);
        setTitleInputField("");

        setCommonInputFields({
          post_content: "",
          post_author: "",
        });

        window.$("#create-post").modal("hide");
        getPosts();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <>
      <Loader loading={loading} />
      <a className="btn btn-primary" data-toggle="modal" href="#create-post">
        Create Post
      </a>
      <div className="modal fade" id="create-post">
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
              <h4 className="modal-title">Create Post</h4>
            </div>
            <div className="modal-body">
              <form
                onSubmit={createPostSubmitHandler}
                action=""
                method="POST"
                role="form"
                id="create-post-form"
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

export default CreatePost;
