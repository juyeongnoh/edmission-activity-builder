import { useEffect, useState } from "react";
import ActivityCardList from "../components/ActivityCardList";
import mockData from "@/samples/activityData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ActivityBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activityData, setActivityData] = useState({
    name: "",
    category: "",
    tier: "",
    description: "",
    hoursPerWeek: 0,
    isLeadership: false,
    impactScore: 0,
  });

  useEffect(() => {
    console.log("Activity Data Updated:", activityData);
  }, [activityData]);

  return (
    <div className="h-screen grid grid-rows-[auto_1fr] p-6 gap-6">
      <h1 className="text-2xl font-bold">Activity Builder</h1>

      <div className="grid grid-cols-3 gap-8 min-h-0">
        <div className="col-span-3 sm:col-span-2 overflow-y-auto">
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Step 1: Activity Name</h2>
              <Input
                placeholder="Activity Name"
                value={activityData.name}
                onChange={(e) =>
                  setActivityData({ ...activityData, name: e.target.value })
                }
              />
              <Button
                onClick={() => setCurrentStep(2)}
                disabled={!activityData.name}
              >
                Next
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
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
                    <SelectItem value="Community Service">
                      Community Service
                    </SelectItem>
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
                  onClick={() => setCurrentStep(3)}
                  disabled={!activityData.category}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Step 3: Tier</h2>
              <RadioGroup
                value={activityData.tier}
                onValueChange={(value) =>
                  setActivityData({ ...activityData, tier: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="School" id="school" />
                  <Label htmlFor="school">School</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Regional" id="regional" />
                  <Label htmlFor="regional">Regional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="State" id="state" />
                  <Label htmlFor="state">State</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="National" id="national" />
                  <Label htmlFor="national">National</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="International" id="international" />
                  <Label htmlFor="international">International</Label>
                </div>
              </RadioGroup>

              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setCurrentStep(2)}>
                  Back
                </Button>
                <Button
                  onClick={() => setCurrentStep(4)}
                  disabled={!activityData.tier}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
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
                <p className="text-sm text-muted-foreground mt-1">
                  {activityData.description.length}/150 characters
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setCurrentStep(3)}>
                  Back
                </Button>
                <Button
                  onClick={() => setCurrentStep(5)}
                  disabled={!activityData.description}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
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
                    const value = Math.min(
                      40,
                      Math.max(0, Number(e.target.value))
                    );
                    setActivityData({ ...activityData, hoursPerWeek: value });
                  }}
                />
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setCurrentStep(4)}>
                  Back
                </Button>
                <Button onClick={() => setCurrentStep(6)}>Next</Button>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Step 6: Leadership Position
              </h2>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="leadership"
                  checked={activityData.isLeadership}
                  onCheckedChange={(checked) =>
                    setActivityData({ ...activityData, isLeadership: checked })
                  }
                />
                <Label htmlFor="leadership">
                  I held a leadership position in this activity
                </Label>
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setCurrentStep(5)}>
                  Back
                </Button>
                <Button onClick={() => setCurrentStep(7)}>Next</Button>
              </div>
            </div>
          )}

          {currentStep === 7 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Step 7: Review</h2>
              <div className="space-y-3 p-4 border rounded-lg">
                <div>
                  <span className="font-medium">Name:</span> {activityData.name}
                </div>
                <div>
                  <span className="font-medium">Category:</span>{" "}
                  {activityData.category}
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
                <Button
                  onClick={() => {
                    alert("Activity Submitted!");
                    setCurrentStep(1);
                    setActivityData({
                      name: "",
                      category: "",
                      tier: "",
                      description: "",
                      hoursPerWeek: 0,
                      isLeadership: false,
                      impactScore: 0,
                    });
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="sm:block hidden overflow-y-auto">
          <div>My Activities</div>
          <ActivityCardList activities={[activityData, ...mockData]} />
        </div>
      </div>
    </div>
  );
};

export default ActivityBuilder;
