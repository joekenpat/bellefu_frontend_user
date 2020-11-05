import React from "react";
import { Container, Button } from "react-bootstrap";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";

export default function PostAdSuccessMessagePage() {
	return (
		<div>
			<HeaderNav />

			<Container style={styles.page}>
				<div style={{marginTop: "30%"}} class="alert alert-success" role="alert">
					<h4 class="alert-heading">Well done!</h4>
					<p>Product have been uploaded successfully</p>
					<hr />
					<div class="mb-0 d-flex flex-row-reverse">
						<a
							href="/user_dashboard"
							style={{ color: "inherit", textDecoration: "inherit" }}>
							<Button style={styles.btn} variant="warning" size="sm">
								<b>Go back to dashboard</b>
							</Button>
						</a>
					</div>
				</div>
			</Container>

			<BottomNav />
		</div>
	);
}

const styles = {
	btn: {
		backgroundColor: "#ffa500",
		border: "none",
		color: "white",
		fontSize: "17px"
	},
	page: {	
		maxWidth: "700px",
		margin: "auto"
	}
};
