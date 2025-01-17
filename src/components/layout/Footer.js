import React, { useState } from "react";
import CallToAction from "../CallToAction";
import Image from "next/image";
import SocialIcons from "../common/SocialIcons";
import Newsletter from "../common/Newsletter";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const Footer = () => {
  const [showInput, setShowInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (data) => {
      handleCreateContact(data.email);
    },
  });

  async function handleCreateContact(email) {
    setIsLoading(true);
    const res = await fetch("/api/create-contact", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    if (res.status === 200) {
      setIsLoading(false);
      form.setValues({ email: "" });
      setShowInput(false);
      router.push("/thank-you?email=" + email);
    }
  }

  function handleJoinWaitlistClick() {
    if (!showInput) {
      setShowInput(true);
      return;
    }
    handleCreateContact(form.values.email);
  }

  return (
    <footer className="bg-black pb-8 pt-44 md:mt-40 mt-40  relative">
      <div className="absolute w-full top-0 -translate-y-1/2">
        <div className="px-6 mx-auto max-w-6xl">
          <CallToAction />
        </div>
      </div>
      <div className="px-6 mx-auto md:max-w-6xl w-full">
        <div className="md:grid md:grid-cols-2">
          <div className="space-y-8">
            <div className="md:flex flex-none gap-8 items-end">
              <Image
                src={"/assets/logo/footer-logo.svg"}
                width={80}
                height={113}
                alt="Logo"
              />
              <p className="text-white text-2xl font-light md:mt-0 mt-4">
                Experience the power of AI
              </p>
            </div>
            <form
              onSubmit={form?.handleSubmit}
              className="flex md:flex-nowrap flex-wrap gap-4"
            >
              <button
                className="white-btn !py-[11px] !px-[23.25px] !text-base !w-[137px]"
                type="submit"
                onClick={handleJoinWaitlistClick}
              >
                {isLoading ? (
                  <svg
                    class="animate-spin h-6 w-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Join Waitlist"
                )}
              </button>
              {showInput && (
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  className="py-4 px-6 h-12 text-base text-black rounded-lg border border-purple w-[300px] placeholder:text-gray-100 focus:outline-none"
                  placeholder="Enter your email"
                  onChange={form?.handleChange}
                  onBlur={form?.handleBlur}
                  value={form?.values.email}
                />
              )}
            </form>
          </div>
          <div className="lg:w-[433px] w-full ml-auto">
            <Newsletter />
            <SocialIcons />
          </div>
        </div>
        <hr className="mb-6 mt-11 sm:my-8 -mx-6 sm:mx-0 border-gray-500 border-opacity-20" />
        <div className="flex md:justify-between md:flex-row flex-col-reverse">
          <p className="text-gray-100 text-sm md:mt-0 mt-6">
            © 2023 W4 Labs Inc.{" "}
          </p>
          {/* <div className='flex gap-8 items-center'>
                        <a href='#' className='text-gray-500 text-sm'>Tutorials </a>
                        <a href='#' className='text-gray-500 text-sm'>Affiliates </a>
                        <a href='#' className='text-gray-500 text-sm'>Contact </a>
                    </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
