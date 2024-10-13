import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" bg-[#383638]">
      <div className="container mx-auto px-6 pt-2 sm:pt-6">
        <div className="flex flex-col sm:flex-row justify-between  flex-wrap my-6">
          <div className="flex bg-white rounded-lg mt-4 px-6 py-3 sm:mb-[130px]">
            <div className="flex items-center">
            <img src="../images/Infinytics2.svg" width={100} alt="logo-error" />
            </div>
          </div>
          <div>
            <div className="text-white text-[22px] font-bold font-Quicksand py-3">
            Terms & Policies
            </div>
            <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3" >
            <Link to="/terms-condition">Terms & Condition</Link> 
            </div>
            <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
            <Link to="/policy">Privacy Policy</Link> 
            </div>
          </div>
        
          <div>
            <div className="text-white text-[22px] font-bold font-Quicksand py-3">
              Contact{" "}
            </div>
            <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
            <a href="mailto:info@infinytics.com">
             info@infinytics.com
             </a>
        </div>
          </div>
          <div>
            <div className="text-white text-[22px] font-bold font-Quicksand py-3">
              Location
            </div>
            <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
            129, NH - 515 
            </div>
            <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
            Rangkop Tiniali
            </div>
            <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
            Jonai, Assam  787060
            </div>
          </div>
        </div>
        <div className="">
          <div className="footer_icon flex justify-center gap-6 ">
             <a href="https://www.linkedin.com/company/infinytics" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="border border-white text-5xl px-2 text-gray-800 bg-white rounded-full" />
              </a>
              <a href="mailto:info@infinytics.com">
                <HiOutlineMail className="border border-white text-5xl px-2 text-gray-800 bg-white rounded-full" />
              </a> 
          </div>
          <hr className="w-[500px] mx-auto  mt-4 footer_hr pb-5" />
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
