import React, { Component } from 'react';
import { render } from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';




class Header extends Component{
handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);}

    render(){
        return (
        <div>
          <Nav bsStyle="pills" activeKey="1" onSelect={this.handleSelect}>
        <NavItem className="NItem1" eventKey="1" href="/home">NavItem 1 content</NavItem>
        <NavItem id="NavFontColor" className="NItem1" eventKey="2" title="Item">NavItem 2 content</NavItem>
        <NavItem id="NavFontColor" className="NItem1" eventKey="3" >NavItem 3 content</NavItem>
        <NavDropdown className="NItem4" eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      </div>
        );
        	
    }
}
export default Header;
