import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/Users/users.service';
import { LockedUser, Usuario } from '../../models/UserDash.model';
import Swal from 'sweetalert2';
import { CityService } from 'src/app/services/city/city.service';
import { city } from 'src/app/models/City.models';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public is_active : boolean 
  public is_user :boolean 
  public usuarios: Usuario[] = []
  public usuariosTemp: Usuario[] = []
   public lockedUsers: LockedUser[] = []
   public cargando: boolean = true
   public pageNumber:number = 1
   public totalServicios:number = 0
   public cities: city[]
  constructor(public dialog: MatDialog, private userService: UsersService, public cityService: CityService) { }

  getUsersByCity(){

  }

  ngOnInit(): void {

    this.getUsers();
    this.getBlockedUsers();
  }
  filter(){
    this.getUsers();
    this.getBlockedUsers();
  }
  getUsers(){
    this.cargando = true
    this.userService.getUsers( true ,  true, this.pageNumber)
                      .subscribe( (usuarios) =>{
                            this.usuarios = usuarios
                            this.usuariosTemp = usuarios
                            this.totalServicios = usuarios.length
                            this.cargando = false

                        }) 

  }
 
  pagination(valor:number){
    this.cargando = true
    this.pageNumber += valor;

    if (this.pageNumber < 1) {
      this.pageNumber = 1
    } else if (this.pageNumber > this.totalServicios){
      this.pageNumber -= valor
    }
    this.getUsers()
    this.cargando = false
  }
  search(SearchTerm : string){
    if(SearchTerm.length === 0){
      return this.usuarios = this.usuariosTemp
    }
      this.userService.searchUsers(true, true, SearchTerm)
                          .subscribe( (usuarios:any) => {
                                this.usuarios = usuarios 
                          })
  }
  
  getBlockedUsers(){
    this.cargando = true
    this.userService.getUsers( false,  true, this.pageNumber)
                        .subscribe( (lockedUsers) => {
                          this.lockedUsers =  lockedUsers
                          this.cargando = false
                        })

  }
  
   
  BlockUser(usuario:Usuario ){
    let data ={
      username:usuario.username,
      first_name: usuario.first_name,
      last_name: usuario.last_name,
      id: usuario.id
    }
  Swal.fire({
    title: '¿Bloquear Usuario?',
    text: `Estas a punto de bloquear a  ${data.first_name} ${data.last_name}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, bloquear!'
  }).then((result) => {
    if (result.value) {
     this.userService.blockUser(data )
              .subscribe(resp => {
                this.getUsers();
                this.getBlockedUsers()

              Swal.fire('Usuario bloqueado',
              `${data.first_name} ${data.last_name} fue bloqueado`,
              'success' )
            }
              )}
   } 
  )}
  DisBlockUser(usuario:Usuario ){
    let data ={
      username:usuario.username,
      first_name: usuario.first_name,
      last_name: usuario.last_name,
      id: usuario.id
    }
  Swal.fire({
    title: '¿Desbloquear Usuario?',
    text: `Estas a punto de desbloquear a  ${data.first_name} ${data.last_name}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, desbloquear!'
  }).then((result) => {
    if (result.value) {
     this.userService.blockUser(data )
              .subscribe(resp => {
                this.getUsers();
                this.getBlockedUsers()
              Swal.fire('Usuario desbloqueado',
              `${data.first_name} ${data.last_name} fue desbloqueado`,
              'success' )
            }
              )}
   } 
  )}
}

