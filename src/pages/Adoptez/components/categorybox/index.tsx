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

function CategoryBox(props: CategoryBoxProps) {
  // console.log("CategoryProps", props);
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
          <button type="button" className="w-100 btn btn-lg btn-primary">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
