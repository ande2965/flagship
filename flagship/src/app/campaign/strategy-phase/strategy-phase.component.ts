import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Campaign } from 'src/app/domain/campaign/campaign';
import { BehaviorSubject } from 'rxjs';
import { CampaignState } from 'src/app/domain/campaign/campaignState';
import { Phase } from 'src/app/domain/campaign/phase';
import { CampaignEventType } from 'src/app/domain/campaign/campaignEvent';
import { Battle } from 'src/app/domain/campaign/battle';
import { Faction } from 'src/app/domain/faction';
import { CampaignLocation } from 'src/app/domain/campaign/campaignLocation';
import { CampaignPlayer } from 'src/app/domain/campaign/campaignPlayer';
import { Condition } from 'src/app/domain/campaign/condition';
import { LocationControlType } from 'src/app/domain/campaign/locationControlType';
import { Issue, IssueSeverity } from 'src/app/domain/campaign/issue';
import { CampaignLocationFactory } from 'src/app/domain/factories/campaignLocationFactory';
import { CampaignService } from 'src/app/core/services/campaign.service';
import { StrategicEffectType, StrategicEffects } from 'src/app/domain/campaign/strategicEffectType';
import { indeterminateOptions } from 'src/app/shared/utils/progressButtonConfigs';
import { BattleType } from 'src/app/domain/campaign/battleType';
import { BattleState } from 'src/app/domain/campaign/battleState';

export class DeclaredBattle {
  location: CampaignLocation = null;
  attackingPlayer: CampaignPlayer = null;
  defendingPlayer: CampaignPlayer = null;

  attackingConditions: Condition[] = [];
  chosenAttackingCondition: Condition = null;
  defendingConditions: Condition[] = [];
  chosenDefendingCondition: Condition = null;

  public getTitle(): string {
    let name = this.location.name;
    if (this.location.controllingFaction === null) {
      return `Skirmish at ${name}`;
    }
    let controllingFaction = this.location.controllingFaction === Faction.Empire ? "Imperial" : "Rebel";
    if (this.location.controlType === LocationControlType.Presence) {
      return `Incursion into ${controllingFaction} Territory at ${name}`;
    } else {
      return `Assault on ${controllingFaction} Base at ${name}`;
    }
    //return `Battle of ${name}`;
  }
}

@Component({
  selector: 'flagship-strategy-phase',
  templateUrl: './strategy-phase.component.html',
  styleUrls: ['./strategy-phase.component.css']
})
export class StrategyPhaseComponent implements OnInit, OnChanges {

  @Input() campaign: Campaign;
  @Input() initiativeFaction: Faction;
  @Output() validityChange = new EventEmitter<boolean>();
  @Output() phaseComplete = new EventEmitter<void>();
  completeButtonOptions = indeterminateOptions('Finish Strategy Phase');

  currentState: CampaignState;
  battles: DeclaredBattle[];
  numberOfBattlesRequired: number;

  availableInitiativePlayers: CampaignPlayer[] = [];
  availableNonInitiativePlayers: CampaignPlayer[] = [];
  availableInitiativeLocations: CampaignLocation[] = [];
  availableNonInitiativeLocations: CampaignLocation[] = [];
  initiativeTeamLabel: string;
  nonInitiativeTeamLabel: string;

