import React from "react";
import ActivityCardList from "./ActivityCardList";
import activityData from "../../samples/activityData";

const ActivityBuilder = () => {
  return (
    <div className="min-h-screen">
      <ActivityCardList activities={activityData} />
    </div>
  );
};

export default ActivityBuilder;
