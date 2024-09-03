// Footer component for footer section

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Created By
            <i class="fa-solid fa-heart"></i>
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