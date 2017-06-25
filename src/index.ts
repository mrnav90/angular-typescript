'use strict';

import * as __angular from 'angular';

declare global {
  const angular: typeof __angular;
  const API_URL: string;
}

import 'angular-ui-bootstrap';
import './base/base.controller';
import './base/base.component';
import './base/base.service';
