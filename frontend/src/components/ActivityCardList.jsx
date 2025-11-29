import { AnimatePresence, motion } from "motion/react";
import ActivityCard from "./ActivityCard";

const ActivityCardList = ({ activities, onEdit, onDelete, showActions }) => {
  return (
    <div className="space-y-2">
      <AnimatePresence>
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 0.3, delay: 0.05 * index },
              scale: { duration: 0.3, delay: 0.05 * index },
            }}
          >
            <ActivityCard
              {...activity}
              onEdit={onEdit}
              onDelete={onDelete}
              showActions={showActions}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ActivityCardList;
