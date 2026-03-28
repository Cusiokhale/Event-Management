// src/repositories/sharedMessageRepository.ts

type Listener = () => void;

let sharedMessage = "Hello from shared state";
const listeners = new Set<Listener>();

export function getSharedMessage(): string {
  return sharedMessage;
}

export function setSharedMessage(message: string): void {
  sharedMessage = message;
  listeners.forEach((l) => l());
}

export function subscribeSharedMessage(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}