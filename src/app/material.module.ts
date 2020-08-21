import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  imports: [
      MatSliderModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatGridListModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      MatProgressSpinnerModule
    ]
})
export class AngularMaterialModule {}
