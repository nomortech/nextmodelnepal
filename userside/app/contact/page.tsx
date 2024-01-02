import TextDetails from "@/components/common/text-details";
import Button from "@/components/factory/Button";
import { Input } from "@/components/factory/Input";
import { DivImage } from "@/components/ui/DivImage";

export default function Page() {
  return (
    <section className="flex flex-col gap-[10rem] my-[2rem]">
      <div className="hero relative w-[90vw] m-auto min-h-[60vh] flex items-center bg-[url('/girl.png')] bg-cover bg-center">
        {/* <Image src="/hero.png" alt="hero" className="absolute z-[-1] inset-0" /> */}
        <div className="flex flex-col justify-center gap-2 pl-[7vw] max-w-[70%] py-[10vh] ">
          <h1 className="font-bold">Your chance to shine ✨awaits!</h1>
          <h2 className="text-[4rem] leading-tight tracking-tighter font-semibold ">
            Contact US for Audition
          </h2>
          <p className=" text-balance text-[1.2rem]">
            Are you ready to step into the spotlight and showcase your talent?
            Contact us today to schedule your audition with Next Models Nepal
          </p>
          <div className="flex gap-2">
            <Button>Apply for Audition</Button>
            <Button variant="secondary">Contact Next Model Nepal</Button>
          </div>
        </div>
      </div>
      <DivImage
        alt="contact"
        className="min-h-[90vh] w-[90vw] m-auto "
        innerClassName="flex items-center flex-col "
        active
        src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      >
        <TextDetails
          title="Become a Top Model"
          subtitle="Ready to make it big in modeling? Our tailored training and industry expertise will propel you to the top. Your journey to becoming a top model begins here."
        ></TextDetails>

        <div className="form flex-1 flex flex-col flex-wrap items-center gap-3">
          <div className="flex gap-2">
            <Input type="text" placeholder="Full Name"></Input>
            <Input type="text" placeholder="Full Name"></Input>
          </div>
          <div className="flex gap-2">
            <Input type="text" placeholder="Full Name"></Input>
            <Input type="text" placeholder="Full Name"></Input>
          </div>
          <div className="flex gap-2">
            <Input type="text" placeholder="Full Name"></Input>
            <Input type="text" placeholder="Full Name"></Input>
          </div>
          <div className="flex gap-2">
            <Input type="text" placeholder="Full Name"></Input>
            <Input type="text" placeholder="Full Name"></Input>
          </div>
          <div className="flex gap-2">
            <Input type="text" placeholder="Full Name"></Input>
            <Input type="text" placeholder="Full Name"></Input>
          </div>
          <Button>Submit</Button>
        </div>
      </DivImage>
    </section>
  );
}
