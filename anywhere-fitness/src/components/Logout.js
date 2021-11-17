import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
    const { push } = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    push("/");
  }, [push]);

    return (
        <div>
        </div>
    )
}
