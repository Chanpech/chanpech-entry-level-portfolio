export type GtagFunction = {
    (command: "js", config: Date): void;
    (command: "config", targetId: string, config?: Record<string, unknown>): void;
    (command: "event", eventName: string, eventParams?: Record<string, unknown>): void;
  };
  