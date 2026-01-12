import { useState } from "react";
import Header from "./Header";
import SectionCard from "./SectionCard";
import PlanOption from "./PlanOption";
import PayBar from "./PayBar";

export default function SelectPlanPackages() {
  const [packagesOpen, setPackagesOpen] = useState(true);
  const [subOpen, setSubOpen] = useState(false);
  const [choice, setChoice] = useState<"15" | "30" | "60" | null>("15");

  return (
    <div className="min-h-screen bg-bg">
      <Header title="Select Plan" />
      <main className="grid gap-5 pb-2">
        <SectionCard
          title="Packages"
          subtitle="You can choose the plan that suits you"
          open={packagesOpen}
          onToggle={() => setPackagesOpen(!packagesOpen)}
        >
          <div className="grid gap-3">
            <PlanOption
              label="15 Min"
              hint="Only 100.00 $"
              selected={choice === "15"}
              onSelect={() => setChoice("15")}
            />
            <PlanOption
              label="30 Min"
              hint="Only 150.00 $"
              selected={choice === "30"}
              onSelect={() => setChoice("30")}
            />
            <PlanOption
              label="1 Hours"
              hint="Only 250.00 $"
              selected={choice === "60"}
              onSelect={() => setChoice("60")}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Subscription"
          subtitle="You can choose the plan that suits you"
          open={subOpen}
          onToggle={() => setSubOpen(!subOpen)}
        >
          {/* collapsed in design, keep body empty */}
          <div className="text-subText text-sm">Select a subscription plan</div>
        </SectionCard>
      </main>

      <PayBar onPay={() => alert(`Proceed with ${choice ?? "no"} package`)} />
    </div>
  );
}
