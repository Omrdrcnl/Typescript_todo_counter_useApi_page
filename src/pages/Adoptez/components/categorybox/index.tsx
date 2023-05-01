import { Link } from "react-router-dom";
import useApi from "../../../../hooks/useApi";
import { CategoryType } from "../../../../redux/categorySlicer";
import CategoryDetailsPage from "../../CategoryDetails";

export type ItemType = {
  id: number;
  parent_id: null;
  name: string;
  slug: string;
  description: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
};
export type CategoryBoxProps = {
  item: ItemType;
};
export type CategoryDetailcategory = CategoryType & {
  children: [];
  services: [];
};

export type CategoryDetailsPropsType = {
  blogs: [];
  category: CategoryDetailcategory;
  services: [];
  slug: string;
};

function CategoryBox(props: CategoryBoxProps) {
  // console.log("CategoryProps", props);
  const api = useApi("adoptez");
  // const CategoryDetailsClick = (e: any) => {
  //   e.preventDefault();
  //   api
  //     .get(`public/categories/getBySlug/${props.item.slug}`)
  //     .then((Response) => {
  //       console.log("CategoryDetailsClick", Response);
  //       const categoryDetailData: CategoryDetailsPropsType[] = [];
  //       categoryDetailData.push(Response.data.data);
  //       //<CategoryDetailsPage {...Response.data.data} />;
  //       console.log("CategoryDetailsClick daa", categoryDetailData);

  //       categoryDetailData.map(
  //         (item: CategoryDetailsPropsType, index: number) => {
  //           return <CategoryDetailsPage {...item} key={index} />;
  //         }
  //       );
  //     })
  //     .catch((err) => {
  //       console.log("CategoryDetailsClick", err);
  //     });
  // };

  return (
    <div className="category">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{props.item.name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <img src={props.item.image} className="" height={200} />
            <br />
            <small className="text-muted fw-light">
              {props.item.description}
            </small>
          </h1>
          <Link
            to={"/category-details/" + props.item.slug}
            className="w-100 btn btn-lg btn-primary"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
