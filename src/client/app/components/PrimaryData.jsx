import React, { Component } from 'react';
import { render } from 'react-dom';
import Viz from './Viz';
import FormParent from './FormParent';
import {Grid, Row, Col} from 'react-bootstrap';
class PrimaryData extends Component{
	render()
	{
		return(
		<div> 
			<div>
				<p>hi its data ur brother</p>
			</div>
			<div>
				<Grid>
    				<Row className="show-grid">
    				  <Col sm={8} md={8} lg={8}><Viz/></Col>
    				  <Col sm={4} md={4} lg={4}><FormParent/></Col>
    				</Row>
				</Grid>
			</div>
		</div>
		);
	}
}
export default PrimaryData;