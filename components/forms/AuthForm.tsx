"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import Link from "next/link"
import ROUTES from "@/constants/routes"


const getButtonText = (formType: "SIGN_IN" | "SIGN_UP", isSubmitting: boolean) => {
    if (formType === "SIGN_IN") {
        return isSubmitting ? "Signing In" : "Sign In"
    }
    return isSubmitting ? "Signing Up" : "Sign Up"
}

interface AuthFormProps<T extends FieldValues> {
    schema: z.ZodType<T>,
    defaultValues: T,
    onSubmit: (data: T) => Promise<{ success: boolean, data: T }>,
    formType: "SIGN_IN" | "SIGN_UP",
}
export default function AuthForm<T extends FieldValues>({ formType, schema, defaultValues, onSubmit }: AuthFormProps<T>) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    })

    const handleSubmit = async () => {
        // TODO:  authenticate user
    }

    const buttonText = getButtonText(formType, form.formState.isSubmitting)

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 mt-10">
            {Object.keys(defaultValues).map((fieldName) => {

                return <FormField
                    control={form.control}
                    key={fieldName}
                    name={fieldName as Path<T>}
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full  gap-2.5">
                            <FormLabel className="paragraph-medium text-dark400_light700">{field.name === "email" ? "Email address" : field.name?.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                            <FormControl>
                                <Input className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border" required type={field.name === "password" ? "password" : "text"} placeholder={defaultValues[fieldName]} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            })}

            <Button className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900" disabled={form.formState.isSubmitting}>{buttonText}</Button>
            {formType === "SIGN_IN" ? <p>
                Don't have an account? <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">
                    Sign up</Link>
            </p> : <p>
                Already have an account? <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">
                    Sign in</Link>
            </p>}
        </form>
    </Form>
}