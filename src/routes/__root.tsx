import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
} from "@tanstack/react-router";
import { useEffect } from "react";

import heartIcon from "@/assets/heart.svg";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-blue">404</p>
        <h1 className="mt-3 text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-navy/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-navy px-6 text-sm font-medium text-white hover:bg-navy/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-navy/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center rounded-full bg-navy px-6 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center rounded-full border border-navy px-6 text-sm font-medium text-navy"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Charleston Medicine and Behavioral Health | Whole-Person Care in Charleston" },
      {
        name: "description",
        content:
          "Integrated concierge medicine, behavioral health, and wellness on James Island, Charleston. Whole-person care, elevated.",
      },
      { name: "author", content: "Charleston Medicine and Behavioral Health" },
      { property: "og:site_name", content: "Charleston Medicine and Behavioral Health" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Charleston Medicine and Behavioral Health | Whole-Person Care in Charleston" },
      { property: "og:image", content: "https://charlestonmedicine.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Charleston Medicine and Behavioral Health | Whole-Person Care in Charleston" },
      { name: "twitter:image", content: "https://charlestonmedicine.com/og-image.png" },
      { name: "theme-color", content: "#1B2B6B" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: heartIcon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Charleston Medicine and Behavioral Health",
          telephone: "+1-843-913-8558",
          email: "info@charlestonmedicine.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "125-A Wappoo Creek Dr, Ste. 202-A",
            addressLocality: "Charleston",
            addressRegion: "SC",
            postalCode: "29412",
            addressCountry: "US",
          },
          openingHours: ["Mo-Th 09:00-17:00", "Fr 09:00-12:00"],
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { pathname } = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <SiteHeader />
      <main key={pathname} className="animate-in fade-in duration-300">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </QueryClientProvider>
  );
}
