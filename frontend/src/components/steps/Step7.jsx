import { Button } from "@/components/ui/button";

const Step7 = ({ activityData, setCurrentStep, handleSubmit, isPending }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 7: Review</h2>
      <div className="p-4 space-y-3 border rounded-lg">
        <div>
          <span className="font-medium">Name:</span> {activityData.name}
        </div>
        <div>
          <span className="font-medium">Category:</span> {activityData.category}
        </div>
        <div>
          <span className="font-medium">Tier:</span> {activityData.tier}
        </div>
        <div>
          <span className="font-medium">Description:</span>{" "}
          {activityData.description}
        </div>
        <div>
          <span className="font-medium">Hours per Week:</span>{" "}
          {activityData.hoursPerWeek}
        </div>
        <div>
          <span className="font-medium">Leadership:</span>{" "}
          {activityData.isLeadership ? "Yes" : "No"}
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => setCurrentStep(6)}>
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </>
  );
};

export default Step7;
