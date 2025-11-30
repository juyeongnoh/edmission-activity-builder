import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import ActivityCardList from "@/components/ActivityCardList";
import { Button } from "@/components/ui/button";
import EditActivityDialog from "@/components/EditActivityDialog";

import { fetchActivities, deleteActivity } from "@/api/activities";

const Activities = () => {
  const [editingActivity, setEditingActivity] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: activityList = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  const handleEdit = (id) => {
    const activity = activityList.find((a) => a.id === id);
    setEditingActivity(activity);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    queryClient.invalidateQueries({ queryKey: ["activities"] });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this activity?"
    );

    if (!confirmed) return;

    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="container h-screen p-6 mx-auto">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">Loading activities...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container h-screen p-6 mx-auto">
        <div className="flex items-center justify-center h-full">
          <p className="text-red-400">Failed to load activities.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container h-screen p-6 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ChevronLeft />
          </Button>
          <h1 className="text-2xl font-bold">Activities</h1>
        </div>
        <Button onClick={() => navigate("/activity-builder")}>
          Add Activity
        </Button>
      </div>

      {activityList.length === 0 ? (
        <div className="flex items-center justify-center h-full text-sm text-center text-gray-400">
          No activities found.
          <br />
          Click "Add Activity" to create one!
        </div>
      ) : (
        <ActivityCardList
          activities={activityList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          showActions={true}
        />
      )}

      <EditActivityDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        activity={editingActivity}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default Activities;
