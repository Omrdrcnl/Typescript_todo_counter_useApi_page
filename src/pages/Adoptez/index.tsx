import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { CategoryType, setCategory } from "../../redux/categorySlicer";
import { AxiosResponse } from "axios";
import CategoryBox from "./components/categorybox";
import Loading from "../../components/loading";

export type AdoptezResponseType<DataType = any> = {
  data: DataType;
  status: "success" | "error";
  draw?: number;
  recordsTotal?: number;
  recordsFiltered?: number;
  errorMessage?: string;
  exeptionType?: string;
};

export default function Adoptez() {
  const api = useApi("adoptez");
  const dispatch = useDispatch();

  const categoryState = useSelector((state: RootState) => {
    // console.log(state);
    return state.category;
  });

  if (categoryState.initialized === false) {
    api
      .get<AdoptezResponseType<CategoryType[]>>(
        "public/categories/listMainCategories"
      )
      .then((response: AxiosResponse<AdoptezResponseType<CategoryType[]>>) => {
        if (response.data.data) {
          // response.data.data içeriğinin dolu geldiğinden emin olmak gerekli.
          // çünkü gelen tür undifined olma ihtimali var.
          dispatch(setCategory(response.data.data));
        }

        // console.log(">>>  Adoptez epi res", response);
      })
      .catch((error) => {
        console.log(">>> Error", error);
      });
    return (
      <div className="row d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryState.categories.map((item: CategoryType, index: number) => {
          return <CategoryBox item={item} key={index} />;
        })}
      </div>
      {/* <pre>{JSON.stringify(categoryState, null, 2)}</pre> */}
    </div>
  );
}
