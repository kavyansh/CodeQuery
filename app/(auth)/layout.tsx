import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex justify-center items-center min-h-screen bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10 '>
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
                {children}
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