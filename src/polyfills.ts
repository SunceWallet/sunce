import { Buffer } from "buffer"

;(globalThis as typeof globalThis & { Buffer: typeof Buffer }).Buffer = Buffer
