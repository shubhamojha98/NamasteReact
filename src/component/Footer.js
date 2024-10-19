// Footer component for footer section

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer m-1 w-auto text-center px-3 py-5 rounded-md shadow-md">
            Created By
            <i className="fa-solid fa-heart px-1 text-sm text-red-600"></i>
            <a href="#" target="_blank">
                Shubham Ojha
            </a>
            <span className=""> &copy;{year}</span>
           
            <strong>
                Food<span>Hub</span>
            </strong>
        </div>
    );
};

export default Footer;