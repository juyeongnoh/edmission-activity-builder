import React from "react";
import ActivityCard from "./ActivityCard";

const ActivityCardList = ({ activities }) => {
  return (
    <div className="space-y-2">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          {...activity}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      ))}
    </div>
  );
};

export default ActivityCardList;
