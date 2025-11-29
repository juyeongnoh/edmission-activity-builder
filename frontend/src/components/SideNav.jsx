import SideNavItem from "./SideNavItem";

const SideNav = ({ steps, currentStep, maxReachedStep, onStepChange }) => {
  return (
    <nav className="space-y-2">
      {steps.map((step) => (
        <SideNavItem
          key={step.number}
          step={step}
          isActive={currentStep === step.number}
          isAccessible={step.number <= maxReachedStep}
          isCompleted={step.number < currentStep}
          onClick={() => onStepChange(step.number)}
        />
      ))}
    </nav>
  );
};

export default SideNav;
