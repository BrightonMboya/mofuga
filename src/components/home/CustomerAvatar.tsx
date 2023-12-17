import BlurImage from "../ui/BlurImage";
import Avatar from "./Avatar";
// This fn should receive imgUrl and name of the sender as props
export default function Index() {
  return (
    <div>
      <div className="flex items-center space-x-2 bg-white p-3">
        <Avatar imageUrl="https://images.unsplash.com/photo-1702611120121-e03dafc14150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" />
        <p className="text-lg">Tajiri Aurellio</p>
      </div>
    </div>
  );
}
