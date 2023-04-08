import { useState } from "react";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";

export type GeoType = {
  lat: string;
  lng: string;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};
export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

const ApiPage = () => {
  const [users, setUsers] = useState<UsersType[] | null>(null);

  const api = useApi("jsonplaceholder");

  let userList: any = [];

  if (users === null) {
    // bu bölge senkron
    // immadiate call function çağırarak verileri direkt alacagız

    (async () => {
      // bu bölge asenkron
      const apiResult = await api.get<UsersType[]>("/users");
      console.log("api result", apiResult);
      setUsers(apiResult.data);
    })();
  } else {
    userList = users.map((item: UsersType, index) => {
      return (
        <div key={index}>
          Id : {item.id}
          <br />
          Username : {item.username}
          <br />
          E-mail : {item.email}
          <br />
          <Link to={"/useapi/" + item.id}>Open Users Details</Link>
          <hr />
        </div>
      );
    });
  }

  return <div>{userList}</div>;
};

export default ApiPage;
