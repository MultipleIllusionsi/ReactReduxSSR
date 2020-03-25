import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

import { Link } from "react-router-dom";

const UsersListPage = ({ users, fetchUsers }) => {
  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, []);

  const renderUsers = () =>
    users.map(user => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      <Link to="/">To Home</Link>
      <br />
      List of users <ul>{renderUsers()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users };
};

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
