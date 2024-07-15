const createQueryString = (keysValues: { [key: string]: string }) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(keysValues)) {
    params.set(key, value);
  }
  return params.toString();
};

export { createQueryString };
