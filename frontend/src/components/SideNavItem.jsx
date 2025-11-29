const SideNavItem = ({
  step,
  isActive,
  isAccessible,
  isCompleted,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={!isAccessible}
      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : isCompleted
          ? "bg-muted text-foreground hover:bg-muted/80"
          : isAccessible
          ? "text-foreground hover:bg-muted"
          : "text-muted-foreground cursor-not-allowed opacity-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
            isActive
              ? "bg-primary-foreground text-primary"
              : isCompleted
              ? "bg-primary text-primary-foreground"
              : "bg-muted-foreground/20"
          }`}
        >
          {step.number}
        </span>
        <span className="text-sm font-medium">{step.label}</span>
      </div>
    </button>
  );
};

export default SideNavItem;
