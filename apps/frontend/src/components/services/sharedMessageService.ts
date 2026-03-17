import {
  getSharedMessage,
  setSharedMessage,
  subscribeSharedMessage,
} from "../../repositories/sharedMessageRepository";

export const sharedMessageService = {
  get(): string {
    return getSharedMessage();
  },

  update(msg: string): void {
    // validate first
    if (typeof msg !== "string") {
      throw new Error("Shared message must be a string.");
    }

    const trimmed = msg.trim();
    if (trimmed.length === 0) {
      throw new Error("Shared message cannot be empty.");
    }

    // action after validation
    setSharedMessage(trimmed);
  },

  subscribe(listener: () => void): () => void {
    return subscribeSharedMessage(listener);
  },
};