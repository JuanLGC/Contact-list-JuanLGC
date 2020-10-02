import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Contact } from "../component/contact";
import { Link } from "react-router-dom";

export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="containter">
			<Link to="/form">
				<div className="col-4 ml-auto">
					<button className="btn btn-lg btn-dark m-3  "> Agregar contacto</button>
				</div>
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
	);
};
