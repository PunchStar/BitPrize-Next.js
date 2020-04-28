import Head from 'next/head';
import Navbar from "./navbar";
const Layout = (props) => (
    <div>
        <Head>
            <title>BetzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.css"></link>
        </Head>
        <Navbar/>
        <div className ="container">
            {props.children}
        </div>
    </div>
);
export default Layout;