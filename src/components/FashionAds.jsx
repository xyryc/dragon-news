import fashionAd1 from "../assets/fashionAd1.jpg";
import fashionad2 from "../assets/fashionad2.jpg";
import fashionad3 from "../assets/fashionad3.jpg";
import fashionad4 from "../assets/fashionad4.jpg";

const FashionAds = () => {
  return (
    <div className="bg-base-200">
      <h2 className="font-semibold 2xl:text-xl p-4">Fashion</h2>

      <div className="space-y-5 *:w-full *:h-[350px] *:object-cover *:rounded-md px-6 2xl:px-0">
        <img src={fashionad4} alt="fashion advert image" />
        <img src={fashionad3} alt="fashion advert image" />
        <img src={fashionAd1} alt="fashion advert image" />
        <img src={fashionad2} alt="fashion advert image" />
      </div>
    </div>
  );
};

export default FashionAds;
