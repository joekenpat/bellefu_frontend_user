import React, { useState } from 'react';
import {
	Card,
	Badge,
	Image,
	Button,
	Tooltip,
	OverlayTrigger,
    Modal
} from "react-bootstrap";
import { AiOutlineTag } from "react-icons/ai";
import { GoLocation, GoPencil } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import pic from "../images/pic.jpg";
import { Link } from 'react-router-dom';
import Axios from 'axios';

const ExpiredAdItem = (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const onDelete = (slug) => {
    props.setLoadingg(true)
    Axios.get(`https://dev.bellefu.com/api/user/product/delete/${slug}`, {
        headers: {
            Authorization: `Bearer ${props.user.token}`,
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
                <Image src={props.data.images[0]} style={props.styles.image} />
            </td>
            <td>
                <p style={props.styles.titel}>
                    Freshly processed onions for worldwide bulk delivery Freshly
                </p>

                <Badge
                            variant="danger"
                            className={`${
                                props.data.plan === "free"
                                    ? "d-none"
                                    : "d-block" ||
                                    props.data.plan === "featured"
                                    ? "d-none"
                                    : "d-block" ||
                                    props.data.plan === "higlighted"
                                    ? "d-none"
                                    : "d-block"
                            }`}>
                            Urgent
                        </Badge>
                        <Badge
                            variant="warning"
                            className={`${
                                props.data.plan === "free"
                                    ? "d-none"
                                    : "d-block" ||
                                    props.data.plan === "ugent"
                                    ? "d-none"
                                    : "d-block" ||
                                    props.data.plan === "higlighted"
                                    ? "d-none"
                                    : "d-block"
                            }`}>
                            Featured
                        </Badge>
                        <Badge
                            variant="success"
                            className={`${
                                props.data.plan === "free"
                                    ? "d-none"
                                    : "d-block" ||
                                    props.data.plan === "ugent"
                                    ? "d-none"
                                    : "d-block" ||
                                    props.data.plan === "featured"
                                    ? "d-none"
                                    : "d-block"
                            }`}>
                            Higlighted
                        </Badge>

                <div className="mt-3">
                    <AiOutlineTag style={props.styles.icon} className="mr-2" />
                    <span style={props.styles.category} className="ml-2 mt-3">
                        Agricultural Produce
                    </span>
                    <span style={props.styles.subCategory} className="ml-2 mt-5">
                        Grains
                    </span>
                </div>
                <div className="mt-3">
                    <GoLocation style={props.styles.icon} className="mr-1" />
                    <span style={props.styles.location} className="ml-1 ">
                        port harcourt
                    </span>
                    <MdDateRange style={props.styles.icon} className="mr-1 ml-1" />
                    <span style={props.styles.date} className="ml-1 ">
                        Expiring: 02-May-23
                    </span>
                    <span  className="ml-2" style={props.styles.price}>$100</span>
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
                            <Button size="lg" variant="light">
                                <GoPencil style={{ color: "green" }} />
                            </Button>
                        </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 100 }}
                        overlay={props.deleteTooltip}>
                        <Button size="lg" variant="light">
                            <IoMdTrash onClick={handleShow}  style={{ color: "red" }} />
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
        </tr>
    )
}

export default ExpiredAdItem;