import { Component, OnInit, Input, Inject } from '@angular/core';
import { Ship } from '../domain/ship';
import { UpgradeType } from '../domain/upgradeType';
import { Upgrade } from '../domain/upgrade';
import { MatDialog } from '@angular/material';
import { ShipCardComponent, ShipCardData } from '../ship-card/ship-card.component';

@Component({
  selector: 'flagship-ship-editor',
  templateUrl: './ship-editor.component.html',
  styleUrls: ['./ship-editor.component.css']
})
export class ShipEditorComponent implements OnInit {

  @Input() ship: Ship;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  viewShipCard() {
    this.dialog.open(ShipCardComponent, {
      width: '250px',
      data: <ShipCardData> { shipId: this.ship.id }
    });
  }

  enabledUpgradeSlots() {
    return this.ship.upgradeSlots.filter(x => x.isEnabled);
  }

  upgradeTypeName(type: UpgradeType): string {
    switch (type) {
      case UpgradeType.BoardingTeam:
        return "Boarding Team";
      case UpgradeType.DefensiveRetrofit:
        return "Defensive Retrofit";
      case UpgradeType.ExperimentalRetrofit:
        return "Experimental Retrofit";
      case UpgradeType.FleetCommand:
        return "Fleet Command";
      case UpgradeType.FleetSupport:
        return "Fleet Support";
      case UpgradeType.IonCannons:
        return "Ion Cannons";
      case UpgradeType.OffensiveRetrofit:
        return "Offensive Retrofit";
      case UpgradeType.SupportTeam:
        return "Support Team";
      case UpgradeType.WeaponsTeam:
        return "Weapons Team";
      default:
        return type.toString();
    }
  }

}