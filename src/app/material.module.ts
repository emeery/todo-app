import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule
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
      MatProgressBarModule,
      MatIconModule,
      MatDialogModule,
    ]
})
export class AngularMaterialModule {}
