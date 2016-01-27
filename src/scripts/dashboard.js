'use strict';

import React, { Component } from 'react';

const Dashboard = function () {};

Dashboard.prototype = Object.create(Component.prototype);
Dashboard.prototype.constructor = Dashboard;

Dashboard.prototype.render = () => (
  <div>hello</div>
);

export default Dashboard;
