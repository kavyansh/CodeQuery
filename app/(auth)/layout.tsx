import React from 'react'
import Image from 'next/image'
import SocialAuthForm from '@/components/forms/SocialAuthForm'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex justify-center items-center min-h-screen bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10 '>
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex flex-col space-y-2.5'>
                        <h1 className='h2-bold text-dark100_light900'>Join CodeQuery</h1>
                        <p className='paragraph-regular text-dark500_light400'>
                            To get your code queried.
                        </p>
                    </div>
                    <Image src='/images/site-logo.svg' alt='CodeQuery Logo' width={50} height={50} />
                </div>
                {children}

                <SocialAuthForm />
            </section>
        </main>
    )
}

/**
 * Route Groups in Next.js:
 * - Create logical groupings of routes that share common layouts or functionality
 * - Each group can have its own layout component wrapping children
 * - Layout components inherit from parent layouts by default
 * - Optional: Groups can use parent layout if no specific layout is defined
 */