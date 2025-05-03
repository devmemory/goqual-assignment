/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVICEID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}