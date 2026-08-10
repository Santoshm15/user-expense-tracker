import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import type { User } from "../types/User";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("All");

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch {
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const cities = useMemo(() => {
    const uniqueCities = users.map((user) => user.address.city);

    return [...new Set(uniqueCities)].sort();
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesName = user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCity =
        selectedCity === "All" || user.address.city === selectedCity;

      return matchesName && matchesCity;
    });
  }, [users, searchTerm, selectedCity]);

  if (loading) {
    return (
      <div className="users-page">
        <div className="users-container">
          <div className="status-message">
            <h2>Loading users...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-page">
        <div className="users-container">
          <div className="status-message error-message">
            <h2>{error}</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <div className="users-container">
        <div className="page-header">
          <h1>User Directory</h1>

          <p>Browse and search users from the API.</p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          selectedCity={selectedCity}
          cities={cities}
          onSearchChange={handleSearchChange}
          onCityChange={handleCityChange}
        />

        {filteredUsers.length === 0 ? (
          <div className="status-message">
            <h2>No Users Found</h2>
          </div>
        ) : (
          <div className="users-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
