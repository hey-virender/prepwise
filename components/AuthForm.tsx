"use client";
import React from "react";
//create dedicated toast for auth error for better clarification
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn, signUp } from "@/lib/actions/auth.action";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      if (type === "sign-in") {
        const { email, password } = values;
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const idToken = await userCredentials.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in failed");
          return;
        }
        await signIn({ email, idToken });

        toast.success("Logged in successfully");
        router.push("/");
      } else {
        const { name, email, password } = values;
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        });
        if (!result?.success) {
          toast.error(result.message);
          return;
        }
        toast.success("Account created successfully");
        router.push("/sign-in");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error ${error}`);
    }finally{
      setIsLoading(false);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
          <h3>Practice job interview with AI</h3>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                type="text"
                label="Name"
                placeholder="Your name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              type="text"
              label="Email"
              placeholder="Your Email"
            />
            <FormField
              control={form.control}
              name="password"
              type="password"
              label="Password"
              placeholder="Choose your password"
            />
            <Button className="btn" type="submit">
              {isLoading ? (
                <LoaderCircle className="animate-spin ease-linear duration-200" />
              ) : isSignIn ? (
                "Sign In"
              ) : (
                "Create an Account"
              )}
            </Button>
          </form>
          <p className="text-center">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <Link
              href={isSignIn ? "/sign-up" : "/sign-in"}
              className="font-bold text-user-primary ml-1"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
