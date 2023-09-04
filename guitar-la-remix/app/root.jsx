import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/Components/header'
import Footer from '~/Components/footer'
export function meta() {
    return[
        {
            charset:'utf-8',
            title:'GuitarLA- Remix',
            viewport:'witdh=device-width,initial-scale=1'
        }
    ]
        
    
}

export function links() {
    return[
        {
            rel:'stylesheet',
            href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'stylesheet',
            href:styles
        }
        
    ]
}

export default function App() {
    return(
        <Document>
            <Outlet/>
        </Document>
    )
}

function Document({children}) {
    return(
        <html lang = "es">
            <head>
                <Meta />
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
                
            </body>
        </html>
    )
}