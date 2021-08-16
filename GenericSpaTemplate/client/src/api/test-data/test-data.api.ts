import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestData } from './test-data';

@Injectable()
export class TestDataApi {

  private url: string = '/api/test';
  private getDataOperation: string = '/';

  public constructor(private readonly http: HttpClient) {}

  public getTestData(): Observable<Array<TestData>> {
    return this.http.get<Array<TestData>>(`${ this.url }${ this.getDataOperation }`);
  }
}
