import { NextResponse } from "next/server";

// To Handle Private Routes
export default function middleware(req) {

    let verify = req.cookies.get("jwt")?.value;
  
    let url = req.url
    //console.log(url)

   // if (!verify && url.includes('/dashboard')) {
   //     return NextResponse.redirect("http://localhost:3000/login");
   // }

    if (!verify && url === "http://localhost:3000/") {
        return NextResponse.redirect("http://localhost:3000/login");
    }

    if (verify && url === "http://localhost:3000/login") {
        return NextResponse.redirect("http://localhost:3000");
    }

    if (verify && url === "http://localhost:3000/register") {
        return NextResponse.redirect("http://localhost:3000");
    }

}


