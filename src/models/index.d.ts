import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerExternalComponent = {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly tags: (string | null)[];
}

type LazyExternalComponent = {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly tags: (string | null)[];
}

export declare type ExternalComponent = LazyLoading extends LazyLoadingDisabled ? EagerExternalComponent : LazyExternalComponent

export declare const ExternalComponent: (new (init: ModelInit<ExternalComponent>) => ExternalComponent) & {
  copyOf(source: ExternalComponent, mutator: (draft: MutableModel<ExternalComponent>) => MutableModel<ExternalComponent> | void): ExternalComponent;
}