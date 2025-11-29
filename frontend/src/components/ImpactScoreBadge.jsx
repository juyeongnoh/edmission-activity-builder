import React from "react";
import { Badge } from "./ui/badge";

const ImpactScoreBadge = ({ impactScore }) => {
  const [label, bgColorClass] = (() => {
    if (impactScore >= 0 && impactScore <= 2) {
      return ["Low", "bg-gray-500"];
    } else if (impactScore > 2 && impactScore <= 4) {
      return ["Medium", "bg-yellow-500"];
    } else if (impactScore > 4 && impactScore <= 6) {
      return ["High", "bg-green-500"];
    } else if (impactScore > 6) {
      return ["Exceptional", "bg-purple-500"];
    } else {
      return ["N/A", "bg-gray-500"];
    }
  })();

  return <Badge className={`${bgColorClass} transition-colors`}>{label}</Badge>;
};

export default ImpactScoreBadge;
