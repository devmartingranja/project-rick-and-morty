import NavigationFilter from "@/components/navigationFilter/NavigationFilter";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto grid grid-cols-5 grid-rows-1 h-screen">
      <section className="col-start-1 col-end-6 row-start-1 lg:col-span-2 bg-white overflow-auto">
        <NavigationFilter />
      </section>
      {children}
    </main>
  );
}
