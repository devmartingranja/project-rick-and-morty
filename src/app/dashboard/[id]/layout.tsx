import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <section className="bg-white col-start-1 col-end-6 row-start-1 lg:col-span-3 z-10">
      <Link className="py-6 px-4 block lg:hidden  w-fit" href="/dashboard">
        <Image
          src="/icons/arrow_left.svg"
          alt="Return"
          width={24}
          height={24}
        />
      </Link>
      <article className="px-6">{children}</article>
    </section>
  );
}
