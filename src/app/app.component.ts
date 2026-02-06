import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  timi_polisis = 5.33;
  timi_apodosis = 0;
  timi_agoras = 3.68;
  kerdos_polisis = 0;
  kerdos_apodosis = 0;
  promitheia = 12.40;
  optimizer = 0;
  nea_timi_polisis = 0;
  nea_timi_apodosis = 0;
  neo_kerdos_polisis = 0;
  neo_kerdos_apodosis = 0;
  title = 'panagiotou-bros';

  ngOnInit(): void {
    this.recalculate();
  }

  recalculate() {
    const promitheia = this.promitheia / 100;
    const optimizer = this.optimizer / 100;
    this.timi_apodosis = this.timi_polisis - this.timi_polisis * promitheia;

    this.kerdos_polisis =
      (this.timi_polisis - this.timi_agoras) / this.timi_agoras;

    this.kerdos_apodosis =
      (this.timi_apodosis - this.timi_agoras) / this.timi_agoras;

    this.nea_timi_polisis = this.timi_polisis - optimizer * this.timi_polisis;

    this.nea_timi_apodosis =
      this.nea_timi_polisis - this.nea_timi_polisis * promitheia;

    this.neo_kerdos_polisis =
      (this.nea_timi_polisis - this.timi_agoras) / this.timi_agoras;
  }

  recalculateOptimizer() {
    this.recalculate();
    const promitheia = this.promitheia / 100;

    this.neo_kerdos_apodosis =
      ((this.nea_timi_polisis -
        this.nea_timi_polisis * promitheia -
        this.timi_agoras) /
        this.timi_agoras) *
      100;
  }

  recalculateKerdosApodosis() {
    this.recalculate();
    const neo_kerdos_apodosis = this.neo_kerdos_apodosis / 100;
    const promitheia = this.promitheia / 100;
    this.optimizer =
      (1 -
        (this.timi_agoras * (1 + neo_kerdos_apodosis)) /
          (this.timi_polisis * (1 - promitheia))) *
      100;
  }
}