  canInitiativeTeamUseDiplomats: boolean = false;
  canNonInitiativeTeamUseDiplomats: boolean = false;
  initiativeTeamDiplomatsArea: number = null;
  nonInitiativeTeamDiplomatsArea: number = null;
  areas: number[] = [1, 2, 3, 4, 5];
  issues: Issue[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.numberOfBattlesRequired = this.campaign.empire.numberOfPlayers();
    this.setup()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentState && changes.campaign.currentValue.currentState().turn !== this.currentState.turn)
      this.setup();
  }

  public completePhase() {
    this.completeButtonOptions.active = true;
    if (this.nonInitiativeTeamDiplomatsArea >= 1) {
      (this.initiativeFaction === Faction.Empire ? 
        this.campaign.rebels : this.campaign.empire).tokens[StrategicEffectType.Diplomats] -= 1;
    }
    if (this.initiativeTeamDiplomatsArea >= 1) {
      (this.initiativeFaction === Faction.Empire ? 
        this.campaign.empire : this.campaign.rebels).tokens[StrategicEffectType.Diplomats] -= 1;
    }
    for (const declaredBattle of this.battles) {
      if (declaredBattle.chosenAttackingCondition) {
        declaredBattle.attackingPlayer.setCondition(declaredBattle.chosenAttackingCondition);
      }
      if (declaredBattle.chosenDefendingCondition) {
        declaredBattle.defendingPlayer.setCondition(declaredBattle.chosenDefendingCondition);
      }
      let battle = Battle.declareBattle(null, declaredBattle.getTitle(),
      declaredBattle.location, [declaredBattle.attackingPlayer], 
      [declaredBattle.defendingPlayer], BattleType.Normal);
      this.campaign.addEvent(battle);
    }
    this.campaign.currentState().setPhase(Phase.Battle);
    this.campaignService.updateCampaign(this.campaign).then(() => {
      this.phaseComplete.emit();
    }, (errors) => {
      alert(errors);
    }).finally(() => {
      this.completeButtonOptions.active = false;
    })
  }



  private setup() {
    this.currentState = this.campaign.currentState();
    this.battles = [];
    for (let i = 0; i < this.numberOfBattlesRequired; i++) {
      this.battles.push(new DeclaredBattle());
    }
    let isEmpire = this.initiativeFaction === Faction.Empire;

    this.availableInitiativePlayers = [].concat(isEmpire ? this.campaign.empire.players : this.campaign.rebels.players);
    this.availableNonInitiativePlayers = [].concat(isEmpire ? this.campaign.rebels.players : this.campaign.empire.players);
    this.availableInitiativeLocations = [].concat(this.campaign.locations.filter(x => x.controllingFaction !== (isEmpire ? Faction.Empire : Faction.Rebels)));
    this.availableNonInitiativeLocations = [].concat(this.campaign.locations.filter(x => x.controllingFaction !== (isEmpire ? Faction.Rebels : Faction.Empire)));
    this.initiativeTeamLabel = isEmpire ? "Imperial" : "Rebel";
    this.nonInitiativeTeamLabel = isEmpire ? "Rebel" : "Imperial";
    this.canInitiativeTeamUseDiplomats = isEmpire
      ? this.campaign.empire.tokens[StrategicEffectType.Diplomats] >= 1
      : this.campaign.rebels.tokens[StrategicEffectType.Diplomats] >= 1;
    this.canNonInitiativeTeamUseDiplomats = isEmpire
      ? this.campaign.rebels.tokens[StrategicEffectType.Diplomats] >= 1
      : this.campaign.empire.tokens[StrategicEffectType.Diplomats] >= 1;

    if (this.currentState.phase !== Phase.Strategy) {
      this.issues = [];
      this.validityChange.emit(this.isValid());
    } else {
      this.determineValidity();
      this.validityChange.emit(this.isValid());
    }
  }

  private isValid() {
    let valid = this.issues.filter(x => x.severity === IssueSeverity.Error).length === 0;
    this.completeButtonOptions.disabled = !valid;
    return valid;
  }

  public formChanged() {
    this.issues = [];
    this.determineSideEffects();
    this.determineValidity();
    this.validityChange.emit(this.isValid());
  }

  private checkForLowFuel(player: CampaignPlayer, location: CampaignLocation): boolean {
    // If the location is in an area that does not have a friendly base,
    // or if there is no friendly-controlled border location to an addjacent area with a friendly base,
    // you get low fuel.
    let faction = this.campaign.getFactionOfPlayer(player.id);
    let friendlyBasesInRegion = this.campaign.locations.filter(x => x.controllingFaction === faction &&
      x.controlType === LocationControlType.Base && x.isInSameArea(location));
    if (friendlyBasesInRegion.length)
      return false;

    let friendlyBorderLocations = this.campaign.locations.filter(x => x.controllingFaction === faction &&
      x.isBorderLocation() && x.isInSameArea(location));
    for (const friendlyBorderLocation of friendlyBorderLocations) {
      let adjacentArea = friendlyBorderLocation.sectors.find(x => x !== location.sectors[0])[0];
      let friendlyBasesInNeighboringRegion = this.campaign.locations.filter(x => x.controllingFaction === faction &&
        x.controlType === LocationControlType.Base && x.sectors.includes(adjacentArea));
      if (friendlyBasesInNeighboringRegion.length)
        return false;
    }
    return true;
  }

  private checkForLowMorale(player: CampaignPlayer, location: CampaignLocation): boolean {
    // if the location's area has an enemy diplomats token and the location is unoccupied,
    // you get low morale
    if (location.controllingFaction)
      return false;

    let faction = this.campaign.getFactionOfPlayer(player.id);
    let diplomatsArea = faction === this.initiativeFaction ? this.nonInitiativeTeamDiplomatsArea : this.initiativeTeamDiplomatsArea;
    return location.sectors.includes(diplomatsArea);
  }

  private checkForLowSupplies(player: CampaignPlayer, location: CampaignLocation): boolean {
    //if all border locations in the locatin's area(s) are enemy occupied, you get
    //low supplies
    let faction = this.campaign.getFactionOfPlayer(player.id);
    let friendlyOrUnoccupiedBorderLocations = this.campaign.locations.filter(x =>
      (x.controllingFaction === null || x.controllingFaction === faction) &&
      x.isInSameArea(location) && x.isBorderLocation());
    if (friendlyOrUnoccupiedBorderLocations.length)
      return false;
    return true;
  }

  private determineSideEffects(): void {
    // for each proper battle, determine any side effects
    for (const battle of this.battles) {
      battle.attackingConditions = [];
      battle.defendingConditions = [];
      if (battle.attackingPlayer && battle.defendingPlayer && battle.location) {
        // Low Fuel
        if (!battle.attackingPlayer.condition && this.checkForLowFuel(battle.attackingPlayer, battle.location)) {
          battle.attackingConditions.push(Condition.LowFuel);
        }
        if (!battle.defendingPlayer.condition && this.checkForLowFuel(battle.defendingPlayer, battle.location)) {
          battle.defendingConditions.push(Condition.LowFuel);
        }
        // Low morale
        if (!battle.attackingPlayer.condition && this.checkForLowMorale(battle.attackingPlayer, battle.location)) {
          battle.attackingConditions.push(Condition.LowMorale);
        }
        if (!battle.defendingPlayer.condition && this.checkForLowMorale(battle.defendingPlayer, battle.location)) {
          battle.defendingConditions.push(Condition.LowMorale);
        }
        // Low supplies (defender only)
        if (!battle.defendingPlayer.condition && this.checkForLowSupplies(battle.defendingPlayer, battle.location)) {
          battle.defendingConditions.push(Condition.LowSupplies);
        }
      }

      if (!battle.attackingConditions.length || (battle.chosenAttackingCondition !== null &&
        battle.attackingConditions.indexOf(battle.chosenAttackingCondition) === -1)) {
        battle.chosenAttackingCondition = null;
      } else if (battle.attackingConditions.length === 1 && battle.chosenAttackingCondition === null) {
        battle.chosenAttackingCondition = battle.attackingConditions[0];
      }

      if (!battle.defendingConditions.length || (battle.chosenDefendingCondition !== null &&
        battle.defendingConditions.indexOf(battle.chosenDefendingCondition) === -1)) {
        battle.chosenDefendingCondition = null;
      } else if (battle.defendingConditions.length === 1 && battle.chosenDefendingCondition === null) {
        battle.chosenDefendingCondition = battle.defendingConditions[0];
      }
    }
  }
  private determineValidity(): void {
    // the strategy phase is valid if all players are involved in a declared assault
    if (this.battles.length != this.numberOfBattlesRequired) {
      this.issues.push({ severity: IssueSeverity.Error, text: "Phase has an incorrect number of battles." });
      return;
    }

    if (this.canInitiativeTeamUseDiplomats && this.canNonInitiativeTeamUseDiplomats &&
      this.initiativeTeamDiplomatsArea === this.nonInitiativeTeamDiplomatsArea &&
      this.initiativeTeamDiplomatsArea >= 1) {
      this.issues.push({ severity: IssueSeverity.Error, text: "Both teams cannot place a diplomats token in the same area. The team without initative has priority." });
    }

    let seenPlayers = [];
    let seenLocations = [];
    let baseAssaultLocation: { [faction: number]: CampaignLocation } = {};
    let iniativeTeamDeclaredAttackWithoutLowFuel = false;
    let nonInitiativeTeamDeclaredAttackWithoutLowFuel = false;

    for (let i = 0; i < this.battles.length; i++) {
      let battle = this.battles[i];
      let attackerIsOnTeamWithInitiative = i % 2 == 0;
      if (!battle.attackingPlayer || !battle.defendingPlayer || !battle.location) {
        this.issues.push({
          severity: IssueSeverity.Error,
          text: "You must specify the attacking and defending player and the location for each battle"
        });
        return;
      }
      if (seenPlayers.indexOf(battle.attackingPlayer.id) === -1) seenPlayers.push(battle.attackingPlayer.id);
      if (seenPlayers.indexOf(battle.defendingPlayer.id) === -1) seenPlayers.push(battle.defendingPlayer.id);

      if (seenLocations.indexOf(battle.location.id) === -1) {
        seenLocations.push(battle.location.id);
        if (battle.location.controlType === LocationControlType.Base) {
          let existingAssault = baseAssaultLocation[battle.location.controllingFaction]
          if (existingAssault) {
            this.issues.push({
              severity: IssueSeverity.Error,
              text: `${existingAssault.name} and ${battle.location.name} cannot both be attacked because a team can only attack one base per turn.`
            });
            return;
          } else {
            baseAssaultLocation[battle.location.controllingFaction] = battle.location;
          }
        }
      } else {
        this.issues.push({
          severity: IssueSeverity.Error,
          text: `${battle.location.name} cannot be specified as the location of more than one battle.`
        });
        return;
      }
      // Players with low morale can't attack locations in a diplomats area
      let diplomatArea = this.campaign.getFactionOfPlayer(battle.attackingPlayer.id) === this.initiativeFaction
        ? this.nonInitiativeTeamDiplomatsArea : this.initiativeTeamDiplomatsArea;
      if (battle.attackingPlayer.condition === Condition.LowMorale &&
        battle.location.sectors.includes(diplomatArea)) {
        this.issues.push({
          severity: IssueSeverity.Error,
          text: `${battle.attackingPlayer.name} cannot attack ${battle.location.name} because of Low Morale.`
        });
      }

      if ((attackerIsOnTeamWithInitiative ? iniativeTeamDeclaredAttackWithoutLowFuel : nonInitiativeTeamDeclaredAttackWithoutLowFuel) &&
        battle.attackingPlayer.condition === Condition.LowFuel) {
        this.issues.push({
          severity: IssueSeverity.Error,
          text: `${battle.attackingPlayer.name} cannot declare an assault after a teammate who does not also have the Low Fuel condition.`
        });
      }
      if (battle.attackingPlayer.condition !== Condition.LowFuel) {
        if (attackerIsOnTeamWithInitiative) {
          iniativeTeamDeclaredAttackWithoutLowFuel = true;
        } else {
          nonInitiativeTeamDeclaredAttackWithoutLowFuel = true;
        }
      }

      // Make sure conditions are chosen
      if (battle.attackingConditions.length && battle.chosenAttackingCondition === null) {
        this.issues.push({
          severity: IssueSeverity.Error,
          text: `${battle.attackingPlayer.name} must gain one of the conditions listed.`
        });
      }
      if (battle.defendingConditions.length && battle.chosenDefendingCondition === null) {
        this.issues.push({
          severity: IssueSeverity.Error,
          text: `${battle.defendingPlayer.name} must gain one of the conditions listed.`
        });
      }
    }
    if (seenPlayers.length !== this.campaign.numberOfPlayers()) {
      this.issues.push({
        severity: IssueSeverity.Error,
        text: `One or more players are not specified as attackers or defenders.  Each player must participate in a single battle.`
      });
      return;
    }
  }


}