import React, { useState, useEffect } from "react";
import CurrencyFormat from 'react-currency-format';
import {
	
	OverlayTrigger,
	
} from "react-bootstrap";

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
                        <CurrencyFormat value={props.data.alt_price_info.alt_price} displayType={'text'} thousandSeparator={true} prefix={props.data.alt_price_info.alt_symbol} />
                        {/* {props.data.alt_price_info.alt_symbol}
                        {props.data.alt_price_info.alt_price} */}
                    </span>
                ) : (
                    <span>
                        <CurrencyFormat value={props.data.price} displayType={'text'} thousandSeparator={true} prefix={props.data.currency_symbol} />
                        {/* {props.data.currency_symbol}
                        {props.data.price} */}
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
                    <span onClick={onConvert} className="cursor ml-1"
                    style={{
                        fontSize: "0.9em",
                        cursor: "pointer",
                        fontSize: "12px",
                        color: "#ffa500"
                    }}>convert</span>
            </OverlayTrigger>
            )}
            
        </span>
    )
}

export default Price;