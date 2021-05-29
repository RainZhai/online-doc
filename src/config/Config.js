function handleEnv(env) {
  if (env === "prod") {
    return "prod";
  }
  if (env === "beta") {
    return "beta";
  }
  if (env === "gamma") {
    return "gamma";
  }
  return "dev";
}

const env = handleEnv(ENV);

const baseURLMap = {
  dev: "http://192.168.1.219:8080",
  beta: "http://192.168.1.219:8080",
  prod: "http://192.168.1.219:8080",
  gamma: "http://192.168.1.219:8080",
};

const fileURLMap = {
  dev: "http://192.168.1.219:8080",
  beta: "http://192.168.1.219:8080",
  prod: "http://192.168.1.219:8080",
  gamma: "http://192.168.1.219:8080",
};

export default class Config {
  static env = env;

  static baseURL = baseURLMap[env];

  static fileURL = fileURLMap[env];
}
