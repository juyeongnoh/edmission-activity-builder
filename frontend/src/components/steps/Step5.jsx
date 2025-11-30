import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Step5 = ({
  activityData,
  setActivityData,
  setCurrentStep,
  goToNextStep,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 5: Hours per Week</h2>
      <div>
        <Label htmlFor="hours">Hours per Week (0-40)</Label>
        <Input
          id="hours"
          type="number"
          inputMode="numeric"
          min="0"
          max="40"
          value={activityData.hoursPerWeek}
          onChange={(e) => {
            const value = Math.min(40, Math.max(0, Number(e.target.value)));
            setActivityData({ ...activityData, hoursPerWeek: value });
          }}
          aria-describedby="hours-hint"
        />
        <p id="hours-hint" className="sr-only">
          Enter a number between 0 and 40
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(4)}
          aria-label="Go back to step 4: Description"
        >
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(6)}
          aria-label="Continue to step 6: Leadership position"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step5;
