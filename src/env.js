const env = new Map();

env.set("development", "DEV_");
env.set("testing", "TEST_");

//This is because you can use the environment name, or the branch. 
env.set("production", "PROD_");
env.set("master", "PROD_")

module.exports = env;