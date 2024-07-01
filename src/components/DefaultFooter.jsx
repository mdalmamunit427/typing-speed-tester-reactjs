import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const DefaultFooter = () => {
  return (
    <Footer className="mt-12">
    <div className="w-full bg-[#0F3C91]">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div className="text-white">
          <Footer.Title title="Company" className="text-white"/>
          <Footer.LinkGroup col className="text-white">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Brand Center</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="text-white">
          <Footer.Title title="help center" className="text-white"/>
          <Footer.LinkGroup col className="text-white">
            <Footer.Link href="#">Discord Server</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="text-white">
          <Footer.Title title="legal" className="text-white" />
          <Footer.LinkGroup col className="text-white">
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="text-white">
          <Footer.Title title="download" className="text-white"/>
          <Footer.LinkGroup col className="text-white">
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <hr />
      <div className="w-full  px-4 py-6 sm:flex sm:items-center sm:justify-between text-white">
        <Footer.Copyright href="#" by="TypingCat™" year={2024} className="text-white" />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
          <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
          <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
          <Footer.Icon className="text-white" href="#" icon={BsGithub} />
          <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default DefaultFooter