import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMlcLlmViewProps } from './ExpoMlcLlm.types';

const NativeView: React.ComponentType<ExpoMlcLlmViewProps> =
  requireNativeViewManager('ExpoMlcLlm');

export default function ExpoMlcLlmView(props: ExpoMlcLlmViewProps) {
  return <NativeView {...props} />;
}
