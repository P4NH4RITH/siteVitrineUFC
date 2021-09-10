const Footer = () => {
    return (
        <div className='footer'>
            <div className='sponsor'>
                <img src='../img/Venum.png' alt='venum'></img>
                <img src='../img/warrior.jpg' alt='warrior'></img>
            </div>
            <div>
                <p>
                    <a href='mailto'>Ayoub.mma@gmail.com</a>
                </p>          
                <p>    
                    <a href='https://www.facebook.com/SimplonHDF/'><i class="fab fa-facebook-square"></i></a>
                    <a href='https://twitter.com/simplonhdf?lang=fr'><i class="fab fa-twitter-square"></i></a>
                    <a href='https://fr.linkedin.com/company/simplon-hauts-de-france'><i class="fab fa-linkedin"></i></a>
                </p>
                <p>copyright<i class="far fa-copyright"></i> tous droits réservés.</p>                
            </div>
            <div className='sponsor'>
                <img src='../img/Monster.jpg' alt='monster'></img>
                <img src='../img/Metal.png' alt='monster'></img>
            </div>
        </div>
    )
}

export default Footer