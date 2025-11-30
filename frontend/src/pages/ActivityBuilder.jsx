import { ChevronLeft } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";

import ActivityCardList from "@/components/ActivityCardList";
import { Button } from "@/components/ui/button";
import SideNav from "@/components/SideNav";
import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import Step4 from "@/components/steps/Step4";
import Step5 from "@/components/steps/Step5";
import Step6 from "@/components/steps/Step6";
import Step7 from "@/components/steps/Step7";

import { fetchActivities, createActivity } from "@/api/activities";

const stepAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.3 },
};

const ActivityBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxReachedStep, setMaxReachedStep] = useState(1);
  const [activityData, setActivityData] = useState({
    name: "",
    category: "",
    tier: "",
    description: "",
    hoursPerWeek: 0,
    isLeadership: false,
  });
  const hasStartedInput = activityData.name.length > 0;

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const activityListRef = useRef(null);

  const { data: activityList = [], isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
  });

  const createMutation = useMutation({
    mutationFn: createActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  const steps = [
    { number: 1, label: "Activity Name" },
    { number: 2, label: "Category" },
    { number: 3, label: "Tier" },
    { number: 4, label: "Description" },
    { number: 5, label: "Hours/Week" },
    { number: 6, label: "Leadership" },
    { number: 7, label: "Review" },
  ];

  const handleStepChange = (step) => {
    if (step <= maxReachedStep) {
      setCurrentStep(step);
    }
  };

  const goToNextStep = (nextStep) => {
    setCurrentStep(nextStep);
    setMaxReachedStep(Math.max(maxReachedStep, nextStep));
  };

  const handleSubmit = async () => {
    const order = activityList.length;
    const dataWithOrder = { ...activityData, order };

    try {
      await createMutation.mutateAsync(dataWithOrder);
      alert("Activity created successfully!");
      setActivityData({
        name: "",
        category: "",
        tier: "",
        description: "",
        hoursPerWeek: 0,
        isLeadership: false,
      });
    } catch (error) {
      alert("Failed to create activity.");
    }
  };

  // Scroll to bottom when preview card is added
  useEffect(() => {
    if (hasStartedInput && activityListRef.current) {
      activityListRef.current.scrollTo({
        top: activityListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [hasStartedInput, activityData]);

  return (
    <div className="h-screen grid grid-rows-[auto_1fr] p-6 gap-6 container mx-auto">
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => navigate("/activities")}>
          <ChevronLeft />
        </Button>
        <h1 className="text-2xl font-bold">Activity Builder</h1>
      </div>

      <div className="flex flex-col min-h-0 grid-cols-8 gap-8 lg:grid">
        <div className="col-span-6 mb-4 lg:col-span-2 lg:mb-0">
          <SideNav
            steps={steps}
            currentStep={currentStep}
            maxReachedStep={maxReachedStep}
            onStepChange={handleStepChange}
          />
        </div>

        <div className="col-span-6 overflow-y-auto lg:col-span-3">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div key="step-1" {...stepAnimation} className="space-y-4">
                <Step1
                  activityData={activityData}
                  setActivityData={setActivityData}
                  goToNextStep={goToNextStep}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div key="step-2" {...stepAnimation} className="space-y-4">
                <Step2
                  activityData={activityData}
                  setActivityData={setActivityData}
                  setCurrentStep={setCurrentStep}
                  goToNextStep={goToNextStep}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div key="step-3" {...stepAnimation} className="space-y-4">
                <Step3
                  activityData={activityData}
                  setActivityData={setActivityData}
                  setCurrentStep={setCurrentStep}
                  goToNextStep={goToNextStep}
                />
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div key="step-4" {...stepAnimation} className="space-y-4">
                <Step4
                  activityData={activityData}
                  setActivityData={setActivityData}
                  setCurrentStep={setCurrentStep}
                  goToNextStep={goToNextStep}
                />
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div key="step-5" {...stepAnimation} className="space-y-4">
                <Step5
                  activityData={activityData}
                  setActivityData={setActivityData}
                  setCurrentStep={setCurrentStep}
                  goToNextStep={goToNextStep}
                />
              </motion.div>
            )}

            {currentStep === 6 && (
              <motion.div key="step-6" {...stepAnimation} className="space-y-4">
                <Step6
                  activityData={activityData}
                  setActivityData={setActivityData}
                  setCurrentStep={setCurrentStep}
                  goToNextStep={goToNextStep}
                />
              </motion.div>
            )}

            {currentStep === 7 && (
              <motion.div key="step-7" {...stepAnimation} className="space-y-4">
                <Step7
                  activityData={activityData}
                  setCurrentStep={setCurrentStep}
                  handleSubmit={() => {
                    handleSubmit();
                    setCurrentStep(1);
                    setMaxReachedStep(1);
                  }}
                  isPending={createMutation.isPending}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="hidden col-span-3 overflow-y-auto lg:block"
          ref={activityListRef}
        >
          <div className="mb-4 font-semibold">My Activities</div>
          {isLoading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : (
            <ActivityCardList
              activities={[
                ...activityList,
                ...(hasStartedInput
                  ? [
                      {
                        id: "preview",
                        name: activityData.name || "Untitled Activity",
                        category: activityData.category || "Category not set",
                        tier: activityData.tier || "Tier not set",
                        description:
                          activityData.description || "No description yet",
                        hoursPerWeek: activityData.hoursPerWeek,
                        isLeadership: activityData.isLeadership,
                      },
                    ]
                  : []),
              ]}
              showActions={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityBuilder;
