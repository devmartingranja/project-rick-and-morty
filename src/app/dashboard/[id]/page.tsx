import DetailCharacter from "@/components/detailCharacter/DetailCharacter";

export const dynamic = "force-dynamic";

export default function Page({
  params: { id },
}: {
  readonly params: { id: string };
}) {
  return <DetailCharacter id={id} />;
}
