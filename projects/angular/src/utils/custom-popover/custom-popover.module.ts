/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [OverlayModule],
  declarations: [],
  exports: [OverlayModule],
})
export class ClrCustomPopoverModule {}