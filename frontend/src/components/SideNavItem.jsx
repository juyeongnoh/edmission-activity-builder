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
      className={`lg:w-full text-left lg:px-4 lg:py-2 rounded-lg transition-colors p-2 cursor-pointer disabled:cursor-not-allowed ${
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
        <span className="hidden text-sm font-medium lg:block">
          {step.label}
        </span>
      </div>
    </button>
  );
};

export default SideNavItem;
