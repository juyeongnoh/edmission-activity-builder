const calculateImpactScore = (tier, isLeadership, hours) => {
  let score = 0;

  switch (tier) {
    case "School":
      score += 1;
      break;
    case "Regional":
      score += 2;
      break;
    case "State":
      score += 3;
      break;
    case "National":
      score += 4;
      break;
    case "International":
      score += 5;
      break;
    default:
      break;
  }

  if (isLeadership) score += 2;

  if (hours > 10) score += 1;

  return score;
};

export { calculateImpactScore };
