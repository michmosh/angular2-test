import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';;
import 'rxjs/Rx';
@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit {
  public url :string ; 
  public urls_list: Array<any> ;
  public src: any;
  public response_data:any ; 
  constructor( private http: Http) { }

  ngOnInit() {
  	this.config();
  }

  config(){
  	this.url = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr';
  	this.urls_list = [
  			{title:'ynet', url:'https://ynet.co.il'},
  			{title:'walla', url:'https://walla.co.il'},
  			{ title:'facebook', url:'https://facebook.com'},
  			{title:'google', url:'https:google.com'}];
  }

  getQrCode(url):Observable<any>{
  	let full_url =this.url +"&chl="+ url.url +"choe=UTF-8" ;  
  	this.src = full_url;
  	return this.http.get(full_url)
                .map(response => {
                	this.response_data = response;
           
                });
  }
  	
}

