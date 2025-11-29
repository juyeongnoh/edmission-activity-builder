import ActivityCardList from "@/components/ActivityCardList";
import EditActivityDialog from "@/components/EditActivityDialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Activities = () => {
  const [activityList, setActivityList] = useState([]);
  const [editingActivity, setEditingActivity] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    const activity = activityList.find((a) => a.id === id);
    setEditingActivity(activity);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = (updatedActivity) => {
    setActivityList((prev) =>
      prev.map((a) => (a.id === updatedActivity.id ? updatedActivity : a))
    );
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this activity?"
    );

    if (!confirmed) return;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/activities/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    if (response.ok) {
      setActivityList((prev) => prev.filter((a) => a.id !== id));
    }
  };

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/activities`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { activities } = await response.json();
      setActivityList(activities);
    };

    fetchActivities();
  }, []);

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
