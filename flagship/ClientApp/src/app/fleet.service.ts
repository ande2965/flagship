import { Injectable } from '@angular/core';
import { Fleet } from './domain/fleet';
import { Faction } from './domain/faction';
import { Observable, of } from 'rxjs';
import { Ship } from './domain/ship';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  public fleets: Fleet[];

  constructor() { 
    this.fleets = [
      new Fleet("1", "Motti's Fun House", "Joshua Barron", Faction.Empire, 400),
      new Fleet("2", "Thrawn and Wakanda Forever", "Joshua Barron", Faction.Empire, 400),
      new Fleet("3", "Rieekan and Friends", "Joshua Barron", Faction.Rebels, 400)
    ];
  }

  getFleet(id: string): Observable<Fleet> {
    console.log("finding fleet with id " + id);
    console.log(this.fleets.length);
    return of(this.fleets.find((f: Fleet) => f.id == id));
  }

  getShip(fleetId: string, shipId: string): Observable<Ship> {
    let fleet = this.fleets.find((f: Fleet) => f.id == fleetId);
    let ship = fleet.ships.find((s: Ship) => s.id == shipId);
    return of(ship);
    
  }
}
