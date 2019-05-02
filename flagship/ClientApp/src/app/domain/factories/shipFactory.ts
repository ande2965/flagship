import { Ship, ShipData, ShipClass } from "../ship";
import { Faction } from '../faction';
import { DefenseToken } from '../defenseToken';
import { Size } from '../size';
import { Armament } from '../armament';
import { NavigationChart } from '../navigationChart';
import { UpgradeSlot } from '../upgradeSlot';
import { UpgradeType } from '../upgradeType';
import { TitleCasePipe } from '@angular/common';

export class ShipFactory {
  private static titles = {
    isd: [],
    arquitens: [],
    gladiator: [],
    gozanti: [],
    ssd: [],
    raider: [],
    quasar: [],
    vsd: [],
    interdictor: []
  };

  static shipData: ShipData[] = [
    {
      id: 1, name: 'Imperial I-Class Star Destroyer', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 110, hull: 11, command: 3, squadron: 4, engineering: 4, size: Size.Large,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Redirect, DefenseToken.Contain],
      leftShields: 3, rightShields: 3, frontShields: 4, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(3, 2, 3), rearArmament: new Armament(1, 2, 0),
      leftArmament: new Armament(2, 0, 2), rightArmament: new Armament(2, 0, 2),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 1),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Turbolaser),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons)
      ],
      allowedTitles: ShipFactory.titles.isd
    },
    {
      id: 2, name: 'Imperial II-Class Star Destroyer', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 120, hull: 11, command: 3, squadron: 4, engineering: 4, size: Size.Large,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Redirect, DefenseToken.Contain],
      leftShields: 3, rightShields: 3, frontShields: 4, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(4, 4, 0), rearArmament: new Armament(1, 2, 0),
      leftArmament: new Armament(2, 2, 0), rightArmament: new Armament(2, 2, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 2, 0),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Turbolaser),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.DefensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
      ],
      allowedTitles: ShipFactory.titles.isd
    },
    {
      id: 3, name: 'Imperial Star Destroyer Cymoon Refit', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 112, hull: 11, command: 3, squadron: 4, engineering: 4, size: Size.Large,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Redirect, DefenseToken.Contain],
      leftShields: 3, rightShields: 3, frontShields: 4, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(5, 2, 0), rearArmament: new Armament(1, 2, 0),
      leftArmament: new Armament(1, 3, 0), rightArmament: new Armament(1, 3, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 0, 2),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.FleetCommand),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.Turbolaser), new UpgradeSlot(UpgradeType.Turbolaser)
      ],
      allowedTitles: ShipFactory.titles.isd
    },
    {
      id: 4, name: 'Imperial Star Destroyer Kuat Refit', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 112, hull: 11, command: 3, squadron: 4, engineering: 4, size: Size.Large,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Redirect, DefenseToken.Contain],
      leftShields: 3, rightShields: 3, frontShields: 4, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(3, 2, 3), rearArmament: new Armament(1, 1, 1),
      leftArmament: new Armament(1, 1, 2), rightArmament: new Armament(1, 1, 2),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 1),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.DefensiveRetrofit), new UpgradeSlot(UpgradeType.Ordnance)
      ],
      allowedTitles: ShipFactory.titles.isd
    },
    {
      id: 5, name: 'Arquitens-Class Command Cruiser', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 59, hull: 5, command: 2, squadron: 2, engineering: 3, size: Size.Small,
      defenseTokens: [DefenseToken.Evade, DefenseToken.Redirect, DefenseToken.Redirect, DefenseToken.Contain],
      leftShields: 2, rightShields: 2, frontShields: 2, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(1, 1, 0), rearArmament: new Armament(1, 1, 0),
      leftArmament: new Armament(3, 0, 0), rightArmament: new Armament(3, 0, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(2, [0, 2], [0, 0, 2], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.SupportTeam),
        new UpgradeSlot(UpgradeType.DefensiveRetrofit), new UpgradeSlot(UpgradeType.Turbolaser)
      ],
      allowedTitles: ShipFactory.titles.arquitens
    },
    {
      id: 6, name: 'Arquitens-Class Light Cruiser', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 54, hull: 5, command: 2, squadron: 2, engineering: 3, size: Size.Small,
      defenseTokens: [DefenseToken.Evade, DefenseToken.Redirect, DefenseToken.Redirect, DefenseToken.Contain],
      leftShields: 2, rightShields: 2, frontShields: 2, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(1, 0, 1), rearArmament: new Armament(1, 0, 1),
      leftArmament: new Armament(3, 0, 0), rightArmament: new Armament(3, 0, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 0, 1),
      navigationChart: new NavigationChart(2, [0, 2], [0, 0, 2], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.DefensiveRetrofit),
        new UpgradeSlot(UpgradeType.Turbolaser)
      ],
      allowedTitles: ShipFactory.titles.arquitens
    },
    {
      id: 7, name: 'Gladiator I-Class Star Destroyer', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 56, hull: 5, command: 2, squadron: 2, engineering: 3, size: Size.Small,
      defenseTokens: [DefenseToken.Evade, DefenseToken.Brace, DefenseToken.Redirect],
      leftShields: 2, rightShields: 2, frontShields: 3, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(2, 0, 2), rearArmament: new Armament(1, 0, 1),
      leftArmament: new Armament(0, 0, 4), rightArmament: new Armament(0, 0, 4),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.SupportTeam), new UpgradeSlot(UpgradeType.Ordnance)
      ],
      allowedTitles: ShipFactory.titles.gladiator
    },
    {
      id: 8, name: 'Gladiator II-Class Star Destroyer', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 62, hull: 5, command: 2, squadron: 2, engineering: 3, size: Size.Small,
      defenseTokens: [DefenseToken.Evade, DefenseToken.Brace, DefenseToken.Redirect],
      leftShields: 2, rightShields: 2, frontShields: 3, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(2, 0, 2), rearArmament: new Armament(1, 0, 1),
      leftArmament: new Armament(1, 0, 3), rightArmament: new Armament(1, 0, 3),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 2, 0),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.SupportTeam), new UpgradeSlot(UpgradeType.Ordnance)
      ],
      allowedTitles: ShipFactory.titles.gladiator
    },
    {
      id: 9, name: 'Gozanti-Class Assault Carriers', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 28, hull: 1, command: 1, squadron: 2, engineering: 2, size: Size.SmallFlotilla,
      defenseTokens: [DefenseToken.Scatter, DefenseToken.Evade],
      leftShields: 1, rightShields: 1, frontShields: 1, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(1, 0, 0), rearArmament: new Armament(0, 0, 0),
      leftArmament: new Armament(0, 1, 0), rightArmament: new Armament(0, 1, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(2, [1, 1], [1, 1, 0], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.FleetSupport)
      ],
      allowedTitles: ShipFactory.titles.gozanti
    },
    {
      id: 10, name: 'Gozanti-Class Cruisers', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 23, hull: 1, command: 1, squadron: 2, engineering: 2, size: Size.SmallFlotilla,
      defenseTokens: [DefenseToken.Scatter, DefenseToken.Evade],
      leftShields: 1, rightShields: 1, frontShields: 1, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(0, 1, 0), rearArmament: new Armament(0, 0, 0),
      leftArmament: new Armament(0, 1, 0), rightArmament: new Armament(0, 1, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 0, 1),
      navigationChart: new NavigationChart(2, [1, 1], [1, 1, 0], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.FleetSupport)
      ],
      allowedTitles: ShipFactory.titles.gozanti
    },
    {
      id: 11, name: 'Interdictor-Class Combat Refit', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 93, hull: 9, command: 2, squadron: 2, engineering: 5, size: Size.Medium,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Contain, DefenseToken.Contain],
      leftShields: 2, rightShields: 2, frontShields: 3, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(2, 2, 0), rearArmament: new Armament(1, 2, 0),
      leftArmament: new Armament(2, 2, 0), rightArmament: new Armament(2, 2, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 1),
      navigationChart: new NavigationChart(1, [1, 1], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.SupportTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.ExperimentalRetrofit)
      ],
      allowedTitles: ShipFactory.titles.interdictor
    },
    {
      id: 12, name: 'Interdictor-Class Suppression Refit', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 90, hull: 9, command: 2, squadron: 2, engineering: 5, size: Size.Medium,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Contain, DefenseToken.Contain],
      leftShields: 2, rightShields: 2, frontShields: 3, rearShields: 2, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(1, 3, 0), rearArmament: new Armament(1, 2, 0),
      leftArmament: new Armament(1, 3, 0), rightArmament: new Armament(1, 3, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(1, [1, 1], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.SupportTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.ExperimentalRetrofit), new UpgradeSlot(UpgradeType.ExperimentalRetrofit)
      ],
      allowedTitles: ShipFactory.titles.interdictor
    },
    {
      id: 13, name: 'Quasar Fire I-Class Cruiser-Carrier', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 54, hull: 6, command: 2, squadron: 4, engineering: 2, size: Size.Medium,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect],
      leftShields: 2, rightShields: 2, frontShields: 2, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(0, 3, 0), rearArmament: new Armament(0, 1, 0),
      leftArmament: new Armament(0, 2, 0), rightArmament: new Armament(0, 2, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
      ],
      allowedTitles: ShipFactory.titles.quasar
    },
    {
      id: 14, name: 'Quasar Fire II-Class Cruiser-Carrier', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 61, hull: 6, command: 2, squadron: 4, engineering: 2, size: Size.Medium,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect],
      leftShields: 2, rightShields: 2, frontShields: 2, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(2, 1, 0), rearArmament: new Armament(0, 1, 0),
      leftArmament: new Armament(1, 1, 0), rightArmament: new Armament(1, 1, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(1, 0, 0),
      navigationChart: new NavigationChart(2, [1, 1], [0, 1, 1], null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
      ],
      allowedTitles: ShipFactory.titles.quasar
    },
    {
      id: 15, name: 'Raider I-Class Corvette', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 44, hull: 4, command: 1, squadron: 1, engineering: 2, size: Size.Small,
      defenseTokens: [DefenseToken.Evade, DefenseToken.Evade, DefenseToken.Brace],
      leftShields: 2, rightShields: 2, frontShields: 2, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(0, 2, 2), rearArmament: new Armament(0, 1, 0),
      leftArmament: new Armament(0, 1, 1), rightArmament: new Armament(0, 1, 1),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 0, 2),
      navigationChart: new NavigationChart(2, [2, 2], [0, 1, 1], [0, 1, 1, 1]),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.Ordnance),
      ],
      allowedTitles: ShipFactory.titles.raider
    },
    {
      id: 16, name: 'Raider II-Class Corvette', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 48, hull: 4, command: 1, squadron: 1, engineering: 2, size: Size.Small,
      defenseTokens: [DefenseToken.Evade, DefenseToken.Evade, DefenseToken.Brace],
      leftShields: 2, rightShields: 2, frontShields: 2, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(0, 3, 1), rearArmament: new Armament(0, 1, 0),
      leftArmament: new Armament(0, 1, 1), rightArmament: new Armament(0, 1, 1),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 1),
      navigationChart: new NavigationChart(2, [2, 2], [0, 1, 1], [0, 1, 1, 1]),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
      ],
      allowedTitles: ShipFactory.titles.raider
    },
    {
      id: 17, name: 'Victory I-Class Star Destroyer', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 73, hull: 8, command: 3, squadron: 3, engineering: 4, size: Size.Medium,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Redirect],
      leftShields: 3, rightShields: 3, frontShields: 3, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(3, 0, 3), rearArmament: new Armament(2, 0, 0),
      leftArmament: new Armament(2, 0, 1), rightArmament: new Armament(2, 0, 1),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(1, [0, 1], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.Ordnance),
        new UpgradeSlot(UpgradeType.Turbolaser)
      ],
      allowedTitles: ShipFactory.titles.vsd
    },
    {
      id: 18, name: 'Victory II-Class Star Destroyer', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 85, hull: 8, command: 3, squadron: 3, engineering: 4, size: Size.Medium,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Redirect, DefenseToken.Redirect],
      leftShields: 3, rightShields: 3, frontShields: 3, rearShields: 1, leftAuxShields: null, rightAuxShields: null,
      frontArmament: new Armament(3, 3, 0), rearArmament: new Armament(2, 0, 0),
      leftArmament: new Armament(2, 1, 0), rightArmament: new Armament(2, 1, 0),
      leftAuxArmament: null, rightAuxArmament: null,
      antiSquadronArmament: new Armament(0, 1, 0),
      navigationChart: new NavigationChart(1, [0, 1], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.Turbolaser)
      ],
      allowedTitles: ShipFactory.titles.vsd
    },
    {
      id: 19, name: 'Star Dreadnought Command Prototype', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 220, hull: 22, command: 4, squadron: 5, engineering: 4, size: Size.Huge,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Brace, DefenseToken.Redirect,
        DefenseToken.Redirect, DefenseToken.Contain, DefenseToken.Contain],
      leftShields: 3, rightShields: 3, frontShields: 6, rearShields: 2, leftAuxShields: 3, rightAuxShields: 3,
      frontArmament: new Armament(4, 4, 0), rearArmament: new Armament(1, 1, 1),
      leftArmament: new Armament(3, 1, 1), rightArmament: new Armament(3, 1, 1),
      leftAuxArmament: new Armament(2, 1, 1), rightAuxArmament: new Armament(2, 1, 1),
      antiSquadronArmament: new Armament(0, 2, 0),
      navigationChart: new NavigationChart(0, [0, 0], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Officer),
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.Turbolaser), new UpgradeSlot(UpgradeType.FleetCommand),
        new UpgradeSlot(UpgradeType.FleetCommand)
      ],
      allowedTitles: ShipFactory.titles.ssd
    },
    {
      id: 20, name: 'Star Dreadnought Assault Prototype', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 250, hull: 22, command: 4, squadron: 5, engineering: 4, size: Size.Huge,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Brace, DefenseToken.Redirect,
        DefenseToken.Redirect, DefenseToken.Contain, DefenseToken.Contain],
      leftShields: 3, rightShields: 3, frontShields: 6, rearShields: 2, leftAuxShields: 3, rightAuxShields: 3,
      frontArmament: new Armament(5, 4, 0), rearArmament: new Armament(1, 1, 1),
      leftArmament: new Armament(3, 2, 1), rightArmament: new Armament(3, 2, 1),
      leftAuxArmament: new Armament(2, 2, 1), rightAuxArmament: new Armament(2, 2, 1),
      antiSquadronArmament: new Armament(1, 1, 0),
      navigationChart: new NavigationChart(0, [0, 0], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Officer),
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.WeaponsTeam),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.IonCannons), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.Turbolaser), new UpgradeSlot(UpgradeType.Turbolaser)
      ],
      allowedTitles: ShipFactory.titles.ssd
    },
    {
      id: 21, name: 'Executor I-Class Star Dreadnought', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 381, hull: 33, command: 4, squadron: 6, engineering: 5, size: Size.Huge,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Brace, DefenseToken.Redirect,
        DefenseToken.Redirect, DefenseToken.Contain, DefenseToken.Contain],
      leftShields: 5, rightShields: 5, frontShields: 6, rearShields: 3, leftAuxShields: 5, rightAuxShields: 5,
      frontArmament: new Armament(5, 4, 0), rearArmament: new Armament(2, 1, 1),
      leftArmament: new Armament(3, 3, 1), rightArmament: new Armament(3, 3, 1),
      leftAuxArmament: new Armament(2, 3, 1), rightAuxArmament: new Armament(2, 3, 1),
      antiSquadronArmament: new Armament(0, 2, 1),
      navigationChart: new NavigationChart(0, [0, 0], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Officer),
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Officer),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.IonCannons), new UpgradeSlot(UpgradeType.Turbolaser),
        new UpgradeSlot(UpgradeType.FleetCommand), new UpgradeSlot(UpgradeType.FleetCommand),
        new UpgradeSlot(UpgradeType.FleetCommand), new UpgradeSlot(UpgradeType.FleetCommand)
      ],
      allowedTitles: ShipFactory.titles.ssd
    },
    {
      id: 22, name: 'Executor II-Class Star Dreadnought', shipClass: ShipClass.Normal, faction: Faction.Empire,
      points: 411, hull: 33, command: 4, squadron: 6, engineering: 5, size: Size.Huge,
      defenseTokens: [DefenseToken.Brace, DefenseToken.Brace, DefenseToken.Redirect,
        DefenseToken.Redirect, DefenseToken.Contain, DefenseToken.Contain],
      leftShields: 5, rightShields: 5, frontShields: 6, rearShields: 3, leftAuxShields: 5, rightAuxShields: 5,
      frontArmament: new Armament(5, 5, 0), rearArmament: new Armament(2, 1, 1),
      leftArmament: new Armament(4, 3, 1), rightArmament: new Armament(4, 3, 1),
      leftAuxArmament: new Armament(3, 3, 1), rightAuxArmament: new Armament(3, 3, 1),
      antiSquadronArmament: new Armament(1, 1, 1),
      navigationChart: new NavigationChart(0, [0, 0], null, null),
      upgradeSlots: [
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Officer),
        new UpgradeSlot(UpgradeType.Officer), new UpgradeSlot(UpgradeType.Officer),
        new UpgradeSlot(UpgradeType.WeaponsTeam), new UpgradeSlot(UpgradeType.OffensiveRetrofit),
        new UpgradeSlot(UpgradeType.OffensiveRetrofit), new UpgradeSlot(UpgradeType.IonCannons),
        new UpgradeSlot(UpgradeType.IonCannons), new UpgradeSlot(UpgradeType.Turbolaser),
        new UpgradeSlot(UpgradeType.Turbolaser), new UpgradeSlot(UpgradeType.FleetCommand)
      ],
      allowedTitles: ShipFactory.titles.ssd
    }
    // Rebel (Scum) 
  ];

  constructor() {

  }

  getShips(faction: Faction): ShipData[] {
    return ShipFactory.shipData.filter(x => x.faction === faction);
  }

  instantiateShip(id: number): Ship {
    let data = ShipFactory.shipData.find(x => x.id === id);

    if (!data)
      return null;

    let upgradeSlots = data.upgradeSlots;
    if (upgradeSlots.find(u => u.type === UpgradeType.OffensiveRetrofit) &&
      upgradeSlots.find(u => u.type === UpgradeType.OffensiveRetrofit)) {
      // add a boarding team slot in
      // currently there are no ships that can fit two boarding teams
      upgradeSlots.push(new UpgradeSlot(UpgradeType.BoardingTeam));
    }

    // All ships currently have titles
    upgradeSlots.push(new UpgradeSlot(UpgradeType.Title));
    // If the ship is not a flotilla, add a commander slot
    if (data.size !== Size.SmallFlotilla) {
      upgradeSlots.push(new UpgradeSlot(UpgradeType.Commander));
    }

    if (data.shipClass === ShipClass.Normal) {
      return new Ship(data.id, data.name, data.shipClass, data.faction,
        data.size, data.hull, data.command, data.squadron, data.engineering, data.points,
        data.defenseTokens, data.frontShields, data.leftAuxShields, data.rightAuxShields,
        data.leftShields, data.rightShields, data.rearShields, data.antiSquadronArmament,
        data.frontArmament, data.leftAuxArmament, data.rightAuxArmament,
        data.leftArmament, data.rightArmament, data.rearArmament, data.navigationChart,
        upgradeSlots, data.allowedTitles);
    }
    return null;
  }
}
