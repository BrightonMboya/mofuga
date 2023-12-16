import Avatar from "./Avatar";

interface MessagePreviewProps {
  name: string;
  imageUrl: string;
  submittedAt: string;
  body: string;
  sender: string;
}

export function MessagePreview({
  name,
  imageUrl,
  submittedAt,
  body,
  sender,
}: MessagePreviewProps) {
  return (
    <div className="flex relative items-center space-x-4 hover:bg-blue-50">
      <Avatar imageUrl={imageUrl} />
      <div>
        <h3>{sender}</h3>
        <p>{body}</p>
      </div>
    </div>
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
