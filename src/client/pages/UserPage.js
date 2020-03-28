import React from "react";
// import { connect } from "react-redux";
// import { fetchUser } from "../actions";

const UserPage = ({ user, fetchUser, match }) => {
  console.log("match", match);
  //   useEffect(() => {
  //     if (!user) {
  //     fetchUser();
  //     }
  //   }, []);

  return (
    <div>
      <h1>This page needs to modify</h1>
      <p>User: {user ? user : "not found"}</p>
    </div>
  );
};

// const mapStateToProps = ({ user }) => {
//   return { user };
// };

// const loadData = (store, params) =>
//   store.dispatch(fetchUser(params.id));

// export default {
//   loadData,
//   component: connect(mapStateToProps, { fetchUser })(UserPage)
// };

export default {
  component: UserPage,
};
