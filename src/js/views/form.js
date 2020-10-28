import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = user => {
	const { actions, store } = useContext(Context);

	const [data, setData] = useState({
		email: "",
		phone: "",
		name: "",
		address: ""
	});
	const inputChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	return (
		<div className="col-10 m-auto">
			<h1 className="text-center">New contact</h1>
			<form>
				<div className="form-group">
					<label>Name</label>
					<input
						className="form-control "
						name="name"
						onChange={inputChange}
						type="text"
						placeholder="Name "
						defaultValue={store.user ? store.user.full_name : ""}
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						className="form-control "
						name="address"
						onChange={inputChange}
						type="text"
						placeholder="Address "
						defaultValue={store.user ? store.user.address : ""}
					/>
				</div>
				<div className="form-group">
					<label>Phone number</label>
					<input
						className="form-control "
						name="phone"
						onChange={inputChange}
						type="number"
						placeholder="Phone number"
						defaultValue={store.user ? store.user.phone : ""}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control "
						name="email"
						onChange={inputChange}
						type="text"
						placeholder="Email "
						defaultValue={store.user ? store.user.email : ""}
					/>
				</div>
			</form>
			<Link to="/">
				<button
					onClick={() => {
						store.user ? actions.editContact(store.user.id, data) : actions.addContact(data);
					}}
					className="btn btn-block btn-success">
					Add Contact
				</button>
			</Link>
			<Link to="/">
				<span
					onClick={() => {
						actions.setUser("");
					}}>
					Back home
				</span>
			</Link>
		</div>
	);
};
