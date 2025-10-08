"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { minLength, z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"


const formSchema = z.object({
    name: z.string().min(1, {
      message: "Companion is Required."
    }),
    subject: z.string().min(1, {
        message: "Subject is Required."
      }),
    topic: z.string().min(1, {
        message: "Topic is Required."
    }),
    voice: z.string().min(1, {
        message: "Voice is Required."
      }),
    style: z.string().min(1, {
        message: "Style is Required."
    }),
    duration: z.number().min(1, {
        message: "Duration is Required."
      }),
  })

const CompanionForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },
    })
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Companion Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the companion name" {...field} className="input" />
                        </FormControl>
                            
                        <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select the subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map((subject) => (
                                        <SelectItem
                                            value={subject}
                                            key={subject}
                                            className="capitalize"
                                        >
                                            {subject}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                            
                        <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>What should the companion help with?</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Ex. Calculus" {...field} className="input" />
                        </FormControl>
                            
                        <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Voice</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className="input">
                                    <SelectValue placeholder="Select the voice" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">
                                        Male
                                    </SelectItem>
                                    <SelectItem value="female">
                                        Female
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                            
                        <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Style</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select the style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="formal">
                                            Formal
                                    </SelectItem>
                                    <SelectItem value="casual">
                                            Casual
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                            
                        <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Estimated duration in minutes</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="15" {...field} className="input" />
                        </FormControl>
                            
                        <FormMessage />
                    </FormItem>
                    
                )}
                />
                <Button type="submit" className="w-full cursor-pointer">Build your companion</Button>
            </form>
        </Form>
    )
}

export default CompanionForm