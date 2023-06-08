const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-markazi font-normal xs:text-[48x] text-[48px] text-secondary xs:leading-[50px] leading-[66.8px]",
    menu: "font-poppins font-normal text-[16px] leading-[30.8px]",
    paragraph: "font-markazi font-normal text-dimWhite text-[20px] leading-[30.8px]",
    paragraph_subTitle: "font-markazi font-normal text-primary text-[20px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-6 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;