export class Ride {
  public day: string;
  public exercise: string;
  public tack: string;
  public walk: number;
  public trot: number;
  public canter: number;
  public notes: string;

  constructor(
    day: string, 
    exercise: string, 
    tack: string, 
    walk: number, 
    trot: number, 
    canter: number, 
    notes: string) {
      this.day = day;
      this.exercise = exercise;
      this.tack = tack;
      this.walk = walk;
      this.trot = trot;
      this.canter = canter;
      this.notes = notes;
  }
}