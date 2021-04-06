/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ngx_grpc_library_example000 from '@ngx-grpc-library-example/test';
import * as ngx_grpc_library_exampleB_package001 from '@ngx-grpc-library-example/test/b-package';
/**
 * Message implementation for ngx_grpc_library_example.b_package.c_package.C_Message
 */
export class C_Message implements GrpcMessage {
  static id = 'ngx_grpc_library_example.b_package.c_package.C_Message';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new C_Message();
    C_Message.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: C_Message) {
    _instance.id = _instance.id || 0;
    _instance.description = _instance.description || '';
    _instance.bMessage = _instance.bMessage || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: C_Message,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.description = _reader.readString();
          break;
        case 3:
          _instance.bMessage = new ngx_grpc_library_exampleB_package001.B_Message();
          _reader.readMessage(
            _instance.bMessage,
            ngx_grpc_library_exampleB_package001.B_Message
              .deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    C_Message.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: C_Message, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.description) {
      _writer.writeString(2, _instance.description);
    }
    if (_instance.bMessage) {
      _writer.writeMessage(
        3,
        _instance.bMessage as any,
        ngx_grpc_library_exampleB_package001.B_Message.serializeBinaryToWriter
      );
    }
  }

  private _id?: number;
  private _description?: string;
  private _bMessage?: ngx_grpc_library_exampleB_package001.B_Message;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of C_Message to deeply clone from
   */
  constructor(_value?: RecursivePartial<C_Message.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.description = _value.description;
    this.bMessage = _value.bMessage
      ? new ngx_grpc_library_exampleB_package001.B_Message(_value.bMessage)
      : undefined;
    C_Message.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get bMessage(): ngx_grpc_library_exampleB_package001.B_Message | undefined {
    return this._bMessage;
  }
  set bMessage(
    value: ngx_grpc_library_exampleB_package001.B_Message | undefined
  ) {
    this._bMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    C_Message.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): C_Message.AsObject {
    return {
      id: this.id,
      description: this.description,
      bMessage: this.bMessage ? this.bMessage.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): C_Message.AsProtobufJSON {
    return {
      id: this.id,
      description: this.description,
      bMessage: this.bMessage ? this.bMessage.toProtobufJSON(options) : null
    };
  }
}
export module C_Message {
  /**
   * Standard JavaScript object representation for C_Message
   */
  export interface AsObject {
    id?: number;
    description?: string;
    bMessage?: ngx_grpc_library_exampleB_package001.B_Message.AsObject;
  }

  /**
   * Protobuf JSON representation for C_Message
   */
  export interface AsProtobufJSON {
    id?: number;
    description?: string;
    bMessage?: ngx_grpc_library_exampleB_package001.B_Message.AsProtobufJSON | null;
  }
}
