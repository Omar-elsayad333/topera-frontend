module.exports = {
  apps: [
    {
      name: "next-base",
      exec_mode: "cluster",
      instances: 1, // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      max_memory_restart: "1G",
      env_prod: {
        NODE_ENV: "production", // NODE_ENV: 'development' || NODE_ENV: 'test'
      },
    },
  ],
};
