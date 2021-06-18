import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {
  public logoUrl='https://media.istockphoto.com/illustrations/cat-and-dog-logo-illustration-id480194715?s=612x612';
  public titulo='Sobre o projeto de doacão';
  public descricao='Somos uma ong sem fins lucrativos (Associação de Mulheres Protetoras dos Animais Rejeitados e Abandonados que ajuda abrigos e protetores independentes com ração, medicamentos e atendimento veterinário. Hoje, amparamos cerca de 450 protetores, beneficiando mais de 100 mil animais por ano e conscientizamos adultos e crianças sobre o cenário de abandono de animais. Nosso principal objetivo é transformar a realidade dos mais de 30 milhões de animais que estão nas ruas e proporcionar uma vida digna e feliz a eles.'

  constructor() { }

  ngOnInit(): void {
  }

}
