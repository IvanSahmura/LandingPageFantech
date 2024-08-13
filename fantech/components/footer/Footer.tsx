import FooterList from "./footerList";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-slate-200 text-black text-sm mt-16">
      <div className="flex flex-col md:flex-row  justify-between pt-16 pb-8">
        {/* Store Location */}
        <FooterList>
          <h3 className="font-bold mb-4">FANTECH</h3>
          <p className="mb-2"> Question? </p>
          <a className="block mb-4" href="https://api.whatsapp.com/send/?phone=%2B6281119094439&text=Hallo+saya+ingin+bertanya+&type=phone_number&app_absent=0" target="_">081119094439</a>

          <p className="mb-2"> Follow us!</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                <CiFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                <FiYoutube size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">
                <CiTwitter size={24} />
              </a>
            </li>
          </ul>
        </FooterList>
        
        {/* Store Location */}
        <FooterList>
          <h3 className="font-bold">Store Location</h3>
          <p>Fantech Indonesia
            Sedayu Square Blok J No. 27
            Jl. Lingkar Luar Barat Cengkareng - Jakarta Barat 11730</p>
          
        </FooterList>

        {/* Company Welcome */}
        <FooterList>
          <h3 className="font-bold">Welcome to Our Company</h3>
          <p>
            CV. GOLDEN TECHNOLOGY INDO
          </p>
          <p>
            Sedayu Square Blok J no. 26 Jl. Lingkar Luar Barat Cengkareng - Jakarta Barat 11730
          </p>
          <p>
            sales@goldentech.id
            marketingfantech@gmail.com
          </p>
          <p>
          Text for more in <br />
            Sales 1: +62 852-8333-3267 <br />
            Sales 2: +62 811-1903-2720
          </p>
        </FooterList>

        {/* Company */}
        <FooterList>
          <h3 className="font-bold">Company</h3>
          <ul className="list-none space-y-3">
            <li className="footerLi"><a href="https://fantech.id/about-us/" target="_">About</a></li>
            <li className="footerLi"><a href="https://fantech.id/contact-us/" target="_">Contacts</a></li>
            <li className="footerLi"><a href="https://fantech.id/blog/" target="_">Blog</a></li>
            <li className="footerLi"><a href="https://fantech.id/blog/" target="_">Syarat & Ketentuan</a></li>
          </ul>
        </FooterList>
        
      </div>
    </footer>

    
  );
}

export default Footer;
