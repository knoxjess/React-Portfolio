import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-35 bg-[#A62F03] pt-5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-1xl text-[#F29F05]">
            Jessica Gonzalez
          </p>
          <p className="font-playfair text-md text-[#F29F05]">
            ©2023 JG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
