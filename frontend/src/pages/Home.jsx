import React from "react";
import activityData from "@/samples/activityData";
import ActivityCardList from "@/components/ActivityCardList";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <div>HOME</div>
      <Link to="/activity-builder">Go to Activity Builder</Link>
      <ActivityCardList activities={activityData} />
    </div>
  );
};

export default Home;
