import React from "react";
import { Navbar } from 'react-bootstrap';
import "../App.css";
import { NavLink } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" id="my-nav">
                <Navbar.Brand className="app-logo" >
                    Notes Manger
                </Navbar.Brand>
            </Navbar>
            <div className="sidebar">
            <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                 
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <NavLink exact to="/api/notes" activeclassName="activeClicked">
                            <CDBSidebarMenuItem icon="list">Notes List</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/api/notesManager" activeclassName="activeClicked">
                            <CDBSidebarMenuItem icon="book">Manage Notes</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
            </div>
        </div>
    )
}

export default Navigation;
