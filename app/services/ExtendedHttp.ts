import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const CONTENT_TYPE_HEADER:string = 'Content-Type';
const APPLICATION_JSON:string = 'application/json';
const BACKEND_URL:string = 'http://192.168.1.176:8090';

@Injectable()
export class ExtendedHttp {

	private header = new Headers();

	constructor(private http: Http) {
		this.http = http;
		this.header.append(CONTENT_TYPE_HEADER, APPLICATION_JSON);
	}

	// add token header
	private createAuthorizationHeader() {
		this.header.append('Authorization', 'Basic ' + btoa('username:password')); 
	}

	public get(url: string):Observable<Response> {
		this.createAuthorizationHeader();
		return this.http.get(url, {headers: this.header});
	}

	public post(resource: string, data: any, auth: boolean = false):Observable<Response> {
		if (!auth) 
			this.createAuthorizationHeader();
		return this.http.post(BACKEND_URL + resource, JSON.stringify(data), {headers: this.header});
	}
}