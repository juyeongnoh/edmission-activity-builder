import { Button } from "@/components/ui/button";
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
      <div>
        <Textarea
          placeholder="Describe your activity (max 150 characters)"
          value={activityData.description}
          onChange={(e) => {
            const value = e.target.value.slice(0, 150);
            setActivityData({ ...activityData, description: value });
          }}
          maxLength={150}
          rows={5}
        />
        <p className="mt-1 text-sm text-muted-foreground">
          {activityData.description.length}/150 characters
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => setCurrentStep(3)}>
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(5)}
          disabled={!activityData.description}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step4;
