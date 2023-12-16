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
      <div className="relative flex cursor-pointer items-center space-x-4 hover:bg-blue-50">
        <Avatar imageUrl={imageUrl} />
        <div>
          <h3>{sender}</h3>
          <p>{body}</p>
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
