import React, { Component } from 'react'
import UserItems from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';
const Users = ({users, loading}) => {
  if(loading){
    return <Spinner />
  } else {
    return (
      <div style={gridUser}>
        {users.map(user => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
        }
}
const gridUser = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
Users.PropTypes ={
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
export default Users
