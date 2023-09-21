"use client";
import Link from "next/link";
import React from "react";

import Button from "@/components/Button";
import HookForm from "@/components/Form/form";
import { registerSchema } from "@/components/Form/schema/registerSchema";
import Input from "@/components/Form/Input";
import SimpleLabel from "@/components/Form/SimpleLabel";
import { useRouter } from "next/navigation";
import { DollarIcon, TimeIcon, UserIcon2 } from "@/public/SvgIcons";

const Register = () => {
  const router = useRouter();

  //   const onSubmit = (data: any) => {
  //     alert(
  //       JSON.stringify({
  //         ...data,
  //         action: "request_for_loan",
  //       })
  //     );
  //   };

  //   const onSubmit = async (data: any) => {
  //     try {
  //       const response = await fetch("https://okigwecreations.online/api/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ ...data, action: "request_for_loan" }),
  //       });

  //       const responseData = await response.json();
  //       console.log("Successfully register for loan request", responseData);
  //     } catch (error) {
  //       console.error("Error while submitting form:", error);
  //     }
  //   };

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch(`https://okigwecreations.online/api/`, {
        method: "POST",
        body: JSON.stringify({
          ...data,
          action: "request_for_loan",
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      if (res.status == 200) {
        console.log("Loan request registered successfully");
        // setTimeout(() => router.push("/"), 5000);
      }
    } catch (error) {
      console.log("Error while submitting form:", error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="w-full py-6">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="sm:mx-auto sm:w-2/3 md:w-1/2 lg:w-2/5">
            <div className="mb-16">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white" />
                  <div className="h-6 w-2 bg-defaultColor" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Gallery Gems
                </span>
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px ">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                <HookForm onSubmit={onSubmit} schema={registerSchema}>
                  <div className="space-y-8">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Get Started for free
                      </h1>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                        Already have an account?{" "}
                        <Link
                          className="text-blue-600 dark:text-blue-400"
                          href="/login"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <SimpleLabel
                          title=" Full Name or Business Name"
                          htmlFor="name"
                        />
                        <Input
                          label="Enter your fullname or business"
                          name="full_name"
                          leadingIcon={<UserIcon2 />}
                          placeholder="John Alexander "
                          //   hintText="This is a hint text to help your fullanme."
                          floatLabel
                        />
                      </div>

                      <div>
                        <SimpleLabel title="Loan Amount" htmlFor="name" />
                        <Input
                          label=" Your loan amount"
                          name="loan_amount"
                          leadingIcon={<DollarIcon />}
                          type="number"
                          placeholder="Enter your Loan amount"
                          floatLabel
                          // feedBack="FEEDBACK.ALL"
                        />
                      </div>

                      <div>
                        <SimpleLabel
                          title="Repayment Duration"
                          htmlFor="name"
                        />
                        <Input
                          label="Repayment Period Duration"
                          name="repayment_duration"
                          leadingIcon={<TimeIcon />}
                          type="number"
                          placeholder="Enter your repayment duration"
                          floatLabel
                        />
                      </div>
                    </div>
                    <Button className="w-full">Register</Button>
                  </div>
                </HookForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
