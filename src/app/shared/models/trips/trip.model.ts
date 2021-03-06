import { TripEvent } from './trip-event.model';
import { TripAuxiliaryValue } from './trip-auxiliary-value.model';
import { TripIcon } from './trip-icon.model';

export interface Trip {
  tripId: string;
  externalId: number;
  trip: string;
  tripWithIcons: string;
  driver: string;
  drvCode: string;
  leadDriverId: string;
  teamDriverId: string;
  truck: string;
  trailer1: string;
  lastDate: Date;
  nextDate: Date;
  startTime: Date;
  finishTime: Date;
  truckLocation: string;
  trailerLocation: string;
  nextEventETA: Date;
  hos: number;
  lastEventName: string;
  nextEventName: string;
  lastLocation: string;
  nextLocation: string;
  nextCity: string;
  nextState: string;
  lastCity: string;
  category: string;
  dispatcher: string;
  status: string;
  pendingActions: TripAuxiliaryValue[];
  nextEventSeqId: number;
  lastEventSeqId: number;
  events: TripEvent[] | null;
  modifiedBy: string;
  icons: TripIcon;
  isExpanded: boolean;
  nextEventStart: Date | null;
  lastEventStart: Date | null;
  lastEventETA: Date | null;
  lastEventFinish: Date | null;
}
