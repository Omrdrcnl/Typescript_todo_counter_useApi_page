import loading from "../../../components/loading";
import useApi from "../../../hooks/useApi";
import { CategoryDetailsPropsType } from "../components/categorybox";

const CategoryDetailsPage = (item: CategoryDetailsPropsType) => {
  console.log("CategoryDetailsPage", item);

  return (
    <div>
      <h1>{item.category.name}</h1>
    </div>
  );
};

export default CategoryDetailsPage;
