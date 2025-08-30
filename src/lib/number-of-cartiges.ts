export const calculateCartiges = (masticVolume: number) => {
  const result = masticVolume / 310;
  const decimalPart = masticVolume / 310 - Math.trunc(masticVolume / 310);
  return decimalPart > 0.5 ? Math.ceil(result) : Math.floor(result) + 0.5;
};
