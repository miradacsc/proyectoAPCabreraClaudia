import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];  
  html: number;
  css: number;
  javascript: number;
  node: number;
  github: number;
  ingles: number;
  selfLearning: number;
  timeManagement: number;
  teamWork: number;

  constructor(private sSkills: SkillsService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;      
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.sSkills.lista().subscribe(data =>{this.skills = data});
  }

  delete(id: number){
    if(id != undefined){
      this.sSkills.delete(id).subscribe(data => {this.cargarSkills()},
      err =>{
        alert("No se pudo borrar Skills");
      }
        )
    }
  }

  onCreate(): void{
    const skills = new Skills(this.html, this.css, this.javascript, this.node, this.github, this.ingles, this.selfLearning, this.timeManagement, this.teamWork);
    this.sSkills.save(skills).subscribe(data => {
     alert("Skills creado correctamente");
     this.router.navigate(['']);
  }, err => {
    alert("Fallo la creacion de Skills");
    this.router.navigate(['']);
  })
  }

}
