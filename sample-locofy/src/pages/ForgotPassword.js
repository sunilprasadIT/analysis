import "antd/dist/antd.min.css";
import { Input, Button } from "antd";

const ForgotPassword = () => {
  return (
    <div className="w-full relative rounded-25xl bg-gray h-[960px] overflow-hidden text-left text-base text-black font-text-2">
      <div className="absolute top-[230px] left-[70px] rounded-[50%] bg-mediumorchid [filter:blur(350px)] w-[500px] h-[500px]" />
      <div className="absolute top-[32px] left-[640px] rounded-21xl bg-bg w-[768px] h-[896px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[16px] w-[736px] h-[865px] object-cover"
          alt=""
          src="/drip-20@2x.png"
        />
      </div>
      <div className="absolute top-[40px] left-[40px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/frame.svg"
        />
        <div className="relative tracking-[0.01em] font-medium">
          Sunilprasad
        </div>
      </div>
      <div className="absolute top-[221px] left-[140px] w-[360px] h-[517px] text-sm text-secondary-color">
        <div className="absolute top-[496px] left-[140px] text-center inline-block w-[360px] h-[21px]">
          <span className="leading-[24px]">Don’t have an account?</span>
          <span className="leading-[20px] font-medium text-blue">
            <span className="text-base text-black">{` `}</span>
            <span>Sign up</span>
          </span>
        </div>
        <div className="absolute top-[432px] left-[0px] rounded-lg box-border w-[360px] flex flex-col items-center justify-center py-2.5 px-[90px] text-base border-[1px] border-solid border-accent-1">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/google.svg"
            />
            <div className="relative leading-[20px] font-medium">
              Sign in with
            </div>
          </div>
        </div>
        <Input
          className="[border:none] [outline:none] font-medium font-text-2 text-base bg-[transparent] absolute top-[372px] left-[0px] text-white"
          placeholder="Sign In"
          type="text"
        />
        <div className="absolute top-[320px] left-[0px] flex flex-row items-center justify-start gap-[113px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="w-4 relative rounded box-border h-4 overflow-hidden shrink-0 border-[1px] border-solid border-accent-1" />
            <div className="relative leading-[20px] font-medium">
              Remember me
            </div>
          </div>
          <div className="relative leading-[20px] font-medium text-blue">
            Forgot Password?
          </div>
        </div>
        <div className="absolute top-[228px] left-[0px] flex flex-col items-start justify-center gap-[8px]">
          <div className="relative leading-[20px] font-medium">
            Enter your password
          </div>
          <div className="w-[360px] relative rounded-lg box-border h-11 overflow-hidden shrink-0 text-base text-accent-2 border-[1px] border-solid border-accent-1">
            <div className="absolute top-[10px] left-[14px] flex flex-row items-center justify-start gap-[236px]">
              <div className="relative leading-[24px]">••••••••</div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/hide-icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[136px] left-[0px] flex flex-col items-start justify-center gap-[8px]">
          <div className="relative leading-[20px] font-medium">
            Enter your email
          </div>
          <div className="w-[360px] relative rounded-lg box-border h-11 overflow-hidden shrink-0 text-center text-base text-accent-2 border-[1px] border-solid border-accent-1">
            <div className="absolute top-[10px] left-[14px] flex flex-row items-center justify-start gap-[115px]">
              <div className="w-[193px] relative leading-[24px] inline-block shrink-0">
                debra.holt@example.com
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/x-icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-center gap-[8px] text-21xl">
          <b className="relative tracking-[0.01em] capitalize">
            Forgot Password
          </b>
          <div className="relative text-base leading-[24px] text-accent-2">
            Please fill your detail to access your account.
          </div>
        </div>
      </div>
      <Button
        className="absolute top-[687px] left-[-17px]"
        size="middle"
        shape="default"
        type="primary"
      >
        Button
      </Button>
      <i className="absolute top-[900px] left-[40px] leading-[20px] text-accent-2">
        @CreatedbyNAMDesign
      </i>
    </div>
  );
};

export default ForgotPassword;
