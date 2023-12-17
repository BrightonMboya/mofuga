import Avatar from "./Avatar";
import Link from "next/link";

interface MessagePreviewProps {
  name: string;
  imageUrl: string;
  submittedAt: string;
  body: string;
  sender: string;
  id: string;
}

export function MessagePreview({
  name,
  imageUrl,
  submittedAt,
  id,
  body,
  sender,
}: MessagePreviewProps) {
  return (
    <Link href={`/chat/${id}`}>
      <div className="hover:bg-blue/20 rounded-md p-2 relative flex cursor-pointer items-center space-x-4">
        <Avatar imageUrl={imageUrl} />
        <div className="flex flex-col">
          <div className="">
            <h3 className="font-medium">{sender}</h3>
            <p className="text-[##928D8D] absolute right-5 top-3">
              {submittedAt}
            </p>
          </div>
          <p className="text-brown">{body}</p>
        </div>
      </div>
    </Link>
  );
}

export function InboxMessage({ submittedAt, body }: MessagePreviewProps) {
  return (
    <div className="bg-green-300">
      <p>{body}</p>
      <p>{submittedAt}</p>
    </div>
  );
}
