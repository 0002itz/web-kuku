import FooterButton from "../components/Footer_button.jsx";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="p-5">
                <div className="grid grid-cols-3 justify-center text-center font-medium p-5 text-gray-500 sm:text-md darkt:text-gray-400">
                    <div>
                        <a className="text-Title_color" href="/">Kukulc4n.com © 2025 </a>
                        <FooterButton>
                            <a href="/Terms&Conditions">Terms and Conditions</a>
                            <a href="/PrivacyPolicy">Privacy Policy</a>
                        </FooterButton>
                    </div>
                    <div>
                        <h2 className="text-Title_color">Contacto:</h2>
                        <FooterButton>
                            <a href="https://www.instagram.com/" slot="insta">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/" slot="face">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/" slot="tiktok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                                </svg>
                            </a>
                        </FooterButton>
                    </div>
                    <div>
                        <h2 className="text-Title_color">Web Made By:</h2>
                        <FooterButton>
                            0002itz
                        </FooterButton>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;