import DetailCharacter from "@/components/detailCharacter/DetailCharacter";

export default function Page({ params }: { readonly params: { id: string } }) {
  return <DetailCharacter />;
}
