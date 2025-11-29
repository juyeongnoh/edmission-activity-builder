import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateActivity } from "@/api/activities";

const EditActivityDialog = ({ open, onOpenChange, activity, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    tier: "",
    description: "",
    hoursPerWeek: 0,
    isLeadership: false,
  });

  const updateMutation = useMutation({
    mutationFn: updateActivity,
    onSuccess: () => {
      onSave();
      onOpenChange(false);
    },
    onError: () => {
      alert("Failed to update activity.");
    },
  });

  // Reset form when dialog opens with new activity
  useEffect(() => {
    if (open && activity) {
      setFormData({
        name: activity.name || "",
        category: activity.category || "",
        tier: activity.tier || "",
        description: activity.description || "",
        hoursPerWeek: activity.hoursPerWeek || 0,
        isLeadership: activity.isLeadership || false,
      });
    }
  }, [open, activity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate({ id: activity.id, data: formData });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Activity</DialogTitle>
          <DialogDescription>
            Make changes to your activity here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Activity Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger id="category">
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
          </div>

          <div className="space-y-2">
            <Label>Tier</Label>
            <RadioGroup
              value={formData.tier}
              onValueChange={(value) =>
                setFormData({ ...formData, tier: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="School" id="edit-school" />
                <Label htmlFor="edit-school">School</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Regional" id="edit-regional" />
                <Label htmlFor="edit-regional">Regional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="State" id="edit-state" />
                <Label htmlFor="edit-state">State</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="National" id="edit-national" />
                <Label htmlFor="edit-national">National</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="International" id="edit-international" />
                <Label htmlFor="edit-international">International</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => {
                const value = e.target.value.slice(0, 150);
                setFormData({ ...formData, description: value });
              }}
              maxLength={150}
              rows={5}
              required
            />
            <p className="text-sm text-muted-foreground">
              {formData.description.length}/150 characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Hours per Week (0-40)</Label>
            <Input
              id="hours"
              type="number"
              min="0"
              max="40"
              value={formData.hoursPerWeek}
              onChange={(e) => {
                const value = Math.min(40, Math.max(0, Number(e.target.value)));
                setFormData({ ...formData, hoursPerWeek: value });
              }}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="edit-leadership"
              checked={formData.isLeadership}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, isLeadership: checked })
              }
            />
            <Label htmlFor="edit-leadership">
              I held a leadership position in this activity
            </Label>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={updateMutation.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditActivityDialog;
