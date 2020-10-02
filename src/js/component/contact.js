import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export const Contact = props => {
	const { actions, store } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="d-flex col-8 m-auto border border-secondary rounded">
			<img
				src="https://www.infojobs.net/logo/logo/do-get.xhtml?id=37838782202&dgv=300474299537494183"
				className="col-2 "
			/>

			<div className="col-4 bg-green">
				<h3>{props.name}</h3>
				<p className="mb-0">{props.address}</p>
				<p className="mb-0">{props.phone}</p>
				<p className="mb-0">{props.email}</p>
			</div>
			<div className="col-3 d-flex ml-auto ">
				<div className="row ml-auto my-2">
					<Link to="/form">
						<i
							onClick={() => {
								actions.getContact(props.id);
							}}
							className="text-dark fa fa-pencil"
							aria-hidden="true"
						/>
					</Link>
					<i onClick={handleShow} className="fa fa-trash-o mx-3" aria-hidden="true" />
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Eliminar Contacto</Modal.Title>
					</Modal.Header>
					<Modal.Body>Seguro que deseas borrar este contacto</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
						<Button
							variant="primary"
							onClick={() => {
								handleClose;
								actions.deleteContact(props.id);
							}}>
							Eliminar
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};
Contact.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.number,
	email: PropTypes.stringº
};
