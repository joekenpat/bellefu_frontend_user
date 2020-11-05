import React from 'react';
import { AiOutlineTag, AiOutlineEye } from "react-icons/ai";
import { GiHeartMinus } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import {
	Card,
	Badge,
	Image,
	Button,
	Tooltip,
	OverlayTrigger
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Axios from 'axios';

const FavouriteItem = (props) => {
    const onUnlike = (slug) => {
        props.setLoadingg(true)
      Axios.get(`https://bellefu.com/api/user/product/favourite/remove/${slug}`, {
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
  }
    return (
        <tr>
            <td className="uk-text-center">
                <Image src={`https://bellefu.com/images/products/${props.data.slug}/${props.data.images[0]}`} style={props.styles.image} />
            </td>
            <td>
                <p style={props.styles.titel}>{props.data.title}</p>
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
                    <IoMdTime style={props.styles.icon} className="mr-1 ml-1" />
                    <span style={props.styles.date} className="ml-1">
                        02-May-23
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
                            <Button size="lg" variant="light">
                                <AiOutlineEye style={{ color: "green" }} />
                            </Button>
                        </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 100 }}
                        overlay={props.unlikeTooltip}>
                        <Button size="lg" variant="light">
                            <GiHeartMinus onClick={() => onUnlike(props.data.slug)} style={{ color: "red" }} />
                        </Button>
                    </OverlayTrigger>
                </div>
            </td>
        </tr>
    )
}

export default FavouriteItem