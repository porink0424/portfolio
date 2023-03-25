import getConfig from "next/config";

export const url = (fileName: string) => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { urlPrefix: string };
  };
  return publicRuntimeConfig.urlPrefix + fileName;
};
