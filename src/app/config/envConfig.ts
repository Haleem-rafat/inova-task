const envConfigKeys = {
  base_url: import.meta.env.VITE_API_BASE,
};

Object.entries(envConfigKeys).forEach(([key, val]) => {
  if (!val) {
    if (!import.meta.env.PROD)
      return console.error(
        `${key} is not existed, please check the envirnmental variables to fix this error!`
      );
    return console.error(
      'Some configurations are missing, please contact the developers to check!'
    );
  }
});

export default envConfigKeys;
