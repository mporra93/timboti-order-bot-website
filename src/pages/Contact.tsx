
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
  { name: "Argentina", nameEs: "Argentina", code: "+54" },
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
              {t("contact.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in animate-fill-both">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                {t("contact.info.title")}
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    {t("contact.info.email")}
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
                    {t("contact.info.phone")}
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
                    {t("contact.info.address")}
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
              {t("contact.form.title")}
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
                  {t("contact.form.name")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {t("contact.form.email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="country">
                    {t("contact.form.country")}
                  </Label>
                  <Select
                    value={country}
                    onValueChange={(value) => setCountry(value)}
                    name="country"
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder={t("contact.form.country")} />
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
                    {t("contact.form.phone")}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {t("contact.form.message")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-timboti-red hover:bg-timboti-red/90"
              >
                {t("contact.form.send")}
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("contact.cta.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("contact.cta.description")}
          </p>
          <Button asChild size="lg" className="bg-timboti-red hover:bg-timboti-red/90">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}>
              {t("contact.cta.button")}
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Contact;
