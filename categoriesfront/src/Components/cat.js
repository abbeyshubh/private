import React, { Component } from "react";

class cat extends Component {
  render() {
    return (
      <div>
        <div className="cat">CATEGORIES</div>
        <div
          style={{
            color: "#4D4F5C",
            fontSize: "13px",
            marginLeft: "75px",
            marginTop: "34px",
            maxWidth: "770px"
            // boxSizing: "border-box"
          }}
        >
          Categories are intended to group together pages on similar subjects.
          They are implemented by a MediaWiki feature that adds any page with a
          text like [[Category:XYZ]] in its wikimarkup to the automated listing
          that is the category with name XYZ. Categories help readers to find,
          and navigate around, a subject area, to see pages sorted by title, and
          to thus find article relationships.
        </div>
        <div className="row">
          <div
            className="col-2"
            style={{ marginLeft: "75px", marginTop: "36px", color: "#777777" }}
          >
            Actions
            <i
              className="fas fa-chevron-down"
              style={{ marginLeft: "10px", color: "#777777" }}
            />
          </div>
          <div
            className="col-2"
            style={{
              marginLeft: "10px",
              color: "#777777",

              marginTop: "36px"
            }}
          >
            <i class="fas fa-plus" style={{ marginRight: "11px" }} />
            Create
          </div>
        </div>
        <nav
          aria-label="Page navigation example"
          style={{ float: "right", marginRight: "95px" }}
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class=" active page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default cat;
