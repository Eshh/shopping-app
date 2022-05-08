import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert-component/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinner } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [AlertComponent, LoadingSpinner, DropdownDirective],
  imports: [CommonModule],
  exports: [AlertComponent, LoadingSpinner, DropdownDirective, CommonModule],
})
export class SharedModule {}
