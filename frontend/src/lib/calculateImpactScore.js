const Tier = {
  School: 1,
  Regional: 2,
  State: 3,
  National: 4,
  International: 5,
};

const calculateImpactScore = (tier, isLeadership, hours) => {
  const tierScore = Tier[tier] || 0;
  const leadershipScore = isLeadership ? 2 : 0;
  const hoursScore = hours > 10 ? 1 : 0;

  return tierScore + leadershipScore + hoursScore;
};

export { calculateImpactScore };
