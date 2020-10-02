import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Registre = user => {
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
			<h1 className="text-center">Nuevo contacto</h1>
			<form>
				<div className="form-group">
					<label>Nombre</label>
					<input
						className="form-control "
						name="name"
						onChange={inputChange}
						type="text"
						placeholder="Nombre "
						defaultValue={store.user ? store.user.full_name : ""}
					/>
				</div>
				<div className="form-group">
					<label>Direccion</label>
					<input
						className="form-control "
						name="address"
						onChange={inputChange}
						type="text"
						placeholder="Direccion "
						defaultValue={store.user ? store.user.address : ""}
					/>
				</div>
				<div className="form-group">
					<label>Telefono</label>
					<input
						className="form-control "
						name="phone"
						onChange={inputChange}
						type="number"
						placeholder="Telefono "
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
					Aceptar
				</button>
			</Link>
			<Link to="/">
				<span
					onClick={() => {
						actions.setUser("");
					}}>
					Ir a la lista de contactos
				</span>
			</Link>
		</div>
	);
};
