import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { calculateImpactScore } from "@/lib/calculateImpactScore";

const ActivityCard = ({
  id,
  name,
  category,
  tier,
  description,
  hoursPerWeek,
  isLeadership,
  impactScore,
  onEdit,
  onDelete,
}) => {
  const impactScoreDisplay =
    impactScore !== undefined
      ? impactScore
      : calculateImpactScore(tier, isLeadership, hoursPerWeek);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="outline">{tier}</Badge>
          {isLeadership && <Badge>Leadership</Badge>}
        </div>
        <CardAction>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit?.(id)}
            aria-label={`Edit ${name}`}
          >
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete?.(id)}
            aria-label={`Delete ${name}`}
          >
            Delete
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Hours/Week:</span>
            <span className="ml-2 font-medium">{hoursPerWeek}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Impact:</span>
            <span className="ml-2 font-medium">{impactScoreDisplay}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
