const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const fetchActivities = async () => {
  const response = await fetch(`${API_URL}/api/activities`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch activities");
  }

  const { activities } = await response.json();
  return activities;
};

export const createActivity = async (data) => {
  const response = await fetch(`${API_URL}/api/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create activity");
  }

  const { activity } = await response.json();
  return activity;
};

export const updateActivity = async ({ id, data }) => {
  const response = await fetch(`${API_URL}/api/activities/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update activity");
  }

  const { activity: updatedActivity } = await response.json();
  return updatedActivity;
};

export const deleteActivity = async (id) => {
  const response = await fetch(`${API_URL}/api/activities/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete activity");
  }
};
