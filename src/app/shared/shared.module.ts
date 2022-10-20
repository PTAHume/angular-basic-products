import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import ConvertToSpacesPipe from '../shared/convert-to-spaces.pipe';
import StarComponent from '../shared/star.component';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, StarComponent, ConvertToSpacesPipe],
})
export default class SharedModule {}
