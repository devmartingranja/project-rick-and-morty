import NavigationFilter from "@/components/navigationFilter/NavigationFilter";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto grid grid-cols-5 grid-rows-1 h-screen">
      <section className="col-start-1 col-end-6 row-start-1 bg-white overflow-auto lg:col-span-2 lg:bg-slate-50">
        <NavigationFilter />
      </section>
      {children}
    </main>
  );
}
