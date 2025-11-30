import SideNavItem from "@/components/SideNavItem";

const SideNav = ({ steps, currentStep, maxReachedStep, onStepChange }) => {
  return (
    <nav className="flex justify-between lg:space-y-2 lg:block">
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
