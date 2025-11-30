import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step3 = ({
  activityData,
  setActivityData,
  setCurrentStep,
  goToNextStep,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 3: Tier</h2>
      <RadioGroup
        value={activityData.tier}
        onValueChange={(value) =>
          setActivityData({ ...activityData, tier: value })
        }
        required
        aria-required="true"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="School" id="school" />
          <Label htmlFor="school">School</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Regional" id="regional" />
          <Label htmlFor="regional">Regional</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="State" id="state" />
          <Label htmlFor="state">State</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="National" id="national" />
          <Label htmlFor="national">National</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="International" id="international" />
          <Label htmlFor="international">International</Label>
        </div>
      </RadioGroup>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(2)}
          aria-label="Go back to step 2: Category"
        >
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(4)}
          disabled={!activityData.tier}
          aria-label="Continue to step 4: Description"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step3;
