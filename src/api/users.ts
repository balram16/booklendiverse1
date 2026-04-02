import API_BASE from "@/lib/api-config";
const API_BASE_URL = `${API_BASE}/api/users`;

export const getUserProfile = async (userId: string) => {
  const response = await fetch(`${API_BASE_URL}/${userId}`, {
    method: "GET",
    credentials: "include", // To handle cookies if using sessions
  });

  return response.json();
};
