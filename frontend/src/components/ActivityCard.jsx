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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{category}</Badge>
            <Badge variant="outline">{tier}</Badge>
            {isLeadership && <Badge>Leadership</Badge>}
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Hours/Week:</span>
              <span className="ml-2 font-medium">{hoursPerWeek}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Impact:</span>
              <span className="ml-2 font-medium">{impactScore}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
