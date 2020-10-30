import React from 'react';
import { Modal, Badge,
	Image,
    Button, OverlayTrigger, Form, Container } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { AiOutlineTag, AiOutlineEye, AiFillCaretUp,  } from "react-icons/ai";
import { GoLocation, GoPencil } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


const AdTableItem = (props) => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [plan, setPlan] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow1(true);

  const onChange = (e) => {
    setPlan(e.target.value)
    
  }

  const onSubmit = (e) => {
    history.push(`/payment/${props.data.slug}/${plan}`);
  }
  
  const onDelete = (slug) => {
      props.setLoadingg(true)
    Axios.get(`https://dev.bellefu.com/api/user/product/delete/${slug}`, {
        headers: {
            Authorization: `Bearer ${props.token}`,
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then((res) => {
        props.setLoadingg(false)
        console.log(res)
        props.onAdDelete(slug)
    }).catch((e) => {
        props.setLoadingg(false)
        console.log('error: ', e)
    })
    handleClose()
}
return (
    <tr>
            <td className="uk-text-center">
                <Image
                    src={`https://dev.bellefu.com/images/products/${props.data.slug}/${props.data.images[0]}`}
                    style={props.styles.image}
                />
            </td>
            <td>
                <p style={props.styles.title}>{props.data.title}</p>

                <Badge
                            pill
                                variant={props.data.plan === 'urgent' ? 'danger' : props.data.plan === 'highlighted' ? 'success' : 'warning'}
                                className={`${
                                    props.data.plan === "free"
                                        ? "d-none"
                                        : "d-block"
                                }`}>
                                {props.data.plan}
                            </Badge>

                <div className="mt-3">
                    <AiOutlineTag style={props.styles.icon} className="mr-2" />
                    <span style={props.styles.category} className="ml-2 mt-3">
                        {props.data.category.name}
                    </span>
                    <span style={props.styles.subCategory} className="ml-2 mt-5">
                        {props.data.subcategory.name}
                    </span>
                </div>
                <div className="mt-3">
                    <GoLocation style={props.styles.icon} className="mr-1" />
                    <span style={props.styles.location} className="ml-1 ">
                        {props.data.address}
                    </span>
                    <MdDateRange
                        style={props.styles.icon}
                        className="mr-1 ml-1"
                    />
                    <span style={props.styles.date} className="ml-1 ">
                        {props.data.created_at}
                    </span>
                    <span className="ml-2" style={props.styles.price}>
                        {props.data.currency_symbol}
                        {props.data.price}
                    </span>
                </div>
            </td>
            <td>
                <Badge
                    style={{ backgroundColor: "#b8e6b8", color: "white" }}
                    className="ml-2">
                    active
                </Badge>
            </td>
            <td>
                <div className="btn-group" role="group">
                     <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 100 }}
                        overlay={props.upgradeTooltip}>
                    
                            <Button size="sm" variant="light">
                                <AiFillCaretUp onClick={() => setShow1(true)} style={{ color: "#ffa500" }} />
                            </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 100 }}
                        overlay={props.viewTooltip}>
                        <Link
                            to={{
                                pathname: `/product_detail/${props.data.slug}`,
                                state: props.data.slug
                            }}
                            style={{
                                color: "inherit",
                                textDecoration: "inherit"
                            }}>
                            <Button size="sm" variant="light">
                                <AiOutlineEye style={{ color: "#ffa500" }} />
                            </Button>
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 100 }}
                        overlay={props.editTooltip}>
                        <Link
                            to={{
                                pathname: `/edit_ad/${props.data.slug}`,
                                state: props.data.slug
                            }}
                            style={{
                                color: "inherit",
                                textDecoration: "inherit"
                            }}>
                            <Button size="sm" variant="light">
                                <GoPencil style={{ color: "green" }} />
                            </Button>
                        </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 100 }}
                        overlay={props.deleteTooltip}>
                        <Button size="sm" variant="light">
                            <IoMdTrash onClick={handleShow} style={{ color: "red" }} />
                        </Button>
                    </OverlayTrigger>
                </div>
            </td>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button style={{backgroundColor: '#FFA500', color: 'white', border: 'none'}} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => onDelete(props.data.slug)} style={{backgroundColor: 'red', color: 'white', border: 'none'}}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
            <Modal.Title>
                <Container>
                Select a Plan
                </Container>
            </Modal.Title>
                <Modal.Body>
                    <Container>
                                <Form.Label
									className="mt-3"
									style={{ opacity: "0.4", fontSize: "0.8em" }}>
								</Form.Label>

								<select
									className="uk-select cursor"
									name="plan"
									value={plan}
									onChange={onChange}
									>
									<option hidden>{'>>>>'} select category {"<<<<"}</option>
                                    <option
                                        className="cursor"
                                        value="free"
                                        selected={props.data.plan === "free" ? true : false}>
                                            free
                                    </option>
									<option
                                        className="cursor"
                                        value="urgent"
                                        selected={props.data.plan === 'urgent' ? true : false}>
                                            urgent  ${props.fee.urgent_upgrade_fee}
                                    </option>
                                    <option
                                        className="cursor"
                                        value="highlighted"
                                        selected={props.data.plan === "highlighted" ? true : false}>
                                            highlighted  ${props.fee.highlighted_upgrade_fee}
                                    </option>
                                    <option
                                        className="cursor"
                                        value="featured"
                                        selected={props.data.plan === "featured" ? true : false}>
                                            featured  ${props.fee.featured_upgrade_fee}
                                    </option>
								</select>
                               
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onSubmit} style={{backgroundColor: '#FFA500', color: 'white', border: 'none'}} variant="secondary">
                        go to payment
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
)
}

export default AdTableItem