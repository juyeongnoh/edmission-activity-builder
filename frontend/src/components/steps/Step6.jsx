import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Step6 = ({
  activityData,
  setActivityData,
  setCurrentStep,
  goToNextStep,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 6: Leadership Position</h2>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="leadership"
          checked={activityData.isLeadership}
          onCheckedChange={(checked) =>
            setActivityData({ ...activityData, isLeadership: checked })
          }
          aria-describedby="leadership-hint"
        />
        <Label htmlFor="leadership">
          I held a leadership position in this activity
        </Label>
      </div>
      <p id="leadership-hint" className="text-sm text-muted-foreground mt-2">
        e.g., President, Captain, Director, Team Lead
      </p>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(5)}
          aria-label="Go back to step 5: Hours per week"
        >
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(7)}
          aria-label="Continue to step 7: Review your activity"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step6;
