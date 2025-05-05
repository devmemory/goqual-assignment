import { DeviceStatusModel } from "src/models/DeviceModel";

export const statusKeySample:string[] = [
  "wh40batt",
  "baromrelin",
  "soilad1",
  "rainratein"
] as const

export const colorSample:any = {
  wh40batt: {
    ui: "success",
    hex: "#229741"
  },
  baromrelin: {
    ui: "danger",
    hex: "#de5a5a"
  },
  soilad1: {
    ui: "warning",
    hex: "#eead20"
  },
  rainratein: {
    ui: "info",
    hex: "#3d99f5"
  },
} as const

export const statusValueSample = (): DeviceStatusModel => {
  const keys = ["wh40batt", "baromrelin", "soilad1", "rainratein"];
  const now = Date.now();
  const start = now - 10 * 60 * 1000; // 10 minutes ago
  const interval = 60 * 1000; // 1 minute

  const data: DeviceStatusModel = {};

  for (const key of keys) {
    data[key] = [];
    for (let ts = start; ts <= now; ts += interval) {
      data[key].push({
        value: Math.floor(Math.random() * 101), // random 0–100
        ts,
      });
    }
  }

  return data;
};
