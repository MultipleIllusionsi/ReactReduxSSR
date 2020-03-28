import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/HOCS/requireAuth";

const AdminsListPage = ({ admins, fetchAdmins }) => {
  useEffect(() => {
    fetchAdmins();
  }, []);

  const renderAdmins = () =>
    admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ));

  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
