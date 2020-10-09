import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../../redux/actions/userActon";

import { Col, Row, Card, Form, Container, Button } from "react-bootstrap";


export default function Fillter() {
	const [filterData, setFilterData] = useState({
		min_price: "",
		country: "",
		max_price: "",
		subcategory: "",
		category: "",
		plan: "",
		sort: ""
	});
	const dispatch = useDispatch();

	
	const {
		min_price,
		country,
		max_price,
		subcategory,
		category,
		plan,
		sort
	} = filterData;
	const onChangeHandler = (e) => {
		setFilterData({ ...filterData, [e.target.name]: e.target.value });
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();
		dispatch(
			search(filterData)
		);
	};

	return (
		<div>
			<Form onSubmit={onSubmitHandle}>
				<Card className="border-0">
					<Container>
						<Form.Group>
							<Form.Label
								className="mt-3"
								style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Category</b>
							</Form.Label>
							<div class="uk-margin">
								<select
									class="uk-select  "
									name="category"
									value={category}
									onChange={(e) => onChangeHandler(e)}>
									<option>select category</option>
									<option
										value="test-cat-one"
										selected={category === "test-cat-one" ? true : false}>
										test-cat-one
									</option>
								</select>
							</div>
						</Form.Group>
						<Form.Group>
								<Form.Label
									className="mt-3"
									style={{ opacity: "0.4", fontSize: "0.8em" }}>
									<b>Subcategory</b>
								</Form.Label>
								<div class="uk-margin">
									<select
										class="uk-select  "
										name="subcategory"
										value={subcategory}
										onChange={(e) => onChangeHandler(e)}>
										<option>select subcategory</option>
										<option value="test-subcagegory" selected={subcategory === "test-subcagegory" ? true : false}>
										test-subcagegory
										</option>
										<option value="test-subcategory-four" selected={subcategory === "test-subcategory-four" ? true : false}>
										test-subcategory-four
										</option>
									</select>
								</div>
							</Form.Group>
						<Form.Group>
							<Form.Label style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Price</b>
							</Form.Label>
							<Row>
								<Col xs={6} sm={6}>
									<Form.Control
										onFocus={inputFocus}
										type="number"
										min="0"
										placeholder="Min Price"
										name="min_price"
										value={min_price}
										onChange={(e) => onChangeHandler(e)}
									/>
								</Col>
								<Col xs={6} sm={6} md={6} lg={6} xl={6}>
									<Form.Control
										onFocus={inputFocus}
										placeholder="Price max"
										type="number"
										min="0"
										name="max_price"
										value={max_price}
										onChange={(e) => onChangeHandler(e)}
									/>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group>
							<Button
								style={styles.btn}
								variant="warning"
								size="lg"
								block
								type="button"
								onClick={onSubmitHandle}>
								Appy Filter
							</Button>
						</Form.Group>
					</Container>
				</Card>
			</Form>
		</div>
	);
}

const inputFocus = (e) => {
	e.target.style.outLineColor = "#ffa500 !important";
};

const styles = {
	btn: {
		marginTop: "10px",
		backgroundColor: "#ffa500",
		border: "none",
		color: "white"
	}
};
