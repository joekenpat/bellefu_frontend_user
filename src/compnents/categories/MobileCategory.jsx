import React from 'react'
import { Card, Row, Image, Col} from "react-bootstrap"
import agro_tools from "../images/agro_tools.png"

export default function MobileCategory() {
    return (
        <div>
          <Row>	
		  <Col xs={4} sm={4} md={4}  className=" my-1 px-1" >
				<Card  style={{height: "100%"}} className="border-0">
					<Card.Body className="text-center" >
						<Image src={agro_tools}  style={{height: "40px"}}/>
						<Card.Text style={{fontSize: "0.6em"}} className="mt-2">Agro Tools</Card.Text>
					</Card.Body >
				</Card>
			</Col> 

			<Col xs={4} sm={4} md={4}  className=" my-1 px-1" >
				<Card  style={{height: "100%"}} className="border-0">
					<Card.Body className="text-center" >
						<Image src={agro_tools}  style={{height: "40px"}}/>
						<Card.Text style={{fontSize: "0.6em"}} className="mt-2">Agro Tools</Card.Text>
					</Card.Body >
				</Card>
			</Col> 

			<Col xs={4} sm={4} md={4}  className=" my-1 px-1" >
				<Card  style={{height: "100%"}} className="border-0">
					<Card.Body className="text-center" >
						<Image src={agro_tools}  style={{height: "40px"}}/>
						<Card.Text style={{fontSize: "0.6em"}} className="mt-2">Agro Tools</Card.Text>
					</Card.Body >
				</Card>
			</Col> 

			<Col xs={4} sm={4} md={4} className=" my-1 px-1" >
				<Card  style={{height: "100%"}} className="border-0">
					<Card.Body className="text-center" >
						<Image src={agro_tools}  style={{height: "40px"}}/>
						<Card.Text style={{fontSize: "0.6em"}} className="mt-2">Agro products</Card.Text>
					</Card.Body >
				</Card>
			</Col> 
            </Row> 
        </div>
    )
}
