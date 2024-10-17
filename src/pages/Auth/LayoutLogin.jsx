import React from "react";
import AdminPages from "./AdminPages";
import UserPages from "./UserPages";
import createGuest from "cross-domain-storage/guest";

const LayoutLogin = () => {
  const [Role, setRole] = React.useState(null);

  React.useEffect(() => {
    const storage = createGuest("http://localhost:5173");

    storage.get("role", (error, value) => {
      if (error) {
        console.error("Error getting role", error);
      } else {
        setRole(value);
      }
    });
    return () => {
      storage.close();
    };
  }, []);

  return <div>{Role === "kaprodi" ? <AdminPages /> : <UserPages />}</div>;
};

export default LayoutLogin;
