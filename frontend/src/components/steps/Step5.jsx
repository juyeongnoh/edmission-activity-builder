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
          min="0"
          max="40"
          value={activityData.hoursPerWeek}
          onChange={(e) => {
            const value = Math.min(40, Math.max(0, Number(e.target.value)));
            setActivityData({ ...activityData, hoursPerWeek: value });
          }}
        />
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => setCurrentStep(4)}>
          Back
        </Button>
        <Button onClick={() => goToNextStep(6)}>Next</Button>
      </div>
    </>
  );
};

export default Step5;
