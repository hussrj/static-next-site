import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ExternalComponent {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly tags: (string | null)[];
  constructor(init: ModelInit<ExternalComponent>);
  static copyOf(source: ExternalComponent, mutator: (draft: MutableModel<ExternalComponent>) => MutableModel<ExternalComponent> | void): ExternalComponent;
}