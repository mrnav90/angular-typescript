'use strict';

import 'ts-node/register';
import * as requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });
