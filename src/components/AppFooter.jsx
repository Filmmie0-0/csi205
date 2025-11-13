const AppFooter = () => {
    return (
        <div className="text-center"style={{marginTop: "5px",height: "250px",backgroundImage: "url('./image/forest.gif')", backgroundSize: "cover",backgroundPosition: "center",}}>
            <div>
                <h4 className=" text-white">SPU-SIT-CSI</h4>
            </div>
            <div className=" d-flex justify-content-center">
                <a href="https://www.facebook.com/SPUsripatumuniversity"><i class="bi bi-facebook fs-1 text-white"></i></a>&nbsp;
                 <div style={{width: "2px",height: "60px",backgroundColor: "white",}}></div>
                &nbsp;<a href="https://www.instagram.com/sripatum_spu/"> <i className="bi bi-instagram fs-1 text-white"></i></a>&nbsp;
                 <div style={{width: "2px",height: "60px",backgroundColor: "white",}}></div>
                &nbsp;<i class="bi bi-envelope-fill fs-1 text-white"></i>
            </div>
            <div className="  text-light justify-content-between">rattapum19761976@gmail.com</div>
        </div>
    );
};

export default AppFooter;
