import React from 'react';
import styles from "./Sidenav.styles.scss";
import { LogOut, Truck, UserPlus, Users, ShoppingCart, DollarSign } from 'react-feather';

export function Sidenav() {
    return (
        <div className={styles.sidenav}>
            <div class = "Sidenav">
                <div class="Logo" style={{backgroundImage: "url(/img/gsa_logo.png)"}}></div>
                <div class="Separator"></div>
                <a href="http://localhost:3000/" class="SidenavBtn hover">
                    <ShoppingCart class="Icon noHover"/>
                    <div class="SidenavBtnText noHover">Start Transaction</div>
                </a>
                <a href="http://localhost:3000/" class="SidenavBtn">
                    <Truck class="Icon noHover"/>
                    <div class="SidenavBtnText noHover">View Products</div>
                </a>
                <a href="http://localhost:3000/" class="SidenavBtn">
                    <UserPlus class="Icon noHover"/>
                    <div class="SidenavBtnText noHover">Create User</div>
                </a>
                <a href="http://localhost:3000/" class="SidenavBtn">
                    <DollarSign class="Icon noHover"/>
                    <div class="SidenavBtnText noHover">Sales Report</div>
                </a>
                <a href="http://localhost:3000/" class="SidenavBtn">
                    <Users class="Icon noHover"/>
                    <div class="SidenavBtnText noHover">Support</div>
                </a>
                <div class="Separator"></div>
                <a href="http://localhost:3000/" class="SignOutBtn">
                    <div class="SignOutBtnText">
                        Sign Out<LogOut class="Icon-Exit noHover"/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sidenav;