import { Mail, Phone } from "lucide-react";

export const ContactUsBanner = () => {
  return (
    <section className="flex items-center justify-center md:justify-end md:pr-20 pr-0 gap-4 p-2 bg-gray-100 border-b border-gray-200 ">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Phone className="size-4" />
        <span>+44 7778 699357</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Mail className="size-4" />
        <span>benedic_lucian@yahoo.com</span>
      </div>
    </section>
  );
};
