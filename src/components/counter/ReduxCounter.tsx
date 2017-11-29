import * as React from 'react';

interface ReduxCounterProps {}
interface ReduxCounterStates {
  value: number;
}

export class ReduxCounter extends React.Component<ReduxCounterProps, ReduxCounterStates> {
  constructor(props: ReduxCounterProps) {
    super(props);
  }
}
