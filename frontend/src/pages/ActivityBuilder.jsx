import React from "react";
import ActivityCardList from "../components/ActivityCardList";
import activityData from "@/samples/activityData";

const ActivityBuilder = () => {
  return (
    <div className="min-h-screen">
      <div>Activity Builder</div>

      <div className="w-96">
        <ActivityCardList activities={activityData} />
      </div>
    </div>
  );
};

export default ActivityBuilder;
