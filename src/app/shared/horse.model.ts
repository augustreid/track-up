export class Horse {
  public id: number;
  public name: string;
  public sex: string;
  public age: number;
  public imageUrl: string;

  constructor(
    name: string, 
    sex: string, 
    age: number, 
    imageUrl: string,
    id?: number
    ) {
      this.name = name;
      this.sex = sex;
      this.age = age;
      this.imageUrl = imageUrl;
      this.id = id;
  }
}