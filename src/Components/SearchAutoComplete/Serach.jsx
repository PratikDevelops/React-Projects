import React, { useEffect, useState } from 'react';
import "./Search.css"

function Search() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParams(query);

        if (query.length > 1) {
            const filterData = users.filter(user =>
                user.toLowerCase().includes(query)
            );
            setFilteredUsers(filterData);
            setShowDropdown(filterData.length > 0);
        } else {
            setFilteredUsers([]);
            setShowDropdown(false);
        }
    }

    async function fetchUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if (data && data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h3 className="loading">Loading...</h3>;
    }

    if (error) {
        return <h3 className="error">Error: {error.message}</h3>;
    }

    return (
        <div className="search-container">
            <input
                value={searchParams}
                type="text"
                placeholder="Search here..."
                onChange={handleChange}
                className="search-input"
            />
            {showDropdown && (
                <ul className="dropdown-list">
                    {filteredUsers.map((user, index) => (
                        <li key={index} className="dropdown-item">
                            {user}
                        </li>
                    ))}
                </ul>
            )}
            <h4 className="user-heading">All Users</h4>
            <ul className="user-list">
                {users.map((user, index) => (
                    <li key={index} className="user-item">
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
