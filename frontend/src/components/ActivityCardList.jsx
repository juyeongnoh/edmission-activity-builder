import ActivityCard from "./ActivityCard";

const ActivityCardList = ({ activities, onEdit, onDelete, showActions }) => {
  return (
    <div className="space-y-2">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          {...activity}
          onEdit={onEdit}
          onDelete={onDelete}
          showActions={showActions}
        />
      ))}
    </div>
  );
};

export default ActivityCardList;
