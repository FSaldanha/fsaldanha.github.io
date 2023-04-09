import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  page?: string
}

const openMenu = () => document.querySelector(".page")?.classList.toggle("open-menu");

export default function Layout({ children, title, page }: Props) {
  return (
    <div className={`page page-${page}`}>
      <svg id="grad-bg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"></svg>
      <Head>
        <title>{page != "home" ? `${title} | ` : ""}Felipe Saldanha</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Front-end developer" />
        <meta property="og:image" content="/photo.jpg" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
              `,
          }}
        />
      </Head>
      <header>
        <ul>
          <li className="brand"><Link href="/"><a><span>Felipe Saldanha</span></a></Link> <i onClick={openMenu}><span>Menu</span></i></li>
          <li className={page == "about" ? "active" : ""}><Link href="/about"><a><span>About</span></a></Link></li>
          <li className={page == "projects" ? "active" : ""}><Link href="/projects"><a><span>Projects</span></a></Link></li>
          <li className={page == "positions" ? "active" : ""}><Link href="/positions"><a><span>Positions</span></a></Link></li>
          <li className={page == "education" ? "active" : ""}><Link href="/education"><a><span>Education</span></a></Link></li>
        </ul>
      </header>
      <main>
        <div className="container">
          {page != "home" && <h1>{title}</h1>}
          {children}
        </div>
      </main>
    </div>
  )
}
