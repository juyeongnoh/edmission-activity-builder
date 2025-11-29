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
import { SquarePen, Trash2 } from "lucide-react";
import ImpactScoreBadge from "./ImpactScoreBadge";

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
    <Card className="flex flex-col h-56">
      <CardHeader className="shrink-0">
        <CardTitle className="truncate" title={name}>
          {name ? name : "Activity Name"}
        </CardTitle>

        <div className="relative overflow-hidden">
          <div className="flex gap-2 overflow-x-hidden">
            {category && (
              <Badge variant="secondary" className="shrink-0">
                {category}
              </Badge>
            )}
            {tier && (
              <Badge variant="outline" className="shrink-0">
                {tier}
              </Badge>
            )}
            {isLeadership && <Badge className="shrink-0">Leadership</Badge>}
          </div>
          <div className="absolute inset-y-0 right-0 w-8 pointer-events-none bg-linear-to-l from-card to-transparent" />
        </div>

        <CardAction className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(id)}
            aria-label={`Edit ${name}`}
          >
            <SquarePen size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(id)}
            aria-label={`Delete ${name}`}
          >
            <Trash2 size={16} />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 min-h-0">
        <CardDescription className="mb-4 line-clamp-3" title={description}>
          {description ? description : "Activity Description"}
        </CardDescription>

        <div className="grid grid-cols-2 gap-2 mt-auto text-sm">
          <div>
            <span className="text-muted-foreground">Hours/Week:</span>
            <span className="ml-2 font-medium">{hoursPerWeek}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Impact:</span>
            <span className="ml-2 font-medium">
              <ImpactScoreBadge impactScore={impactScoreDisplay} />
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
