import { Component } from '@angular/core';
import { TestData } from 'src/api/test-data/test-data';
import { TestDataApi } from 'src/api/test-data/test-data.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'net-spa-sample';
  testData: Array<TestData> = [];

  public constructor(private readonly testApi: TestDataApi) {

  }

  public ngOnInit(): void {
    this.testApi.getTestData().toPromise().then(data => {
      this.testData = data;
    });
  }
}
