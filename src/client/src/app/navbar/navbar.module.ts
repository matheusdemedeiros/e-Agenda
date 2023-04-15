import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar.component';
import { LoadingModule } from 'src/shared/loading/loading.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, NgbModule, LoadingModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
