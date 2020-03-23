import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUsers = () =>
    users.map(user => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      List of users <ul>{renderUsers()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
