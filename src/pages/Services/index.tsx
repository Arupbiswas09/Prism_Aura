import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional design services tailored to your needs. From branding to digital design,
          I help businesses stand out in today's competitive market.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-2xl font-bold mb-4">{service.price}</p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-accent/50 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss your specific requirements and create a tailored solution for your business.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </motion.div>
    </div>
  );
}

const services = [
  {
    title: "Brand Identity",
    description: "Create a unique and memorable brand identity",
    price: "Starting at $1,500",
    icon: () => (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"/>
        <path d="M9 4h6v3H9V4zm11 14H4V9h16v9z"/>
      </svg>
    ),
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette",
      "Typography Selection",
      "Brand Strategy",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and engaging user interfaces",
    price: "Starting at $2,000",
    icon: () => (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Design System",
    ],
  },
  {
    title: "Print Design",
    description: "Create stunning print materials",
    price: "Starting at $500",
    icon: () => (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9V2h12v7"/>
        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
        <path d="M6 14h12v8H6z"/>
      </svg>
    ),
    features: [
      "Business Cards",
      "Brochures",
      "Packaging Design",
      "Posters",
      "Marketing Materials",
    ],
  },
];