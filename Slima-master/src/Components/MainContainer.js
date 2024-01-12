import { ButtonList } from "./ButtonList";
import { VideoContainer } from "./VideoContainer";

export const MainContainer = () => {
  return (
    <div className="overflow-x-scroll scroller">
      <div className="overflow-x-scroll">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};
