export const TASK_API_URL = "https://01113cc7027945ff83de9e6789d69925.api.mockbin.io/";

if (!TASK_API_URL) {
  throw new Error('TASK_API_URL is not defined in the environment variables');
}