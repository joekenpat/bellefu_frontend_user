import React from 'react'
import {Link} from "react-router-dom"

export default function LegalPage() {
    return (
        <div>
            <div style={{maxWidth: '700px', margin: 'auto', marginTop: "5%"}}>
            <Link to="/policy" style={{color: 'inherit', textDecoration: 'inherit'}}>
             <p style={{fontWeight: "bold", color: '#ffa500'}}>Policy and Privacy</p>
             </Link>
             <Link to="/terms&condition" style={{color: 'inherit', textDecoration: 'inherit'}}>
             <p style={{fontWeight: "bold", color: '#ffa500', marginBottom: "50%"}}>Terms and Conditions</p>
             </Link>
            </div>
        </div>
    )
}
