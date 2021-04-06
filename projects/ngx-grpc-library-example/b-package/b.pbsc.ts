/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './b.pb';
import * as ngx_grpc_library_example000 from '@ngx-grpc-library-example/test';
import { GRPC_B_SERVICE_CLIENT_SETTINGS } from './b.pbconf';
/**
 * Service client implementation for ngx_grpc_library_example.b_package.B_Service
 */
@Injectable({ providedIn: 'any' })
export class B_ServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /ngx_grpc_library_example.b_package.B_Service/GetA_Message
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.B_Message>>
     */
    getAMessage: (
      requestData: thisProto.B_Message,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.B_Message>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ngx_grpc_library_example.b_package.B_Service/GetA_Message',
        requestData,
        requestMetadata,
        requestClass: thisProto.B_Message,
        responseClass: thisProto.B_Message
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_B_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ngx_grpc_library_example.b_package.B_Service',
      settings
    );
  }

  /**
   * Unary RPC for /ngx_grpc_library_example.b_package.B_Service/GetA_Message
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.B_Message>
   */
  getAMessage(
    requestData: thisProto.B_Message,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.B_Message> {
    return this.$raw
      .getAMessage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
