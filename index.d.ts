export interface DataEntry {
  type: string;
  spec: string;
  shortname: string;
  status: "snapshot" | "current";
  uri: string;
  normative: boolean;
  for?: string[];
}

export interface RequestEntry {
  term: string;
  id?: string;
  types?: string[];
  specs?: string[];
  for?: string;
}

export interface Response {
  result: [string, DataEntry[]][];
  query?: RequestEntry[];
}

export interface CacheEntry {
  query: Map<string, { time: number; value: DataEntry[] }>;
  by_term: { [term: string]: DataEntry[] };
  response: Map<string, { time: number; value: Response }>;
}

export declare class Cache extends Map {
  get<K extends keyof CacheEntry>(key: K): CacheEntry[K];
  reset(): void;
}
