import Link from 'next/Link';
import Head from 'next/head';



export default function Header(props) {
    return(
        <div>
            <header className="header" >
            <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/styles/pages.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      
      <a href="/">
        <img alt="Logo TreinaCook" src="/img/logo.svg"></img>
      </a>
     
      </header>

        </div>
    )
}