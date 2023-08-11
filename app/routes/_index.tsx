

import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/style.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return <div>Hello Index Route</div>;
}