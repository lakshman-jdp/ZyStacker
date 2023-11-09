import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "tdgg7vwy",
  dataset: "production",
  apiVersion: "2022-02-26",
  token:
    "skyNiqOQdqbb6XVMjV4sOu3urMFPXQ8WiLoev4slfCISXOEIqJ6JOPZR3Wa8pTeDc4mw1Y8ZwmJ08YKbnse2mI5yPWKsqTBhthFgV0jduXrSm3lMMQl20tmtdrV4uFjfeiGNtyS1BdCfzDLCL1yM6tw9zsY247NpXuRqz7cY3zAbloE5TZoI",
  useCdn: false,
});
