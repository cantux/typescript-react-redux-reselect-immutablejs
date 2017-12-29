import * as React from 'react';

import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor  from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
// const DockMonitor = require('redux-devtools-dock-monitor').default;

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

export default DevTools;
