import { Badge } from "@/components/ui/badge";

const ImpactScoreBadge = ({ impactScore }) => {
  const getImpactDetails = () => {
    if (impactScore >= 0 && impactScore <= 2) {
      return {
        label: "Low",
        bgColorClass: "bg-gray-500",
        description: "Low impact activity",
      };
    } else if (impactScore > 2 && impactScore <= 4) {
      return {
        label: "Medium",
        bgColorClass: "bg-yellow-500",
        description: "Medium impact activity",
      };
    } else if (impactScore > 4 && impactScore <= 6) {
      return {
        label: "High",
        bgColorClass: "bg-green-500",
        description: "High impact activity",
      };
    } else if (impactScore > 6) {
      return {
        label: "Exceptional",
        bgColorClass: "bg-purple-500",
        description: "Exceptional impact activity",
      };
    } else {
      return {
        label: "N/A",
        bgColorClass: "bg-gray-500",
        description: "Impact score not available",
      };
    }
  };

  const { label, bgColorClass, description } = getImpactDetails();

  return (
    <Badge
      className={`${bgColorClass} transition-colors`}
      role="status"
      aria-label={`Impact score: ${impactScore} - ${description}`}
      title={`Impact score: ${impactScore} (${label})`}
    >
      <span aria-hidden="true">{label}</span>
      <span className="sr-only">{description}</span>
    </Badge>
  );
};

export default ImpactScoreBadge;
