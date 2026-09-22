import Link from "next/link";
import { Navigation } from "@/components/navigation/navigation";

export default function NotFound() {
  return <><Navigation /><main id="main-content" tabIndex={-1} style={{ padding: "6rem var(--page-gutter)", minHeight: "70svh" }}><p>404 / PAGE NOT FOUND</p><h1>This page isn’t here.</h1><Link href="/work">Return to the work index ↗</Link></main></>;
}
