import React from 'react'

function UserCard({user}) {
  return (
    <div className='py-3 px-5 rounded-lg bg-red-200 flex flex-col gap-3'>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Phone: {user.phone}</h2>
    </div>
  )
}

export default UserCard