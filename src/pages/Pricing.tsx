
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import PricingToggle from "@/components/PricingToggle";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = (monthlyPrice: number) => {
    if (isYearly) {
      // 20% discount for yearly
      return Math.round(monthlyPrice * 12 * 0.8);
    }
    return monthlyPrice;
  };

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 60,
      description: "Perfect for small restaurants just getting started.",
      features: [
        "Unlimited web chatbot conversations",
        "Access to the CRM to manage orders",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: 100,
      description: "Great for growing restaurants with more customers.",
      features: [
        "Everything in Basic",
        "WhatsApp integration (up to 6,000 messages/month)",
        "Priority support",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Premium",
      monthlyPrice: 150,
      description: "For established restaurants with high volume.",
      features: [
        "Everything in Pro",
        "WhatsApp integration (up to 12,000 messages/month)",
        "24/7 priority support",
        "Advanced analytics",
      ],
      cta: "Go Premium",
      popular: false,
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in animate-fill-both">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that's right for your restaurant
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="space-y-8">
          <PricingToggle onChange={setIsYearly} />

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden border ${
                  plan.popular
                    ? "border-timboti-red shadow-lg shadow-timboti-red/10"
                    : "border-gray-200 dark:border-gray-800"
                } bg-white dark:bg-gray-900 animate-fade-in animate-fill-both`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-timboti-red py-1.5 text-white text-xs font-medium text-center">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 ${plan.popular ? "pt-10" : ""}`}>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-4xl font-extrabold tracking-tight">
                      ${calculatePrice(plan.monthlyPrice)}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 h-12">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex">
                        <Check className="h-5 w-5 text-timboti-red flex-shrink-0" />
                        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full mt-8 ${
                      plan.popular
                        ? "bg-timboti-red hover:bg-timboti-red/90"
                        : "bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                    }`}
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in animate-fill-both animate-delay-600">
            <p>Note: Message count is calculated assuming ~10 messages per conversation (600 or 1200 convs/month).</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto space-y-12 animate-fade-in animate-fill-both">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Can I upgrade my plan later?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing period.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">What happens if I exceed my message limit?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                If you exceed your monthly message limit, additional messages will be charged at a rate of $0.01 per message. We'll notify you when you're approaching your limit.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Can I cancel my subscription?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your current billing period.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Do you offer a free trial?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a 14-day free trial for all plans. No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-timboti-red">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90">
            Choose a plan and start transforming your restaurant today.
          </p>
          <Button asChild size="lg" className="bg-white text-timboti-red hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Pricing;
