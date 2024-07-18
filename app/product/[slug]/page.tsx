"use client";

import { useParams } from "next/navigation";
export default function About() {
  const params = useParams();
  return (
    <main>
      this is Product Page
      Dennis Ferdian
      <p>      
        slug: {params.slug}
      </p>
    </main>
  )
}
