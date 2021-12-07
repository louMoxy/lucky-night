import {theme} from "../utils/theme";
import {ThemeProvider} from '@mui/material'
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Layout = ({ children }: {children: JSX.Element}) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Lucky Night Studio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="p:domain_verify" content="701955f314f687328349d8e2b6719dcf"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/kbe1tld.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    )
}
