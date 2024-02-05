import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <div>
            <h2>Home page</h2>
            <Link href="/about">Go to about page</Link>
        </div>
    )
}
