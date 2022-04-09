import React  from "react";
import Layout from "../../../common/Layout/layout";
import AboutUs from "./About-us";
import Blogs from "./Blogs";
import FAQ from "./FAQ";
import Hero from "./Hero";
import HowItWorks from "./How-it-works";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
const LandPage=()=>{
    return(
        <Layout>
            <Hero/>
            <Partners/>
            <AboutUs/>
            <HowItWorks/>
            <Blogs/>
            <FAQ/>
            <Testimonials/>
        </Layout>
    )

}
export default LandPage