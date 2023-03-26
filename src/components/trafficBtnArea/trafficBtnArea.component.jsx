import {
  TrafficBtnOutline,
  BannerTrafficButton,
  TrafficOption,
} from "./trafficBtnArea.styles";

const TrafficBtnArea = () => {
  return (
    <TrafficBtnOutline>
      <BannerTrafficButton>
        <input type="radio" id="departure" name="choose" />
        <TrafficOption htmlFor="departure">
          往 <span>蘭潭</span>
        </TrafficOption>
        <input type="radio" id="arrival" name="choose" />
        <TrafficOption htmlFor="arrival">
          往 <span>港坪運動公園</span>
        </TrafficOption>
      </BannerTrafficButton>
    </TrafficBtnOutline>
  );
};

export default TrafficBtnArea;
