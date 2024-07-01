import * as React from 'react';

import { ExpoMlcLlmViewProps } from './ExpoMlcLlm.types';

export default function ExpoMlcLlmView(props: ExpoMlcLlmViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
