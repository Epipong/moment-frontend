const parseJwt = <T>(token: string): T | undefined => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return undefined;
  }
};

export { parseJwt };
