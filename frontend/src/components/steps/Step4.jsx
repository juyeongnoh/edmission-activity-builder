import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Step4 = ({
  activityData,
  setActivityData,
  setCurrentStep,
  goToNextStep,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 4: Description</h2>
      <Label htmlFor="activity-description" className="sr-only">
        Activity Description
      </Label>

      <div>
        <Textarea
          id="activity-description"
          placeholder="Describe your activity (max 150 characters)"
          value={activityData.description}
          onChange={(e) => {
            const value = e.target.value.slice(0, 150);
            setActivityData({ ...activityData, description: value });
          }}
          maxLength={150}
          rows={5}
          required
          aria-required="true"
          aria-invalid={!activityData.description}
          aria-describedby="char-count"
        />
        <p
          id="char-count"
          className="mt-1 text-sm text-muted-foreground"
          aria-live="polite"
        >
          {activityData.description.length}/150 characters
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(3)}
          aria-label="Go back to step 3: Tier"
        >
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(5)}
          disabled={!activityData.description}
          aria-label="Continue to step 5: Hours per week"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step4;
