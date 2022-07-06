function Footer() {

    const currYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-gray-700
    text-primary-content footer-center">

            <div>
                {/* <svg>

                </svg> */}
                <p>Copyright &copy; {currYear} All rights reserved</p>
            </div>

        </footer>
    )
}
export default Footer