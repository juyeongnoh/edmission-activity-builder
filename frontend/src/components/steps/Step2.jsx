import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
      <Label htmlFor="activity-category" className="sr-only">
        Activity Category
      </Label>

      <Select
        onValueChange={(value) =>
          setActivityData({ ...activityData, category: value })
        }
        value={activityData.category}
        required
      >
        <SelectTrigger
          id="activity-category"
          className="w-full"
          aria-required="true"
        >
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
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(1)}
          aria-label="Go back to step 1: Activity name"
        >
          Back
        </Button>
        <Button
          onClick={() => goToNextStep(3)}
          disabled={!activityData.category}
          aria-label="Continue to step 3: Select tier"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Step2;
