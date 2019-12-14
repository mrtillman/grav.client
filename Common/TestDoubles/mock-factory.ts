require("jasmine");

import { GravatarClient } from "../../Presentation";
import { HttpShim } from "../../Infrastructure/http-shim";

import { email, password, emailHash } from "./primitive-stubs";
import { post } from "fetch-mock";
import { origin } from '../../Infrastructure/http-shim';
import { ResponseStub } from './http-response-stubs';

import * as stub from './result-stubs';

import { UseCaseType } from "../../Common/use-case-type";

export function mockHttpShim(responseStub: ResponseStub) : HttpShim {
  const httpShim = new HttpShim(emailHash);
  spyOn(httpShim, 'rpc').and.returnValue(responseStub.value);
  return httpShim;
};

export function mockHttpRequests(){  
  post(`${origin}/xmlrpc?user=${emailHash}`, 200)
 .post('https://dailyavatar.io/api/v1/avatars', 200)
 .post('https://dailyavatar.io/api/v1/avatars/base64', 200); 
};

export function mockClient(type: UseCaseType = UseCaseType.None, useSuccess: boolean = true): GravatarClient {
  let client: GravatarClient = new GravatarClient(email, password);
  switch (type) {
    case UseCaseType.GetPrimaryImage:
        spyOn(client, 'addresses').and.returnValue(stub.AddressesResult(useSuccess));
        return client;
    case UseCaseType.VerifyAccount:
        spyOn(client, 'exists').and.returnValue(stub.ExistsResult(useSuccess));
        spyOn(client, 'test').and.returnValue(stub.TestResult(useSuccess));
        return client;
    default:
      spyOn(client, 'test').and.returnValue(stub.TestResult(useSuccess));
        return client;
  }
}
