import { NextResponse } from "next/server";

// To Handle Private Routes
export default function middleware(req) {

    let verify = req.cookies.get("jwt")?.value;
  
    let url = req.url
    //console.log(url)

   // if (!verify && url.includes('/dashboard')) {
   //     return NextResponse.redirect("http://localhost:3000/login");
   // }

    if (!verify && url === "https://sufi-expertia-ais.vercel.app/") {
        return NextResponse.redirect("https://sufi-expertia-ais.vercel.app/login");
    }

    if (verify && url === "https://sufi-expertia-ais.vercel.app/login") {
        return NextResponse.redirect("https://sufi-expertia-ais.vercel.app");
    }

    if (verify && url === "https://sufi-expertia-ais.vercel.app/register") {
        return NextResponse.redirect("https://sufi-expertia-ais.vercel.app");
    }

}


