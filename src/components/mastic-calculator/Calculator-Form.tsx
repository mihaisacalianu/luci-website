"use client";

import { calculateMastic } from "@/lib";
import { Button } from "../ui/button";
import { useState } from "react";
import MasticResults from "./Mastic-Results";

export const CalculatorForm = () => {
  const [masticQuantity, setMasticQuantity] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const width = formData.get("width");
    const depth = formData.get("depth");
    const length = formData.get("length");
    const mastic = calculateMastic(
      (width ?? "").toString(),
      (depth ?? "").toString(),
      (length ?? "").toString()
    );
    console.log("mastic needed:", mastic);
    setMasticQuantity(mastic);
    setShowResults(true);
    event.currentTarget.reset();
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="w-[60%] mx-auto space-y-4 mb-8 flex flex-col items-start justify-center bg-slate-700 p-6 rounded-lg shadow-lg"
      >
        <label htmlFor="width" className="text-xl font-bold text-white">
          Width of Joints(mm)
        </label>
        <input
          type="text"
          id="width"
          name="width"
          className="bg-white p-2 text-xl rounded-lg w-full"
          placeholder="width..."
          required
        />
        <label htmlFor="depth" className="text-xl font-bold text-white">
          Depth of Joints(mm)
        </label>
        <input
          type="text"
          id="depth"
          name="depth"
          className="bg-white p-2 text-xl rounded-lg w-full"
          placeholder="depth..."
          required
        />
        <label htmlFor="length" className="text-xl font-bold text-white">
          Length of Joints(m)
        </label>
        <input
          type="text"
          id="length"
          name="length"
          className="bg-white p-2 text-xl rounded-lg w-full"
          placeholder="length..."
          required
        />
        <Button type="submit" className="w-32 mx-auto">
          Calculate
        </Button>
      </form>
      {showResults ? <MasticResults masticVolume={masticQuantity} /> : null}
    </section>
  );
};
