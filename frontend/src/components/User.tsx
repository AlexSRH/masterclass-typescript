import React from 'react'

interface IUser {
  name: string,
  email: string
}

interface Props {
  user: IUser
}

const User: React.FC<Props> = ({ user }) => (
  <div>
    <strong>{user.name}</strong>
  </div>
)

export default User