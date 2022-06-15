export class Ride {
  public day: string;
  public exercise: string;
  public tack: string;
  public walk: number;
  public trot: number;
  public canter: number;
  public notes: string;
  public horse_id: number;
  public id: number;

  constructor(
    day: string, 
    exercise: string, 
    tack: string, 
    walk: number, 
    trot: number, 
    canter: number, 
    notes: string,
    horse_id?: number,
    id?: number) {
      this.day = day;
      this.exercise = exercise;
      this.tack = tack;
      this.walk = walk;
      this.trot = trot;
      this.canter = canter;
      this.notes = notes;
      this.horse_id = horse_id;
      this.id = id;
  }
}