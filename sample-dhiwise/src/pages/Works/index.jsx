import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";

export default function WorksPage() {
  return (
    <>
      <Helmet>
        <title>Sunilprasad's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-row sm:flex-col justify-between items-center w-full p-[15px] sm:gap-10">
            <Img src="images/img_group_642.svg" alt="image" className="h-[50px] ml-[149px] md:ml-5" />
            <div className="flex flex-row justify-between items-start w-[30%] sm:w-full mr-[166px] md:mr-5">
              <Heading as="h6" className="text-center">
                Home
              </Heading>
              <Heading as="h6" className="text-center">
                About
              </Heading>
              <div className="flex flex-col items-center justify-start w-[13%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  Works
                </Heading>
                <div className="h-[6px] w-[6px] bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="text-center">
                Contact
              </Heading>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[88%] md:w-full mt-[54px] mr-14 gap-[111px] md:mr-5">
            <div className="flex flex-row justify-center w-full p-1 mx-auto md:px-5 bg-green-A100 max-w-[1180px] rounded-[90px]">
              <div className="flex flex-col items-start justify-start w-[97%] mt-[55px] mx-[22px] sm:mx-5">
                <div className="flex flex-row justify-between items-start w-[80%] md:w-full">
                  <Img
                    src="images/img_rectangle_57.svg"
                    alt="image_one"
                    className="h-[114px] w-[114px] rounded-[10px]"
                  />
                  <div className="h-[14px] w-[14px] mt-3 bg-deep_orange-A100 rounded-[50%]" />
                </div>
                <div className="flex flex-row md:flex-col justify-between items-start w-[75%] md:w-full mt-[25px] ml-[109px] md:gap-10 md:ml-5">
                  <div className="h-[14px] w-[14px] mt-[49px] md:mt-0 bg-light_blue-400 rounded-[50%]" />
                  <div className="flex flex-col items-end justify-start w-[93%] md:w-full gap-[75px]">
                    <Heading size="5xl" as="h1" className="flex mr-[232px] md:mr-5 text-center">
                      <span className="text-black-900">What we </span>
                      <span className="text-red-400_01">do</span>
                      <span className="text-black-900"></span>
                    </Heading>
                    <Text as="p" className="text-center !leading-10">
                      We have completed many projects from various companies in the world, we have made many of our
                      clients feel happy and satisfied with the results we have provided
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[98%] md:w-full mt-1.5 ml-[26px] md:ml-0 sm:ml-5">
                  <Img src="images/img_group_776.svg" alt="image_two" className="h-[114px] w-[114px] mt-[31px]" />
                  <div className="flex flex-row justify-between items-start w-[22%]">
                    <Img
                      src="images/img_polygon_1.svg"
                      alt="polygonone_one"
                      className="h-[196px] w-[196px] mt-[7px] rounded-[15px]"
                    />
                    <div className="h-[14px] w-[14px] bg-deep_purple-800 rounded-[50%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-11">
              <div className="flex flex-row md:flex-col justify-between items-start w-[59%] md:w-full md:gap-10">
                <Heading size="4xl" as="h2">
                  Latest Project
                </Heading>
                <Text as="p" className="mt-2.5 md:mt-0">
                  this is the last variety of projects we have worked on
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[105px]">
                <div className="flex flex-row justify-start w-full mx-auto md:px-5 max-w-[1180px]">
                  <div className="h-[527px] w-full relative">
                    <Img
                      src="images/img_group_21.png"
                      alt="image_three"
                      className="h-[482px] w-[67%] sm:w-full bottom-0 right-0 m-auto object-cover absolute"
                    />
                    <div className="h-[496px] w-full top-0 right-0 left-0 m-auto absolute">
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[328px] left-0 bottom-0 right-0 top-0 p-11 m-auto md:p-5 bg-orange-A200 absolute rounded-[30px]">
                        <Heading
                          size="3xl"
                          as="h3"
                          className="ml-14 md:ml-5 !text-white-A700 !font-nunito !font-extrabold"
                        >
                          Foodie.
                        </Heading>
                        <div className="h-[2px] w-[7%] mb-7 ml-14 md:ml-5 bg-white-A700" />
                      </div>
                      <Heading
                        size="3xl"
                        as="h4"
                        className="w-[26%] bottom-[29%] left-[9%] m-auto !text-white-A700 absolute"
                      >
                        Launching website for Apps
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="h-[580px] w-full relative">
                  <Img
                    src="images/img_group_790.png"
                    alt="image_four"
                    className="h-[456px] w-[57%] sm:w-full right-0 top-[7%] m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[95%] h-full left-0 bottom-0 top-0 my-auto absolute">
                    <div className="flex flex-col items-start justify-center w-full pl-[63px] pr-14 py-[63px] md:p-5 bg-indigo-800 rounded-[30px]">
                      <Heading
                        size="3xl"
                        as="h5"
                        className="ml-[38px] md:ml-0 sm:ml-5 !text-transparent bg-gradient bg-clip-text"
                      >
                        Floops
                      </Heading>
                      <Heading
                        size="3xl"
                        as="h6"
                        className="w-[29%] mt-[190px] ml-[38px] md:ml-0 sm:ml-5 !text-white-A700"
                      >
                        Landing page for Website Service
                      </Heading>
                      <div className="h-[2px] w-[7%] mt-[68px] mb-[17px] ml-[38px] md:ml-0 sm:ml-5 bg-white-A700" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mx-auto md:px-5 max-w-[1181px]">
                  <div className="h-[580px] w-full bg-red-A200 relative rounded-[30px]">
                    <div className="flex flex-row md:flex-col justify-between items-center w-[92%] h-full right-0 bottom-0 top-0 my-auto md:gap-10 absolute">
                      <div className="flex flex-col items-start justify-start w-[28%] md:w-full">
                        <div className="flex flex-row justify-start items-center gap-4">
                          <Img
                            src="images/img_group_51_1.png"
                            alt="image_five"
                            className="w-[31%] md:h-auto sm:w-full object-cover"
                          />
                          <Img src="images/img_insight.svg" alt="insight_one" className="h-[32px]" />
                        </div>
                        <Heading size="3xl" as="h2" className="mt-[173px] !text-white-A700">
                          Website for creative agency
                        </Heading>
                        <div className="h-[2px] w-[24%] mt-[68px] bg-white-A700" />
                      </div>
                      <Img
                        src="images/img_web_1920_2_1.png"
                        alt="web19202one_one"
                        className="w-[35%] md:w-full md:h-[580px] object-cover rounded-[30px]"
                      />
                    </div>
                    <Img
                      src="images/img_web_1920_2_1_580x1181.png"
                      alt="web19202one"
                      className="justify-center h-[580px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full sm:w-full mt-[110px] pt-[47px] px-[47px] md:pt-5 md:px-5 rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
