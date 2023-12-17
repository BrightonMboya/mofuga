import { MessagePreview } from "./MessagePreview";
import Input from "../ui/Input";
import PendingFeed from "./PendingFeed";
import ResolvedFeed from "./ResolvedFeed";
import { useState } from "react";
const data = [
  {
    name: "John Doe",
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "7:15",
    body: "Hey, how's it going?",
    sender: "JohnDoe123",
  },
  {
    name: "Alice Smith",
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8g",
    submittedAt: "12:00",
    body: "I'm doing well, thanks! How about you?",
    sender: "WonderAlice",
  },
  {
    name: "Bob Johnson",
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "23:59",
    body: "Any plans for the weekend?",
    sender: "BobJ88",
  },
  {
    name: "Eva Davis",
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "15:00",
    body: "Not sure yet, maybe just relaxing at home.",
    sender: "EvaD",
  },
  {
    name: "Charlie Brown",
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "14:33",
    body: "Good morning! How's everyone doing today?",
    sender: "CBrown",
  },
  {
    name: "Grace Miller",
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "12:33",
    body: "Excited for the upcoming project deadline!",
    sender: "Graceful",
  },
  {
    name: "Sam Wilson",
    id: "7",
    imageUrl:
      "https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    submittedAt: "11:00",
    body: "Just got back from a great vacation!",
    sender: "AdventureSam",
  },
];

export function Conversation() {
  return (
    <div className="flex max-w-[380px] flex-col space-y-5 overflow-clip">
      {data.map((item) => (
        <MessagePreview
          key={item.id}
          id={item.id}
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

export default function () {
  const [showAllConversation, setShowAllConversation] = useState(true);
  const [showPending, setShowPending] = useState(false);
  const [showResolved, setShowResolved] = useState(false);

  const baseTabStyle = "pb-2 text-grey font-medium";
  const highlightedTabStyle =
    "text-blue font-medium border-b-[1px] border-b-blue pb-2";

  return (
    <section className="border-[1px] h-screen pt-5 px-4 border-grey">
      <Input
      placeholder="Search Conversation ..."
      />
      <section className="flex space-x-4 pt-5">
        <button
          className={showAllConversation ? highlightedTabStyle : baseTabStyle}
          onClick={() => {
            setShowAllConversation(true);
            setShowPending(false);
            setShowResolved(false);
          }}
        >
          All Conversation
        </button>
        <button
          className={showPending ? highlightedTabStyle : baseTabStyle}
          onClick={() => {
            setShowAllConversation(false);
            setShowPending(true);
            setShowResolved(false);
          }}
        >
          Pending
        </button>
        <button
          className={showResolved ? highlightedTabStyle : baseTabStyle}
          onClick={() => {
            setShowAllConversation(false);
            setShowPending(false);
            setShowResolved(true);
          }}
        >
          Resolved
        </button>
      </section>

      <div className="mt-5">
        {showAllConversation && <Conversation />}
        {showPending && <PendingFeed />}
        {showResolved && <ResolvedFeed />}
      </div>
    </section>
  );
}

