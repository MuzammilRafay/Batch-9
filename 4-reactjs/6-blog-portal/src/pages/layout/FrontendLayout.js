import React, { useEffect, useState } from "react";
import "./../../frontent-files/css/bootstrap.min.css";
import "./../../frontent-files/css/blog-home.css";
import { Link, Outlet } from "react-router-dom";
import { CategoryApiService } from "../../services/categoryService";

function FrontendLayout() {
  const [categoryData, setCategoryData] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setLoader(true);
    CategoryApiService.getCategories()
      .then((data) => setCategoryData(data?.results))
      .catch(console.error)
      .finally(() => setLoader(false));
  };

  const firstTenCategories = Array.from([...categoryData]).splice(0, 10);

  return (
    <>
      {/* <!-- Navigation --> */}
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {firstTenCategories?.map((singleCategory) => (
                <li>
                  <a href="#">{singleCategory?.cat_title}</a>
                </li>
              ))}
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container --> */}
      </nav>

      {/* <!-- Page Content --> */}
      <div className="container">
        <div className="row">
          {/* <!-- Blog Entries Column --> */}
          <div
            className="col-md-8"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <Outlet />
          </div>

          {/* <!-- Blog Sidebar Widgets Column --> */}
          <div className="col-md-4">
            {/* <!-- Blog Search Well --> */}
            <div className="well">
              <h4>Blog Search</h4>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
              {/* <!-- /.input-group --> */}
            </div>

            {/* <!-- Blog Categories Well --> */}
            <div className="well">
              <h4>Blog Categories</h4>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="list-unstyled">
                    {categoryData?.length > 0 &&
                      firstTenCategories?.map((singleCategory) => (
                        <li>
                          <a href="#">{singleCategory?.cat_title}</a>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* <!-- /.col-lg-6 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}

        <hr />

        {/* <!-- Footer --> */}
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2024</p>
            </div>
            {/* <!-- /.col-lg-12 --> */}
          </div>
          {/* <!-- /.row --> */}
        </footer>
      </div>
      {/* <!-- /.container --> */}

      {/* <!-- jQuery --> */}
      <script src="js/jquery.js"></script>

      {/* <!-- Bootstrap Core JavaScript --> */}
      <script src="js/bootstrap.min.js"></script>
    </>
  );
}

export default FrontendLayout;
