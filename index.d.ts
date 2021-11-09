import { KafkaMessage, Kafka, Admin, AdminConfig, Producer, ProducerConfig} from 'kafkajs';
import { GraphQLSchema, ExecutionResult } from 'graphql';

interface IGenericObject {
    [key: string]: any;
}

interface IKafkaHandler {
    run(topic: string, payload: KafkaMessage): Promise<ExecutionResult>;
}

export declare class KafkaClient {
    kafka: Kafka;
    handler: IKafkaHandler;
    constructor(clientId: string, brokers: Array<string>);
    send(topic: string, messages: Array<KafkaMessage>): Promise<void>;
    startConsumer(topics: Array<string>, handler: IKafkaHandler, groupId?: string, fromBeginning?: boolean): Promise<void>;
    startProducer(options?: ProducerConfig): Promise<Producer>;
    startAdmin(option?: AdminConfig): Promise<Admin>;
}
