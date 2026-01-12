import { useState } from "react";
import Header from "./Header";
import SectionCard from "./SectionCard";
import PlanOption from "./PlanOption";
import PayBar from "./PayBar";
import PriceCard from "./PriceCard";
import FeatureList from "./FeatureList";

export default function SelectPlanSubscription() {
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(true);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-bg">
      <Header title="Select Plan" />
      <main className="grid gap-5 pb-2">
        <SectionCard
          title="Packages"
          subtitle="You can choose the plan that suits you"
          open={packagesOpen}
          onToggle={() => setPackagesOpen(!packagesOpen)}
        />
        <SectionCard
          title="Subscription"
          subtitle="You can choose the plan that suits you"
          open={subOpen}
          onToggle={() => setSubOpen(!subOpen)}
        >
          <FeatureList />

          <div className="mt-3 grid grid-cols-2 gap-4">
            <PriceCard
              title="Monthly"
              price="20.00 $"
              note="Billed Monthly"
              selected={billing === "monthly"}
              onSelect={() => setBilling("monthly")}
            />
            <PriceCard
              title="Yearly"
              price="200.00 $"
              note="Free 15 Min Trial"
              muted="Save 40.00 $"
              selected={billing === "yearly"}
              onSelect={() => setBilling("yearly")}
              rightBadge={
                <span className="h-5 w-5 rounded-full border border-[#C9D3EB] inline-block mt-0.5" />
              }
            />
          </div>
        </SectionCard>
      </main>

      <PayBar onPay={() => alert(`Proceed with ${billing} subscription`)} />
    </div>
  );
}
