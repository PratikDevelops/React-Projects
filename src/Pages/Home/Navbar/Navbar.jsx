import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../../Context/Index";

function Navbar() {
    const { searchparams, setSearchParams, handleSubmit } =
        useContext(GlobalContext);

    return (
        <div className="navbar">
            <h2 className="navbar-title">
                <NavLink to={"/"}>Food Recipe</NavLink>
            </h2>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for recipes..."
                    name="search"
                    value={searchparams}
                    onChange={(event) => setSearchParams(event.target.value)}
                    className="search-input"
                />
            </form>
            <ul className="navbar-links">
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/favourites"}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Favourites
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
