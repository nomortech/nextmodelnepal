import TextDetails from "../common/text-details";
import Button from "../factory/Button";
import { Input } from "../factory/Input";
import { DivImage } from "../ui/DivImage";

export default function Contact() {
  return (
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
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
          <Input
            type="text"
            placeholder="Full Name"
            className="h-fit flex-1"
          ></Input>
        </div>
        <Button>Submit</Button>
      </div>
    </DivImage>
  );
}
