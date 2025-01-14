import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Usuario } from "../modelo/Usuario";

export class UsuarioService{

    private url:string = 'http://localhost:4200';
    constructor(private http:HttpClient){}

    //Metodo de selecionar Usuario com 'get' //
    selecionar():Observable<Usuario>{
        return this.http.get<Usuario>(this.url);
    }

    //Metodo para cadastrar o usuario com com 'post' //
    cadastrar(obj:Usuario):Observable<Usuario>{
        return this.http.post<Usuario>(this.url,obj);
    }

    //Metodo para editar as info do Usuario com 'put' //
    editar(obj:Usuario):Observable<Usuario>{
        return this.http.put<Usuario>(this.url,obj);
    }

    // Metodo de deletar Usuario com 'delete' //
    deletar(codigo:number):Observable<void>{
        return this.http.delete<void>(this.url + '/' + codigo);
    }

}