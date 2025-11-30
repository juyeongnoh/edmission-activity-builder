import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Step1 = ({ activityData, setActivityData, goToNextStep }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 1: Activity Name</h2>
      <Input
        placeholder="Activity Name"
        value={activityData.name}
        onChange={(e) =>
          setActivityData({ ...activityData, name: e.target.value })
        }
      />
      <Button onClick={() => goToNextStep(2)} disabled={!activityData.name}>
        Next
      </Button>
    </>
  );
};

export default Step1;
