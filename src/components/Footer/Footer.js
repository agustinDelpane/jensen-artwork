import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footer">
            {<img src={require("../../img/brand.png")} alt="Logo" className="logoFooter"></img>}
            <br />
            <div className="navegacion">
                {/*Navegacion*/}
                <h3 className="h3Navegacion">Navegación</h3>
                {/*link*/} Inicio
                <br />
                {/*link todos los cuadros */} Productos
                <br />
                {/*link*/} Sobre mí
                <br/>   
            </div>

            <div className="contacto">
                {/*Contacto*/}
                <h3 className="h3Contacto">Contacto</h3>
                {/*link*/} <img src={require("../../img/ig.png")} alt="Instagram" className="logoIg"></img>
                <br />
                {/*link*/}Contacto
                <br />
                <img src={require("../../img/pin.png")} alt="Pin" className="pin" ></img> Bernal, Buenos Aires
            </div>
        </div>
    )
}

export default Footer