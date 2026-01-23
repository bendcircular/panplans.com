import { Outlet } from "react-router";
import { Header } from "~/components/header";

/**
 * Website layout - includes the header.
 * Used for pages that need the main site header (e.g., home page).
 */
export default function WebsiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
