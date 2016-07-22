import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {Alert} from 'ionic-angular';

import 'rxjs/Rx';

import {ExtendedHttp} from './ExtendedHttp';
import {User} from '../components/user/User';

@Injectable()
export class UserService {

	user: User = null;

	constructor(private http: ExtendedHttp) {
		this.http = http;
	}

	public authenticate(username: string, password: string):Observable<boolean> {
		return this.http.post('/auth/login', {'username': username, 'password': password}, true)
		.map((res) => {
			let resData:any = res.json();
			this.user = new User(username, password, resData.token);
			return true;
		}).catch((err:any) => {
			console.log(err);
			let alert = Alert.create({
				title: 'Credenciales invalidas',
				subTitle: 'El usuario y contraseña ingresado no son correctos.',
				buttons: ['Ok']
			});
			return Observable.throw(alert);
		});
	}

	public getCurrentUser():Observable<User> {
		return Observable.create((observer:any) => {
			observer.next(this.user);
			observer.complete();
		});
	}

	public logout() {
		this.user.logout();
		this.user = null;
	}
}