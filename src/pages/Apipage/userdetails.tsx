import { useState } from "react";
import useApi from "../../hooks/useApi";

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

const UserDetails = () => {
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
          <hr />
        </div>
      );
    });
  }

  return (
    <div>
      <h1>User detail sayfası</h1>
      {userList}
    </div>
  );
};

export default UserDetails;
