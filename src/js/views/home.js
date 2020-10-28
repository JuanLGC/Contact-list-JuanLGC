import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Contact } from "../component/contact";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<h1>My Contact List</h1>

			<div className="contact-box">
				<Link to="/form">
					<button className="btn-add-contact"> Add Contact</button>
				</Link>
				{store.contact.map((user, index) => {
					return (
						<Contact
							key={index}
							id={user.id}
							name={user.full_name}
							email={user.email}
							phone={user.phone}
							address={user.address}
						/>
					);
				})}
			</div>
		</div>
	);
};
