import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "in.kitchenchimneyservices",
        sha256_cert_fingerprints: [
          "2F:1E:13:B3:89:E2:1F:83:09:A7:4E:E1:54:CF:F6:07:6F:09:1D:B3:41:06:78:A7:23:EF:07:85:3B:CC:44:9E",
        ],
      },
    },
  ]);
}
