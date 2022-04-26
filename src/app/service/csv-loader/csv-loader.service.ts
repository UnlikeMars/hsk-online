import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CsvLoaderService {

  constructor(private httpClient: HttpClient) {
    //  This constructor is intentionally empty.
  }

  public loadCSVAsset(assetName: string): Observable<string> {
    return this.httpClient.get(`./assets/csv/${assetName}`, {responseType: 'text'})
  }

}
