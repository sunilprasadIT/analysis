import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Sunilprasad's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[70px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
          <header className="flex flex-row sm:flex-col justify-between items-center w-full p-[15px] sm:gap-10">
            <Img src="images/img_group_642.svg" alt="image" className="h-[50px] ml-[149px] md:ml-5" />
            <div className="flex flex-row justify-between items-start w-[30%] sm:w-full mr-[166px] md:mr-5">
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  Home
                </Heading>
                <div className="h-[6px] w-[6px] bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="text-center">
                <Link to="/about">
                  About
                </Link>
              </Heading>
              <Heading as="h6" className="text-center">
                Works
              </Heading>
              <Heading as="h6" className="text-center">
                Contact
              </Heading>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col items-center justify-start w-full gap-[95px] md:px-5 max-w-[1181px]">
              <div className="h-[646px] w-full relative">
                <div className="flex flex-col items-start justify-center w-full h-full pl-[71px] pr-14 gap-[39px] left-0 bottom-0 right-0 top-0 py-[71px] m-auto md:p-5 bg-cyan-50 absolute rounded-[35px]">
                  <Text as="p" className="w-[42%] mt-[245px] ml-[3px] md:ml-0 !text-black-900_60 !leading-[35px]">
                    Maximize your business with a variety of services and services from us
                  </Text>
                  <div className="flex flex-row sm:flex-col justify-start mb-[83px] gap-6 sm:gap-5">
                    <Button size="md" className="sm:px-5 font-bold min-w-[201px] rounded-[5px]">
                      Contact Us
                    </Button>
                    <Button size="md" variant="outline" className="sm:px-5 font-bold min-w-[201px] rounded-[5px]">
                      About Us
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-center items-start w-[94%] h-full right-0 bottom-0 top-0 my-auto md:gap-5 absolute">
                  <Heading size="6xl" as="h1" className="flex w-[55%] mt-[45px] md:mt-0 z-[1]">
                    <span className="text-black-900">Maximize your business with </span>
                    <span className="text-red-400_01">us</span>
                  </Heading>
                  <Img
                    src="images/img_group_665.png"
                    alt="image_one"
                    className="w-[50%] md:w-full md:h-[473px] ml-[-44px] md:ml-0 object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[33px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="4xl" as="h2">
                    Meet our team
                  </Heading>
                  <a href="#" className="mt-[11px]">
                    <Heading size="lg" as="h3" className="!text-red-400_01 text-right">
                      View All
                    </Heading>
                  </a>
                </div>
                <div className="flex flex-row md:flex-col w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-[32%] md:w-full mb-1 gap-[39px]">
                    <Img
                      src="images/img_rectangle_16.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-3">
                      <Heading size="xl" as="h4" className="!text-gray-800_01">
                        Sarah Jae
                      </Heading>
                      <Text as="p" className="!text-black-900_68">
                        Branding Specialist
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-[35px]">
                    <Img
                      src="images/img_rectangle_15.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[39%] md:w-full gap-3 py-1">
                      <Heading size="xl" as="h5" className="!text-gray-800_01">
                        John Doe
                      </Heading>
                      <Text as="p" className="!text-black-900_68 text-center">
                        Product Designer
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[32%] md:w-full mb-[5px] gap-[39px]">
                    <Img
                      src="images/img_rectangle_17.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-3">
                      <Heading size="xl" as="h6" className="!text-gray-800_01 text-center">
                        Samantha
                      </Heading>
                      <Text as="p" className="!text-black-900_68 text-center">
                        SEO Specialist
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                <Heading size="4xl" as="h1">
                  What we do
                </Heading>
                <div className="flex flex-row justify-center w-full px-14 py-28 md:p-5 bg-red-50 rounded-[90px]">
                  <div className="flex flex-row md:flex-col w-[85%] mb-1.5 gap-[102px] mx-[27px] md:gap-10 sm:mx-5">
                    <div className="flex flex-col items-start justify-start w-[23%] md:w-full gap-9 my-[35px] md:mt-0 cursor-pointer hover:shadow-xs">
                      <Button color="red_300" shape="round" className="w-[46px]">
                        <Img src="images/img_group_670.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <Heading size="xl" as="h4">
                          UIUX Design
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          We can make your website or application design better with this service
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[31%] md:w-full gap-[34px] p-[25px] sm:p-5 bg-white-A700 shadow-xs cursor-pointer rounded-[30px] hover:shadow-xs">
                      <Button color="cyan_400" shape="round" className="w-[46px] mt-3">
                        <Img src="images/img_support_1.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start mb-2 gap-[15px]">
                        <Heading size="xl" as="h4">
                          Website Dev
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          Make your business more leverage by having an optimal website and we are ready to help
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[27%] md:w-full gap-9 my-[35px] md:mt-0 cursor-pointer hover:shadow-xs">
                      <Button color="lime_800" shape="round" className="w-[46px]">
                        <Img src="images/img_idea_1.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <Heading size="xl" as="h4">
                          Branding & Product
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          we can also help you in the affairs of product branding so that your products can be more
                          riveting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Button
                  color="red_400_01"
                  size="lg"
                  shape="circle"
                  className="w-[68px] ml-[124px] md:ml-5 z-[1] border-white-A700 border-[9px] border-solid"
                >
                  <Img src="images/img_group_682.svg" />
                </Button>
                <div className="h-[525px] w-full mt-[-34px] relative">
                  <Img
                    src="images/img_bg.png"
                    alt="bg_one"
                    className="justify-center h-[525px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-center justify-center w-full h-full gap-[61px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                      <Heading size="4xl" as="h1">
                        What our clients are saying
                      </Heading>
                      <div className="flex flex-row justify-start w-[13%] md:w-full mt-0.5 gap-[9px] md:mt-0">
                        <div className="flex flex-row justify-start w-[48%]">
                          <div className="flex flex-row justify-center w-full p-[11px] bg-red-400_01">
                            <Img src="images/img_frame_660.svg" alt="image_two" className="h-[16px] mx-[7px]" />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[48%]">
                          <div className="flex flex-row justify-center w-full p-[11px] bg-red-400_01">
                            <Img src="images/img_frame_661.svg" alt="image_three" className="h-[16px] mx-[7px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col w-full gap-[30px]">
                      <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-5 p-[30px] sm:p-5 bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5 md:ml-0">
                          I am very satisfied with the work on the Nexus team. good service, satisfying work results and
                          can also increase my business turnover. Thank you so much to the Nexus team.
                        </Text>
                        <div className="flex flex-row justify-start w-[60%] md:w-full mb-[11px] ml-1.5 gap-[25px] md:ml-0">
                          <Img
                            src="images/img_rectangle_52.png"
                            alt="image"
                            className="w-[49px] md:h-auto object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[61%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              John Richard
                            </Heading>
                            <Text size="xs" as="p">
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-5 p-[30px] sm:p-5 bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5 md:ml-0">
                          since branding with the oracle team i feel my business has a very fast and good development,
                          everything also always goes through a process of discussion that is really valid
                        </Text>
                        <div className="flex flex-row justify-start w-[63%] md:w-full mb-[11px] ml-1.5 gap-6 md:ml-0">
                          <Img
                            src="images/img_rectangle_52_49x49.png"
                            alt="image"
                            className="w-[49px] md:h-auto object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[63%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              Andrew Smith
                            </Heading>
                            <Text size="xs" as="p">
                              Founder Ulala
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-5 p-[30px] sm:p-5 bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5 md:ml-0">
                          I can say, this team is indeed extraordinarily perfect. I will do a lot of teamwork with this
                          team next time. I do not hesitate to cooperate because the results are very satisfying
                        </Text>
                        <div className="flex flex-row justify-start w-[54%] md:w-full mb-[11px] ml-1.5 gap-[25px] md:ml-0">
                          <Img
                            src="images/img_rectangle_52_1.png"
                            alt="image"
                            className="w-[49px] md:h-auto object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[56%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              Steve John
                            </Heading>
                            <Text size="xs" as="p">
                              CEO rumahku
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full sm:w-full pt-[47px] px-[47px] md:pt-5 md:px-5 rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
