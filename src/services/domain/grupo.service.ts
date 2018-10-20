import { API_CONFIG } from "./../../config/api.config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GrupoDTO } from "../../models/grupo.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class GrupoService {
  constructor(public http: HttpClient) {}

  findAll(): Observable<GrupoDTO[]> {
    return this.http.get<GrupoDTO[]>(`${API_CONFIG.baseUrl}/grupos`);
  }
}
