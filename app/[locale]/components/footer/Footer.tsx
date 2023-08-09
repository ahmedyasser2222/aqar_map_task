import Image from "next/image";
import Container from "../Container";

const Footer: React.FC<{ locale: string }> = ({ locale = "ar" }) => {
  return (
    <div className="footer py-5">
      <Container>
        <div className="footer-wraper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center flex-col  ">
            <div className="flex justify-between items-center  w-full my-5">
              <Image
                src={
                  locale == "en"
                    ? "https://aqarmap.com.eg/images/logo-en-white.svg"
                    : "https://aqarmap.com.eg/images/logo-ar-white.svg"
                }
                alt="Logo"
                height="100"
                width="100"
              />
              <Image
                src={"https://aqarmap.com.eg/favicon.ico?revision-eg-211c888"}
                alt="Logo"
                height="35"
                width="35"
              />
            </div>
            <div>
              <p>
                خدمات عقارماب تساعدك على بيع وشراء العقارات بسهولة بالإضافة إلى
                تزويدك بمعلومات أساسية لإتخاذ واحد من أهم القرارات المالية في
                حياتك.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
