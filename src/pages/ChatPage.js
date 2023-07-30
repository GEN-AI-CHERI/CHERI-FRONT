import ChatHeader from "../components/Chat/ChatHeader";
import CheriSpeech from "../components/Chat/CheriSpeech";
import UserSpeech from "../components/Chat/UserSpeech";
import Input from "../components/Chat/Input";

const ChatPage = () => {
  return (
    <>
      <ChatHeader />
      <CheriSpeech
        text="Here's a suggested travel itinerary to enjoy the natural scenery in
            a small city in Korea.
            The following 1-night 2-day itinerary is centered around Gyeongju,
            one of the small cities known for its historical landmarks and
            beautiful natural landscapes.
          
            Morning: Upon arriving at Incheon International Airport, take a
            high-speed bus or KTX to Gyeongju. Once you arrive in Gyeongju,
            start your journey by visiting Seokguram Grotto, a representative
            national treasure and the 24th official site of Korea. 
          Recommended Queries - Route directions for your
            trip - Finding accommodation options"
      />
      <UserSpeech text="Please recommend famous restaurants in Gyeongju." />
      <CheriSpeech
        text="Here's a suggested travel itinerary to enjoy the natural scenery in a small city in Korea. 

The following 1-night 2-day itinerary is centered around Gyeongju, one of the small cities known for its historical landmarks and beautiful natural landscapes.

Morning: Upon arriving at Incheon International Airport, take a high-speed bus or KTX to Gyeongju. Once you arrive in Here's a suggested travel itinerary to enjoy the natural scenery in a small city in Korea. 

The following 1-night 2-day itinerary is centered around Gyeongju, one of the small cities known for its historical landmarks and beautiful natural landscapes.

Morning: Upon arriving at Incheon International Airport, take a high-speed bus or KTX to Gyeongju. Once you arrive in"
      />
      <Input />
    </>
  );
};

export default ChatPage;
