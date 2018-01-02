import * as React from 'react';

import { createDevTools } from 'redux-devtools';

// import DockMonitor from 'redux-devtools-dock-monitor'; // noImplicitAny conflict
const LogMonitor = require('redux-devtools-log-monitor').default;
const DockMonitor = require('redux-devtools-dock-monitor').default;

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
