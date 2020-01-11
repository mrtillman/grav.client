require("isomorphic-unfetch");
import { createReadStream } from "fs";
import FormData from "isomorphic-form-data";

export const origin = "https://secure.gravatar.com";

export class HttpShim {
  public endpoint: string;

  constructor(emailHash: string) {
    this.endpoint = `${origin}/xmlrpc?user=${emailHash}`;
  }

  async rpc(message: string): Promise<Response> {
    return await fetch(this.endpoint, {
      method: "POST",
      headers: { "content-type": "text/xml" },
      body: message
    });
  }

  async postImageFile(imageFilePath: string): Promise<Response> {
    const formData = new FormData();
    formData.append("avatar", createReadStream(imageFilePath));
    return await fetch("https://dailyavatar.io/api/v1/avatars", {
      method: "POST",
      body: <any>formData
    });
  }

  async postEncodedImage(
    base64string: string,
    mimetype: string
  ): Promise<Response> {
    const avatar = {
      data: base64string,
      mimetype
    };
    return await fetch("https://dailyavatar.io/api/v1/avatars", {
      method: "POST",
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(avatar)
    });
  }
}