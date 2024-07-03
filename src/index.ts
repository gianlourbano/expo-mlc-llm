import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoMlcLlm.web.ts
// and on native platforms to ExpoMlcLlm.ts
import ExpoMlcLlmModule from './ExpoMlcLlmModule';
import ExpoMlcLlmView from './ExpoMlcLlmView';
import { ChangeEventPayload, ExpoMlcLlmViewProps } from './ExpoMlcLlm.types';

// Get the native constant value.
export const PI = ExpoMlcLlmModule.PI;

export function hello(): string {
  return ExpoMlcLlmModule.hello();
}

export function loadModel(modelName: string): string {
  return ExpoMlcLlmModule.loadModel(modelName);
}

export async function setValueAsync(value: string) {
  return await ExpoMlcLlmModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoMlcLlmModule ?? NativeModulesProxy.ExpoMlcLlm);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoMlcLlmView, ExpoMlcLlmViewProps, ChangeEventPayload };
