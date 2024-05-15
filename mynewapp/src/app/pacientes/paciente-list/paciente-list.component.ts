import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../pacientes.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: Array<Paciente> = [];
  menores: number=0;
  minoria: number=18;
  selectedPaciente: Paciente | null = null;
  constructor(private pacienteService: PacienteService) { }

  getPacientesList() {
    this.pacienteService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
      this.darMenores();
    });
  }

  darMenores(){
    for(let index=0; index< this.pacientes.length; index++){
        let paciente: Paciente= this.pacientes[index]
        if(paciente.edad<this.minoria){
          this.menores+=1
        }
    }
  }

  ngOnInit() {
    this.getPacientesList();
  }

  selectPaciente(paciente: Paciente): void {
    this.selectedPaciente = paciente;
  }

}

