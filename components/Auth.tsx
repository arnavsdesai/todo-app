"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .max(128, 'Password cannot exceed 128 characters')
        .regex(/.*[A-Z].*/, 'Password must contain at least one uppercase letter')
        .regex(/.*[a-z].*/, 'Password must contain at least one lowercase letter')
        .regex(/.*\d.*/, 'Password must contain at least one number')
        .regex(/.*[!@#$%^&*()].*/, 'Password must contain at least one special character'),
})

function AuthForm({ authType }: { authType: string }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your password..." type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">{authType}</Button>
            </form>
        </Form>
    )
}

export function Signup() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" className="font-bold text-2xl w-28 h-12">Sign up</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-bold text-2xl">Sign up</DialogTitle>
                </DialogHeader>
                <AuthForm authType="Sign up" />
            </DialogContent>
        </Dialog>
    )
}

export function Login() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" className="font-bold text-2xl w-24 h-12">Log in</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-bold text-2xl">Log in</DialogTitle>
                </DialogHeader>
                <AuthForm authType="Log in" />
                <div>
                    <Link href="#">
                        <p className="text-muted-foreground text-sm underline underline-offset-2 hover:text-primary">Forgot Password?</p>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}