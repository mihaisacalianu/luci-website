import { calculateCartiges } from "@/lib";

const MasticResults = ({ masticVolume }: { masticVolume: number }) => {
  return (
    <article>
      <div className="w-full mb-8  bg-slate-300 border-1 border-y-black rounded-xl p-6 text-center">
        <h2 className="text-2xl">
          You need:
          <span className="font-bold text-red-400 mx-2">
            {masticVolume}ml
          </span>{" "}
          which is approx.{" "}
          <span className="font-bold text-red-400 mx-2">
            {calculateCartiges(masticVolume)}
            {calculateCartiges(masticVolume) > 1 ? " cartiges" : " cartige"}
          </span>
          of 310ml mastic
        </h2>
      </div>
    </article>
  );
};

export default MasticResults;
