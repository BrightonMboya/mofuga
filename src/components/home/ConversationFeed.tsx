import { MessagePreview } from "./MessagePreview";

const data = [
  {
    name: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "2023-01-01T08:00:00",
    body: "Hey, how's it going?",
    sender: "JohnDoe123",
  },
  {
    name: "Alice Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8g",
    submittedAt: "2023-01-02T12:30:00",
    body: "I'm doing well, thanks! How about you?",
    sender: "WonderAlice",
  },
  {
    name: "Bob Johnson",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "2023-01-03T15:45:00",
    body: "Any plans for the weekend?",
    sender: "BobJ88",
  },
  {
    name: "Eva Davis",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "2023-01-04T10:15:00",
    body: "Not sure yet, maybe just relaxing at home.",
    sender: "EvaD",
  },
  {
    name: "Charlie Brown",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "2023-01-05T09:20:00",
    body: "Good morning! How's everyone doing today?",
    sender: "CBrown",
  },
  {
    name: "Grace Miller",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "2023-01-06T18:00:00",
    body: "Excited for the upcoming project deadline!",
    sender: "Graceful",
  },
  {
    name: "Sam Wilson",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "2023-01-07T14:10:00",
    body: "Just got back from a great vacation!",
    sender: "AdventureSam",
  },
];

export default function ConversationFeed() {
  return (
    <div className="space-y-5 overflow-clip max-w-[380px]">
      {data.map((item) => (
        <MessagePreview
          name={item.name}
          imageUrl={item.imageUrl}
          submittedAt={item.submittedAt}
          body={item.body}
          sender={item.sender}
        />
      ))}
    </div>
  );
}