import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <h2>{user.name}</h2>
        <span>@{user.username}</span>
      </div>

      <div className="user-card-body">
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>City:</strong> {user.address.city}
        </p>

        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
