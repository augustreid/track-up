export class Ride {
  public day: Date;
  public exerciseType: string;
  public tack: string;
  public walkInMinutes: number;
  public trotInMinutes: number;
  public canterInMinutes: number;
  public rideNotes: string;

  constructor(day: Date, 
    exerciseType: string, 
    tack: string, 
    walkInMinutes: number, 
    trotInMinutes: number, 
    canterInMinutes: number, 
    rideNotes: string) {
      this.day = day;
      this.exerciseType = exerciseType;
      this.tack = tack;
      this.walkInMinutes = walkInMinutes;
      this.trotInMinutes = trotInMinutes;
      this.canterInMinutes = canterInMinutes;
      this.rideNotes = rideNotes;
  }
}