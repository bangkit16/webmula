export default function RootLayout({ children }: LayoutProps<"/">) {
  // Locale layout lives at /[locale]. Root layout is just a passthrough so Next can
  // resolve both / and /[locale] from a single root segment.
  return children;
}

export const metadata = {
  title: "Webmula",
};