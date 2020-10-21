import React, { useState, useEffect } from "react";
import {
	
	OverlayTrigger,
	
} from "react-bootstrap";
import { BsArrowLeftRight } from "react-icons/bs";

const Price = (props) => {
    const [convert, setConvert] = useState(false)

    const onConvert = () => {
        setConvert(!convert)
    }
    return(
        <span>
            <span className="mr-1 ml-1 " style={props.styles.price}>
                {convert ? (
                    <span>
                        {props.data.alt_price_info.alt_symbol}
                        {props.data.alt_price_info.alt_price}
                    </span>
                ) : (
                    <span>
                        {props.data.currency_symbol}
                        {props.data.price}
                    </span>
                )
            }
            </span>
           
            {props.data.alt_price_info && (
                <OverlayTrigger
                style={{zindex: 999}}
                placement="bottom"
                delay={{ show: 50, hide: 100 }}
                overlay={props.convertTooltip}>
                <BsArrowLeftRight
                    onClick={onConvert}
                    className="cursor ml-1"
                    style={{
                        fontSize: "0.9em",
                        cursor: "pointer",
                        fontSize: "20px",
                        color: "#ffa500"
                    }}
                />
            </OverlayTrigger>
            )}
        </span>
    )
}

export default Price;