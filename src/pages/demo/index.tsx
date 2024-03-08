import React from 'react'; // Add import statement for 'React' module
import Link from 'next/link'
 
export const kakezan = (a:number, b:number):number => {
  return a * b;
}

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <p>こんにちわ</p>
    </div>
  )
}