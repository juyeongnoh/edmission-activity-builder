import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step2 = ({
  activityData,
  setActivityData,
  setCurrentStep,
  goToNextStep,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Step 2: Category</h2>
      <Select
        onValueChange={(value) =>
          setActivityData({ ...activityData, category: value })
        }
        value={activityData.category}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Arts">Arts</SelectItem>
            <SelectItem value="Academic">Academic</SelectItem>
            <SelectItem value="Community Service">Community Service</SelectItem>
            <SelectItem value="Leadership">Leadership</SelectItem>
            <SelectItem value="Others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => setCurrentStep(1)}>
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(3)}
          disabled={!activityData.category}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step2;
