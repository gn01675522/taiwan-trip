import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import EventCard from "../eventCard/eventCard.component";

import { EventListLayout } from "./popularEvent.styles";

const TEMP_ARRAY = [1, 2, 3, 4];

const PopularEventList = () => {
  return (
    <ListBlock topicType="event">
      <EventListLayout>
        {TEMP_ARRAY.map((temp) => (
          <ShadowCard key={temp} $contentType="me-list">
            <EventCard temp={temp}/>
          </ShadowCard>
        ))}
      </EventListLayout>
    </ListBlock>
  );
};

export default PopularEventList;
