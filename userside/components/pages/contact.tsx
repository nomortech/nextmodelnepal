"use client"
import { useRef, useState } from "react";
import TextDetails from "../common/text-details";
import Button from "../factory/Button";
import { Input } from "../factory/Input";
import { DivImage } from "../ui/DivImage";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<any>();

  const submitForm = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_4oslyoe', 'template_u8hnjxs', form.current, {
      publicKey: 'Gh4Z2-Xi2q-F3Pnju'
    })
      .then((response) => {
        alert("Email Sent Successfully");
        console.log('Email sent successfully!', response.status, response.text);
        // Add any success handling here (e.g., show a success message)
      }, (error) => {
        alert("Error Sending Email")
        console.error('Email failed to send.', error);
        // Add any error handling here (e.g., show an error message)
      });
  }

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

      <form onSubmit={submitForm} ref={form} className="form flex-1 flex flex-col flex-wrap items-center gap-3">
        <div className="flex gap-2">
          <Input type="text" placeholder="Name" name="name" required></Input>
          <Input type="text" placeholder="Subject" name="subject" required></Input>
        </div>
        <div className="flex gap-2">
          <Input type="email" placeholder="Email" name="email" required></Input>
          <Input type="tel" placeholder="Phone" name="phone" required></Input>
        </div>
        <div className="flex gap-2 w-full">
          <textarea placeholder="Your Message" required name="message" className=" border rounded-md w-full active:border-primary min-w-[20vw] p-3 outline-white text-white bg-transparent focus:outline-none focus:shadow-outline placeholder:text-disabled" rows={5}></textarea>
          {/* <Input type="textarea" placeholder="Your Message"></Input> */}
        </div>
        {/* <div className="flex gap-2">
          <Input type="text" placeholder="Full Name"></Input>
          <Input type="text" placeholder="Full Name"></Input>
        </div>
        <div className="flex gap-2">
          <Input type="text" placeholder="Full Name"></Input>
          <Input type="text" placeholder="Full Name"></Input>
        </div> */}
        <Button className="bg-tertiary" type="submit">Submit</Button>
      </form>
    </DivImage>
  );
}
