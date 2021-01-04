import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Education from "./pages/Education";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Awards from "./pages/Awards";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={About}/>
                        <Route path="/Education" component={Education}/>
                        <Route path="/Experience" component={Experience}/>
                        <Route path="/Skills" component={Skills}/>
                        <Route path="/Interest" component={Interest}/>
                        <Route path="/Awards" component={Awards}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;