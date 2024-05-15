import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteDetailComponent } from './paciente-detail/paciente-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [PacienteListComponent,PacienteDetailComponent],
  exports: [PacienteListComponent,PacienteDetailComponent]
})
export class PacientesModule { }
