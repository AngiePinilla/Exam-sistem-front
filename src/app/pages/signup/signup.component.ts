import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user ={
    username : '',
    password : '',
    name : '',
    lastname : '',
    email : '',
    phone:''
  }

  ngOnInit(): void {  }

  constructor(private userService: UserService, private snak: MatSnackBar){}

  formSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snak.open('Nombre de usuario obligatorio','Aceptar',{
        duration: 3000,
        verticalPosition:'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Guardado',
          text: 'Usuario registrado con exito!',
          timer: 1500
        })
      },(error)=>{
        console.log(error);
        this.snak.open('Ocurrio un error al crear un usuario','Aceptar',{
          duration: 3000,
          verticalPosition:'top',
          horizontalPosition: 'right'
        });
      }
    )

  }


}
