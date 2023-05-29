import { NextRequest, NextResponse, userAgent } from "next/server";

const devices = ["mobile", "tablet", "desktop"];
export function middleware(request: NextRequest) {
    const { device } = userAgent(request);
    const viewport = (device.type && devices.includes(device.type) && device.type) || "desktop";

    request.nextUrl.searchParams.set("viewport", viewport);
    return NextResponse.rewrite(request.nextUrl);
}

// add all pages
export const config = {
    matcher: ["/", "/about"],
};
