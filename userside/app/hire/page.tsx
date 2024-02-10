import TextDetails from "@/components/common/text-details";
import Button from "@/components/factory/Button";
import { Input } from "@/components/factory/Input";
import { DivImage } from "@/components/ui/DivImage";
import { NextPage } from "next";
import { ReactElement } from "react";

const Hire: NextPage = (): ReactElement => {
    return (
        <section className="flex flex-col gap-[10rem] my-[2rem]">
            <div className="hero relative w-[90vw] m-auto min-h-[60vh] flex items-center bg-[url('/girl.png')] bg-cover bg-center">
                {/* <Image src="/hero.png" alt="hero" className="absolute z-[-1] inset-0" /> */}
                <div className="flex flex-col justify-center gap-2 pl-[7vw] max-w-[96%] md:max-w-[70%] py-[10vh] ">
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
                className="min-h-[80vh] md:min-h-[90vh] w-[90vw] m-auto "
                innerClassName="flex items-center flex-col "
                active
                src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            >
                <TextDetails
                title="Hire a Model"
                subtitle="Discover Your Perfect Fit: Hire a Model Today"
                ></TextDetails>

                <div className="form flex-1 flex flex-col flex-wrap items-center gap-3">
                    <div className="flex gap-2">
                        <select id="models" className="w-full min-w-[20vw] text-gray-500 bg-transparent border border-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Choose a country</option>
                            <option selected value="US">Aayusha Poudel</option>
                            <option value="Aayusha Poudel">Aayusha Poudel</option>
                            <option value="Aayusha Poudel">Aayusha Poudel</option>
                            <option value="Aayusha Poudel">Aayusha Poudel</option>
                        </select>
                        <Input type="text" placeholder="Subject"></Input>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="relative w-[300px] min-w-[20vw]">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input type="text" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                        </div>
                        <Input type="text" placeholder="Phone"></Input>
                    </div>
                    <div className="flex gap-2 w-full">
                        <textarea placeholder="Your Message" className=" border rounded-md w-full active:border-primary min-w-[20vw] p-3 outline-white text-white bg-transparent focus:outline-none focus:shadow-outline placeholder:text-disabled" rows={5}></textarea>
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
                    <Button className="bg-tertiary">Submit</Button>
                </div>
            </DivImage>
        </section>
    )
}

export default Hire;