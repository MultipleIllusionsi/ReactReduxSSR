import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

const UsersListPage = ({ users, fetchUsers }) => {
  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, []);

  const head = () => {
    return (
      <Helmet>
        <title>{`${users.length} Users loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  };

  const renderUsers = () =>
    users.map(user => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      {head()}
      List of users <ul>{renderUsers()}</ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};

const loadData = store => store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(
    UsersListPage
  ),
};
