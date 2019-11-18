import { Component, OnInit } from '@angular/core';
import { SelectValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public username: string = "John Doe";
  public date: string = 'XX/YY/YYYY';

  constructor() {
    console.log(this.username);
    this.SetValues();
  }

  ngOnInit() {
  }

  public SetValues(): void {
    this.date = new Date().toDateString();
    this.username = 'Wesley Flôres';
  }

  ionViewDidEnter() {
    console.log("Página 4 foi carregada com sucesso!");
  }
}