import { Outlet } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TopBar from "./Topbar";

export default function LandingPage() {

    return <>
        <TopBar></TopBar>
        <Navbar></Navbar>
        {/* <Hero></Hero> */}
        <Outlet></Outlet>
    </>

}