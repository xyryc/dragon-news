import swimingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playgroundImg from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200">
      <h2 className="font-semibold 2xl:text-xl p-4">Q-Zone</h2>

      <div className="space-y-5 *:w-full">
        <img src={swimingImg} alt="swiming image" />
        <img src={classImg} alt="class image" />
        <img src={playgroundImg} alt="playground image" />
      </div>
    </div>
  );
};

export default Qzone;
