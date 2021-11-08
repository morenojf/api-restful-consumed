import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public users: any;
  public formUser = {
    username: '',
    email: '',
    password: '',
  };
  public userId: any;
  public filter: any = [];
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((res) => {
      console.log('res', res);
      this.users = res;
    });
  }

  saveUserDB() {
    this.apiService.saveUserDB(this.formUser).subscribe((res) => {
      console.log(res);
    });
  }

  deleteUserDB(){
    this.apiService.getUsers().subscribe((res) => {
      console.log('res', res);
      this.userId = {id: res._id}
      this.apiService.deleteUserDB(this.userId.id).subscribe(res =>{
        console.log('res', res);
      })
    });
  }
}
