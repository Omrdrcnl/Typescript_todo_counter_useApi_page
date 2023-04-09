import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useApi from "../../hooks/useApi";
import { useState } from "react";

export type AdoptezResponseType = {
  data: DataType;
  status: "success" | "error";
};

export default function Adoptez() {
  const api = useApi("adoptez");
  const CategoryState = useSelector((state: RootState) => {
    console.log(state);
    return state.category;
  });
  const [categories, setCategories] = useState(null);

  if (CategoryState.initialized === false) {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        console.log(">>>  Adoptez epi res", response);
      })
      .catch((error) => {});
    return <div>Loading...</div>;
  }

  return <>Adoptez sayfası</>;
}
