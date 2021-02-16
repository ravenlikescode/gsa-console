import React from 'react';
import styles from "./Sidenav.styles.scss";
import { LogOut, Truck, UserPlus, Users, ShoppingCart, DollarSign } from 'react-feather';


export function Sidenav() {
    return (
        <div className={styles.sidenav}>
            <div class = "Sidenav">
                <div class="Logo" style={{backgroundImage: "url(/img/gsa_logo.png)"}}></div>
                <div class="Separator"></div>
                <div class="SidenavBtnContainer">
                    <a href="http://localhost:3000/" class="SidenavBtn">
                        <ShoppingCart class="Icon"/>
                        <div class="SidenavBtnText">Start Transaction</div>
                    </a>
                    <a href="http://localhost:3000/" class="SidenavBtn">
                        <Truck class="Icon"/>
                        <div class="SidenavBtnText">View Products</div>
                    </a>
                    <a href="http://localhost:3000/" class="SidenavBtn">
                        <UserPlus class="Icon"/>
                        <div class="SidenavBtnText">Create User</div>
                    </a>
                    <a href="http://localhost:3000/" class="SidenavBtn">
                        <DollarSign class="Icon"/>
                        <div class="SidenavBtnText">Sales Report</div>
                    </a>
                    <a href="http://localhost:3000/" class="SidenavBtn">
                        <Users class="Icon"/>
                        <div class="SidenavBtnText">Support</div>
                    </a>
                </div>
                <div class="Separator"></div>
                <a href="http://localhost:3000/" class="SignOutBtn">
                    <div class="SignOutBtnText">
                        Sign Out<LogOut class="Icon-Exit"/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sidenav;