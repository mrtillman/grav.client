import { UseCase } from "./use-case.interface";
import { GravatarClient } from "../Presentation";

export class VerifyAccountUseCase implements UseCase<boolean> {
  public client: GravatarClient;

  async execute(): Promise<boolean> {
    const existsResult = await this.client.exists();
    const testResult = await this.client.test();
    const emailExists = existsResult.Value.success;
    const sanityCheckPasses = !!testResult.Value.response;
    return emailExists && sanityCheckPasses;
  }
}