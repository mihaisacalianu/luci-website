import { NavMenu } from "../navigation/NavMenu";
import { ContactUsBanner } from "./ContactUsBanner";

export const Header = () => {
  return (
    <header className="flex flex-col text-2xl w-full border-b border-gray-200">
      <ContactUsBanner />
      <div className="flex justify-between items-center w-[90%] p-4 mx-auto">
        <div className="flex flex-col">
          <h2 className="font-extrabold text-4xl">Professional</h2>
          <span className="text-md">Comercial Services</span>
        </div>
        <NavMenu />
      </div>
    </header>
  );
};
