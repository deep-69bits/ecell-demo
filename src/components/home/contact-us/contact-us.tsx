import Image from "next/image"
import Link from "next/link"

import email from "@/assets/image/email.png"
import insta from "@/assets/image/instagram.png"
// import image from 'next/image'
import phone from "@/assets/image/phone.png"
// import image1 from 'next/image'
const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container h-full bg-[#060A0F] p-14 text-white md:h-screen">
        <span className="bg-gradient-to-r from-[#FE3DCE] to-[#26AFE6] bg-clip-text text-5xl font-bold text-transparent xl:text-6xl">
          Contact Us
        </span>
        <div className="flex flex-col items-center justify-center">
          <div className=" font-semiboldbold my-24 grid grid-cols-1 justify-items-center gap-28 text-xl md:grid-cols-3 lg:gap-80 lg:text-2xl">
            <div className="email  flex w-fit flex-col items-center justify-center rounded-full text-center">
              <Image src={email} className="-mt-4 w-32" alt="email"></Image>
              <div className="flex flex-col">
                <span>ecell@iiitl.ac.in</span>
                <span>enspire@iiitl.ac.in</span>
              </div>
            </div>
            <div className="instagram w-fit rounded-full text-center ">
              <a href="https://www.instagram.com/ecell_iiitl/">
                <Image src={insta} className="w-28 pb-5" alt="insta"></Image>
                <span>ecell_iiitl</span>
              </a>
            </div>
            <div className="phone w-fit rounded-full text-center">
              <Image src={phone} className="w-28 pb-5" alt="phone"></Image>
              <span>1234567890</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactUs
