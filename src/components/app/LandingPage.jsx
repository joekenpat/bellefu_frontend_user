import React, { lazy, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
const LandingPageItem = lazy(() =>
  import("./LandingPageItem")
);

const Skeleton = () => {
	return (
		<div style={{width: '100%', height: '100vh'}}>
				<div style={{height: '10vh', width: '100%'}} className="skel-mask-navv skel-mask-all"></div>
				<div style={{height: '45vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className="skel-mask skel-mask-all">
					<h2 className="d-none d-lg-block" style={{alignSelf: 'center', color: 'white',}}>Bellefu - digital agro connect...</h2>
					<h3 className="d-block d-lg-none mt-4" style={{fontSize: '22px', alignSelf: 'center', color: 'white',}}>Bellefu - digital agro connect...</h3>
					
					<div className="d-lg-block d-none" style={{alignSelf: 'center', width: '75%', height: '70px', borderRadius: '10px', marginTop: '5px', backgroundColor: 'white'}} />
					<div className="d-block d-lg-none" style={{marginTop: '5px', alignSelf: 'center', width: '90%', height: '50px', borderRadius: '5px', backgroundColor: 'white'}} />
					<div className="d-block d-lg-none" style={{marginTop: '5px', alignSelf: 'center', width: '90%', height: '50px', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white'}} />
					<div className="d-block d-lg-none" style={{marginTop: '5px', alignSelf: 'center', width: '90%', height: '50px', borderRadius: '5px', marginTop: '10px', backgroundColor: '#b5b5b5'}} />
				</div>
		</div>
	)
}


export default function LandingPage(props) {
	

	return (
		<div>
			<Suspense fallback={<Skeleton />}>
				<LandingPageItem {...props} />
			</Suspense>
		</div>
	);
}
