import moment from "moment";
import firstAdImg from "../assets/firstAd.png";
import secondAdImg from "../assets/secondAd.png";
import thirdAdImg from "../assets/thirdAd.png";
import { CiCalendar } from "react-icons/ci";

const SportAds = () => {
  return (
    <div className="space-y-4">
      <div className="*:w-full">
        <img src={firstAdImg} alt="advert image" />
        <h3 className="font-semibold text-lg my-5 text-gray-800">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h3>
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Sports</p>
          <p className="flex items-center gap-2 text-gray-500">
            <CiCalendar />
            {moment().format("MMMM D, YYYY")}
          </p>
        </div>
      </div>

      <div className="*:w-full">
        <img src={secondAdImg} alt="advert image" />
        <h3 className="font-semibold text-lg my-5 text-gray-800">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h3>
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Sports</p>
          <p className="flex items-center gap-2 text-gray-500">
            <CiCalendar />
            {moment().format("MMMM D, YYYY")}
          </p>
        </div>
      </div>

      <div className="*:w-full">
        <img src={thirdAdImg} alt="advert image" />
        <h3 className="font-semibold text-lg my-5 text-gray-800">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h3>
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Sports</p>
          <p className="flex items-center gap-2 text-gray-500">
            <CiCalendar />
            {moment().format("MMMM D, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportAds;
