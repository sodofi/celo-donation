import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJzb3BoaWEtaGFwcHl3YXZlcy52ZXJjZWwuYXBwIn0",
      signature:
        "MHhmZDNlN2JiNTRkMTNlYmZhM2I1MzlmYTkzZGYxNDA2MzczNjlmMTNjYzMwMGE5NTYwYTY2MDQxYjlmNjBkM2VmMDljY2U4ZDRmZjA0NjQzNWFmNzhhNjIyYmVjMzI2MTllNjYyNGViNmY1OGU3OTkwYTE5MzMyYzE3NGYwNDdkMjFi",
    },
    miniapp: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      ogImageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
