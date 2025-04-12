
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Section from "@/components/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const countries = [
  { name: "United States", nameEs: "Estados Unidos", code: "+1" },
  { name: "United Kingdom", nameEs: "Reino Unido", code: "+44" },
  { name: "Canada", nameEs: "Canadá", code: "+1" },
  { name: "Australia", nameEs: "Australia", code: "+61" },
  { name: "Germany", nameEs: "Alemania", code: "+49" },
  { name: "France", nameEs: "Francia", code: "+33" },
  { name: "Italy", nameEs: "Italia", code: "+39" },
  { name: "Spain", nameEs: "España", code: "+34" },
  { name: "Japan", nameEs: "Japón", code: "+81" },
  { name: "China", nameEs: "China", code: "+86" },
  { name: "India", nameEs: "India", code: "+91" },
  { name: "Brazil", nameEs: "Brasil", code: "+55" },
  { name: "Mexico", nameEs: "México", code: "+52" },
];

const Contact = () => {
  const { language, t } = useLanguage();
  const [country, setCountry] = useState("");

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in animate-fill-both">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {language === "es" ? "Contáctanos" : "Get in Touch"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {language === "es" 
                ? "Nos encantaría escucharte y ayudar a transformar tu restaurante" 
                : "We'd love to hear from you and help transform your restaurant"}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in animate-fill-both">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                {language === "es" ? "Información de Contacto" : "Contact Information"}
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {language === "es" 
                  ? "¿Tienes preguntas? Estamos aquí para ayudarte a elegir el plan adecuado para tu restaurante." 
                  : "Have questions? We're here to help you choose the right plan for your restaurant."}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    {language === "es" ? "Correo Electrónico" : "Email"}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">contacto@timboti.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    {language === "es" ? "Teléfono" : "Phone"}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    {language === "es" ? "Dirección" : "Address"}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    123 Innovation Street<br />
                    San Francisco, CA 94103<br />
                    {language === "es" ? "Estados Unidos" : "United States"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 animate-fade-in animate-delay-200 animate-fill-both">
            <h3 className="text-xl font-bold mb-6">
              {language === "es" ? "Envíanos un Mensaje" : "Send Us a Message"}
            </h3>

            <form 
              action="https://formsubmit.co/contacto@timboti.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://timboti.com/thanks" />

              <div className="space-y-2">
                <Label htmlFor="name">
                  {language === "es" ? "Nombre" : "Name"}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === "es" ? "Correo Electrónico" : "Email"}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={language === "es" ? "tu@ejemplo.com" : "you@example.com"}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="country">
                    {language === "es" ? "País" : "Country"}
                  </Label>
                  <Select
                    value={country}
                    onValueChange={(value) => setCountry(value)}
                    name="country"
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder={language === "es" ? "País" : "Country"} />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {language === "es" ? country.nameEs : country.name} ({country.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone">
                    {language === "es" ? "Número de Teléfono" : "Phone Number"}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={language === "es" ? "Tu número de teléfono" : "Your phone number"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {language === "es" ? "Mensaje" : "Message"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={language === "es" ? "¿Cómo podemos ayudarte?" : "How can we help you?"}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-timboti-red hover:bg-timboti-red/90"
              >
                {language === "es" ? "Enviar Mensaje" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {language === "es" ? "¿Listo para ver Timboti en acción?" : "Ready to see Timboti in action?"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === "es" 
              ? "Programa una demostración con nuestro equipo y descubre cómo Timboti puede transformar tu restaurante." 
              : "Schedule a demo with our team and see how Timboti can transform your restaurant."}
          </p>
          <Button asChild size="lg" className="bg-timboti-red hover:bg-timboti-red/90">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}>
              {language === "es" ? "Programar una Demostración" : "Schedule a Demo"}
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Contact;
