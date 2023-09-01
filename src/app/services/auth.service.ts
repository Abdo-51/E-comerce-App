import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedInfo =new BehaviorSubject<any>({})
  constructor(private router: Router,)
  {
    this.LoggedInfo.next(JSON.parse(localStorage.getItem('user')||"{}"))
  }
  login(userData:IUser) {
    this.LoggedInfo.next({
      isLooggedIn:true,
      email:userData.email
    });

    localStorage.setItem('user',JSON.stringify(userData));
    this.router.navigateByUrl('/')
  }

  logOut()
  {
    this.LoggedInfo.next({});
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
  getAuth(){
    return  localStorage.getItem('user');
  }
}
