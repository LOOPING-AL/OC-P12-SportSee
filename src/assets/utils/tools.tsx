export const getUserId = () => {
  const params = new URLSearchParams(window.location.search);
  
  return params.get("userId");
};
