export const fetchFromUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { success: true, data };
  }
  catch (error: any) {
    console.error(error);
    return { error: error.message, success: false };
  }
}