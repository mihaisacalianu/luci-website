import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Shield, Clock, Award } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Expert installation services with precision and attention to detail for all industrial applications.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Comprehensive quality control processes ensuring the highest standards in every project we deliver.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Reliable project completion within agreed timelines, minimizing disruption to your operations.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "Industry-certified professionals delivering solutions that meet and exceed regulatory standards.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-black text-primary mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial solutions tailored to meet your specific
            requirements with unmatched expertise and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
