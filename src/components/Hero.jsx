import styles from "../style";
import { discount, robot} from "../assets";
import GetStarted from "./GetStarted";
import takumifujiwara from '../assets/takumifujiwara.png';
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-20`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">86%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Change </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          World's Mindset.
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          
        In Westvurm, we use advanced methodologies to ensure member satisfaction. 
        Our experts employ a systematic approach to identify the optimal car 
        tuning modifications for your needs.

        </p>
      </div>
    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

      <div className="w-[100%] h-[100%] relative z-[10]">
          <img src={takumifujiwara} alt="Takumi Fujiwara" className="w-full h-full" />
        </div>

        <div className="w-full relative z-[5] overflow-hidden" style={{ animation: 'float 1.5s infinite' }}>
  <img src={robot} alt="billing" className="w-full h-auto object-cover" />
</div>



        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;