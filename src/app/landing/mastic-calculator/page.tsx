import { CalculatorForm } from "@/components/mastic-calculator/Calculator-Form";
import { CartridgeTable } from "@/components/mastic-calculator/Cartridge-Table";
import React from "react";

const MasticCalculator = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Cartridge Coverage Calculator
        </h1>
        <CalculatorForm />
        <CartridgeTable />
      </div>
    </main>
  );
};

export default MasticCalculator;
