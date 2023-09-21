"use client";
import Link from "next/link";
import React from "react";
// import { toast } from "react-toastify";
import Button from "@/components/Button";
import HookForm from "@/components/Form/form";
import { loginSchema } from "@/components/Form/schema/loginSchema";
import SimpleLabel from "@/components/Form/SimpleLabel";
import Input from "@/components/Form/Input";

import { EmailIcon, PasswordIcon } from "@/public/SvgIcons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const loginData = {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
      redirect: false,
    };

    const login = await signIn("credentials", loginData);

    if (login?.error === null) {
      router.push("/gallery");
      toast.success("Successfully Logged in...");
    } else {
      toast.error("Login failed. Wrong Credentials");
    }
  };

  // const result = await signIn("credentials", {
  //   email: data.email,
  //   password: data.password,
  //   // redirect: true,
  //   // callbackUrl: "/image-gallery",
  //   callbackUrl: "/",
  //   redirect: false,
  // });
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
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 ">
                <HookForm onSubmit={onSubmit} schema={loginSchema}>
                  <div className="space-y-8">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Signin to your account
                      </h1>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                        Don&apos;t have an account?
                        <Link
                          className="text-blue-600 dark:text-blue-400"
                          href="/register"
                        >
                          {" "}
                          Sign Up
                        </Link>{" "}
                        for a free.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <SimpleLabel title="Email address" htmlFor="name" />
                        <Input
                          label="Enter your email address"
                          name="email"
                          leadingIcon={<EmailIcon />}
                          placeholder="Alexander@example.com"
                          floatLabel
                        />
                      </div>
                      <div>
                        <SimpleLabel title="Password" htmlFor="name" />
                        <Input
                          label="Enter your password"
                          name="password"
                          leadingIcon={<PasswordIcon />}
                          type="password"
                          placeholder="****************"
                          floatLabel
                        />
                      </div>
                    </div>
                    <Button className="w-full">Login</Button>
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

export default Login;
