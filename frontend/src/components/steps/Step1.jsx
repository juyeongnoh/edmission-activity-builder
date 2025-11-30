import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Step1 = ({ activityData, setActivityData, goToNextStep }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 1: Activity Name</h2>
      <Label htmlFor="activity-name" className="sr-only">
        Activity Name
      </Label>

      <Input
        id="activity-name"
        placeholder="e.g., Debate Team, Science Club"
        value={activityData.name}
        onChange={(e) =>
          setActivityData({ ...activityData, name: e.target.value })
        }
        required
        autoFocus
        aria-required="true"
        aria-invalid={!activityData.name}
      />
      <Button
        onClick={() => goToNextStep(2)}
        disabled={!activityData.name}
        aria-label="Continue to step 2: Select category"
      >
        Next
      </Button>
    </>
  );
};

export default Step1;
