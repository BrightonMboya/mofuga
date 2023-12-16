import BlurImage from "../ui/BlurImage";

export default function Index({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="h-[60px] w-[60px] relative">
      <BlurImage imageUrl={imageUrl} rounded={true} preload={false} />
    </div>
  );
}
