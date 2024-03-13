import {Component} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {colors} from "@angular/cli/src/utilities/color";

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage {

  data: any = [];
  data_users: any = [];

  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/qs/65f19aa7dc74654018b248e5';

  // loading: any;

  constructor(public loadingController: LoadingController) {
  }

  async load() {
    // this.loading = await this.loadingController.create({
    //   spinner: "bubbles",
    //   message: "Loading..."
    // });

    // await this.loading.present();

    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        console.log(this.data);
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.data_users.push(this.data[i]);
          i++;
          console.log(i);
        }
        console.log(this.data_users);
        console.log("Data loaded");
        // this.loading.dismiss;
      })
  }

  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    } else {
      this.showDetails[i] = true;
    }
  }

  getColor(a: string, b: any, color: string) {
    return a == b ? color : '';
  }

  protected readonly toString = toString;
}
