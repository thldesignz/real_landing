import Footer from "../Footer/Footer";
import Header1 from "../Header/Header1/Header1";


export default function MainLayout (props) {
    return(
        <div>
            <Header1 />
            <main  >{props.children}</main>
            <Footer />
        </div>
    )
}