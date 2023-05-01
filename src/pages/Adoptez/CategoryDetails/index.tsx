import { useParams } from "react-router-dom";
import Loading from "../../../components/loading";
import useApi from "../../../hooks/useApi";
import { CategoryDetailsPropsType } from "../components/categorybox";

import { useDispatch } from "react-redux";
import { useState } from "react";

const CategoryDetailsPage = (item: any) => {
  const params = useParams();
  console.log("params", params.category_id);
  const api = useApi("adoptez");
  const dispatch = useDispatch();
  const [categoryDetails, setCategoryDetails] =
    useState<CategoryDetailsPropsType | null>(null);
  if (categoryDetails === null) {
    api
      .get(`/public/categories/getBySlug/${params.category_id}`)
      .then((response) => {
        // console.log("CategoryDetailsPage", response);
        setCategoryDetails(response.data.data);
      })
      .catch((error) => {
        console.log("CategorydetailsError", error);
      });
    return (
      <div className="px-4 py-5 my-5 text-center d-flex">
        <div className="col-lg-6 mx-auto">
          <Loading />
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-4 py-5 my-5 text-center row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          viewBox="0 0 48 48"
        >
          <title>category</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
              <rect width="48" height="48" fill="none" />
            </g>
            <g id="icons_Q2" data-name="icons Q2">
              <path d="M24,7.7,29.3,16H18.6L24,7.7M24,2a2.1,2.1,0,0,0-1.7,1L13.2,17a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H33a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-9-14A1.9,1.9,0,0,0,24,2Z" />
              <path d="M43,43H29a2,2,0,0,1-2-2V27a2,2,0,0,1,2-2H43a2,2,0,0,1,2,2V41A2,2,0,0,1,43,43ZM31,39H41V29H31Z" />
              <path d="M13,28a6,6,0,1,1-6,6,6,6,0,0,1,6-6m0-4A10,10,0,1,0,23,34,10,10,0,0,0,13,24Z" />
            </g>
          </g>
        </svg>
        <h1 className="display-5 fw-bold">{categoryDetails?.category.name}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{categoryDetails.category.description}</p>
          <img src={categoryDetails.category.image} />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Services
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CategoryDetailsPage;
